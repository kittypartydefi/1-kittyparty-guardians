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
  KPL2AGuardianNFT,
  KPL2AFxTunnel
} from '../src/types/index';


const kPL2AGuardianNFTAddress = '0x145819CA4d19BD3587Fd6F7f94BA6A639A0BfC9f';
const kPL2AFxTunnelAddress = '0xD7dBfE9534b0005030939b39F76Ac8223dAc5753';


async function main() {
  const [deployer, wallet2 ] = await ethers.getSigners();
  const KPL2AFxTunnel = await ethers.getContractFactory("KPL2AFxTunnel");
  const KPL2AGuardianNFT = await ethers.getContractFactory("KPL2AGuardianNFT");

  const kPL2AFxTunnel = await KPL2AFxTunnel.attach(
    kPL2AFxTunnelAddress
  );

  const kPL2AGuardianNFT = await KPL2AGuardianNFT.attach(
    kPL2AGuardianNFTAddress
  );

  console.log("wallet addresses", deployer.address);

  const overrides = {
    value: ethers.utils.parseEther("0.088")
  }
  
  await kPL2AFxTunnel.setKPChild(kPL2AGuardianNFTAddress);
  await delay(20000);
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