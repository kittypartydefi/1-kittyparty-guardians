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


const kPL1GuardianNFTAddress = '0x145819CA4d19BD3587Fd6F7f94BA6A639A0BfC9f';


async function main() {
  const accounts = await hre.ethers.getSigners();
  const KPL1GuardianNFT = await ethers.getContractFactory("KPL1GuardianNFT");

  const kPL1GuardianNFT = await KPL1GuardianNFT.attach(
    kPL1GuardianNFTAddress
  );

  console.log(accounts[0].address)
  console.log(accounts[1].address)

  let mintForAddress = 1;

  await kPL1GuardianNFT.addEarlyBird(accounts[mintForAddress].address);
  await delay(10000);

  const overrides = {
    value: ethers.utils.parseEther("0.088")
  }
  // //awake a guardian    
  let balance = await kPL1GuardianNFT.balanceOf(accounts[mintForAddress].address);
  if(balance<1){
    await kPL1GuardianNFT.connect(accounts[mintForAddress]).awakenGuardian("https://ipfs.io/ipfs/QmU5mQH314ZkQZ8FfmeHxNMpK5YMFrNGFhMNmJfKQvyC9U/"+mintForAddress, overrides);
  }
  
  let balancePostMint = await kPL1GuardianNFT.balanceOf(accounts[mintForAddress].address);
  console.log("minted guardians ...", balancePostMint.toString());

 
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