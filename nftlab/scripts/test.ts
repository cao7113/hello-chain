// npx hardhat run scripts/test.ts

import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  // https://sepolia.etherscan.io/address/0xA6b32e06B763c4505f79f810907C6D4727bAA5c0
  const contractAddr = "0xA6b32e06B763c4505f79f810907C6D4727bAA5c0";
  const contract = await ethers.getContractAt("FunNFT", contractAddr);

  const alice = "0xa59daA5b1DD0fe5bC162d53856A037e04f28FcDF";
  const tokenId = 5;
  const tx = await contract.transferFrom(deployer.address, alice, tokenId)
  console.log(`transfer token id ${tx}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
