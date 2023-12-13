
// import { ethers } from "hardhat";
import { HardhatUserConfig, vars } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

// require('hardhat-abi-exporter');

// Go to https://infura.io, sign up, create a new API key
// in its dashboard, and replace "KEY" with it
const INFURA_API_KEY = vars.get("INFURA_API_KEY");

// Replace this private key with your Sepolia account private key
// To export your private key from Coinbase Wallet, go to
// Settings > Developer Settings > Show private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
const deployer = vars.get("SEPOLIA_PRIVATE_KEY");

const etherscan_api_key = vars.get("ETHERSCAN_API_KEY");

// ==== Custom Tasks

import "@solidstate/hardhat-accounts";
// npx hardhat accounts, use https://www.npmjs.com/package/@solidstate/hardhat-accounts
// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();

//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });

// npx hardhat mint --network hardhat --contract 0x1254B32C48b9Ddf9314b8d4f3Fa52c31208f03f4
task("mint-nft", "mint NFT on diffrent network")
  .addParam("contract", "NFT contract's address")
  // .addParam("count", "mint count")
  .setAction(async (taskArgs) => {
    // TODO: get network and browser url
    // console.log(`network: ${network.name} args: ${JSON.stringify(config, null, 3)}`);
    // process.exit(10);
    const [deployer] = await ethers.getSigners();
    const contractAddr = taskArgs.contract;
    const contract = await ethers.getContractAt("FunNFT", contractAddr);
    const mintResult = await contract.mint(deployer.address, 3);
    console.log(`mint result: ${JSON.stringify(mintResult, null, 3)}`);
  });

// not good
// import "hardhat-sourcify";

// https://hardhat.org/hardhat-runner/docs/config

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
    },
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [deployer],
    },
    x1: {
      // https://testrpc.x1.tech
      // https://x1testrpc.okx.com/
      url: "https://testrpc.x1.tech",
      accounts: [deployer]
    },
    manta: {
      url: "https://pacific-rpc.manta.network/http",
      accounts: [deployer]
    }
  },
  etherscan: {
    apiKey: etherscan_api_key,
  },
  sourcify: {
    enabled: true
  },
  // abiExporter: {
  //   path: './data/abi',
  //   runOnCompile: true,
  //   clear: true,
  //   flat: true,
  //   // only: [':ERC20$'],
  //   spacing: 2,
  //   pretty: true
  // }
};

export default config;
