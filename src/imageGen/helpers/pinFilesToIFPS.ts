import axios from 'axios';
import fs from 'fs';
import FormData from 'form-data';
import { generateRandomName, generateRandomValue } from '../utils/generators';
import { mapValuestoObject } from '../utils/objectMapper';
import { config } from '@app/config';

const JWT = '';

type PinataOptions = {
  file: fs.ReadStream;
};
// const restrictedUrl = `https://violet-added-ermine-455.mypinata.cloud`

export const pinFileToIPFS = async ({ file }: PinataOptions) => {
  const formData = new FormData();

  formData.append('file', file);

  const generateRandomPlayer = () => {
    const attributes = ['age', 'height', 'weight', 'position', 'foot'];
    const skills = [
      'passing',
      'dribbling',
      'shooting',
      'finishing',
      'defending',
      'crossing',
    ];
    const physical = [
      'acceleration',
      'speed',
      'stamina',
      'strength',
      'fitness',
    ];
    const tactical = [
      'positioning',
      'vision',
      'anticipation',
      'decisionMaking',
    ];

    const pinataMetadata = JSON.stringify({
      name: generateRandomName(),
      keyvalues: {
        attributes: `${JSON.stringify(mapValuestoObject(attributes))}`,
        physical: `${JSON.stringify(mapValuestoObject(physical))}`,
        tactical: `${JSON.stringify(mapValuestoObject(tactical))}`,
        overall: `${generateRandomValue('overall')}`,
        potential: `${generateRandomValue('potential')}`,
        skills: `${JSON.stringify(mapValuestoObject(skills))}`,
      },
    });

    return pinataMetadata;
  };

  const pinataMetadata = generateRandomPlayer();
  console.log(pinataMetadata);
  formData.append('pinataMetadata', pinataMetadata);

  const pinataOptions = JSON.stringify({
    cidVersion: 0,
  });
  formData.append('pinataOptions', pinataOptions);

    try {
       await axios.post(
        config.pinata.url,
        formData,
        {
          headers: {
            ...formData.getHeaders(),
            Authorization: `Bearer ${config.pinata.secret}`,
          },
        }
      );
    } catch (error) {
       console.log('Error pinning file to IPFS:', error)
    }
};
