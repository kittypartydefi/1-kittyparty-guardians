/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  FxStateRootTunnel,
  FxStateRootTunnelInterface,
} from "../FxStateRootTunnel";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_checkpointManager",
        type: "address",
      },
      {
        internalType: "address",
        name: "_fxRoot",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "SEND_MESSAGE_EVENT_SIG",
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
    name: "checkpointManager",
    outputs: [
      {
        internalType: "contract ICheckpointManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "fxChildTunnel",
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
    name: "fxRoot",
    outputs: [
      {
        internalType: "contract IFxStateSender",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "latestData",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "processedExits",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "inputData",
        type: "bytes",
      },
    ],
    name: "receiveMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
    ],
    name: "sendMessageToChild",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_fxChildTunnel",
        type: "address",
      },
    ],
    name: "setFxChildTunnel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620034a9380380620034a98339818101604052810190620000379190620000db565b818181600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050506200016a565b600081519050620000d58162000150565b92915050565b60008060408385031215620000ef57600080fd5b6000620000ff85828601620000c4565b92505060206200011285828601620000c4565b9150509250929050565b6000620001298262000130565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6200015b816200011c565b81146200016757600080fd5b50565b61332f806200017a6000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063972c492811610066578063972c492814610120578063aea4e49e1461013e578063c0857ba01461015a578063de9b771f14610178578063f953cec71461019657610093565b80630e387de614610098578063142bc2ae146100b65780634c09e6e8146100d4578063607f2d42146100f0575b600080fd5b6100a06101b2565b6040516100ad9190612aee565b60405180910390f35b6100be6101d9565b6040516100cb9190612b09565b60405180910390f35b6100ee60048036038101906100e991906125c9565b610267565b005b61010a60048036038101906101059190612529565b610273565b6040516101179190612ad3565b60405180910390f35b610128610293565b6040516101359190612a88565b60405180910390f35b61015860048036038101906101539190612500565b6102b9565b005b61016261038e565b60405161016f9190612b2b565b60405180910390f35b6101806103b4565b60405161018d9190612b46565b60405180910390f35b6101b060048036038101906101ab91906125c9565b6103d8565b005b7f8c5261668696ce22758910d05bab8f186d6eb247ceac2af2e82c7dc17669b03660001b81565b600480546101e6906130e9565b80601f0160208091040260200160405190810160405280929190818152602001828054610212906130e9565b801561025f5780601f106102345761010080835404028352916020019161025f565b820191906000526020600020905b81548152906001019060200180831161024257829003601f168201915b505050505081565b610270816103f2565b50565b60036020528060005260406000206000915054906101000a900460ff1681565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600073ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461034a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161034190612b61565b60405180910390fd5b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006103e3826104a4565b90506103ee816107a9565b5050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b4720477600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16836040518363ffffffff1660e01b815260040161046f929190612aa3565b600060405180830381600087803b15801561048957600080fd5b505af115801561049d573d6000803e3d6000fd5b5050505050565b606060006104b1836107c3565b905060006104be826107f7565b905060006104cb8361084e565b90506000816104d9846108a5565b6104e286610b53565b6040516020016104f493929190612a01565b604051602081830303815290604052805190602001209050600015156003600083815260200190815260200160002060009054906101000a900460ff16151514610573576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161056a90612ba1565b60405180910390fd5b60016003600083815260200190815260200160002060006101000a81548160ff02191690831515021790555060006105aa85610baa565b905060006105b782610d1b565b90506105c281610dde565b73ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610651576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161064890612c41565b60405180910390fd5b600061065c87610e35565b905061067a61066a84610e8f565b876106748a610e9d565b84610ef4565b6106b9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106b090612b81565b60405180910390fd5b6106e7856106c68961132a565b6106cf8a611381565b846106d98c6113db565b6106e28d611432565b611489565b5060006106f3836115df565b90507f8c5261668696ce22758910d05bab8f186d6eb247ceac2af2e82c7dc17669b03660001b61073561073060008461164a90919063ffffffff16565b61169f565b60001b14610778576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161076f90612c21565b60405180910390fd5b600061078384611722565b806020019051810190610796919061260a565b9050809950505050505050505050919050565b80600490805190602001906107bf9291906122a3565b5050565b6107cb612329565b60006107de6107d984611779565b6117a7565b9050604051806020016040528082815250915050919050565b6060610847826000015160088151811061083a577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151611908565b9050919050565b600061089e8260000151600281518110610891577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015161169f565b9050919050565b60606000604051806020016040528060008152509050600083511115610b4a576000806108d36000866119e5565b60f81c905060018160ff1614806108ed575060038160ff16145b15610a03576001600286516109029190612f3e565b61090c9190612f98565b67ffffffffffffffff81111561094b577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f19166020018201604052801561097d5781602001600182028036833780820191505090505b509250600061098d6001876119e5565b905080846000815181106109ca577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506001925050610a95565b6002808651610a129190612f3e565b610a1c9190612f98565b67ffffffffffffffff811115610a5b577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015610a8d5781602001600182028036833780820191505090505b509250600091505b60008260ff1690505b8351811015610b4657610acb60028460ff1683610abb9190612f98565b610ac59190612d15565b876119e5565b848281518110610b04577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053508080610b3e9061311b565b915050610a9e565b5050505b80915050919050565b6000610ba38260000151600981518110610b96577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015161169f565b9050919050565b610bb261233c565b610c008260000151600681518110610bf3577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151611908565b81602001819052506000610c178260200151611779565b9050610c2281611ac9565b15610c3d57610c30816117a7565b8260000181905250610d03565b600082602001519050600060018251610c569190612f98565b67ffffffffffffffff811115610c95577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015610cc75781602001600182028036833780820191505090505b509050600080836021019150826020019050610ce582828551611b17565b610cf6610cf184611779565b6117a7565b8660000181905250505050505b610d0c83610b53565b82604001818152505050919050565b610d2361235d565b6000610d738360000151600381518110610d66577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101516117a7565b836040015181518110610daf577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015190506040518060400160405280828152602001610dd3836117a7565b815250915050919050565b6000610e2e8260200151600081518110610e21577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151611bb4565b9050919050565b6000610e858260000151600581518110610e78577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015161169f565b60001b9050919050565b606081602001519050919050565b6060610eed8260000151600781518110610ee0577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151611908565b9050919050565b600080610f0084611779565b90506000610f0d826117a7565b90506060806000869050600080610f238b6108a5565b9050600081511415610f3f576000975050505050505050611322565b60005b8651811015611319578151831115610f6557600098505050505050505050611322565b610fae878281518110610fa1577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151611bd7565b955085805190602001208414610fcf57600098505050505050505050611322565b61101887828151811061100b577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101516117a7565b945060118551141561117d5781518314156110ae578c8051906020012061107f86601081518110611072577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151611908565b80519060200120141561109d57600198505050505050505050611322565b600098505050505050505050611322565b60008284815181106110e9577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602001015160f81c60f81b60f81c905060108160ff1611156111175760009950505050505050505050611322565b611163868260ff1681518110611156577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151611c8d565b60001b94506001846111759190612d15565b935050611306565b6002855114156112f45760006111dd6111d6876000815181106111c9577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151611908565b8486611cc4565b9050825181856111ed9190612d15565b1415611276578d8051906020012061124587600181518110611238577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151611908565b8051906020012014156112645760019950505050505050505050611322565b60009950505050505050505050611322565b60008114156112915760009950505050505050505050611322565b808461129d9190612d15565b93506112e9866001815181106112dc577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151611c8d565b60001b945050611305565b600098505050505050505050611322565b5b80806113119061311b565b915050610f42565b50505050505050505b949350505050565b600061137a826000015160038151811061136d577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015161169f565b9050919050565b60006113d182600001516004815181106113c4577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015161169f565b60001b9050919050565b600061142b826000015160008151811061141e577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015161169f565b9050919050565b60606114828260000151600181518110611475577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151611908565b9050919050565b600080600080600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166341539d4a876040518263ffffffff1660e01b81526004016114ea9190612c61565b60a06040518083038186803b15801561150257600080fd5b505afa158015611516573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061153a9190612552565b5093505092509250611590828b6115519190612f98565b84878d8d8d8d60405160200161156a9493929190612a3a565b60405160208183030381529060405280519060200120611e6c909392919063ffffffff16565b6115cf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115c690612c01565b60405180910390fd5b8093505050509695505050505050565b6115e761237d565b60405180602001604052806116408460200151600181518110611633577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101516117a7565b8152509050919050565b611652612390565b8260000151828151811061168f577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151905092915050565b60008082600001511180156116b957506021826000015111155b6116c257600080fd5b60006116d18360200151611fdd565b905060008184600001516116e59190612f98565b90506000808386602001516116fa9190612d15565b905080519150602083101561171657826020036101000a820491505b81945050505050919050565b60606117728260200151600281518110611765577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151611908565b9050919050565b611781612390565b600060208301905060405180604001604052808451815260200182815250915050919050565b60606117b282611ac9565b6117bb57600080fd5b60006117c68361209c565b905060008167ffffffffffffffff81111561180a577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405190808252806020026020018201604052801561184357816020015b611830612390565b8152602001906001900390816118285790505b50905060006118558560200151611fdd565b85602001516118649190612d15565b9050600080600090505b848110156118fb5761187f8361212a565b91506040518060400160405280838152602001848152508482815181106118cf577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001018190525081836118e69190612d15565b925080806118f39061311b565b91505061186e565b5082945050505050919050565b6060600082600001511161191b57600080fd5b600061192a8360200151611fdd565b9050600081846000015161193e9190612f98565b905060008167ffffffffffffffff811115611982577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156119b45781602001600182028036833780820191505090505b50905060008160200190506119d98487602001516119d29190612d15565b8285612206565b81945050505050919050565b6000806002846119f59190613178565b14611a5e57601082600285611a0a9190612d6b565b81518110611a41577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602001015160f81c60f81b60f81c611a5991906131a9565b611abe565b601082600285611a6e9190612d6b565b81518110611aa5577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602001015160f81c60f81b60f81c611abd9190612d9c565b5b60f81b905092915050565b60008082600001511415611ae05760009050611b12565b60008083602001519050805160001a915060c060ff168260ff161015611b0b57600092505050611b12565b6001925050505b919050565b6000811415611b2557611baf565b5b602060ff168110611b705782518252602060ff1683611b459190612d15565b9250602060ff1682611b579190612d15565b9150602060ff1681611b699190612f98565b9050611b26565b6000600182602060ff16611b849190612f98565b610100611b919190612e20565b611b9b9190612f98565b905080198451168184511681811785525050505b505050565b60006015826000015114611bc757600080fd5b611bd08261169f565b9050919050565b60606000826000015167ffffffffffffffff811115611c1f577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015611c515781602001600182028036833780820191505090505b509050600081511415611c675780915050611c88565b6000816020019050611c828460200151828660000151612206565b81925050505b919050565b60006021826000015114611ca057600080fd5b60008060018460200151611cb49190612d15565b9050805191508192505050919050565b600080600090506000611cd6866108a5565b90506000815167ffffffffffffffff811115611d1b577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015611d4d5781602001600182028036833780820191505090505b50905060008590505b825186611d639190612d15565b811015611e3a576000878281518110611da5577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602001015160f81c60f81b905080838884611dc09190612f98565b81518110611df7577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350508080611e329061311b565b915050611d56565b50808051906020012082805190602001201415611e5a5781519250611e5f565b600092505b8293505050509392505050565b60008060208351611e7d9190613178565b14611ebd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611eb490612bc1565b60405180910390fd5b600060208351611ecd9190612d6b565b9050806002611edc9190612e20565b8510611f1d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611f1490612be1565b60405180910390fd5b6000808790506000602090505b85518111611fcc578086015192506000600289611f479190613178565b1415611f7d578183604051602001611f609291906129d5565b604051602081830303815290604052805190602001209150611fa9565b8282604051602001611f909291906129d5565b6040516020818303038152906040528051906020012091505b600288611fb69190612d6b565b9750602081611fc59190612d15565b9050611f2a565b508581149350505050949350505050565b600080825160001a9050608060ff16811015611ffd576000915050612097565b60b860ff16811080612022575060c060ff168110158015612021575060f860ff1681105b5b15612031576001915050612097565b60c060ff1681101561206c5760018060b861204c9190612fcc565b60ff168261205a9190612f98565b6120649190612d15565b915050612097565b60018060f861207b9190612fcc565b60ff16826120899190612f98565b6120939190612d15565b9150505b919050565b600080826000015114156120b35760009050612125565b6000806120c38460200151611fdd565b84602001516120d29190612d15565b90506000846000015185602001516120ea9190612d15565b90505b8082101561211e576120fe8261212a565b826121099190612d15565b915082806121169061311b565b9350506120ed565b8293505050505b919050565b6000806000835160001a9050608060ff1681101561214b57600191506121fc565b60b860ff1681101561217a576001608060ff16826121699190612f98565b6121739190612d15565b91506121fb565b60c060ff168110156121aa5760b78103600185019450806020036101000a855104600182018101935050506121fa565b60f860ff168110156121d957600160c060ff16826121c89190612f98565b6121d29190612d15565b91506121f9565b60f78103600185019450806020036101000a855104600182018101935050505b5b5b5b8192505050919050565b60008114156122145761229e565b5b602060ff16811061225f5782518252602060ff16836122349190612d15565b9250602060ff16826122469190612d15565b9150602060ff16816122589190612f98565b9050612215565b6000600182602060ff166122739190612f98565b6101006122809190612e20565b61228a9190612f98565b905080198451168184511681811785525050505b505050565b8280546122af906130e9565b90600052602060002090601f0160209004810192826122d15760008555612318565b82601f106122ea57805160ff1916838001178555612318565b82800160010185558215612318579182015b828111156123175782518255916020019190600101906122fc565b5b50905061232591906123aa565b5090565b6040518060200160405280606081525090565b60405180606001604052806060815260200160608152602001600081525090565b6040518060400160405280612370612390565b8152602001606081525090565b6040518060200160405280606081525090565b604051806040016040528060008152602001600081525090565b5b808211156123c35760008160009055506001016123ab565b5090565b60006123da6123d584612cad565b612c7c565b9050828152602081018484840111156123f257600080fd5b6123fd8482856130a7565b509392505050565b600061241861241384612cad565b612c7c565b90508281526020810184848401111561243057600080fd5b61243b8482856130b6565b509392505050565b600081359050612452816132b4565b92915050565b600081519050612467816132b4565b92915050565b60008135905061247c816132cb565b92915050565b600081519050612491816132cb565b92915050565b600082601f8301126124a857600080fd5b81356124b88482602086016123c7565b91505092915050565b600082601f8301126124d257600080fd5b81516124e2848260208601612405565b91505092915050565b6000815190506124fa816132e2565b92915050565b60006020828403121561251257600080fd5b600061252084828501612443565b91505092915050565b60006020828403121561253b57600080fd5b60006125498482850161246d565b91505092915050565b600080600080600060a0868803121561256a57600080fd5b600061257888828901612482565b9550506020612589888289016124eb565b945050604061259a888289016124eb565b93505060606125ab888289016124eb565b92505060806125bc88828901612458565b9150509295509295909350565b6000602082840312156125db57600080fd5b600082013567ffffffffffffffff8111156125f557600080fd5b61260184828501612497565b91505092915050565b60006020828403121561261c57600080fd5b600082015167ffffffffffffffff81111561263657600080fd5b612642848285016124c1565b91505092915050565b61265481613000565b82525050565b61266381613012565b82525050565b6126728161301e565b82525050565b6126896126848261301e565b613164565b82525050565b600061269a82612cdd565b6126a48185612ce8565b93506126b48185602086016130b6565b6126bd81613296565b840191505092915050565b60006126d382612cdd565b6126dd8185612cf9565b93506126ed8185602086016130b6565b80840191505092915050565b6127028161305f565b82525050565b61271181613083565b82525050565b6000612724602a83612d04565b91507f467842617365526f6f7454756e6e656c3a204348494c445f54554e4e454c5f4160008301527f4c52454144595f534554000000000000000000000000000000000000000000006020830152604082019050919050565b600061278a602383612d04565b91507f4678526f6f7454756e6e656c3a20494e56414c49445f524543454950545f505260008301527f4f4f4600000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006127f0602483612d04565b91507f4678526f6f7454756e6e656c3a20455849545f414c52454144595f50524f434560008301527f53534544000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000612856601483612d04565b91507f496e76616c69642070726f6f66206c656e6774680000000000000000000000006000830152602082019050919050565b6000612896601583612d04565b91507f4c65616620696e64657820697320746f6f2062696700000000000000000000006000830152602082019050919050565b60006128d6601c83612d04565b91507f4678526f6f7454756e6e656c3a20494e56414c49445f484541444552000000006000830152602082019050919050565b6000612916601f83612d04565b91507f4678526f6f7454756e6e656c3a20494e56414c49445f5349474e4154555245006000830152602082019050919050565b6000612956602583612d04565b91507f4678526f6f7454756e6e656c3a20494e56414c49445f46585f4348494c445f5460008301527f554e4e454c0000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6129b881613048565b82525050565b6129cf6129ca82613048565b61316e565b82525050565b60006129e18285612678565b6020820191506129f18284612678565b6020820191508190509392505050565b6000612a0d82866129be565b602082019150612a1d82856126c8565b9150612a2982846129be565b602082019150819050949350505050565b6000612a4682876129be565b602082019150612a5682866129be565b602082019150612a668285612678565b602082019150612a768284612678565b60208201915081905095945050505050565b6000602082019050612a9d600083018461264b565b92915050565b6000604082019050612ab8600083018561264b565b8181036020830152612aca818461268f565b90509392505050565b6000602082019050612ae8600083018461265a565b92915050565b6000602082019050612b036000830184612669565b92915050565b60006020820190508181036000830152612b23818461268f565b905092915050565b6000602082019050612b4060008301846126f9565b92915050565b6000602082019050612b5b6000830184612708565b92915050565b60006020820190508181036000830152612b7a81612717565b9050919050565b60006020820190508181036000830152612b9a8161277d565b9050919050565b60006020820190508181036000830152612bba816127e3565b9050919050565b60006020820190508181036000830152612bda81612849565b9050919050565b60006020820190508181036000830152612bfa81612889565b9050919050565b60006020820190508181036000830152612c1a816128c9565b9050919050565b60006020820190508181036000830152612c3a81612909565b9050919050565b60006020820190508181036000830152612c5a81612949565b9050919050565b6000602082019050612c7660008301846129af565b92915050565b6000604051905081810181811067ffffffffffffffff82111715612ca357612ca2613267565b5b8060405250919050565b600067ffffffffffffffff821115612cc857612cc7613267565b5b601f19601f8301169050602081019050919050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b6000612d2082613048565b9150612d2b83613048565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115612d6057612d5f6131da565b5b828201905092915050565b6000612d7682613048565b9150612d8183613048565b925082612d9157612d90613209565b5b828204905092915050565b6000612da782613052565b9150612db283613052565b925082612dc257612dc1613209565b5b828204905092915050565b6000808291508390505b6001851115612e1757808604811115612df357612df26131da565b5b6001851615612e025780820291505b8081029050612e10856132a7565b9450612dd7565b94509492505050565b6000612e2b82613048565b9150612e3683613048565b9250612e637fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484612e6b565b905092915050565b600082612e7b5760019050612f37565b81612e895760009050612f37565b8160018114612e9f5760028114612ea957612ed8565b6001915050612f37565b60ff841115612ebb57612eba6131da565b5b8360020a915084821115612ed257612ed16131da565b5b50612f37565b5060208310610133831016604e8410600b8410161715612f0d5782820a905083811115612f0857612f076131da565b5b612f37565b612f1a8484846001612dcd565b92509050818404811115612f3157612f306131da565b5b81810290505b9392505050565b6000612f4982613048565b9150612f5483613048565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615612f8d57612f8c6131da565b5b828202905092915050565b6000612fa382613048565b9150612fae83613048565b925082821015612fc157612fc06131da565b5b828203905092915050565b6000612fd782613052565b9150612fe283613052565b925082821015612ff557612ff46131da565b5b828203905092915050565b600061300b82613028565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b600061306a82613071565b9050919050565b600061307c82613028565b9050919050565b600061308e82613095565b9050919050565b60006130a082613028565b9050919050565b82818337600083830152505050565b60005b838110156130d45780820151818401526020810190506130b9565b838111156130e3576000848401525b50505050565b6000600282049050600182168061310157607f821691505b6020821081141561311557613114613238565b5b50919050565b600061312682613048565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415613159576131586131da565b5b600182019050919050565b6000819050919050565b6000819050919050565b600061318382613048565b915061318e83613048565b92508261319e5761319d613209565b5b828206905092915050565b60006131b482613052565b91506131bf83613052565b9250826131cf576131ce613209565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b60008160011c9050919050565b6132bd81613000565b81146132c857600080fd5b50565b6132d48161301e565b81146132df57600080fd5b50565b6132eb81613048565b81146132f657600080fd5b5056fea2646970667358221220e4cef5dac1e0d5c8af920b7ad7bb19f899bca120e5673560c942abdc404161b064736f6c63430008000033";

export class FxStateRootTunnel__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _checkpointManager: string,
    _fxRoot: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<FxStateRootTunnel> {
    return super.deploy(
      _checkpointManager,
      _fxRoot,
      overrides || {}
    ) as Promise<FxStateRootTunnel>;
  }
  getDeployTransaction(
    _checkpointManager: string,
    _fxRoot: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _checkpointManager,
      _fxRoot,
      overrides || {}
    );
  }
  attach(address: string): FxStateRootTunnel {
    return super.attach(address) as FxStateRootTunnel;
  }
  connect(signer: Signer): FxStateRootTunnel__factory {
    return super.connect(signer) as FxStateRootTunnel__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FxStateRootTunnelInterface {
    return new utils.Interface(_abi) as FxStateRootTunnelInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FxStateRootTunnel {
    return new Contract(address, _abi, signerOrProvider) as FxStateRootTunnel;
  }
}