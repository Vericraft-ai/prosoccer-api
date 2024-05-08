import { stabilityImageGenerator } from '@app/imageGen/helpers/stabilityImageGenerator';
import cloudinary from 'cloudinary';
import streamifier from 'streamifier';

export const getShortName = (team_name: string) =>
  team_name.substring(0, 3).toUpperCase();

export const generateTeamLogo = async (team_name: string) => {
  const short_name = getShortName(team_name);
  const form_data = {
    prompt: `Generate a futuristic club logo for a soccer team with a short name of ${short_name}. The logo should have a modern design with a color scheme of black and white. The logo should be simple and easy to recognize.`,
    aspect_ratio: '1:1',
  };
  const imageResponse = await stabilityImageGenerator(form_data);
  if (!imageResponse) {
    return
  }
    return new Promise((resolve, reject) => {
    let cloud_upload_stream = cloudinary.v2.uploader.upload_stream(
      { folder: 'prosoccer-team-logos' },
      (error, result) => {
        if (error) {
          reject(error);
        }
        resolve(result?.secure_url);
      }
    );
    streamifier.createReadStream(imageResponse).pipe(cloud_upload_stream);
    });
  
};

