import { expect } from "chai";
import { ethers } from "hardhat";
import { loadFixture, } from "@nomicfoundation/hardhat-toolbox/network-helpers";

describe("FunNFT", function () {
  async function deployFunNFTFixture() {
    const baseUri = "https://api.dracoo.finance/api/v1/dm/contracts/metadata/surprise/";
    const fun = await ethers.deployContract("FunNFT", ["NFT name", "Fun", baseUri], {});
    return { fun, baseUri };
  }

  it("check base attributes", async function () {
    const [deployer] = await ethers.getSigners();
    const { fun, baseUri } = await loadFixture(deployFunNFTFixture);
    expect(await fun.symbol()).to.equal("Fun");
    expect(await fun.nextTokenId()).to.equal(1);
    expect(await fun.baseURI()).to.equal(baseUri);
    expect(await fun.isMinter(deployer.address)).to.true;

    // console.log(`contract name: ${await fun.name()}`);
  });

  it("mint and transfer ok", async () => {
    const [deployer, other] = await ethers.getSigners();
    const { fun } = await loadFixture(deployFunNFTFixture);

    // deployer as minter
    await expect(fun.mint(other.address, 2)).to.emit(fun, "Minted").withArgs(other.address, 2);
    expect(await fun.nextTokenId()).to.equal(3);
    expect(await fun.ownerOf(1)).to.equal(other.address);

    await fun.connect(other).transferFrom(other.address, deployer.address, 1);
    expect(await fun.ownerOf(1)).to.equal(deployer.address);

    // safe transfer ok
    // await fun.safeTransferFrom(deployer.address, other.address, 1);
    // expect(await fun.ownerOf(1)).to.equal(other.address);

    // other account
    expect(await fun.isMinter(other.address)).to.false;
    // try mint will revert
    await expect(fun.connect(other).mint(deployer.address, 1)).to.be.revertedWith(
      "Caller is not a minter"
    );
    await fun.addMinter(other.address);
    expect(await fun.isMinter(other.address)).to.true;
    await expect(fun.mint(deployer.address, 1)).not.to.be.reverted;
    expect(await fun.nextTokenId()).to.equal(4);
  })
});