// node scripts/get-abi.ts

const fs = require("fs")
const path = require("path")

try {
  const dir = path.resolve(
    __dirname,
    "../artifacts/contracts/FunNFT.sol/FunNFT.json"
  )
  const file = fs.readFileSync(dir, "utf8")
  const json = JSON.parse(file)
  const abi = json.abi
  console.log(`abi: `, abi)
} catch (e) {
  console.log(`error: `, e)
}

