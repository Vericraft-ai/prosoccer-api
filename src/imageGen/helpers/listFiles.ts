import { config } from '@app/config';
import fs from 'fs';
export const listFiles = async () => {
  try {
    let pageOffset = 0;
    let toJson = { count: 0, results: [] };

    do {
      const pinataFiles = await fetch(
        `https://api.pinata.cloud/data/pinList?pageOffset=${pageOffset}?pageLimit=20`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${config.pinata.secret}`,
          },
        }
      );

      const currData = await pinataFiles.json();
      // @ts-expect-error resukts is defined
      toJson.results = [...toJson.results, ...currData.rows];

      // Write the response to a file

      pageOffset += 1;
    } while (pageOffset < 8);
    const filePath = `./dist/pinataFiles.json`;
    fs.writeFileSync(filePath, JSON.stringify(toJson));
  } catch (error) {
    console.error(error);
  }
};

export function filterPinHashes() {
  const data = JSON.parse(fs.readFileSync('./dist/pinataFiles.json', 'utf8'));
  const res = data.results
    .filter((item: any) => item.mime_type === 'application/json')
    .map((item: any) => ({ ipfs_pin_hash: item.ipfs_pin_hash }));
  const filePath = `./dist/pinataFilesFiltered.json`;
  fs.writeFileSync(filePath, JSON.stringify(res));
}
