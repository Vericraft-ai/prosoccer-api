import { logger } from '@api/utils/logger';
import { stabilityImageGenerator } from '@app/imageGen/helpers/stabilityImageGenerator';
import cloudinary from 'cloudinary';
import streamifier from 'streamifier';

export const getShortName = (teamName: string) =>
  teamName.substring(0, 3).toUpperCase();

export const generateTeamLogo = async (teamName: string) => {
  const shortName = getShortName(teamName);
  const formData = {
    prompt: `Generate a futuristic club logo for a soccer team with a short name of ${shortName}. The logo should have a modern design with a color scheme of black and white. The logo should be simple and easy to recognize.`,
    aspect_ratio: '1:1',
  };
  const imageResponse = await stabilityImageGenerator(formData);
  if (!imageResponse) {
    return;
  }
  return new Promise((resolve, reject) => {
    let cloudStream = cloudinary.v2.uploader.upload_stream(
      { folder: 'prosoccer-team-logos' },
      (error, result) => {
        if (error) {
          logger.error(error);
          reject(error);
        }
        resolve(result?.secure_url);
      }
    );
    streamifier.createReadStream(imageResponse).pipe(cloudStream);
  });
};
