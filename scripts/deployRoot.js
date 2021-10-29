// We require the Hardhat Runtime Environment explicitly here. This is optional 
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const { config, ethers } = require("hardhat");
const { Contract } = require('ethers');
const fs = require('fs');
const hre = require("hardhat")
const checkpointManager = '';
const FxRoot = '0xfe5e5D361b2ad62c541bAb87C45a0B9B018389a2';
const daoTreasury = "0x6E59B243B9A534E63E39a7debb6658d5A4806A8C";
async function main() {
  const [deployer] = await ethers.getSigners();

  //deploy the yield generator contractor
  // const KPL1FxTunnel = await ethers.getContractFactory("KPL1FxTunnel");
  // const kPL1FxTunnel = await KPL1FxTunnel.deploy(checkpointManager, FxRoot);
  // console.log("Deploying kPL1FxTunnel ...", kPL1FxTunnel.address);

  const KPL1GuardianNFT = await ethers.getContractFactory("KPL1GuardianNFT");
  const kPL1GuardianNFT = await KPL1GuardianNFT.deploy(daoTreasury);
  console.log("Deploying KPL1GuardianNFT ...", kPL1GuardianNFT.address);

  //Post deployment of both the contracts, next we need to deploy the child contract and then set the relevant FX tunnel contracts
  //Post deployment we can try minting
  //We can try emitting an event and then also run tests to ensure that the event was broadcasted to the child chain
  //And further that we can mint in child chain
  return {
          'kPL1GuardianNFT':kPL1GuardianNFT.address,
          // 'kPL1FxTunnel' : kPL1FxTunnel.address
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
    // await delay(50000);
    //await verify(deployedData.kPL1FxTunnel, checkpointManager, FxRoot); //Verify the master contract
    // await verify(deployedData.kPL1GuardianNFT, daoTreasury); //Verify the master contract
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