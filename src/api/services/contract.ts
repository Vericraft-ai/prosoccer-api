import { ethers } from 'ethers';
import { config } from '@app/config';

import contractABI from '@app/web3/contractABI.json';

const network = config.web3Provider[config.network];

export const provider = ethers.getDefaultProvider(network.rpcUrl, {
  etherscan: config.web3Provider[config.network].apiKey,
});

export const buildContract = () => {
  return new ethers.Contract(
    config.web3Provider[config.network].contract,
    contractABI.abi,
    provider
  );
};

export default buildContract();
