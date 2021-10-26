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
  "0x608060405234801561001057600080fd5b506120a4806100206000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c806370a08231116100a25780639dc29fac116100715780639dc29fac146102bc578063a457c2d7146102d8578063a9059cbb14610308578063af1e6be714610338578063dd62ed3e146103545761010b565b806370a08231146102345780638420ce991461026457806395d89b41146102805780639b7791531461029e5761010b565b806323b872dd116100de57806323b872dd1461019a578063313ce567146101ca57806339509351146101e857806340c10f19146102185761010b565b806306fdde0314610110578063095ea7b31461012e5780630a8a49141461015e57806318160ddd1461017c575b600080fd5b610118610384565b6040516101259190611bae565b60405180910390f35b6101486004803603810190610143919061174a565b610416565b6040516101559190611b93565b60405180910390f35b61016661042d565b6040516101739190611b78565b60405180910390f35b610184610457565b6040516101919190611cf0565b60405180910390f35b6101b460048036038101906101af91906116fb565b610461565b6040516101c19190611b93565b60405180910390f35b6101d261052c565b6040516101df9190611d0b565b60405180910390f35b61020260048036038101906101fd919061174a565b610543565b60405161020f9190611b93565b60405180910390f35b610232600480360381019061022d919061174a565b6105e8565b005b61024e600480360381019061024991906115ef565b610686565b60405161025b9190611cf0565b60405180910390f35b61027e60048036038101906102799190611654565b6106ce565b005b61028861084d565b6040516102959190611bae565b60405180910390f35b6102a66108df565b6040516102b39190611b78565b60405180910390f35b6102d660048036038101906102d1919061174a565b610909565b005b6102f260048036038101906102ed919061174a565b6109a7565b6040516102ff9190611b93565b60405180910390f35b610322600480360381019061031d919061174a565b610a66565b60405161032f9190611b93565b60405180910390f35b610352600480360381019061034d9190611786565b610a7d565b005b61036e60048036038101906103699190611618565b610b1d565b60405161037b9190611cf0565b60405180910390f35b60606003805461039390611ec4565b80601f01602080910402602001604051908101604052809291908181526020018280546103bf90611ec4565b801561040c5780601f106103e15761010080835404028352916020019161040c565b820191906000526020600020905b8154815290600101906020018083116103ef57829003601f168201915b5050505050905090565b6000610423338484610ba4565b6001905092915050565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600254905090565b600061046e848484610d6f565b610521843361051c8560405180606001604052806028815260200161202260289139600160008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546110049092919063ffffffff16565b610ba4565b600190509392505050565b6000600560009054906101000a900460ff16905090565b60006105de33846105d985600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461106890919063ffffffff16565b610ba4565b6001905092915050565b600560019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610678576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161066f90611c30565b60405180910390fd5b61068282826110c6565b5050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600073ffffffffffffffffffffffffffffffffffffffff16600560019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614801561077a5750600073ffffffffffffffffffffffffffffffffffffffff16600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b6107b9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107b090611c50565b60405180910390fd5b84600560016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610846838383610a7d565b5050505050565b60606004805461085c90611ec4565b80601f016020809104026020016040519081016040528092919081815260200182805461088890611ec4565b80156108d55780601f106108aa576101008083540402835291602001916108d5565b820191906000526020600020905b8154815290600101906020018083116108b857829003601f168201915b5050505050905090565b6000600560019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600560019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610999576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161099090611c30565b60405180910390fd5b6109a3828261125a565b5050565b6000610a5c3384610a578560405180606001604052806025815260200161204a60259139600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546110049092919063ffffffff16565b610ba4565b6001905092915050565b6000610a73338484610d6f565b6001905092915050565b600560019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610b0d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b0490611c30565b60405180910390fd5b610b18838383611408565b505050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610c14576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c0b90611cb0565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610c84576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c7b90611bf0565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610d629190611cf0565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610ddf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dd690611c90565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610e4f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e4690611bd0565b60405180910390fd5b610e5a838383611456565b610ec581604051806060016040528060268152602001611ffc602691396000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546110049092919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610f58816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461106890919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610ff79190611cf0565b60405180910390a3505050565b600083831115829061104c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110439190611bae565b60405180910390fd5b506000838561105b9190611df9565b9050809150509392505050565b60008082846110779190611da3565b9050838110156110bc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110b390611c10565b60405180910390fd5b8091505092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611136576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161112d90611cd0565b60405180910390fd5b61114260008383611456565b6111578160025461106890919063ffffffff16565b6002819055506111ae816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461106890919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161124e9190611cf0565b60405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156112ca576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112c190611c70565b60405180910390fd5b6112d682600083611456565b61134181604051806060016040528060228152602001611fda602291396000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546110049092919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506113988160025461145b90919063ffffffff16565b600281905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516113fc9190611cf0565b60405180910390a35050565b826003908051906020019061141e9291906114a5565b5081600490805190602001906114359291906114a5565b5080600560006101000a81548160ff021916908360ff160217905550505050565b505050565b600061149d83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611004565b905092915050565b8280546114b190611ec4565b90600052602060002090601f0160209004810192826114d3576000855561151a565b82601f106114ec57805160ff191683800117855561151a565b8280016001018555821561151a579182015b828111156115195782518255916020019190600101906114fe565b5b509050611527919061152b565b5090565b5b8082111561154457600081600090555060010161152c565b5090565b600061155b61155684611d57565b611d26565b90508281526020810184848401111561157357600080fd5b61157e848285611e82565b509392505050565b60008135905061159581611f94565b92915050565b600082601f8301126115ac57600080fd5b81356115bc848260208601611548565b91505092915050565b6000813590506115d481611fab565b92915050565b6000813590506115e981611fc2565b92915050565b60006020828403121561160157600080fd5b600061160f84828501611586565b91505092915050565b6000806040838503121561162b57600080fd5b600061163985828601611586565b925050602061164a85828601611586565b9150509250929050565b600080600080600060a0868803121561166c57600080fd5b600061167a88828901611586565b955050602061168b88828901611586565b945050604086013567ffffffffffffffff8111156116a857600080fd5b6116b48882890161159b565b935050606086013567ffffffffffffffff8111156116d157600080fd5b6116dd8882890161159b565b92505060806116ee888289016115da565b9150509295509295909350565b60008060006060848603121561171057600080fd5b600061171e86828701611586565b935050602061172f86828701611586565b9250506040611740868287016115c5565b9150509250925092565b6000806040838503121561175d57600080fd5b600061176b85828601611586565b925050602061177c858286016115c5565b9150509250929050565b60008060006060848603121561179b57600080fd5b600084013567ffffffffffffffff8111156117b557600080fd5b6117c18682870161159b565b935050602084013567ffffffffffffffff8111156117de57600080fd5b6117ea8682870161159b565b92505060406117fb868287016115da565b9150509250925092565b61180e81611e2d565b82525050565b61181d81611e3f565b82525050565b600061182e82611d87565b6118388185611d92565b9350611848818560208601611e91565b61185181611f83565b840191505092915050565b6000611869602383611d92565b91507f45524332303a207472616e7366657220746f20746865207a65726f206164647260008301527f65737300000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006118cf602283611d92565b91507f45524332303a20617070726f766520746f20746865207a65726f20616464726560008301527f73730000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611935601b83611d92565b91507f536166654d6174683a206164646974696f6e206f766572666c6f7700000000006000830152602082019050919050565b6000611975600e83611d92565b91507f496e76616c69642073656e6465720000000000000000000000000000000000006000830152602082019050919050565b60006119b5601c83611d92565b91507f546f6b656e20697320616c726561647920696e697469616c697a6564000000006000830152602082019050919050565b60006119f5602183611d92565b91507f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008301527f73000000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611a5b602583611d92565b91507f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008301527f64726573730000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611ac1602483611d92565b91507f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008301527f72657373000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000611b27601f83611d92565b91507f45524332303a206d696e7420746f20746865207a65726f2061646472657373006000830152602082019050919050565b611b6381611e6b565b82525050565b611b7281611e75565b82525050565b6000602082019050611b8d6000830184611805565b92915050565b6000602082019050611ba86000830184611814565b92915050565b60006020820190508181036000830152611bc88184611823565b905092915050565b60006020820190508181036000830152611be98161185c565b9050919050565b60006020820190508181036000830152611c09816118c2565b9050919050565b60006020820190508181036000830152611c2981611928565b9050919050565b60006020820190508181036000830152611c4981611968565b9050919050565b60006020820190508181036000830152611c69816119a8565b9050919050565b60006020820190508181036000830152611c89816119e8565b9050919050565b60006020820190508181036000830152611ca981611a4e565b9050919050565b60006020820190508181036000830152611cc981611ab4565b9050919050565b60006020820190508181036000830152611ce981611b1a565b9050919050565b6000602082019050611d056000830184611b5a565b92915050565b6000602082019050611d206000830184611b69565b92915050565b6000604051905081810181811067ffffffffffffffff82111715611d4d57611d4c611f54565b5b8060405250919050565b600067ffffffffffffffff821115611d7257611d71611f54565b5b601f19601f8301169050602081019050919050565b600081519050919050565b600082825260208201905092915050565b6000611dae82611e6b565b9150611db983611e6b565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611dee57611ded611ef6565b5b828201905092915050565b6000611e0482611e6b565b9150611e0f83611e6b565b925082821015611e2257611e21611ef6565b5b828203905092915050565b6000611e3882611e4b565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b82818337600083830152505050565b60005b83811015611eaf578082015181840152602081019050611e94565b83811115611ebe576000848401525b50505050565b60006002820490506001821680611edc57607f821691505b60208210811415611ef057611eef611f25565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b611f9d81611e2d565b8114611fa857600080fd5b50565b611fb481611e6b565b8114611fbf57600080fd5b50565b611fcb81611e75565b8114611fd657600080fd5b5056fe45524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa26469706673582212207d0a82df02db5b52dd992925c8894b775eb8b719b6b1526eb3c1e9cceb89b4f564736f6c63430008000033";

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