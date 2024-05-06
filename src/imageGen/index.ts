import { stabilityImageGenerator } from './helpers/stabilityImageGenerator';

export const imageGen = async() => {
  for (let i = 0; i < 10; i++) {
    await stabilityImageGenerator();
  }
}