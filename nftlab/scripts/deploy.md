# deploy notes

## X1

https://www.oklink.com/x1-test/token/0x179db0b815b8e8c280c2075d266aed288340faa1
deployed FunNFT to 0x179Db0b815B8E8c280C2075D266aED288340faa1 with ["Make fun with NFT", "FunNFT", "https://api.dracoo.finance/api/v1/dm/contracts/metadata/surprise/"] by deployer account: 0xc41a6Ce1E045f9b0c9629b4c08518aee9D259aF2

npx hardhat verify --network x1 0x179Db0b815B8E8c280C2075D266aED288340faa1 "Make fun with NFT", "FunNFT", "https://api.dracoo.finance/api/v1/dm/contracts/metadata/surprise/"

## Manta mainnet

## Sepolia

https://sepolia.etherscan.io/txs?a=0xc41a6ce1e045f9b0c9629b4c08518aee9d259af2&f=5

begin deploying FunNFT with deployer: 0xc41a6Ce1E045f9b0c9629b4c08518aee9D259aF2
Mon Dec 11 2023 17:53:39 GMT+0800 (China Standard Time) deployed FunNFT to 0x1254B32C48b9Ddf9314b8d4f3Fa52c31208f03f4 with ["Make fun with NFT", "FunNFT", "https://api.dracoo.finance/api/v1/dm/contracts/metadata/surprise/"] by deployer account: 0xc41a6Ce1E045f9b0c9629b4c08518aee9D259aF2

== 2

deployed FunNFT to 0xA6b32e06B763c4505f79f810907C6D4727bAA5c0 with ["Make fun with NFT", "FunNFT", "https://api.dracoo.finance/api/v1/dm/contracts/metadata/surprise/"] by deployer account: 0xc41a6Ce1E045f9b0c9629b4c08518aee9D259aF2
https://sepolia.etherscan.io/address/0xA6b32e06B763c4505f79f810907C6D4727bAA5c0
https://testnets.reservoir.tools/sepolia/collection/0xA6b32e06B763c4505f79f810907C6D4727bAA5c0
https://as-node.3bodylabs.com/assets/sepolia/0xa6b32e06b763c4505f79f810907c6d4727baa5c0/1

npx hardhat sourcifySubmit --contract-name "FunNFT" --source-name "contracts/FunNFT.sol" --address 0xA6b32e06B763c4505f79f810907C6D4727bAA5c0 --chain-id 11155111 --network sepolia
不好使。。。

== 1

https://sepolia.etherscan.io/address/0x9e1f1AB94BC3F2A4D1966F8F7c36c69dB651d45F
deployed FunNFT to 0x9e1f1AB94BC3F2A4D1966F8F7c36c69dB651d45F with ["Make fun with NFT, "FunNFT", "https://api.dracoo.finance/api/v1/dm/contracts/metadata/surprise/"] by deployer account: 0xc41a6Ce1E045f9b0c9629b4c08518aee9D259aF2

npx hardhat verify --network sepolia 0x9e1f1AB94BC3F2A4D1966F8F7c36c69dB651d45F "Make fun with NFT", "FunNFT", "https://api.dracoo.finance/api/v1/dm/contracts/metadata/surprise/"
https://testnets.reservoir.tools/sepolia/collection/0x9e1f1ab94bc3f2a4d1966f8f7c36c69db651d45f
https://as-node.3bodylabs.com/collection/sepolia/make-fun-with-nft-8861

## Network: sepolia Time: Mon Dec 11 2023 19:58:15 GMT+0800 (China Standard Time)

contract-address: 0xd707D357C9a1327b05d7fA7b4D79136E51e2F05B
Info: ["Make fun with NFT", "FunNFT", "https://api.dracoo.finance/api/v1/dm/contracts/metadata/surprise/"]
deployer account: 0xc41a6Ce1E045f9b0c9629b4c08518aee9D259aF2

## Network: sepolia Time: Mon Dec 11 2023 20:03:15 GMT+0800 (China Standard Time)

contract-address: 0xd674343b52Bb120cefcBe0110E75536A92Bed740
Info: ["Make fun with NFT", "FunNFT", "https://api.dracoo.finance/api/v1/dm/contracts/metadata/surprise/"]
deployer account: 0xc41a6Ce1E045f9b0c9629b4c08518aee9D259aF2


## Network: sepolia Time: Mon Dec 11 2023 20:28:51 GMT+0800 (China Standard Time) 
contract-address: 0xA1cC8E4721603CdD973940fC678d341046fCb5E8 
Info: ["Make fun with NFT", "FunNFT", "https://api.dracoo.finance/api/v1/dm/contracts/metadata/surprise/"] 
deployer account: 0xc41a6Ce1E045f9b0c9629b4c08518aee9D259aF2

## Network: x1 Time: Mon Dec 11 2023 21:17:22 GMT+0800 (China Standard Time) 
contract-address: 0xb08FC3DD25B2Bfb5Df3306537226d64Cf778f6A9 
Info: ["Make fun with NFT", "FunNFT", "https://api.dracoo.finance/api/v1/dm/contracts/metadata/surprise/"] 
deployer account: 0xc41a6Ce1E045f9b0c9629b4c08518aee9D259aF2

## Network: x1 Time: Tue Dec 12 2023 09:13:28 GMT+0800 (China Standard Time) 
contract-address: 0x9e1f1AB94BC3F2A4D1966F8F7c36c69dB651d45F 
Info: ["Make fun with NFT", "FunNFT", "https://api.dracoo.finance/api/v1/dm/contracts/metadata/surprise/"] 
deployer account: 0xc41a6Ce1E045f9b0c9629b4c08518aee9D259aF2

## Network: sepolia Time: Wed Dec 13 2023 08:50:39 GMT+0800 (China Standard Time) 
contract-address: 0x23BE5a690D781200c5D697DB24364bA1CF79f08A 
Info: ["Make fun with NFT", "FunNFT", "https://api.dracoo.finance/api/v1/dm/contracts/metadata/surprise/"] 
deployer account: 0xc41a6Ce1E045f9b0c9629b4c08518aee9D259aF2