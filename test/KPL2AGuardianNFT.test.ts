import { expect } from "chai";
import { Wallet, utils  } from 'ethers'
import { Contract } from "@ethersproject/contracts";
import { 
  ethers, 
  waffle,
  network
} from "hardhat";
import { 
  describe, 
  before, 
  beforeEach, 
  it 
} from "mocha";
import { 
    KPL2AFxTunnel,
    KPL2AGuardianNFT
} from '../src/types/index';


describe('Kitty Party Guardian NFT Child', function () {
    let wallet: Wallet, 
        other: Wallet, 
        kitten1: Wallet, 
        kitten2: Wallet,
        treasury: Wallet,
        fxchildImpersonator: Wallet;
    let kpChildFxTunnel: KPL2AFxTunnel;
    let kpChildGuardianNFT: KPL2AGuardianNFT;
    let childTunnel: any;

    const fxChild = "0xCf73231F28B7331BBe3124B907840A94851f9f11";
    const rootAddress = "0xCf73231F28B7331BBe3124B907840A94851f9f11";

    const createFixtureLoader = waffle.createFixtureLoader;
    const fixture = async () => {
      const _kpChildFxTunnel = await ethers.getContractFactory("KPL2AFxTunnel");
      kpChildFxTunnel = await _kpChildFxTunnel.deploy(fxChild) as KPL2AFxTunnel;
      childTunnel = await kpChildFxTunnel.deployed();

      const _kpChildGuardianNFT = await ethers.getContractFactory("KPL2AGuardianNFT");      
      return (await _kpChildGuardianNFT.deploy(treasury.address, fxchildImpersonator.address, rootAddress)) as KPL2AGuardianNFT;
    }
  
    let loadFixture: ReturnType<typeof createFixtureLoader>;
  
    before('create fixture loader', async () => {
      [wallet, other, kitten1, kitten2, treasury, fxchildImpersonator] = await (ethers as any).getSigners()
      loadFixture = createFixtureLoader([wallet, other, kitten1, kitten2, treasury, fxchildImpersonator])
    })
  
    beforeEach('deploy KittyPartyChildGuardianNFT', async () => {
      kpChildGuardianNFT = await loadFixture(fixture);
    })

    it('Should have correct name and symbol', async () => {
      const tokenName = await kpChildGuardianNFT.name();
      const tokenSymbol = await kpChildGuardianNFT.symbol();

      expect(tokenName).to.equal("PPGUARD");
      expect(tokenSymbol).to.equal("PPG");
    })

    it('Should allow only FxChildTunnel to awaken tribe', async () => {

      await kpChildGuardianNFT.connect(fxchildImpersonator).awakenTribe(0, 55);

      await expect(
        kpChildGuardianNFT.awakenTribe(1, 55)
      ).to.be.reverted;
    });

    it('Should awaken only valid guardian ids', async () => {
      await kpChildGuardianNFT.connect(fxchildImpersonator).awakenTribe(0, 55);
      await kpChildGuardianNFT.connect(fxchildImpersonator).awakenTribe(50, 55);

      await expect (
        kpChildGuardianNFT.connect(fxchildImpersonator).awakenTribe(88, 55)
      ).to.be.revertedWith("Invalid ID");
    });

    it('Should not allow minting before timelock ends', async () => {
      await kpChildGuardianNFT.connect(fxchildImpersonator).awakenTribe(55, 55);
      await expect(
        kpChildGuardianNFT.connect(kitten1).joinTheForce(55, {value: ethers.utils.parseEther("88")})
      ).to.be.revertedWith("Apprentice minting not yet active");
    });

    it('Should allow minting awakened tribe after timelock ends', async () => {
      await network.provider.send("evm_increaseTime", [3600*24*58]);
      await kpChildGuardianNFT.connect(fxchildImpersonator).awakenTribe(55, 55);
      await kpChildGuardianNFT.connect(kitten1).joinTheForce(55, {value: ethers.utils.parseEther("88")});

      const NFTbalance = await kpChildGuardianNFT.balanceOf(kitten1.address);
      expect(NFTbalance.toString()).to.equal("1");
    });

    it('Should not allow minting unawakened tribe', async () => {
      await network.provider.send("evm_increaseTime", [3600*24*58]);
      await expect(
        kpChildGuardianNFT.connect(kitten1).joinTheForce(50, {value: ethers.utils.parseEther("88")})
      ).to.be.revertedWith("Guardian not awakened");
    });

    it('Should pay 88 matic to mint an apprentice-guardian', async () => {
      await network.provider.send("evm_increaseTime", [3600*24*58]);
      await network.provider.request({
        method: "hardhat_impersonateAccount",
        params: [kpChildGuardianNFT.address],
      });

      const ChildGuardianContract = await ethers.getSigner(kpChildGuardianNFT.address);

      const initialKittenBalance = ethers.utils.formatEther(await kitten1.getBalance());
      const initialContractBalance = ethers.utils.formatEther(await ChildGuardianContract.getBalance());

      await kpChildGuardianNFT.connect(fxchildImpersonator).awakenTribe(60, 55);
      await kpChildGuardianNFT.connect(kitten1).joinTheForce(60, {value: ethers.utils.parseEther("88")});

      const finalKittenBalance = ethers.utils.formatEther(await kitten1.getBalance());
      const finalContractBalance = ethers.utils.formatEther(await ChildGuardianContract.getBalance());
      const kittenBalanceDifference = parseFloat(initialKittenBalance) - parseFloat(finalKittenBalance);
      const contractBalanceDifference = parseFloat(finalContractBalance) - parseFloat(initialContractBalance);

      expect(kittenBalanceDifference).to.be.above(88);
      expect(contractBalanceDifference).to.be.equal(88);
    });

    it('Should not mint apprentice-guardian for less than 88 matic', async () => {
      await network.provider.send("evm_increaseTime", [3600*24*58]);
      await kpChildGuardianNFT.connect(fxchildImpersonator).awakenTribe(15, 55);

      await expect(
        kpChildGuardianNFT.connect(kitten1).joinTheForce(15, {value: ethers.utils.parseEther("1")})
      ).to.be.reverted;
    });

    it('Should not mint more than one apprentice-guardian per address', async () => {
      await network.provider.send("evm_increaseTime", [3600*24*58]);
      await kpChildGuardianNFT.connect(fxchildImpersonator).awakenTribe(10, 55);
      await kpChildGuardianNFT.connect(fxchildImpersonator).awakenTribe(20, 55);
      await kpChildGuardianNFT.connect(kitten1).joinTheForce(10, {value: ethers.utils.parseEther("88")});

      await expect(
        kpChildGuardianNFT.connect(kitten1).joinTheForce(10, {value: ethers.utils.parseEther("88")})
      ).to.be.revertedWith("KP: Already a guardian!");
      await expect(
        kpChildGuardianNFT.connect(kitten1).joinTheForce(20, {value: ethers.utils.parseEther("88")})
      ).to.be.revertedWith("KP: Already a guardian!");
    });

    it('Should be able to transfer apprentice-guardian', async () => {
      await network.provider.send("evm_increaseTime", [3600*24*58]);
      let kitten2NFTbalance = await kpChildGuardianNFT.balanceOf(kitten2.address);
      expect(kitten2NFTbalance.toString()).to.equal("0");

      await kpChildGuardianNFT.connect(fxchildImpersonator).awakenTribe(0, 55);
      await kpChildGuardianNFT.connect(kitten1).joinTheForce(0, {value: ethers.utils.parseEther("88")});      
      expect(await kpChildGuardianNFT.isGuardian(kitten1.address)).to.equal(true);

      await kpChildGuardianNFT.connect(kitten1).approve(kitten2.address, 88);
      await kpChildGuardianNFT.connect(kitten2).transferFrom(kitten1.address, kitten2.address, 88);
      kitten2NFTbalance = await kpChildGuardianNFT.balanceOf(kitten2.address);

      expect(kitten2NFTbalance.toString()).to.equal("1");
      expect(await kpChildGuardianNFT.isGuardian(kitten1.address)).to.equal(false);
      expect(await kpChildGuardianNFT.isGuardian(kitten2.address)).to.equal(true);
    });

    it('Should not be able to transfer to another apprentice-guardian', async () => {
      await network.provider.send("evm_increaseTime", [3600*24*58]);
      await kpChildGuardianNFT.connect(fxchildImpersonator).awakenTribe(87, 55);
      await kpChildGuardianNFT.connect(kitten1).joinTheForce(87, {value: ethers.utils.parseEther("88")});
      await kpChildGuardianNFT.connect(kitten2).joinTheForce(87, {value: ethers.utils.parseEther("88")});
      
      await expect(
        kpChildGuardianNFT.connect(kitten1).transferFrom(kitten1.address, kitten2.address, 88)
      ).to.be.revertedWith("KP: Already a guardian!");
    });

    it('Should not be able to burn apprentice-guardian NFT', async () => {
      await network.provider.send("evm_increaseTime", [3600*24*58]);
      await kpChildGuardianNFT.connect(fxchildImpersonator).awakenTribe(80, 55);
      await kpChildGuardianNFT.connect(kitten1).joinTheForce(80, {value: ethers.utils.parseEther("88")});

      await expect(
        kpChildGuardianNFT.connect(kitten1).transferFrom(kitten1.address, "0x0000000000000000000000000000000000000000", 88)
      ).to.be.revertedWith("ERC721: transfer to the zero address");
    });

    it('Should allow only treasury to withdraw', async () => {
      await network.provider.send("evm_increaseTime", [3600*24*58]);
      const initialTreasuryBalance = ethers.utils.formatEther(await treasury.getBalance());

      await kpChildGuardianNFT.connect(fxchildImpersonator).awakenTribe(0, 55);
      await kpChildGuardianNFT.connect(kitten1).joinTheForce(0, {value: ethers.utils.parseEther("88")});
      await kpChildGuardianNFT.connect(kitten2).joinTheForce(0, {value: ethers.utils.parseEther("88")});
      
      await expect (
        kpChildGuardianNFT.connect(kitten1).withdrawAll()
      ).to.be.reverted;

      await kpChildGuardianNFT.connect(treasury).withdrawAll();
      
      const finalTreasuryBalance = ethers.utils.formatEther(await treasury.getBalance());

      const balanceDifference = parseFloat(finalTreasuryBalance) - parseFloat(initialTreasuryBalance);
      expect(balanceDifference).to.be.above(175.99);
      expect(balanceDifference).to.be.below(176.01);
    });
})
