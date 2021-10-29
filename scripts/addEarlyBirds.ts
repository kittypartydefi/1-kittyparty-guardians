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
  KPL1GuardianNFT
} from '../src/types/index';


const kPL1GuardianNFTAddress = '0x9c381e34a75b2257677a830342e5778534e8558f';

const earlyBirdAddresses = [];


async function main() {
  const [deployer, daoTreasury] = await ethers.getSigners();
  const KPL1GuardianNFT = await ethers.getContractFactory("KPL1GuardianNFT");

  const kPL1GuardianNFT = await KPL1GuardianNFT.attach(
    kPL1GuardianNFTAddress
  );

  await kPL1GuardianNFT.connect(daoTreasury).addEarlyBirds(earlyBirdAddresses);
  await delay(10000);
 
}


function delay(ms:number) { 
  return new Promise( resolve => setTimeout(resolve, ms) );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
  main()
  .then(async (deployedData) => {
    process.exit(0)
  })
  .catch(error => {
    console.error(error);
    process.exit(1);
  });