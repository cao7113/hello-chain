// npx hardhat run scripts/deploy.ts --network x1-testnet
// or
// HARDHAT_NETWORK=x1-testnet node scripts/deploy.ts

import { ethers } from "hardhat";
import * as fs from 'fs';

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log(`begin deploying FunNFT with deployer: ${deployer.address}`);
  const name = "Make fun with NFT";
  const symbol = "FunNFT";
  // const baseUri = "https://api.dracoo.finance/api/v1/dm/contracts/metadata/surprise/";
  const baseUri = "https://test-tokens-metadata.vercel.app/api/erc721/";

  const nft = await ethers.deployContract("FunNFT", [name, name, baseUri], {});
  await nft.waitForDeployment();

  const contentToAppend = `\n\n## Network: ${network.name} Time: ${new Date()} \ncontract-address: ${nft.target} \nInfo: [\"${name}", "${symbol}", "${baseUri}"] \ndeployer account: ${deployer.address}`;
  console.log(contentToAppend);

  if (network.name != "hardhat") {
    const filePath = './scripts/deploy.md';
    fs.appendFile(filePath, contentToAppend, (err) => {
      if (err) {
        console.error('Error appending to file:', err);
      } else {
        console.log('Content has been appended to', filePath);
      }
    });
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
