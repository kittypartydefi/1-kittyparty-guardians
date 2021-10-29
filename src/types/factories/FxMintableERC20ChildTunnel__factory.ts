/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  FxMintableERC20ChildTunnel,
  FxMintableERC20ChildTunnelInterface,
} from "../FxMintableERC20ChildTunnel";

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
        name: "_childTokenTemplate",
        type: "address",
      },
      {
        internalType: "address",
        name: "_rootTokenTemplate",
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
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
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
    name: "childTokenTemplate",
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
    inputs: [
      {
        internalType: "uint256",
        name: "uniqueId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "decimals",
        type: "uint8",
      },
    ],
    name: "deployChildToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
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
        name: "childToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mintToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
    inputs: [],
    name: "renounceOwnership",
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
    inputs: [],
    name: "rootTokenTemplateCodeHash",
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
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
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
  "0x60806040523480156200001157600080fd5b5060405162002db338038062002db383398181016040528101906200003791906200027e565b826000339050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505081600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506200016d82620001d660201b60201c565b620001af576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620001a690620003a8565b60405180910390fd5b620001c081620001ef60201b60201c565b80519060200120600581905550505050620004f9565b600080823b905060008163ffffffff1611915050919050565b60606000693d602d80600a3d3981f360b01b9050600069363d3d373d3d3d363d7360b01b905060008460601b905060006e5af43d82803e903d91602b57fd5bf360881b9050838383836040516020016200024d949392919062000352565b604051602081830303815290604052945050505050919050565b6000815190506200027881620004df565b92915050565b6000806000606084860312156200029a5762000299620004b1565b5b6000620002aa8682870162000267565b9350506020620002bd8682870162000267565b9250506040620002d08682870162000267565b9150509250925092565b620002ef620002e982620003ef565b62000493565b82525050565b6200030a62000304826200041b565b6200049d565b82525050565b620003256200031f8262000447565b620004a7565b82525050565b60006200033a601e83620003ca565b91506200034782620004b6565b602082019050919050565b6000620003608287620002da565b600a82019150620003728286620002da565b600a8201915062000384828562000310565b601482019150620003968284620002f5565b600f8201915081905095945050505050565b60006020820190508181036000830152620003c3816200032b565b9050919050565b600082825260208201905092915050565b6000620003e88262000473565b9050919050565b60007fffffffffffffffffffff0000000000000000000000000000000000000000000082169050919050565b60007fffffffffffffffffffffffffffffff000000000000000000000000000000000082169050919050565b60007fffffffffffffffffffffffffffffffffffffffff00000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000819050919050565b6000819050919050565b600080fd5b7f546f6b656e2074656d706c617465206973206e6f7420636f6e74726163740000600082015250565b620004ea81620003db565b8114620004f657600080fd5b50565b6128aa80620005096000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c80638da5cb5b11610097578063d81c8e5211610066578063d81c8e521461024e578063ea60c7c41461026c578063f2fde38b1461029c578063f3fef3a3146102b8576100f5565b80638da5cb5b146101d85780639a7c4b71146101f6578063a3984fec14610212578063b68ad1e414610230576100f5565b80637337957f116100d35780637337957f1461015257806379c65068146101825780637f1e9cb01461019e57806388837094146101bc576100f5565b806301f1d031146100fa578063450d11f01461012a578063715018a614610148575b600080fd5b610114600480360381019061010f9190611c52565b6102d4565b6040516101219190611fe7565b60405180910390f35b610132610642565b60405161013f9190611fe7565b60405180910390f35b610150610668565b005b61016c60048036038101906101679190611ae6565b6107b4565b6040516101799190611fe7565b60405180910390f35b61019c60048036038101906101979190611aa6565b6107f8565b005b6101a6610abf565b6040516101b39190611fe7565b60405180910390f35b6101d660048036038101906101d191906119b5565b610ae5565b005b6101e0610bba565b6040516101ed9190611fe7565b60405180910390f35b610210600480360381019061020b9190611bde565b610be3565b005b61021a610cc8565b604051610227919061214e565b60405180910390f35b610238610cce565b6040516102459190611fe7565b60405180910390f35b610256610cf4565b604051610263919061214e565b60405180910390f35b610286600480360381019061028191906119b5565b610d18565b6040516102939190611fe7565b60405180910390f35b6102b660048036038101906102b191906119b5565b610d4b565b005b6102d260048036038101906102cd9190611aa6565b610f06565b005b60003373ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610364576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161035b90612290565b60405180910390fd5b6000856040516020016103779190611fcc565b60405160208183030381529060405280519060200120905060006103bd82600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16611331565b90506000816040516020016103d29190611f63565b604051602081830303815290604052805190602001209050600061041b82600554600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166107b4565b9050600073ffffffffffffffffffffffffffffffffffffffff16600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146104eb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104e2906121f0565b60405180910390fd5b82600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f85920d35e6c72f6b2affffa04298b0cecfeba86e4a9f407df661f1cb8ab5e61760405160405180910390a38273ffffffffffffffffffffffffffffffffffffffff16638420ce9930838b8b8b6040518663ffffffff1660e01b81526004016106049594939291906120c4565b600060405180830381600087803b15801561061e57600080fd5b505af1158015610632573d6000803e3d6000fd5b5050505050505050949350505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b3373ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146106f6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106ed90612290565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60008060ff60f81b8386866040516020016107d29493929190611f7e565b6040516020818303038152906040528051906020012090508060001c9150509392505050565b3373ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610886576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161087d90612290565b60405180910390fd5b600082905060008173ffffffffffffffffffffffffffffffffffffffff16630a8a49146040518163ffffffff1660e01b815260040160206040518083038186803b1580156108d357600080fd5b505afa1580156108e7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061090b91906119e2565b9050600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16141580156109775750600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b8015610a0d5750600360008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16145b610a4c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a4390612270565b60405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff166340c10f1933856040518363ffffffff1660e01b8152600401610a87929190612125565b600060405180830381600087803b158015610aa157600080fd5b505af1158015610ab5573d6000803e3d6000fd5b5050505050505050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600073ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610b76576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b6d906122d0565b60405180910390fd5b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610c73576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c6a906121d0565b60405180910390fd5b610cc2848484848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505061140d565b50505050565b60055481565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b7f87a7811f4bfedea3d341ad165680ae306b01aaeacc205d227629cf157dd9f82181565b60036020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b3373ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610dd9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dd090612290565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610e49576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e4090612230565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600082905060008173ffffffffffffffffffffffffffffffffffffffff16630a8a49146040518163ffffffff1660e01b815260040160206040518083038186803b158015610f5357600080fd5b505afa158015610f67573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f8b91906119e2565b9050600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614158015610ff75750600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b801561108d5750600360008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16145b6110cc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110c390612270565b60405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff16639dc29fac33856040518363ffffffff1660e01b8152600401611107929190612125565b600060405180830381600087803b15801561112157600080fd5b505af1158015611135573d6000803e3d6000fd5b50505050600084905060008173ffffffffffffffffffffffffffffffffffffffff166306fdde036040518163ffffffff1660e01b815260040160006040518083038186803b15801561118657600080fd5b505afa15801561119a573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906111c39190611b95565b905060008273ffffffffffffffffffffffffffffffffffffffff166395d89b416040518163ffffffff1660e01b815260040160006040518083038186803b15801561120d57600080fd5b505afa158015611221573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f8201168201806040525081019061124a9190611b95565b905060008373ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b15801561129457600080fd5b505afa1580156112a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112cc9190611cf1565b905060008383836040516020016112e59392919061218b565b6040516020818303038152906040529050611326868a338b8560405160200161131295949392919061206a565b604051602081830303815290604052611532565b505050505050505050565b6000808260601b90506040517f3d602d80600a3d3981f3363d3d373d3d3d363d7300000000000000000000000081528160148201527f5af43d82803e903d91602b57fd5bf300000000000000000000000000000000006028820152846037826000f5925050600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611406576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113fd906122b0565b60405180910390fd5b5092915050565b81600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461149e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161149590612210565b60405180910390fd5b600080838060200190518101906114b59190611b39565b915091507f87a7811f4bfedea3d341ad165680ae306b01aaeacc205d227629cf157dd9f8218214156114ef576114ea8161156c565b61152a565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161152190612250565b60405180910390fd5b505050505050565b7f8c5261668696ce22758910d05bab8f186d6eb247ceac2af2e82c7dc17669b036816040516115619190612169565b60405180910390a150565b6000806000806000858060200190518101906115889190611a0f565b945094509450945094506000600360008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060008190508073ffffffffffffffffffffffffffffffffffffffff166340c10f1986866040518363ffffffff1660e01b8152600401611636929190612125565b600060405180830381600087803b15801561165057600080fd5b505af1158015611664573d6000803e3d6000fd5b5050505061167185611739565b1561172f576000621e8480905060008089858a8a8a8a60405160240161169c96959493929190612002565b6040516020818303038152906040527f166480c2000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050905060008082516020840160008c88f191505050505b5050505050505050565b600080823b905060008163ffffffff1611915050919050565b600061176561176084612315565b6122f0565b90508281526020810184848401111561178157611780612533565b5b61178c84828561244f565b509392505050565b60006117a76117a284612346565b6122f0565b9050828152602081018484840111156117c3576117c2612533565b5b6117ce848285612440565b509392505050565b60006117e96117e484612346565b6122f0565b90508281526020810184848401111561180557611804612533565b5b61181084828561244f565b509392505050565b60008135905061182781612801565b92915050565b60008151905061183c81612801565b92915050565b60008151905061185181612818565b92915050565b6000813590506118668161282f565b92915050565b60008151905061187b8161282f565b92915050565b60008083601f84011261189757611896612529565b5b8235905067ffffffffffffffff8111156118b4576118b3612524565b5b6020830191508360018202830111156118d0576118cf61252e565b5b9250929050565b600082601f8301126118ec576118eb612529565b5b81516118fc848260208601611752565b91505092915050565b600082601f83011261191a57611919612529565b5b813561192a848260208601611794565b91505092915050565b600082601f83011261194857611947612529565b5b81516119588482602086016117d6565b91505092915050565b60008135905061197081612846565b92915050565b60008151905061198581612846565b92915050565b60008135905061199a8161285d565b92915050565b6000815190506119af8161285d565b92915050565b6000602082840312156119cb576119ca61253d565b5b60006119d984828501611818565b91505092915050565b6000602082840312156119f8576119f761253d565b5b6000611a068482850161182d565b91505092915050565b600080600080600060a08688031215611a2b57611a2a61253d565b5b6000611a3988828901611842565b9550506020611a4a88828901611842565b9450506040611a5b88828901611842565b9350506060611a6c88828901611976565b925050608086015167ffffffffffffffff811115611a8d57611a8c612538565b5b611a99888289016118d7565b9150509295509295909350565b60008060408385031215611abd57611abc61253d565b5b6000611acb85828601611818565b9250506020611adc85828601611961565b9150509250929050565b600080600060608486031215611aff57611afe61253d565b5b6000611b0d86828701611857565b9350506020611b1e86828701611857565b9250506040611b2f86828701611818565b9150509250925092565b60008060408385031215611b5057611b4f61253d565b5b6000611b5e8582860161186c565b925050602083015167ffffffffffffffff811115611b7f57611b7e612538565b5b611b8b858286016118d7565b9150509250929050565b600060208284031215611bab57611baa61253d565b5b600082015167ffffffffffffffff811115611bc957611bc8612538565b5b611bd584828501611933565b91505092915050565b60008060008060608587031215611bf857611bf761253d565b5b6000611c0687828801611961565b9450506020611c1787828801611818565b935050604085013567ffffffffffffffff811115611c3857611c37612538565b5b611c4487828801611881565b925092505092959194509250565b60008060008060808587031215611c6c57611c6b61253d565b5b6000611c7a87828801611961565b945050602085013567ffffffffffffffff811115611c9b57611c9a612538565b5b611ca787828801611905565b935050604085013567ffffffffffffffff811115611cc857611cc7612538565b5b611cd487828801611905565b9250506060611ce58782880161198b565b91505092959194509250565b600060208284031215611d0757611d0661253d565b5b6000611d15848285016119a0565b91505092915050565b611d27816123af565b82525050565b611d3e611d39826123af565b6124b3565b82525050565b611d55611d50826123d3565b6124c5565b82525050565b611d64816123ff565b82525050565b611d7b611d76826123ff565b6124cf565b82525050565b6000611d8c82612377565b611d96818561238d565b9350611da681856020860161244f565b611daf81612542565b840191505092915050565b6000611dc582612382565b611dcf818561239e565b9350611ddf81856020860161244f565b611de881612542565b840191505092915050565b6000611e0060218361239e565b9150611e0b82612560565b604082019050919050565b6000611e23602a8361239e565b9150611e2e826125af565b604082019050919050565b6000611e46602b8361239e565b9150611e51826125fe565b604082019050919050565b6000611e6960268361239e565b9150611e748261264d565b604082019050919050565b6000611e8c60258361239e565b9150611e978261269c565b604082019050919050565b6000611eaf60238361239e565b9150611eba826126eb565b604082019050919050565b6000611ed260208361239e565b9150611edd8261273a565b602082019050919050565b6000611ef560218361239e565b9150611f0082612763565b604082019050919050565b6000611f18602a8361239e565b9150611f23826127b2565b604082019050919050565b611f3781612429565b82525050565b611f4e611f4982612429565b6124eb565b82525050565b611f5d81612433565b82525050565b6000611f6f8284611d2d565b60148201915081905092915050565b6000611f8a8287611d44565b600182019150611f9a8286611d2d565b601482019150611faa8285611d6a565b602082019150611fba8284611d6a565b60208201915081905095945050505050565b6000611fd88284611f3d565b60208201915081905092915050565b6000602082019050611ffc6000830184611d1e565b92915050565b600060c0820190506120176000830189611d1e565b6120246020830188611d1e565b6120316040830187611d1e565b61203e6060830186611d1e565b61204b6080830185611f2e565b81810360a083015261205d8184611d81565b9050979650505050505050565b600060a08201905061207f6000830188611d1e565b61208c6020830187611d1e565b6120996040830186611d1e565b6120a66060830185611f2e565b81810360808301526120b88184611d81565b90509695505050505050565b600060a0820190506120d96000830188611d1e565b6120e66020830187611d1e565b81810360408301526120f88186611dba565b9050818103606083015261210c8185611dba565b905061211b6080830184611f54565b9695505050505050565b600060408201905061213a6000830185611d1e565b6121476020830184611f2e565b9392505050565b60006020820190506121636000830184611d5b565b92915050565b600060208201905081810360008301526121838184611d81565b905092915050565b600060608201905081810360008301526121a58186611dba565b905081810360208301526121b98185611dba565b90506121c86040830184611f54565b949350505050565b600060208201905081810360008301526121e981611df3565b9050919050565b6000602082019050818103600083015261220981611e16565b9050919050565b6000602082019050818103600083015261222981611e39565b9050919050565b6000602082019050818103600083015261224981611e5c565b9050919050565b6000602082019050818103600083015261226981611e7f565b9050919050565b6000602082019050818103600083015261228981611ea2565b9050919050565b600060208201905081810360008301526122a981611ec5565b9050919050565b600060208201905081810360008301526122c981611ee8565b9050919050565b600060208201905081810360008301526122e981611f0b565b9050919050565b60006122fa61230b565b90506123068282612482565b919050565b6000604051905090565b600067ffffffffffffffff8211156123305761232f6124f5565b5b61233982612542565b9050602081019050919050565b600067ffffffffffffffff821115612361576123606124f5565b5b61236a82612542565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b60006123ba82612409565b9050919050565b60006123cc82612409565b9050919050565b60007fff0000000000000000000000000000000000000000000000000000000000000082169050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b82818337600083830152505050565b60005b8381101561246d578082015181840152602081019050612452565b8381111561247c576000848401525b50505050565b61248b82612542565b810181811067ffffffffffffffff821117156124aa576124a96124f5565b5b80604052505050565b60006124be826124d9565b9050919050565b6000819050919050565b6000819050919050565b60006124e482612553565b9050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b60008160601b9050919050565b7f4678426173654368696c6454756e6e656c3a20494e56414c49445f53454e444560008201527f5200000000000000000000000000000000000000000000000000000000000000602082015250565b7f46784d696e7461626c6545524332304368696c6454756e6e656c3a20414c524560008201527f4144595f4d415050454400000000000000000000000000000000000000000000602082015250565b7f4678426173654368696c6454756e6e656c3a20494e56414c49445f53454e444560008201527f525f46524f4d5f524f4f54000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f467845524332304368696c6454756e6e656c3a20494e56414c49445f53594e4360008201527f5f54595045000000000000000000000000000000000000000000000000000000602082015250565b7f467845524332304368696c6454756e6e656c3a204e4f5f4d41505045445f544f60008201527f4b454e0000000000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f437265617465323a204661696c6564206f6e206d696e696d616c206465706c6f60008201527f7900000000000000000000000000000000000000000000000000000000000000602082015250565b7f4678426173654368696c6454756e6e656c3a20524f4f545f54554e4e454c5f4160008201527f4c52454144595f53455400000000000000000000000000000000000000000000602082015250565b61280a816123af565b811461281557600080fd5b50565b612821816123c1565b811461282c57600080fd5b50565b612838816123ff565b811461284357600080fd5b50565b61284f81612429565b811461285a57600080fd5b50565b61286681612433565b811461287157600080fd5b5056fea2646970667358221220597d6eb017cc088beac220f30de27e6c27a1cae469ec8d298a8d32f1b508901264736f6c63430008070033";

export class FxMintableERC20ChildTunnel__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _fxChild: string,
    _childTokenTemplate: string,
    _rootTokenTemplate: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<FxMintableERC20ChildTunnel> {
    return super.deploy(
      _fxChild,
      _childTokenTemplate,
      _rootTokenTemplate,
      overrides || {}
    ) as Promise<FxMintableERC20ChildTunnel>;
  }
  getDeployTransaction(
    _fxChild: string,
    _childTokenTemplate: string,
    _rootTokenTemplate: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _fxChild,
      _childTokenTemplate,
      _rootTokenTemplate,
      overrides || {}
    );
  }
  attach(address: string): FxMintableERC20ChildTunnel {
    return super.attach(address) as FxMintableERC20ChildTunnel;
  }
  connect(signer: Signer): FxMintableERC20ChildTunnel__factory {
    return super.connect(signer) as FxMintableERC20ChildTunnel__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FxMintableERC20ChildTunnelInterface {
    return new utils.Interface(_abi) as FxMintableERC20ChildTunnelInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FxMintableERC20ChildTunnel {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as FxMintableERC20ChildTunnel;
  }
}
