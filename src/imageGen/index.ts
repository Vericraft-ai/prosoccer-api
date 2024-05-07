import { pinFileToIPFS } from './helpers/pinFilesToIFPS';
import fs from 'fs';
import { stabilityImageGenerator } from './helpers/stabilityImageGenerator';

export const imageGen = async () => {
  for (let i = 0; i < 10; i++) {
   const response = await stabilityImageGenerator();
   const random = Math.floor(Math.random());
   const filePath = `./dist/prosoccer${random}.png`;
   fs.writeFileSync(filePath, Buffer.from(response));
   const file = fs.createReadStream(filePath);
   pinFileToIPFS({ file });
  }
};
