// npx hardhat run scripts/mint.ts

import { ethers } from "hardhat";

// const fundme = await ethers.getContract("FundMe");
// const contractInstance = await ethers.getContractAt("contracts/XYZ.sol:ContractName", contractAddress);

// fs.writeFileSync(
//   frontEndAbiFile,
//   fundme.interface.format(ethers.utils.FormatTypes.json)
// )

async function main() {
  console.log(`ethers version: ${ethers.version}`);

  const [deployer] = await ethers.getSigners();
  const contractAddr = "0xA6b32e06B763c4505f79f810907C6D4727bAA5c0";
  const contract = await ethers.getContractAt("FunNFT", contractAddr);

  // const alice = "0xa59daA5b1DD0fe5bC162d53856A037e04f28FcDF";
  const mintResult = await contract.mint(deployer.address, 3);


  // contract.transferFrom()
  // const baseUri = await contract.b

  console.log(`mint ok with result: ${JSON.stringify(mintResult, null, 3)}`);

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
