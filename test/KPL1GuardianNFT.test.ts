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
    KPL1GuardianNFT
} from '../src/types/index';


describe('Kitty Party Guardian NFT Root', function () {
    let wallet: Wallet, 
        other: Wallet, 
        kitten1: Wallet, 
        kitten2: Wallet,
        treasury: Wallet;
    let kpRootGuardianNFT: KPL1GuardianNFT; 
    let daiFactory: any;

    let guardianPrice = 0.088;
    let earlyPrice = 0.0088;

    const sampleURI = "https://ppguard.eth.link/";

    const createFixtureLoader = waffle.createFixtureLoader;
    const fixture = async () => {
      const _kpRootGuardianNFT = await ethers.getContractFactory("KPL1GuardianNFT");      
      return (await _kpRootGuardianNFT.deploy(treasury.address)) as KPL1GuardianNFT;
    }
  
    let loadFixture: ReturnType<typeof createFixtureLoader>;
  
    before('create fixture loader', async () => {
      [wallet, other, kitten1, kitten2, treasury] = await (ethers as any).getSigners()
      loadFixture = createFixtureLoader([wallet, other, kitten1, kitten2, treasury])
    })
  
    beforeEach('deploy KittyPartyRootGuardianNFT', async () => {
      kpRootGuardianNFT = await loadFixture(fixture);
      guardianPrice = parseFloat(ethers.utils.formatEther(await kpRootGuardianNFT.GUARDIAN_PRICE()));
      earlyPrice = parseFloat(ethers.utils.formatEther(await kpRootGuardianNFT.EARLY_PRICE()));
    })

    it('Should have correct name and symbol', async () => {
      const tokenName = await kpRootGuardianNFT.name();
      const tokenSymbol = await kpRootGuardianNFT.symbol();

      expect(tokenName).to.equal("PPGUARD");
      expect(tokenSymbol).to.equal("PPG");
    })

    it('Should be able to awaken guardians', async () => {
      await kpRootGuardianNFT.connect(kitten1).awakenGuardian({value: ethers.utils.parseEther(guardianPrice.toString())});
      const kitten1NFTbalance = await kpRootGuardianNFT.balanceOf(kitten1.address);

      await kpRootGuardianNFT.connect(kitten2).awakenGuardian({value: ethers.utils.parseEther(guardianPrice.toString())});
      const kitten2NFTbalance = await kpRootGuardianNFT.balanceOf(kitten2.address);

      expect(kitten1NFTbalance.toString()).to.equal("1");
      expect(kitten2NFTbalance.toString()).to.equal("1");
    });

    it('Should record minter address as a guardian', async () => {
      await kpRootGuardianNFT.connect(kitten1).awakenGuardian({value: ethers.utils.parseEther(guardianPrice.toString())});

      expect(await kpRootGuardianNFT.isGuardian(kitten1.address)).to.equal(true);
    });

    it('Should have correct token URI', async () => {
      await kpRootGuardianNFT.connect(kitten1).awakenGuardian({value: ethers.utils.parseEther(guardianPrice.toString())});      
      
      await kpRootGuardianNFT.connect(treasury).setBaseURI(sampleURI);
      const tokenURI = await kpRootGuardianNFT.tokenURI(0);

      expect(tokenURI).to.equal(sampleURI+0);
    });

    it('Should pay 0.088 eth to awaken a guardian', async () => {
      await network.provider.request({
        method: "hardhat_impersonateAccount",
        params: [kpRootGuardianNFT.address],
      });

      const RootGuardianContract = await ethers.getSigner(kpRootGuardianNFT.address);

      const initialKittenBalance = ethers.utils.formatEther(await kitten1.getBalance());
      const initialContractBalance = ethers.utils.formatEther(await RootGuardianContract.getBalance());

      await kpRootGuardianNFT.connect(kitten1).awakenGuardian({value: ethers.utils.parseEther(guardianPrice.toString())});
      
      const finalKittenBalance = ethers.utils.formatEther(await kitten1.getBalance());
      const finalContractBalance = ethers.utils.formatEther(await RootGuardianContract.getBalance());
      const kittenBalanceDifference = parseFloat(initialKittenBalance) - parseFloat(finalKittenBalance);
      const contractBalanceDifference = parseFloat(finalContractBalance) - parseFloat(initialContractBalance);

      expect(kittenBalanceDifference).to.be.above(guardianPrice);
      expect(contractBalanceDifference).to.be.equal(guardianPrice);
    });

    it('Should not awaken guardian for less than 0.088 eth', async () => {
      await expect(
        kpRootGuardianNFT.connect(kitten1).awakenGuardian({value: ethers.utils.parseEther("0.08")})
      ).to.be.revertedWith("Not enough ether");
    });

    it('Should be able to add early birds', async () => {
      const earlyBirds = [
        kitten1.address,
        kitten2.address
      ];
      const result = await kpRootGuardianNFT.addEarlyBirds(earlyBirds);

      let checkEarlyBird = await kpRootGuardianNFT.isEarlyBird(earlyBirds[0]);
      expect(checkEarlyBird).to.be.equal(true);

      checkEarlyBird = await kpRootGuardianNFT.isEarlyBird(other.address);
      expect(checkEarlyBird).to.be.equal(false);
      
      await expect(kpRootGuardianNFT.addEarlyBirds(earlyBirds))
        .to.emit(kpRootGuardianNFT, 'SetEarlyBirds')
        .withArgs(earlyBirds, earlyBirds.length);      
    });

    it('Should allow only deployer to add early birds', async () => {
      await kpRootGuardianNFT.addNewEarlyBird(kitten1.address);

      await expect(
        kpRootGuardianNFT.connect(kitten1).addNewEarlyBird(kitten2.address)
      ).to.be.reverted;
    });

    it('Should be able to awaken guardian to early bird for 0.0088 eth', async () => {
      await kpRootGuardianNFT.addNewEarlyBird(kitten1.address);

      const initialKittenBalance = ethers.utils.formatEther(await kitten1.getBalance());
      await kpRootGuardianNFT.connect(kitten1).awakenGuardian({value: ethers.utils.parseEther(earlyPrice.toString())});
      const finalKittenBalance = ethers.utils.formatEther(await kitten1.getBalance());
      const kittenBalanceDifference = parseFloat(initialKittenBalance) - parseFloat(finalKittenBalance);

      expect(kittenBalanceDifference).to.be.above(earlyPrice);
    });

    it('Should not awaken guardian to early bird for less than 0.0088 eth after 48 hour window', async () => {
      await kpRootGuardianNFT.addNewEarlyBird(kitten1.address);
      await network.provider.send("evm_increaseTime", [3600*48]);

      await expect (
        kpRootGuardianNFT.connect(kitten1).awakenGuardian({value: ethers.utils.parseEther(earlyPrice.toString())})
      ).to.be.revertedWith("Not enough ether");
      
    });

    it('Should not awaken more than one guardian per address', async () => {
      await kpRootGuardianNFT.connect(kitten1).awakenGuardian({value: ethers.utils.parseEther(guardianPrice.toString())});
      await expect(
        kpRootGuardianNFT.connect(kitten1).awakenGuardian({value: ethers.utils.parseEther(guardianPrice.toString())})
      ).to.be.reverted;
    });

    it('Should be able to transfer guardian', async () => {
      let kitten2NFTbalance = await kpRootGuardianNFT.balanceOf(kitten2.address);
      expect(kitten2NFTbalance.toString()).to.equal("0");

      await kpRootGuardianNFT.connect(kitten1).awakenGuardian({value: ethers.utils.parseEther(guardianPrice.toString())});
      expect(await kpRootGuardianNFT.isGuardian(kitten1.address)).to.equal(true);

      await kpRootGuardianNFT.connect(kitten1).approve(kitten2.address, 0);
      await kpRootGuardianNFT.connect(kitten2).transferFrom(kitten1.address, kitten2.address, 0);
      kitten2NFTbalance = await kpRootGuardianNFT.balanceOf(kitten2.address);

      expect(kitten2NFTbalance.toString()).to.equal("1");
      expect(await kpRootGuardianNFT.isGuardian(kitten1.address)).to.equal(false);
      expect(await kpRootGuardianNFT.isGuardian(kitten2.address)).to.equal(true);
    });

    it('Should not be able to transfer to another guardian', async () => {
      await kpRootGuardianNFT.connect(kitten1).awakenGuardian({value: ethers.utils.parseEther(guardianPrice.toString())});
      await kpRootGuardianNFT.connect(kitten2).awakenGuardian({value: ethers.utils.parseEther(guardianPrice.toString())});
      
      await expect(
        kpRootGuardianNFT.connect(kitten1).transferFrom(kitten1.address, kitten2.address, 0)
      ).to.be.revertedWith("KP: Already a guardian!");
    });

    it('Should not be able to burn guardian NFT', async () => {
      await kpRootGuardianNFT.connect(kitten1).awakenGuardian({value: ethers.utils.parseEther(guardianPrice.toString())});
      await expect(
        kpRootGuardianNFT.connect(kitten1).transferFrom(kitten1.address, "0x0000000000000000000000000000000000000000", 0)
      ).to.be.revertedWith("ERC721: transfer to the zero address");
    });

    it('Should allow only treasury to withdraw', async () => {
      const initialTreasuryBalance = ethers.utils.formatEther(await treasury.getBalance());

      await kpRootGuardianNFT.connect(kitten1).awakenGuardian({value: ethers.utils.parseEther(guardianPrice.toString())});
      await kpRootGuardianNFT.addNewEarlyBird(kitten2.address);
      await kpRootGuardianNFT.connect(kitten2).awakenGuardian({value: ethers.utils.parseEther(earlyPrice.toString())});
      
      await expect (
        kpRootGuardianNFT.connect(kitten1).withdrawAll()
      ).to.be.reverted;

      await kpRootGuardianNFT.connect(treasury).withdrawAll();
      
      const finalTreasuryBalance = ethers.utils.formatEther(await treasury.getBalance());

      const balanceDifference = parseFloat(finalTreasuryBalance) - parseFloat(initialTreasuryBalance);
      expect(balanceDifference).to.be.below(guardianPrice + earlyPrice);
      expect(balanceDifference).to.be.above(guardianPrice + earlyPrice - 0.001);
    });
})
