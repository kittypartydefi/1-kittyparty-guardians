/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  FxERC20ChildTunnel,
  FxERC20ChildTunnelInterface,
} from "../FxERC20ChildTunnel";

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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200215d3803806200215d833981810160405281019062000037919062000145565b81806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505080600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550620000cb816200011560201b60201c565b6200010d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200010490620001b3565b60405180910390fd5b505062000262565b600080823b905060008163ffffffff1611915050919050565b6000815190506200013f8162000248565b92915050565b600080604083850312156200015f576200015e6200021a565b5b60006200016f858286016200012e565b925050602062000182858286016200012e565b9150509250929050565b60006200019b601e83620001d5565b9150620001a8826200021f565b602082019050919050565b60006020820190508181036000830152620001ce816200018c565b9050919050565b600082825260208201905092915050565b6000620001f382620001fa565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600080fd5b7f546f6b656e2074656d706c617465206973206e6f7420636f6e74726163740000600082015250565b6200025381620001e6565b81146200025f57600080fd5b50565b611eeb80620002726000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c8063886a69ba11610071578063886a69ba1461017f578063888370941461019d5780639a7c4b71146101b9578063d81c8e52146101d5578063ea60c7c4146101f3578063f3fef3a314610223576100b4565b80630814d3dd146100b95780633740d5a0146100d757806339c6c9e0146100f5578063450d11f0146101135780637337957f146101315780637f1e9cb014610161575b600080fd5b6100c161023f565b6040516100ce9190611726565b60405180910390f35b6100df610265565b6040516100ec91906118b5565b60405180910390f35b6100fd61029e565b60405161010a91906118b5565b60405180910390f35b61011b6102d7565b6040516101289190611726565b60405180910390f35b61014b6004803603810190610146919061135d565b6102fb565b6040516101589190611726565b60405180910390f35b61016961033f565b6040516101769190611726565b60405180910390f35b610187610365565b6040516101949190611878565b60405180910390f35b6101b760048036038101906101b2919061118d565b610389565b005b6101d360048036038101906101ce919061140c565b61045e565b005b6101dd610541565b6040516101ea9190611878565b60405180910390f35b61020d6004803603810190610208919061118d565b610565565b60405161021a9190611726565b60405180910390f35b61023d6004803603810190610238919061131d565b610598565b005b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6040518060400160405280600281526020017f667800000000000000000000000000000000000000000000000000000000000081525081565b6040518060400160405280600a81526020017f202846584552433230290000000000000000000000000000000000000000000081525081565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060ff60f81b83868660405160200161031994939291906116b4565b6040516020818303038152906040528051906020012090508060001c9150509392505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b7f2cef46a936bdc5b7e6e8c71aa04560c41cf7d88bb26901a7e7f4936ff02accad81565b600073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461041a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161041190611997565b60405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146104ec576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104e3906118d7565b60405180910390fd5b61053b848484848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050610801565b50505050565b7f87a7811f4bfedea3d341ad165680ae306b01aaeacc205d227629cf157dd9f82181565b60026020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600082905060008173ffffffffffffffffffffffffffffffffffffffff16630a8a49146040518163ffffffff1660e01b8152600401602060405180830381600087803b1580156105e757600080fd5b505af11580156105fb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061061f91906111ba565b9050600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415801561068b5750600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b80156107215750600260008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16145b610760576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161075790611937565b60405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff16639dc29fac33856040518363ffffffff1660e01b815260040161079b92919061184f565b600060405180830381600087803b1580156107b557600080fd5b505af11580156107c9573d6000803e3d6000fd5b505050506107fb818533866040516020016107e794939291906117a9565b60405160208183030381529060405261095e565b50505050565b81600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610892576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610889906118f7565b60405180910390fd5b600080838060200190518101906108a991906113b0565b915091507f87a7811f4bfedea3d341ad165680ae306b01aaeacc205d227629cf157dd9f8218214156108e3576108de81610998565b610956565b7f2cef46a936bdc5b7e6e8c71aa04560c41cf7d88bb26901a7e7f4936ff02accad82141561091a5761091481610b65565b50610955565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161094c90611917565b60405180910390fd5b5b505050505050565b7f8c5261668696ce22758910d05bab8f186d6eb247ceac2af2e82c7dc17669b0368160405161098d9190611893565b60405180910390a150565b6000806000806000858060200190518101906109b491906111e7565b945094509450945094506000600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060008190508073ffffffffffffffffffffffffffffffffffffffff166340c10f1986866040518363ffffffff1660e01b8152600401610a6292919061184f565b600060405180830381600087803b158015610a7c57600080fd5b505af1158015610a90573d6000803e3d6000fd5b50505050610a9d85610eba565b15610b5b576000621e8480905060008089858a8a8a8a604051602401610ac896959493929190611741565b6040516020818303038152906040527f166480c2000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050905060008082516020840160008c88f191505050505b5050505050505050565b600080600080600085806020019051810190610b81919061127e565b93509350935093506000600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610c5c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c5390611957565b60405180910390fd5b600085604051602001610c6f9190611699565b604051602081830303815290604052805190602001209050610cb381600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16610ed3565b91508173ffffffffffffffffffffffffffffffffffffffff16638420ce993088886040518060400160405280600a81526020017f2028465845524332302900000000000000000000000000000000000000000000815250604051602001610d1b929190611702565b6040516020818303038152906040526040518060400160405280600281526020017f667800000000000000000000000000000000000000000000000000000000000081525089604051602001610d72929190611702565b604051602081830303815290604052886040518663ffffffff1660e01b8152600401610da29594939291906117ee565b600060405180830381600087803b158015610dbc57600080fd5b505af1158015610dd0573d6000803e3d6000fd5b5050505081600260008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff167f85920d35e6c72f6b2affffa04298b0cecfeba86e4a9f407df661f1cb8ab5e61760405160405180910390a3819650505050505050919050565b600080823b905060008163ffffffff1611915050919050565b6000808260601b90506040517f3d602d80600a3d3981f3363d3d373d3d3d363d7300000000000000000000000081528160148201527f5af43d82803e903d91602b57fd5bf300000000000000000000000000000000006028820152846037826000f5925050600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610fa8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f9f90611977565b60405180910390fd5b5092915050565b6000610fc2610fbd846119dc565b6119b7565b905082815260208101848484011115610fde57610fdd611bec565b5b610fe9848285611b12565b509392505050565b6000611004610fff84611a0d565b6119b7565b9050828152602081018484840111156110205761101f611bec565b5b61102b848285611b12565b509392505050565b60008135905061104281611e42565b92915050565b60008151905061105781611e42565b92915050565b60008151905061106c81611e59565b92915050565b60008135905061108181611e70565b92915050565b60008151905061109681611e70565b92915050565b60008083601f8401126110b2576110b1611be2565b5b8235905067ffffffffffffffff8111156110cf576110ce611bdd565b5b6020830191508360018202830111156110eb576110ea611be7565b5b9250929050565b600082601f83011261110757611106611be2565b5b8151611117848260208601610faf565b91505092915050565b600082601f83011261113557611134611be2565b5b8151611145848260208601610ff1565b91505092915050565b60008135905061115d81611e87565b92915050565b60008151905061117281611e87565b92915050565b60008151905061118781611e9e565b92915050565b6000602082840312156111a3576111a2611bf6565b5b60006111b184828501611033565b91505092915050565b6000602082840312156111d0576111cf611bf6565b5b60006111de84828501611048565b91505092915050565b600080600080600060a0868803121561120357611202611bf6565b5b60006112118882890161105d565b95505060206112228882890161105d565b94505060406112338882890161105d565b935050606061124488828901611163565b925050608086015167ffffffffffffffff81111561126557611264611bf1565b5b611271888289016110f2565b9150509295509295909350565b6000806000806080858703121561129857611297611bf6565b5b60006112a68782880161105d565b945050602085015167ffffffffffffffff8111156112c7576112c6611bf1565b5b6112d387828801611120565b935050604085015167ffffffffffffffff8111156112f4576112f3611bf1565b5b61130087828801611120565b925050606061131187828801611178565b91505092959194509250565b6000806040838503121561133457611333611bf6565b5b600061134285828601611033565b92505060206113538582860161114e565b9150509250929050565b60008060006060848603121561137657611375611bf6565b5b600061138486828701611072565b935050602061139586828701611072565b92505060406113a686828701611033565b9150509250925092565b600080604083850312156113c7576113c6611bf6565b5b60006113d585828601611087565b925050602083015167ffffffffffffffff8111156113f6576113f5611bf1565b5b611402858286016110f2565b9150509250929050565b6000806000806060858703121561142657611425611bf6565b5b60006114348782880161114e565b945050602061144587828801611033565b935050604085013567ffffffffffffffff81111561146657611465611bf1565b5b6114728782880161109c565b925092505092959194509250565b61148981611a81565b82525050565b6114a061149b82611a81565b611b76565b82525050565b6114b76114b282611aa5565b611b88565b82525050565b6114c681611ad1565b82525050565b6114dd6114d882611ad1565b611b92565b82525050565b60006114ee82611a3e565b6114f88185611a54565b9350611508818560208601611b12565b61151181611bfb565b840191505092915050565b600061152782611a49565b6115318185611a65565b9350611541818560208601611b12565b61154a81611bfb565b840191505092915050565b600061156082611a49565b61156a8185611a76565b935061157a818560208601611b12565b80840191505092915050565b6000611593602183611a65565b915061159e82611c19565b604082019050919050565b60006115b6602b83611a65565b91506115c182611c68565b604082019050919050565b60006115d9602583611a65565b91506115e482611cb7565b604082019050919050565b60006115fc602383611a65565b915061160782611d06565b604082019050919050565b600061161f602283611a65565b915061162a82611d55565b604082019050919050565b6000611642602183611a65565b915061164d82611da4565b604082019050919050565b6000611665602a83611a65565b915061167082611df3565b604082019050919050565b61168481611afb565b82525050565b61169381611b05565b82525050565b60006116a5828461148f565b60148201915081905092915050565b60006116c082876114a6565b6001820191506116d0828661148f565b6014820191506116e082856114cc565b6020820191506116f082846114cc565b60208201915081905095945050505050565b600061170e8285611555565b915061171a8284611555565b91508190509392505050565b600060208201905061173b6000830184611480565b92915050565b600060c0820190506117566000830189611480565b6117636020830188611480565b6117706040830187611480565b61177d6060830186611480565b61178a608083018561167b565b81810360a083015261179c81846114e3565b9050979650505050505050565b60006080820190506117be6000830187611480565b6117cb6020830186611480565b6117d86040830185611480565b6117e5606083018461167b565b95945050505050565b600060a0820190506118036000830188611480565b6118106020830187611480565b8181036040830152611822818661151c565b90508181036060830152611836818561151c565b9050611845608083018461168a565b9695505050505050565b60006040820190506118646000830185611480565b611871602083018461167b565b9392505050565b600060208201905061188d60008301846114bd565b92915050565b600060208201905081810360008301526118ad81846114e3565b905092915050565b600060208201905081810360008301526118cf818461151c565b905092915050565b600060208201905081810360008301526118f081611586565b9050919050565b60006020820190508181036000830152611910816115a9565b9050919050565b60006020820190508181036000830152611930816115cc565b9050919050565b60006020820190508181036000830152611950816115ef565b9050919050565b6000602082019050818103600083015261197081611612565b9050919050565b6000602082019050818103600083015261199081611635565b9050919050565b600060208201905081810360008301526119b081611658565b9050919050565b60006119c16119d2565b90506119cd8282611b45565b919050565b6000604051905090565b600067ffffffffffffffff8211156119f7576119f6611bae565b5b611a0082611bfb565b9050602081019050919050565b600067ffffffffffffffff821115611a2857611a27611bae565b5b611a3182611bfb565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b6000611a8c82611adb565b9050919050565b6000611a9e82611adb565b9050919050565b60007fff0000000000000000000000000000000000000000000000000000000000000082169050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b83811015611b30578082015181840152602081019050611b15565b83811115611b3f576000848401525b50505050565b611b4e82611bfb565b810181811067ffffffffffffffff82111715611b6d57611b6c611bae565b5b80604052505050565b6000611b8182611b9c565b9050919050565b6000819050919050565b6000819050919050565b6000611ba782611c0c565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b60008160601b9050919050565b7f4678426173654368696c6454756e6e656c3a20494e56414c49445f53454e444560008201527f5200000000000000000000000000000000000000000000000000000000000000602082015250565b7f4678426173654368696c6454756e6e656c3a20494e56414c49445f53454e444560008201527f525f46524f4d5f524f4f54000000000000000000000000000000000000000000602082015250565b7f467845524332304368696c6454756e6e656c3a20494e56414c49445f53594e4360008201527f5f54595045000000000000000000000000000000000000000000000000000000602082015250565b7f467845524332304368696c6454756e6e656c3a204e4f5f4d41505045445f544f60008201527f4b454e0000000000000000000000000000000000000000000000000000000000602082015250565b7f467845524332304368696c6454756e6e656c3a20414c52454144595f4d41505060008201527f4544000000000000000000000000000000000000000000000000000000000000602082015250565b7f437265617465323a204661696c6564206f6e206d696e696d616c206465706c6f60008201527f7900000000000000000000000000000000000000000000000000000000000000602082015250565b7f4678426173654368696c6454756e6e656c3a20524f4f545f54554e4e454c5f4160008201527f4c52454144595f53455400000000000000000000000000000000000000000000602082015250565b611e4b81611a81565b8114611e5657600080fd5b50565b611e6281611a93565b8114611e6d57600080fd5b50565b611e7981611ad1565b8114611e8457600080fd5b50565b611e9081611afb565b8114611e9b57600080fd5b50565b611ea781611b05565b8114611eb257600080fd5b5056fea26469706673582212208f550bf60087d6b9b080cacecf728fe8a570fa8e55a7b1bb47c9ee30144ac19a64736f6c63430008070033";

export class FxERC20ChildTunnel__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _fxChild: string,
    _tokenTemplate: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<FxERC20ChildTunnel> {
    return super.deploy(
      _fxChild,
      _tokenTemplate,
      overrides || {}
    ) as Promise<FxERC20ChildTunnel>;
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
  attach(address: string): FxERC20ChildTunnel {
    return super.attach(address) as FxERC20ChildTunnel;
  }
  connect(signer: Signer): FxERC20ChildTunnel__factory {
    return super.connect(signer) as FxERC20ChildTunnel__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FxERC20ChildTunnelInterface {
    return new utils.Interface(_abi) as FxERC20ChildTunnelInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FxERC20ChildTunnel {
    return new Contract(address, _abi, signerOrProvider) as FxERC20ChildTunnel;
  }
}
