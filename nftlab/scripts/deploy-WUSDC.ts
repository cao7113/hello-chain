// npx hardhat run scripts/deploy.ts --network x1
// or
// HARDHAT_NETWORK=x1 node scripts/deploy.ts

import { ethers } from "hardhat";
import * as fs from 'fs';

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log(`begin deploying WUSDC with deployer: ${deployer.address}`);

  const nft = await ethers.deployContract("WUSDC", [], {});
  await nft.waitForDeployment();

  const contentToAppend = `\n\n## Network: ${network.name} Time: ${new Date()} \n WUSDC contract-address: ${nft.target} \ndeployer account: ${deployer.address}`;
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
