import FormData from 'form-data';
import axios from 'axios';
import { config } from '@app/config';
import { logger } from '@api/utils/logger';

export const stabilityImageGenerator = async (payload?: {
  prompt: string;
  aspect_ratio: string;
}) => {
  const formData = {
    prompt:
      'Digital rendering of a male soccer player standing against a solid gray background with hands folded. The player has a calm and neutral expression, with a slight frown that might suggest focus or determination. His hairstyle is modern, featuring a short, styled hair with a subtle undercut. He is wearing a soccer kit composed of a jersey, shorts, socks, and cleats.The player’s jersey should be plain black with no design on the jersey.There should be "ProSoccer" printed on the jersey. The overall design of the jersey should be modern, fitting tightly to the player\'s build, enhancing the athletic and sleek appearance of the figure.',
    style: '3d-model',
    aspect_ratio: '9:16',
  };
  try {
    const imgResponse = await axios.postForm(
      config.stability.url,
      axios.toFormData(payload ?? formData, new FormData()),
      {
        validateStatus: undefined,
        responseType: 'arraybuffer',
        headers: {
          Accept: 'image/*',
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${config.stability.apiKey}`,
        },
      }
    );

    if (imgResponse.status === 200) {
      return imgResponse.data;
    } else {
      logger.error(`${imgResponse.status}: ${imgResponse.data.toString()}`);
    }
  } catch (error) {
    logger.error(error);
  }
};
