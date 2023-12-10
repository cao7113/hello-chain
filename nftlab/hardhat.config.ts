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

import "hardhat-sourcify";

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
