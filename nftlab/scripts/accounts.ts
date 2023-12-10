// npx hardhat run scripts/accounts.ts

// Note that we are using ethers without importing it. 
// This is possible because everything that is available in the Hardhat Runtime Environment is also globally available in the script.
import {ethers} from 'hardhat';

async function main() {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});