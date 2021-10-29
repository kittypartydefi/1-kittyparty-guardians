import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-etherscan";
import "dotenv/config";
import "hardhat-contract-sizer";
import { HardhatUserConfig, task } from "hardhat/config";
import "hardhat-change-network";

const accounts = {
  mnemonic:
    process.env.MNEMONIC ||
    "test test test test test test test test test test test test",
};

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (args, { ethers }) => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.7"
      }
    ],
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  /*contractSizer: {
    alphaSort: true,
    disambiguatePaths: false,
    runOnCompile: true,
    strict: true,
  },*/
  etherscan: {
    apiKey: process.env.ETHERSCAN_APIKEY
  },
  typechain: {
    outDir: 'src/types',
    target: 'ethers-v5',
    alwaysGenerateOverloads: false, // should overloads with full signatures like deposit(uint256) be generated always, even if there are no overloads?
    externalArtifacts: ['externalArtifacts/*.json'], // optional array of glob patterns with external artifacts to process (for example external libs from node_modules)
  },
  abiExporter: {
    path: './data/abi',
    clear: false,
    flat: true,
    spacing: 2
  }
};

if(process.env.MNEMONIC) {
  module.exports.networks = {
    mainnet: {
      url: process.env.MAINNET_RPC || "https://mainnet.infura.io/v3/XXXX",
      accounts,
    },
    goerli: {
      url: process.env.GOERLI_RPC || "https://goerli.infura.io/v3/XXX",
      accounts,
    },
    rinkeby: {
      url: process.env.RINKEBY_RPC || "https://rinkeby.infura.io/v3/XXX",
      accounts,
    },
    kovan: {
      url: process.env.KOVAN_RPC || "https://kovan.infura.io/v3/XXX",
      accounts,
    },
    mumbai: {
      url: process.env.MUMBAI_RPC || "https://polygon-mumbai.infura.io/v3/XXX",
      accounts,
    }
  };
}