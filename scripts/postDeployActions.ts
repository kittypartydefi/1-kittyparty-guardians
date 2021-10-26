// We require the Hardhat Runtime Environment explicitly here. This is optional 
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.


import { Wallet, utils  } from 'ethers'
import { Contract } from "@ethersproject/contracts";
import { 
  config,
  ethers, 
  waffle,
  network
} from "hardhat";
import * as hre from "hardhat";
import { 
  KPL1GuardianNFT,
  KPL1FxTunnel
} from '../src/types/index';


const kPL1FxTunnelAddress = '0xD7dBfE9534b0005030939b39F76Ac8223dAc5753';
const kPL1GuardianNFTAddress = '0x7E2Fc0a2260FaDc36A9fEc78bdEE349BE0E1b453';
const kPL2AFxTunnel = '0xD7dBfE9534b0005030939b39F76Ac8223dAc5753';


async function main() {
  const [deployer, wallet2 ] = await ethers.getSigners();
  // const KPL1FxTunnel = await ethers.getContractFactory("KPL1FxTunnel");
  const KPL1GuardianNFT = await ethers.getContractFactory("KPL1GuardianNFT");
  // const kPL1FxTunnel = await KPL1FxTunnel.attach(
  //   kPL1FxTunnelAddress
  // );

  const kPL1GuardianNFT = await KPL1GuardianNFT.attach(
    kPL1GuardianNFTAddress
  );


  // await kPL1GuardianNFT.connect(wallet2).getRandomNumber();
  // await delay(20000);

  const randomNumer =  await kPL1GuardianNFT.messageFromTheUniverse();
  const chosenLeader=  await kPL1GuardianNFT.chosenLeader();
  console.log("randomNumer randomNumer", randomNumer, chosenLeader);

  // console.log("wallet addresses", deployer.address);

  // let fxChildTunnel = await kPL1FxTunnel.fxChildTunnel();
  // console.log("getting fxChildTunnel ...", fxChildTunnel);
  // if(fxChildTunnel == "0x0000000000000000000000000000000000000000") {
  //   await kPL1FxTunnel.setFxChildTunnel(kPL2AFxTunnel);
  // }
  
  // console.log("setting setFxChildTunnel ...");

  // await kPL1GuardianNFT.addEarlyBird(deployer.address);
  // await delay(10000);

  // const overrides = {
  //   value: ethers.utils.parseEther("0.088")
  // }
  // //awake a guardian    
  // let balance = await kPL1GuardianNFT.balanceOf(deployer.address);
  // if(balance<1){
  //   await kPL1GuardianNFT.awakenGuardian("https://ipfs.io/ipfs/QmU5mQH314ZkQZ8FfmeHxNMpK5YMFrNGFhMNmJfKQvyC9U/2", overrides);
  // }
  
  // let balancePostMint = await kPL1GuardianNFT.balanceOf(deployer.address);
  // console.log("minted guardians ...", balancePostMint.toString());
  
  // await kPL1FxTunnel.setKPGuardian(kPL1GuardianNFTAddress);
  // await delay(20000);
  // await kPL1FxTunnel.bringForthTheApprentices(0);
  // console.log("bringForth app 1 ...");

  // hre.changeNetwork('polygon');

 
}


function delay(ms:number) { 
  return new Promise( resolve => setTimeout(resolve, ms) );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
  main()
  .then( async (deployedData) => {
    process.exit(0)
  })
  .catch(error => {
    console.error(error);
    process.exit(1);
  });