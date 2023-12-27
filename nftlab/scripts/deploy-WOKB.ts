import { ethers } from "hardhat";
import * as fs from 'fs';

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log(`begin deploying WOKB with deployer: ${deployer.address}`);

  const deployedContract = await ethers.deployContract("WOKB", [], {});
  await deployedContract.waitForDeployment();

  const contentToAppend = `
## Network: ${network.name} Time: ${new Date().toISOString()} 
WOKB contract-address: ${deployedContract.target} 
deployer account: ${deployer.address}
`;
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
