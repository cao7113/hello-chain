// npx hardhat run scripts/t.ts

import { ethers } from "hardhat";

// const fundme = await ethers.getContract("FundMe");
// const contractInstance = await ethers.getContractAt("contracts/XYZ.sol:ContractName", contractAddress);
// fs.writeFileSync(
//   frontEndAbiFile,
//   fundme.interface.format(ethers.utils.FormatTypes.json)
// )

async function main() {
  const [deployer] = await ethers.getSigners();
  // https://sepolia.etherscan.io/address/0xA6b32e06B763c4505f79f810907C6D4727bAA5c0
  const contractAddr = "0xA6b32e06B763c4505f79f810907C6D4727bAA5c0";
  const contract = await ethers.getContractAt("FunNFT", contractAddr);

  const alice = "0xa59daA5b1DD0fe5bC162d53856A037e04f28FcDF";
  const tokenId = 5;
  const tx = await contract.transferFrom(deployer.address, alice, tokenId)
  console.log(`transfer token id ${tx}`);

  // console.log(`query baseURI: ${baseUri}`);

  // console.log(`contract: ${await contract.balanceOf(alice)}`);
  // console.log(
  //   `deployed FunNFT to ${nft.target} with ["${name}", "${symbol}", "${baseUri}"] by deployer account: ${deployer.address}`
  // );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
