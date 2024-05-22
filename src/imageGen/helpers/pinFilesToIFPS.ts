import axios from 'axios';
import fs from 'fs';
import FormData from 'form-data';
import { generateRandomName, generateRandomValue } from '../utils/generators';
import { config } from '@app/config';

type PinataOptions = {
  file: fs.ReadStream;
};
// const restrictedUrl = `https://violet-added-ermine-455.mypinata.cloud`

export const pinFileToIPFS = async ({ file }: PinataOptions) => {
  const formData = new FormData();

  formData.append('file', file);

  const name = generateRandomName();
  const generateRandomPlayer = (CID: string) => {
    const pinataMetadata = JSON.stringify({
      pinataContent: {
        name: name,
        description: `Prosoccer player card for ${name}`,
        external_url: `https://pinata.cloud`,
        image: `ipfs://${CID}`,
        attributes: [
          {
            trait_type: 'Age',
            value: generateRandomValue('age'),
          },
          {
            trait_type: 'Height',
            value: generateRandomValue('height'),
          },
          {
            trait_type: 'Weight',
            value: generateRandomValue('weight'),
          },
          {
            trait_type: 'Position',
            value: generateRandomValue('position'),
          },
          {
            trait_type: 'Foot',
            value: generateRandomValue('foot'),
          },
          {
            trait_type: 'Overall',
            value: generateRandomValue('overall'),
          },
          {
            trait_type: 'Potential',
            value: generateRandomValue('potential'),
          },
          {
            trait_type: 'Passing',
            value: generateRandomValue('passing'),
          },
          {
            trait_type: 'Dribbling',
            value: generateRandomValue('dribbling'),
          },
          {
            trait_type: 'Shooting',
            value: generateRandomValue('shooting'),
          },
          {
            trait_type: 'Finishing',
            value: generateRandomValue('finishing'),
          },
          {
            trait_type: 'Defending',
            value: generateRandomValue('defending'),
          },
          {
            trait_type: 'Crossing',
            value: generateRandomValue('crossing'),
          },
          {
            trait_type: 'Acceleration',
            value: generateRandomValue('acceleration'),
          },
          {
            trait_type: 'Speed',
            value: generateRandomValue('speed'),
          },
          {
            trait_type: 'Stamina',
            value: generateRandomValue('stamina'),
          },
          {
            trait_type: 'Strength',
            value: generateRandomValue('strength'),
          },
          {
            trait_type: 'Fitness',
            value: generateRandomValue('fitness'),
          },
          {
            trait_type: 'Positioning',
            value: generateRandomValue('positioning'),
          },
          {
            trait_type: 'Vision',
            value: generateRandomValue('vision'),
          },
          {
            trait_type: 'Anticipation',
            value: generateRandomValue('anticipation'),
          },
          {
            trait_type: 'Decision Making',
            value: generateRandomValue('decisionMaking'),
          },
        ],
      },
    });

    return pinataMetadata;
  };

  const metadata = JSON.stringify({
    cidVersion: 0,
    name: name,
  });
  formData.append('pinataMetadata', metadata);

  try {
    const res = await axios.post(config.pinata.url, formData, {
      headers: {
        ...formData.getHeaders(),
        Authorization: `Bearer ${config.pinata.secret}`,
      },
    });

    const jsonFormData = generateRandomPlayer(res.data.IpfsHash);

    const response = await fetch(config.pinata.jsonUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${config.pinata.secret}`,
        'Content-Type': 'application/json',
      },
      body: jsonFormData,
    });
    const toJson = await response.json();
    console.log(toJson);
  } catch (error) {
    console.log('Error pinning file to IPFS:', error);
  }
};
