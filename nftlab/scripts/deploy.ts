// npx hardhat run scripts/deploy.ts --network x1
// or
// HARDHAT_NETWORK=x1 node scripts/deploy.ts

import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log(`deploying FunNFT with deployer: ${deployer.address}`);

  const name = "Make fun with NFT";
  const symbol = "FunNFT";
  const baseUri = "https://api.dracoo.finance/api/v1/dm/contracts/metadata/surprise/";

  const nft = await ethers.deployContract("FunNFT", [name, name, baseUri], {});
  await nft.waitForDeployment();

  console.log(
    `deployed FunNFT to ${nft.target} with ["${name}", "${symbol}", "${baseUri}"] by deployer account: ${deployer.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
