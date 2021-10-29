/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  FxERC721ChildTunnel,
  FxERC721ChildTunnelInterface,
} from "../FxERC721ChildTunnel";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_fxChild",
        type: "address",
      },
      {
        internalType: "address",
        name: "_tokenTemplate",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
    ],
    name: "MessageSent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "rootToken",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "childToken",
        type: "address",
      },
    ],
    name: "TokenMapped",
    type: "event",
  },
  {
    inputs: [],
    name: "DEPOSIT",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAP_TOKEN",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PREFIX_SYMBOL",
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
    name: "SUFFIX_NAME",
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
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "bytecodeHash",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "deployer",
        type: "address",
      },
    ],
    name: "computedCreate2Address",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "fxChild",
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
    name: "fxRootTunnel",
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
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "stateId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "rootMessageSender",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "processMessageFromRoot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "rootToChildToken",
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
        name: "_fxRootTunnel",
        type: "address",
      },
    ],
    name: "setFxRootTunnel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenTemplate",
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
        name: "childToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620021d8380380620021d8833981810160405281019062000037919062000145565b81806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505080600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550620000cb816200011560201b60201c565b6200010d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200010490620001b3565b60405180910390fd5b505062000262565b600080823b905060008163ffffffff1611915050919050565b6000815190506200013f8162000248565b92915050565b600080604083850312156200015f576200015e6200021a565b5b60006200016f858286016200012e565b925050602062000182858286016200012e565b9150509250929050565b60006200019b601e83620001d5565b9150620001a8826200021f565b602082019050919050565b60006020820190508181036000830152620001ce816200018c565b9050919050565b600082825260208201905092915050565b6000620001f382620001fa565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600080fd5b7f546f6b656e2074656d706c617465206973206e6f7420636f6e74726163740000600082015250565b6200025381620001e6565b81146200025f57600080fd5b50565b611f6680620002726000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80637337957f1161008c578063888370941161006657806388837094146102045780639a7c4b7114610220578063d81c8e521461023c578063ea60c7c41461025a576100cf565b80637337957f146101985780637f1e9cb0146101c8578063886a69ba146101e6576100cf565b80630814d3dd146100d4578063150b7a02146100f257806331f09265146101225780633740d5a01461013e57806339c6c9e01461015c578063450d11f01461017a575b600080fd5b6100dc61028a565b6040516100e991906117a0565b60405180910390f35b61010c600480360381019061010791906112e0565b6102b0565b60405161011991906118c1565b60405180910390f35b61013c60048036038101906101379190611368565b6102c5565b005b61014661052f565b60405161015391906118fe565b60405180910390f35b610164610568565b60405161017191906118fe565b60405180910390f35b6101826105a1565b60405161018f91906117a0565b60405180910390f35b6101b260048036038101906101ad91906113d7565b6105c5565b6040516101bf91906117a0565b60405180910390f35b6101d0610609565b6040516101dd91906117a0565b60405180910390f35b6101ee61062f565b6040516101fb91906118a6565b60405180910390f35b61021e60048036038101906102199190611164565b610653565b005b61023a60048036038101906102359190611486565b610728565b005b61024461080b565b60405161025191906118a6565b60405180910390f35b610274600480360381019061026f9190611164565b61082f565b60405161028191906117a0565b60405180910390f35b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600063150b7a0260e01b905095945050505050565b600083905060008173ffffffffffffffffffffffffffffffffffffffff16630a8a49146040518163ffffffff1660e01b8152600401602060405180830381600087803b15801561031457600080fd5b505af1158015610328573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061034c9190611191565b9050600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16141580156103b85750600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b801561044e5750600260008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16145b61048d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161048490611980565b60405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff166342966c68856040518263ffffffff1660e01b81526004016104c69190611a00565b600060405180830381600087803b1580156104e057600080fd5b505af11580156104f4573d6000803e3d6000fd5b5050505061052881863387876040516020016105149594939291906117bb565b604051602081830303815290604052610862565b5050505050565b6040518060400160405280600281526020017f667800000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600b81526020017f202846584552433732312900000000000000000000000000000000000000000081525081565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060ff60f81b8386866040516020016105e3949392919061172e565b6040516020818303038152906040528051906020012090508060001c9150509392505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b7f2cef46a936bdc5b7e6e8c71aa04560c41cf7d88bb26901a7e7f4936ff02accad81565b600073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146106e4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106db906119e0565b60405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146107b6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107ad90611920565b60405180910390fd5b610805848484848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505061089c565b50505050565b7f87a7811f4bfedea3d341ad165680ae306b01aaeacc205d227629cf157dd9f82181565b60026020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b7f8c5261668696ce22758910d05bab8f186d6eb247ceac2af2e82c7dc17669b0368160405161089191906118dc565b60405180910390a150565b81600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461092d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161092490611960565b60405180910390fd5b60008083806020019051810190610944919061142a565b915091507f87a7811f4bfedea3d341ad165680ae306b01aaeacc205d227629cf157dd9f82182141561097e57610979816109f9565b6109f1565b7f2cef46a936bdc5b7e6e8c71aa04560c41cf7d88bb26901a7e7f4936ff02accad8214156109b5576109af81610b01565b506109f0565b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109e7906119a0565b60405180910390fd5b5b505050505050565b600080600080600085806020019051810190610a1591906111be565b945094509450945094506000600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060008190508073ffffffffffffffffffffffffffffffffffffffff166394d008ef8686866040518463ffffffff1660e01b8152600401610ac593929190611868565b600060405180830381600087803b158015610adf57600080fd5b505af1158015610af3573d6000803e3d6000fd5b505050505050505050505050565b60008060008084806020019051810190610b1b9190611255565b9250925092506000600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610bf4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610beb90611940565b60405180910390fd5b600084604051602001610c079190611713565b604051602081830303815290604052805190602001209050610c4b81600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16610e4f565b91508173ffffffffffffffffffffffffffffffffffffffff16632016a0d23087876040518060400160405280600b81526020017f2028465845524337323129000000000000000000000000000000000000000000815250604051602001610cb392919061177c565b6040516020818303038152906040526040518060400160405280600281526020017f667800000000000000000000000000000000000000000000000000000000000081525088604051602001610d0a92919061177c565b6040516020818303038152906040526040518563ffffffff1660e01b8152600401610d389493929190611815565b600060405180830381600087803b158015610d5257600080fd5b505af1158015610d66573d6000803e3d6000fd5b5050505081600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167f85920d35e6c72f6b2affffa04298b0cecfeba86e4a9f407df661f1cb8ab5e61760405160405180910390a38195505050505050919050565b6000808260601b90506040517f3d602d80600a3d3981f3363d3d373d3d3d363d7300000000000000000000000081528160148201527f5af43d82803e903d91602b57fd5bf300000000000000000000000000000000006028820152846037826000f5925050600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610f24576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f1b906119c0565b60405180910390fd5b5092915050565b6000610f3e610f3984611a40565b611a1b565b905082815260208101848484011115610f5a57610f59611c7e565b5b610f65848285611b95565b509392505050565b6000610f80610f7b84611a40565b611a1b565b905082815260208101848484011115610f9c57610f9b611c7e565b5b610fa7848285611ba4565b509392505050565b6000610fc2610fbd84611a71565b611a1b565b905082815260208101848484011115610fde57610fdd611c7e565b5b610fe9848285611ba4565b509392505050565b60008135905061100081611ed4565b92915050565b60008151905061101581611ed4565b92915050565b60008151905061102a81611eeb565b92915050565b60008135905061103f81611f02565b92915050565b60008151905061105481611f02565b92915050565b60008083601f8401126110705761106f611c74565b5b8235905067ffffffffffffffff81111561108d5761108c611c6f565b5b6020830191508360018202830111156110a9576110a8611c79565b5b9250929050565b600082601f8301126110c5576110c4611c74565b5b81356110d5848260208601610f2b565b91505092915050565b600082601f8301126110f3576110f2611c74565b5b8151611103848260208601610f6d565b91505092915050565b600082601f83011261112157611120611c74565b5b8151611131848260208601610faf565b91505092915050565b60008135905061114981611f19565b92915050565b60008151905061115e81611f19565b92915050565b60006020828403121561117a57611179611c88565b5b600061118884828501610ff1565b91505092915050565b6000602082840312156111a7576111a6611c88565b5b60006111b584828501611006565b91505092915050565b600080600080600060a086880312156111da576111d9611c88565b5b60006111e88882890161101b565b95505060206111f98882890161101b565b945050604061120a8882890161101b565b935050606061121b8882890161114f565b925050608086015167ffffffffffffffff81111561123c5761123b611c83565b5b611248888289016110de565b9150509295509295909350565b60008060006060848603121561126e5761126d611c88565b5b600061127c8682870161101b565b935050602084015167ffffffffffffffff81111561129d5761129c611c83565b5b6112a98682870161110c565b925050604084015167ffffffffffffffff8111156112ca576112c9611c83565b5b6112d68682870161110c565b9150509250925092565b6000806000806000608086880312156112fc576112fb611c88565b5b600061130a88828901610ff1565b955050602061131b88828901610ff1565b945050604061132c8882890161113a565b935050606086013567ffffffffffffffff81111561134d5761134c611c83565b5b6113598882890161105a565b92509250509295509295909350565b60008060006060848603121561138157611380611c88565b5b600061138f86828701610ff1565b93505060206113a08682870161113a565b925050604084013567ffffffffffffffff8111156113c1576113c0611c83565b5b6113cd868287016110b0565b9150509250925092565b6000806000606084860312156113f0576113ef611c88565b5b60006113fe86828701611030565b935050602061140f86828701611030565b925050604061142086828701610ff1565b9150509250925092565b6000806040838503121561144157611440611c88565b5b600061144f85828601611045565b925050602083015167ffffffffffffffff8111156114705761146f611c83565b5b61147c858286016110de565b9150509250929050565b600080600080606085870312156114a05761149f611c88565b5b60006114ae8782880161113a565b94505060206114bf87828801610ff1565b935050604085013567ffffffffffffffff8111156114e0576114df611c83565b5b6114ec8782880161105a565b925092505092959194509250565b61150381611ae5565b82525050565b61151a61151582611ae5565b611c08565b82525050565b61153161152c82611b09565b611c1a565b82525050565b61154081611b35565b82525050565b61155761155282611b35565b611c24565b82525050565b61156681611b3f565b82525050565b600061157782611aa2565b6115818185611ab8565b9350611591818560208601611ba4565b61159a81611c8d565b840191505092915050565b60006115b082611aad565b6115ba8185611ac9565b93506115ca818560208601611ba4565b6115d381611c8d565b840191505092915050565b60006115e982611aad565b6115f38185611ada565b9350611603818560208601611ba4565b80840191505092915050565b600061161c602183611ac9565b915061162782611cab565b604082019050919050565b600061163f602383611ac9565b915061164a82611cfa565b604082019050919050565b6000611662602b83611ac9565b915061166d82611d49565b604082019050919050565b6000611685602483611ac9565b915061169082611d98565b604082019050919050565b60006116a8602683611ac9565b91506116b382611de7565b604082019050919050565b60006116cb602183611ac9565b91506116d682611e36565b604082019050919050565b60006116ee602a83611ac9565b91506116f982611e85565b604082019050919050565b61170d81611b8b565b82525050565b600061171f8284611509565b60148201915081905092915050565b600061173a8287611520565b60018201915061174a8286611509565b60148201915061175a8285611546565b60208201915061176a8284611546565b60208201915081905095945050505050565b600061178882856115de565b915061179482846115de565b91508190509392505050565b60006020820190506117b560008301846114fa565b92915050565b600060a0820190506117d060008301886114fa565b6117dd60208301876114fa565b6117ea60408301866114fa565b6117f76060830185611704565b8181036080830152611809818461156c565b90509695505050505050565b600060808201905061182a60008301876114fa565b61183760208301866114fa565b818103604083015261184981856115a5565b9050818103606083015261185d81846115a5565b905095945050505050565b600060608201905061187d60008301866114fa565b61188a6020830185611704565b818103604083015261189c818461156c565b9050949350505050565b60006020820190506118bb6000830184611537565b92915050565b60006020820190506118d6600083018461155d565b92915050565b600060208201905081810360008301526118f6818461156c565b905092915050565b6000602082019050818103600083015261191881846115a5565b905092915050565b600060208201905081810360008301526119398161160f565b9050919050565b6000602082019050818103600083015261195981611632565b9050919050565b6000602082019050818103600083015261197981611655565b9050919050565b6000602082019050818103600083015261199981611678565b9050919050565b600060208201905081810360008301526119b98161169b565b9050919050565b600060208201905081810360008301526119d9816116be565b9050919050565b600060208201905081810360008301526119f9816116e1565b9050919050565b6000602082019050611a156000830184611704565b92915050565b6000611a25611a36565b9050611a318282611bd7565b919050565b6000604051905090565b600067ffffffffffffffff821115611a5b57611a5a611c40565b5b611a6482611c8d565b9050602081019050919050565b600067ffffffffffffffff821115611a8c57611a8b611c40565b5b611a9582611c8d565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b6000611af082611b6b565b9050919050565b6000611b0282611b6b565b9050919050565b60007fff0000000000000000000000000000000000000000000000000000000000000082169050919050565b6000819050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015611bc2578082015181840152602081019050611ba7565b83811115611bd1576000848401525b50505050565b611be082611c8d565b810181811067ffffffffffffffff82111715611bff57611bfe611c40565b5b80604052505050565b6000611c1382611c2e565b9050919050565b6000819050919050565b6000819050919050565b6000611c3982611c9e565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b60008160601b9050919050565b7f4678426173654368696c6454756e6e656c3a20494e56414c49445f53454e444560008201527f5200000000000000000000000000000000000000000000000000000000000000602082015250565b7f46784552433732314368696c6454756e6e656c3a20414c52454144595f4d415060008201527f5045440000000000000000000000000000000000000000000000000000000000602082015250565b7f4678426173654368696c6454756e6e656c3a20494e56414c49445f53454e444560008201527f525f46524f4d5f524f4f54000000000000000000000000000000000000000000602082015250565b7f46784552433732314368696c6454756e6e656c3a204e4f5f4d41505045445f5460008201527f4f4b454e00000000000000000000000000000000000000000000000000000000602082015250565b7f46784552433732314368696c6454756e6e656c3a20494e56414c49445f53594e60008201527f435f545950450000000000000000000000000000000000000000000000000000602082015250565b7f437265617465323a204661696c6564206f6e206d696e696d616c206465706c6f60008201527f7900000000000000000000000000000000000000000000000000000000000000602082015250565b7f4678426173654368696c6454756e6e656c3a20524f4f545f54554e4e454c5f4160008201527f4c52454144595f53455400000000000000000000000000000000000000000000602082015250565b611edd81611ae5565b8114611ee857600080fd5b50565b611ef481611af7565b8114611eff57600080fd5b50565b611f0b81611b35565b8114611f1657600080fd5b50565b611f2281611b8b565b8114611f2d57600080fd5b5056fea2646970667358221220f48a77ccc09ebe6ad950b43c2c9f6321b1d23b0dd00ce514a5dfaf474235e53f64736f6c63430008070033";

export class FxERC721ChildTunnel__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _fxChild: string,
    _tokenTemplate: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<FxERC721ChildTunnel> {
    return super.deploy(
      _fxChild,
      _tokenTemplate,
      overrides || {}
    ) as Promise<FxERC721ChildTunnel>;
  }
  getDeployTransaction(
    _fxChild: string,
    _tokenTemplate: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _fxChild,
      _tokenTemplate,
      overrides || {}
    );
  }
  attach(address: string): FxERC721ChildTunnel {
    return super.attach(address) as FxERC721ChildTunnel;
  }
  connect(signer: Signer): FxERC721ChildTunnel__factory {
    return super.connect(signer) as FxERC721ChildTunnel__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FxERC721ChildTunnelInterface {
    return new utils.Interface(_abi) as FxERC721ChildTunnelInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FxERC721ChildTunnel {
    return new Contract(address, _abi, signerOrProvider) as FxERC721ChildTunnel;
  }
}
