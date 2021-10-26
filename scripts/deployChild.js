// We require the Hardhat Runtime Environment explicitly here. This is optional 
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const { config, ethers } = require("hardhat");
const { Contract } = require('ethers');
const fs = require('fs');
const hre = require("hardhat")
const daoTreasury = "0x56322a77E3fD213fA0aB3165C5078a9f197204C4";
const FxChild = "0xCf73231F28B7331BBe3124B907840A94851f9f11";

//NEED TO FETCH FROM PREVIOUS SCRIPT
const L1GuardianAddress = "0x145819CA4d19BD3587Fd6F7f94BA6A639A0BfC9f"; 
const kPL1FxTunnel = "0xD7dBfE9534b0005030939b39F76Ac8223dAc5753";


async function main() {
  const [deployer] = await ethers.getSigners();

  const KPL2AFxTunnel = await ethers.getContractFactory("KPL2AFxTunnel");
  const kPL2AFxTunnel = await KPL2AFxTunnel.deploy(FxChild);
  console.log("Deploying kPL2AFxTunnel ...", kPL2AFxTunnel.address);
  
  const KPL2AGuardianNFT = await ethers.getContractFactory("KPL2AGuardianNFT");
  const kPL2AGuardianNFT = await KPL2AGuardianNFT.deploy(daoTreasury, kPL2AFxTunnel.address, L1GuardianAddress);
  console.log("Deploying KPL2AGuardianNFT ...", kPL2AGuardianNFT.address);

  await delay(10000);
  await kPL2AFxTunnel.setFxRootTunnel(kPL1FxTunnel);
  console.log("setFxRootTunnel ...", kPL1FxTunnel);

  return {
    'kPL2AGuardianNFT':kPL2AGuardianNFT.address,
    'kPL2AFxTunnel' : kPL2AFxTunnel.address
  };
  
}

async function verify(contractAddress,...args) {
  console.log("verifying", contractAddress, ...args);
  await hre.run("verify:verify", {
    address: contractAddress,
    constructorArguments: [
      ...args
    ],
  });
}

function delay(ms) { 
  return new Promise( resolve => setTimeout(resolve, ms) );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
  main()
  .then( async (deployedData) => {
    await delay(80000);
    // await verify(deployedData.FxStateRootTunnel, checkpointManager, FxRoot); //Verify the master contract
    await verify(deployedData.kPL2AFxTunnel, FxChild); //Verify the master contract
    // await verify(deployedData.Kittens); //Verify the master contract
    // await verify(deployedData.factoryAddress, deployedData.masterAddress, deployedData.accountContractAddress, deployedData.Kittens, "0xCd746dbAec699A3E0B42e411909e67Ad8BbCC315", "0xCd746dbAec699A3E0B42e411909e67Ad8BbCC315"); //Verify the factory contract
    // await verify(deployedData.dai); //Verify the DAI address
    // await verify(deployedData.accountContractAddress); //Verify the accountContractAddress address
    // await verify(deployedData.kittyPartyYieldGeneratorZapper); //Verify the kittyPartyYieldGeneratorZapper address
    process.exit(0)
  })
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

  // function saveFrontendFiles(contract: Contract, contractName: string) {
  //   console.log('Adding to frontend',contractName)
  //   fs.appendFileSync(
  //     `/home/corrino/my-projects/1-kittyparty-ui/contracts/${contractName}.address.js`,
  //     `module.exports = '${contract.address}'\n`
  //   );
  // }