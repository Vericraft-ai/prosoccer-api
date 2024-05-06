import { generateRandomValue } from './generators';

export const mapValuestoObject = (values: string[]) => {
  const newObj: any = {};
  values.forEach((value) => {
    newObj[value] = generateRandomValue(value);
  });
  return newObj;
};
