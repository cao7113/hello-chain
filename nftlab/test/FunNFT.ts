import { expect } from "chai";
import { ethers } from "hardhat";
// import { time } from "@nomicfoundation/hardhat-toolbox/network-helpers";

describe("FunNFT", function () {
  it("tokenId init with 1", async function () {
    const [deployer, other] = await ethers.getSigners();

    const baseUri = "https://api.dracoo.finance/api/v1/dm/contracts/metadata/surprise/";
    const fun = await ethers.deployContract("FunNFT", ["NFT name", "Fun", baseUri], {});

    expect(await fun.symbol()).to.equal("Fun");
    expect(await fun.nextTokenId()).to.equal(1);
    expect(await fun.baseURI()).to.equal(baseUri);
    expect(await fun.isMinter(deployer.address)).to.true;

    await fun.addMinter(other.address);
    expect(await fun.isMinter(other.address)).to.true;

    // console.log(`contract name: ${await fun.name()}`);
  });

  it("mint and transfer ok", async () => {
    const [deployer, other] = await ethers.getSigners();

    const baseUri = "https://api.dracoo.finance/api/v1/dm/contracts/metadata/surprise/";
    const fun = await ethers.deployContract("FunNFT", ["NFT name", "Fun", baseUri], {});

    await expect(fun.mint(other.address, 2)).to.emit(fun, "Minted").withArgs(other.address, 2);
    expect(await fun.nextTokenId()).to.equal(3);
    expect(await fun.ownerOf(1)).to.equal(other.address);

    await fun.connect(other).transferFrom(other.address, deployer.address, 1);
    expect(await fun.ownerOf(1)).to.equal(deployer.address);

    // safe transfer ok
    // await fun.safeTransferFrom(deployer.address, other.address, 1);
    // expect(await fun.ownerOf(1)).to.equal(other.address);
  })
});