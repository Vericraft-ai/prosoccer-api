import { generateRandomValue } from './generators';

export const mapValuestoObject = (values: string[]) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const newObj: any = {};
  values.forEach((value) => {
    newObj[value] = generateRandomValue(value);
  });
  return newObj;
};
