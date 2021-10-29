/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { FxERC20, FxERC20Interface } from "../FxERC20";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "connectedToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "fxManager",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "fxManager_",
        type: "address",
      },
      {
        internalType: "address",
        name: "connectedToken_",
        type: "address",
      },
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "decimals_",
        type: "uint8",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "_decimals",
        type: "uint8",
      },
    ],
    name: "setupMetaData",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061217a806100206000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c806370a08231116100a25780639dc29fac116100715780639dc29fac146102bc578063a457c2d7146102d8578063a9059cbb14610308578063af1e6be714610338578063dd62ed3e146103545761010b565b806370a08231146102345780638420ce991461026457806395d89b41146102805780639b7791531461029e5761010b565b806323b872dd116100de57806323b872dd1461019a578063313ce567146101ca57806339509351146101e857806340c10f19146102185761010b565b806306fdde0314610110578063095ea7b31461012e5780630a8a49141461015e57806318160ddd1461017c575b600080fd5b610118610384565b6040516101259190611a1b565b60405180910390f35b6101486004803603810190610143919061176a565b610416565b6040516101559190611a00565b60405180910390f35b61016661042d565b60405161017391906119e5565b60405180910390f35b610184610457565b6040516101919190611b5d565b60405180910390f35b6101b460048036038101906101af9190611717565b610461565b6040516101c19190611a00565b60405180910390f35b6101d261052c565b6040516101df9190611b78565b60405180910390f35b61020260048036038101906101fd919061176a565b610543565b60405161020f9190611a00565b60405180910390f35b610232600480360381019061022d919061176a565b6105e8565b005b61024e600480360381019061024991906115f7565b610686565b60405161025b9190611b5d565b60405180910390f35b61027e60048036038101906102799190611664565b6106ce565b005b61028861084d565b6040516102959190611a1b565b60405180910390f35b6102a66108df565b6040516102b391906119e5565b60405180910390f35b6102d660048036038101906102d1919061176a565b610909565b005b6102f260048036038101906102ed919061176a565b6109a7565b6040516102ff9190611a00565b60405180910390f35b610322600480360381019061031d919061176a565b610a66565b60405161032f9190611a00565b60405180910390f35b610352600480360381019061034d91906117aa565b610a7d565b005b61036e60048036038101906103699190611624565b610b1d565b60405161037b9190611b5d565b60405180910390f35b60606003805461039390611d26565b80601f01602080910402602001604051908101604052809291908181526020018280546103bf90611d26565b801561040c5780601f106103e15761010080835404028352916020019161040c565b820191906000526020600020905b8154815290600101906020018083116103ef57829003601f168201915b5050505050905090565b6000610423338484610ba4565b6001905092915050565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600254905090565b600061046e848484610d6f565b610521843361051c856040518060600160405280602881526020016120f860289139600160008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546110049092919063ffffffff16565b610ba4565b600190509392505050565b6000600560009054906101000a900460ff16905090565b60006105de33846105d985600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461106890919063ffffffff16565b610ba4565b6001905092915050565b600560019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610678576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161066f90611a9d565b60405180910390fd5b61068282826110c6565b5050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600073ffffffffffffffffffffffffffffffffffffffff16600560019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614801561077a5750600073ffffffffffffffffffffffffffffffffffffffff16600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b6107b9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107b090611abd565b60405180910390fd5b84600560016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610846838383610a7d565b5050505050565b60606004805461085c90611d26565b80601f016020809104026020016040519081016040528092919081815260200182805461088890611d26565b80156108d55780601f106108aa576101008083540402835291602001916108d5565b820191906000526020600020905b8154815290600101906020018083116108b857829003601f168201915b5050505050905090565b6000600560019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600560019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610999576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161099090611a9d565b60405180910390fd5b6109a3828261125a565b5050565b6000610a5c3384610a578560405180606001604052806025815260200161212060259139600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546110049092919063ffffffff16565b610ba4565b6001905092915050565b6000610a73338484610d6f565b6001905092915050565b600560019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610b0d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b0490611a9d565b60405180910390fd5b610b18838383611408565b505050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610c14576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c0b90611b1d565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610c84576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c7b90611a5d565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610d629190611b5d565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610ddf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dd690611afd565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610e4f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e4690611a3d565b60405180910390fd5b610e5a838383611456565b610ec5816040518060600160405280602681526020016120d2602691396000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546110049092919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610f58816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461106890919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610ff79190611b5d565b60405180910390a3505050565b600083831115829061104c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110439190611a1b565b60405180910390fd5b506000838561105b9190611c5b565b9050809150509392505050565b60008082846110779190611c05565b9050838110156110bc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110b390611a7d565b60405180910390fd5b8091505092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611136576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161112d90611b3d565b60405180910390fd5b61114260008383611456565b6111578160025461106890919063ffffffff16565b6002819055506111ae816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461106890919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161124e9190611b5d565b60405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156112ca576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112c190611add565b60405180910390fd5b6112d682600083611456565b611341816040518060600160405280602281526020016120b0602291396000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546110049092919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506113988160025461145b90919063ffffffff16565b600281905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516113fc9190611b5d565b60405180910390a35050565b826003908051906020019061141e9291906114a5565b5081600490805190602001906114359291906114a5565b5080600560006101000a81548160ff021916908360ff160217905550505050565b505050565b600061149d83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611004565b905092915050565b8280546114b190611d26565b90600052602060002090601f0160209004810192826114d3576000855561151a565b82601f106114ec57805160ff191683800117855561151a565b8280016001018555821561151a579182015b828111156115195782518255916020019190600101906114fe565b5b509050611527919061152b565b5090565b5b8082111561154457600081600090555060010161152c565b5090565b600061155b61155684611bb8565b611b93565b90508281526020810184848401111561157757611576611e1b565b5b611582848285611ce4565b509392505050565b6000813590506115998161206a565b92915050565b600082601f8301126115b4576115b3611e16565b5b81356115c4848260208601611548565b91505092915050565b6000813590506115dc81612081565b92915050565b6000813590506115f181612098565b92915050565b60006020828403121561160d5761160c611e25565b5b600061161b8482850161158a565b91505092915050565b6000806040838503121561163b5761163a611e25565b5b60006116498582860161158a565b925050602061165a8582860161158a565b9150509250929050565b600080600080600060a086880312156116805761167f611e25565b5b600061168e8882890161158a565b955050602061169f8882890161158a565b945050604086013567ffffffffffffffff8111156116c0576116bf611e20565b5b6116cc8882890161159f565b935050606086013567ffffffffffffffff8111156116ed576116ec611e20565b5b6116f98882890161159f565b925050608061170a888289016115e2565b9150509295509295909350565b6000806000606084860312156117305761172f611e25565b5b600061173e8682870161158a565b935050602061174f8682870161158a565b9250506040611760868287016115cd565b9150509250925092565b6000806040838503121561178157611780611e25565b5b600061178f8582860161158a565b92505060206117a0858286016115cd565b9150509250929050565b6000806000606084860312156117c3576117c2611e25565b5b600084013567ffffffffffffffff8111156117e1576117e0611e20565b5b6117ed8682870161159f565b935050602084013567ffffffffffffffff81111561180e5761180d611e20565b5b61181a8682870161159f565b925050604061182b868287016115e2565b9150509250925092565b61183e81611c8f565b82525050565b61184d81611ca1565b82525050565b600061185e82611be9565b6118688185611bf4565b9350611878818560208601611cf3565b61188181611e2a565b840191505092915050565b6000611899602383611bf4565b91506118a482611e3b565b604082019050919050565b60006118bc602283611bf4565b91506118c782611e8a565b604082019050919050565b60006118df601b83611bf4565b91506118ea82611ed9565b602082019050919050565b6000611902600e83611bf4565b915061190d82611f02565b602082019050919050565b6000611925601c83611bf4565b915061193082611f2b565b602082019050919050565b6000611948602183611bf4565b915061195382611f54565b604082019050919050565b600061196b602583611bf4565b915061197682611fa3565b604082019050919050565b600061198e602483611bf4565b915061199982611ff2565b604082019050919050565b60006119b1601f83611bf4565b91506119bc82612041565b602082019050919050565b6119d081611ccd565b82525050565b6119df81611cd7565b82525050565b60006020820190506119fa6000830184611835565b92915050565b6000602082019050611a156000830184611844565b92915050565b60006020820190508181036000830152611a358184611853565b905092915050565b60006020820190508181036000830152611a568161188c565b9050919050565b60006020820190508181036000830152611a76816118af565b9050919050565b60006020820190508181036000830152611a96816118d2565b9050919050565b60006020820190508181036000830152611ab6816118f5565b9050919050565b60006020820190508181036000830152611ad681611918565b9050919050565b60006020820190508181036000830152611af68161193b565b9050919050565b60006020820190508181036000830152611b168161195e565b9050919050565b60006020820190508181036000830152611b3681611981565b9050919050565b60006020820190508181036000830152611b56816119a4565b9050919050565b6000602082019050611b7260008301846119c7565b92915050565b6000602082019050611b8d60008301846119d6565b92915050565b6000611b9d611bae565b9050611ba98282611d58565b919050565b6000604051905090565b600067ffffffffffffffff821115611bd357611bd2611de7565b5b611bdc82611e2a565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b6000611c1082611ccd565b9150611c1b83611ccd565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611c5057611c4f611d89565b5b828201905092915050565b6000611c6682611ccd565b9150611c7183611ccd565b925082821015611c8457611c83611d89565b5b828203905092915050565b6000611c9a82611cad565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b82818337600083830152505050565b60005b83811015611d11578082015181840152602081019050611cf6565b83811115611d20576000848401525b50505050565b60006002820490506001821680611d3e57607f821691505b60208210811415611d5257611d51611db8565b5b50919050565b611d6182611e2a565b810181811067ffffffffffffffff82111715611d8057611d7f611de7565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f536166654d6174683a206164646974696f6e206f766572666c6f770000000000600082015250565b7f496e76616c69642073656e646572000000000000000000000000000000000000600082015250565b7f546f6b656e20697320616c726561647920696e697469616c697a656400000000600082015250565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b61207381611c8f565b811461207e57600080fd5b50565b61208a81611ccd565b811461209557600080fd5b50565b6120a181611cd7565b81146120ac57600080fd5b5056fe45524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa2646970667358221220f631e1e5e54335ab1bcdd200745ef60fbf377c44ef2a826431b265d0e0a2c87f64736f6c63430008070033";

export class FxERC20__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<FxERC20> {
    return super.deploy(overrides || {}) as Promise<FxERC20>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): FxERC20 {
    return super.attach(address) as FxERC20;
  }
  connect(signer: Signer): FxERC20__factory {
    return super.connect(signer) as FxERC20__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FxERC20Interface {
    return new utils.Interface(_abi) as FxERC20Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FxERC20 {
    return new Contract(address, _abi, signerOrProvider) as FxERC20;
  }
}
