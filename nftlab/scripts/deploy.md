# deploy notes

## X1

https://www.oklink.com/x1-test/token/0x179db0b815b8e8c280c2075d266aed288340faa1
deployed FunNFT to 0x179Db0b815B8E8c280C2075D266aED288340faa1 with ["Make fun with NFT", "FunNFT", "https://api.dracoo.finance/api/v1/dm/contracts/metadata/surprise/"] by deployer account: 0xc41a6Ce1E045f9b0c9629b4c08518aee9D259aF2

npx hardhat verify --network x1 0x179Db0b815B8E8c280C2075D266aED288340faa1 "Make fun with NFT", "FunNFT", "https://api.dracoo.finance/api/v1/dm/contracts/metadata/surprise/"

## Sepolia

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
