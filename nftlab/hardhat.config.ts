
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
const deployer = vars.get("DEPLOYER_PRIVATE_KEY");
// const deployer = process.env.DEPLOYER_PRIVATE_KEY;

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

// npx hardhat mint-fun --network hardhat --contract 0x1254B32C48b9Ddf9314b8d4f3Fa52c31208f03f4
task("mint-fun", "mint FunNFT on diffrent network")
  .addParam("contract", "NFT contract's address")
  .addParam("count", "mint count")
  .addOptionalParam("target", "taget user address")
  .setAction(async (taskArgs) => {
    const [deployer] = await ethers.getSigners();
    const contractAddr = taskArgs.contract;
    const contract = await ethers.getContractAt("FunNFT", contractAddr);
    const count = Number(taskArgs.count);
    const target = taskArgs.target ?? deployer.address
    console.log(`minting ${count} FunNFT to address: ${target} ...`);
    const mintResult = await contract.mint(target, count);
    // TODO: get explorer url
    console.log(`mint FunNFT to ${target} tx: ${mintResult.hash} \ndetail: ${JSON.stringify(mintResult, null, 3)}`);
  });

// npx hardhat mint-my --contract 0x8806C3ca36B712539121E0eC0D7179cb1D81659c --id 2 --network x1-testnet
task("mint-my", "mint MyNFT on diffrent network")
  .addParam("contract", "NFT contract's address")
  .addParam("id", "Token Id")
  .setAction(async (taskArgs) => {
    const [deployer] = await ethers.getSigners();
    const contractAddr = taskArgs.contract;
    const tokenId = Number(taskArgs.id);
    const contract = await ethers.getContractAt("MyNFT", contractAddr);
    const mintResult = await contract.mint(deployer.address, tokenId);
    console.log(`mint result: ${JSON.stringify(mintResult, null, 3)}`);
  });

// not good
// import "hardhat-sourcify";

// https://hardhat.org/hardhat-runner/docs/config

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.20",
        // settings: {
        //   viaIR: true,
        //   optimizer: { enabled: true, runs: 1000000 },
        // },
      },
    ],
    overrides: {
      "contracts/WUSDC.sol": {
        version: "0.4.26",
        // settings: {
        //   viaIR: true,
        //   optimizer: {
        //     enabled: true,
        //     runs: 1000000,
        //   },
        // },
      },
    },
  },
  defaultNetwork: "hardhat",
  networks: {
    "hardhat": {
    },
    "sepolia": {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [deployer],
    },
    "x1-testnet": {
      // url: "https://x1testrpc.okx.com/",
      url: "https://testrpc.x1.tech",
      accounts: [deployer]
    },
    "zkfair-testnet": {
      url: "https://testnet-rpc.zkfair.io",
      accounts: [deployer]
    },
    // mainnets
    "zkfair": {
      url: "https://rpc.zkfair.io",
      gasPrice: 2000000,
      accounts: [deployer]
    },
    "manta": {
      url: "https://pacific-rpc.manta.network/http",
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
