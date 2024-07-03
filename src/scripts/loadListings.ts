import 'module-alias/register';
import '@api/utils/polyfills';

import { ethers, formatEther } from 'ethers';
import { config } from '@app/config';
import { redisClient } from '@services/redis';
import contract from '@services/contract';

const network = config.web3Provider[config.network];

export const provider = ethers.getDefaultProvider(network.rpcUrl, {
  etherscan: config.web3Provider[config.network].apiKey,
});

const getListedTokens = async () => {
  const listedTokens = await contract.getAllListings();

  return listedTokens;
};

const formatListings = (listing: string[]) => {
  const [tokenId, price, seller, tokenURI] = listing;
  return {
    tokenId,
    price: formatEther(price),
    seller,
    tokenURI,
  };
};

export const saveListings = async () => {
  const listings = await getListedTokens();
  listings.map((listing: string[]) => {
    const l = formatListings(listing);

    console.log(l);

    redisClient.hset('listings', l.tokenId, JSON.stringify(l));
  });
};

saveListings()
  .then(() => {
    console.log('Listings saved');
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
