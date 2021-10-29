/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC1155, ERC1155Interface } from "../ERC1155";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
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
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
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
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
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
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "uri",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506125ca806100206000396000f3fe608060405234801561001057600080fd5b50600436106100875760003560e01c80634e1273f41161005b5780634e1273f414610138578063a22cb46514610168578063e985e9c514610184578063f242432a146101b457610087565b8062fdd58e1461008c57806301ffc9a7146100bc5780630e89341c146100ec5780632eb2c2d61461011c575b600080fd5b6100a660048036038101906100a191906116cf565b6101d0565b6040516100b39190611d28565b60405180910390f35b6100d660048036038101906100d19190611787565b610299565b6040516100e39190611bab565b60405180910390f35b610106600480360381019061010191906117e1565b61037b565b6040516101139190611bc6565b60405180910390f35b61013660048036038101906101319190611529565b61040f565b005b610152600480360381019061014d919061170f565b6107b9565b60405161015f9190611b52565b60405180910390f35b610182600480360381019061017d919061168f565b6108d2565b005b61019e600480360381019061019991906114e9565b610a53565b6040516101ab9190611bab565b60405180910390f35b6101ce60048036038101906101c991906115f8565b610ae7565b005b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610241576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161023890611c28565b60405180910390fd5b60008083815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b60007fd9b67a26000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061036457507f0e89341c000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610374575061037382610dff565b5b9050919050565b60606002805461038a90611fcb565b80601f01602080910402602001604051908101604052809291908181526020018280546103b690611fcb565b80156104035780601f106103d857610100808354040283529160200191610403565b820191906000526020600020905b8154815290600101906020018083116103e657829003601f168201915b50505050509050919050565b8151835114610453576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161044a90611d08565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614156104c3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104ba90611c68565b60405180910390fd5b6104cb610e69565b73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16148061051157506105108561050b610e69565b610a53565b5b610550576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161054790611c88565b60405180910390fd5b600061055a610e69565b905061056a818787878787610e71565b60005b845181101561072457600085828151811061058b5761058a6120d5565b5b6020026020010151905060008583815181106105aa576105a96120d5565b5b60200260200101519050600080600084815260200190815260200160002060008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508181101561064b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161064290611ca8565b60405180910390fd5b81816106579190611ee1565b60008085815260200190815260200160002060008c73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508160008085815260200190815260200160002060008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546107099190611e8b565b925050819055505050508061071d9061202e565b905061056d565b508473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb878760405161079b929190611b74565b60405180910390a46107b1818787878787610e79565b505050505050565b606081518351146107ff576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107f690611ce8565b60405180910390fd5b6000835167ffffffffffffffff81111561081c5761081b612104565b5b60405190808252806020026020018201604052801561084a5781602001602082028036833780820191505090505b50905060005b84518110156108c75761089785828151811061086f5761086e6120d5565b5b602002602001015185838151811061088a576108896120d5565b5b60200260200101516101d0565b8282815181106108aa576108a96120d5565b5b602002602001018181525050806108c09061202e565b9050610850565b508091505092915050565b8173ffffffffffffffffffffffffffffffffffffffff166108f1610e69565b73ffffffffffffffffffffffffffffffffffffffff161415610948576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161093f90611cc8565b60405180910390fd5b8060016000610955610e69565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff16610a02610e69565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610a479190611bab565b60405180910390a35050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415610b57576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b4e90611c68565b60405180910390fd5b610b5f610e69565b73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff161480610ba55750610ba485610b9f610e69565b610a53565b5b610be4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bdb90611c48565b60405180910390fd5b6000610bee610e69565b9050610c0e818787610bff88611060565b610c0888611060565b87610e71565b600080600086815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905083811015610ca5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c9c90611ca8565b60405180910390fd5b8381610cb19190611ee1565b60008087815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508360008087815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610d639190611e8b565b925050819055508573ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f628888604051610de0929190611d43565b60405180910390a4610df68288888888886110da565b50505050505050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b600033905090565b505050505050565b610e988473ffffffffffffffffffffffffffffffffffffffff166112c1565b15611058578373ffffffffffffffffffffffffffffffffffffffff1663bc197c8187878686866040518663ffffffff1660e01b8152600401610ede959493929190611a90565b602060405180830381600087803b158015610ef857600080fd5b505af1925050508015610f2957506040513d601f19601f82011682018060405250810190610f2691906117b4565b60015b610fcf57610f35612133565b806308c379a01415610f925750610f4a6124a2565b80610f555750610f94565b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f899190611bc6565b60405180910390fd5b505b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fc690611be8565b60405180910390fd5b63bc197c8160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614611056576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161104d90611c08565b60405180910390fd5b505b505050505050565b60606000600167ffffffffffffffff81111561107f5761107e612104565b5b6040519080825280602002602001820160405280156110ad5781602001602082028036833780820191505090505b50905082816000815181106110c5576110c46120d5565b5b60200260200101818152505080915050919050565b6110f98473ffffffffffffffffffffffffffffffffffffffff166112c1565b156112b9578373ffffffffffffffffffffffffffffffffffffffff1663f23a6e6187878686866040518663ffffffff1660e01b815260040161113f959493929190611af8565b602060405180830381600087803b15801561115957600080fd5b505af192505050801561118a57506040513d601f19601f8201168201806040525081019061118791906117b4565b60015b61123057611196612133565b806308c379a014156111f357506111ab6124a2565b806111b657506111f5565b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111ea9190611bc6565b60405180910390fd5b505b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161122790611be8565b60405180910390fd5b63f23a6e6160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916146112b7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112ae90611c08565b60405180910390fd5b505b505050505050565b600080823b905060008111915050919050565b60006112e76112e284611d91565b611d6c565b9050808382526020820190508285602086028201111561130a5761130961215a565b5b60005b8581101561133a578161132088826113f6565b84526020840193506020830192505060018101905061130d565b5050509392505050565b600061135761135284611dbd565b611d6c565b9050808382526020820190508285602086028201111561137a5761137961215a565b5b60005b858110156113aa578161139088826114d4565b84526020840193506020830192505060018101905061137d565b5050509392505050565b60006113c76113c284611de9565b611d6c565b9050828152602081018484840111156113e3576113e261215f565b5b6113ee848285611f89565b509392505050565b60008135905061140581612538565b92915050565b600082601f8301126114205761141f612155565b5b81356114308482602086016112d4565b91505092915050565b600082601f83011261144e5761144d612155565b5b813561145e848260208601611344565b91505092915050565b6000813590506114768161254f565b92915050565b60008135905061148b81612566565b92915050565b6000815190506114a081612566565b92915050565b600082601f8301126114bb576114ba612155565b5b81356114cb8482602086016113b4565b91505092915050565b6000813590506114e38161257d565b92915050565b60008060408385031215611500576114ff612169565b5b600061150e858286016113f6565b925050602061151f858286016113f6565b9150509250929050565b600080600080600060a0868803121561154557611544612169565b5b6000611553888289016113f6565b9550506020611564888289016113f6565b945050604086013567ffffffffffffffff81111561158557611584612164565b5b61159188828901611439565b935050606086013567ffffffffffffffff8111156115b2576115b1612164565b5b6115be88828901611439565b925050608086013567ffffffffffffffff8111156115df576115de612164565b5b6115eb888289016114a6565b9150509295509295909350565b600080600080600060a0868803121561161457611613612169565b5b6000611622888289016113f6565b9550506020611633888289016113f6565b9450506040611644888289016114d4565b9350506060611655888289016114d4565b925050608086013567ffffffffffffffff81111561167657611675612164565b5b611682888289016114a6565b9150509295509295909350565b600080604083850312156116a6576116a5612169565b5b60006116b4858286016113f6565b92505060206116c585828601611467565b9150509250929050565b600080604083850312156116e6576116e5612169565b5b60006116f4858286016113f6565b9250506020611705858286016114d4565b9150509250929050565b6000806040838503121561172657611725612169565b5b600083013567ffffffffffffffff81111561174457611743612164565b5b6117508582860161140b565b925050602083013567ffffffffffffffff81111561177157611770612164565b5b61177d85828601611439565b9150509250929050565b60006020828403121561179d5761179c612169565b5b60006117ab8482850161147c565b91505092915050565b6000602082840312156117ca576117c9612169565b5b60006117d884828501611491565b91505092915050565b6000602082840312156117f7576117f6612169565b5b6000611805848285016114d4565b91505092915050565b600061181a8383611a72565b60208301905092915050565b61182f81611f15565b82525050565b600061184082611e2a565b61184a8185611e58565b935061185583611e1a565b8060005b8381101561188657815161186d888261180e565b975061187883611e4b565b925050600181019050611859565b5085935050505092915050565b61189c81611f27565b82525050565b60006118ad82611e35565b6118b78185611e69565b93506118c7818560208601611f98565b6118d08161216e565b840191505092915050565b60006118e682611e40565b6118f08185611e7a565b9350611900818560208601611f98565b6119098161216e565b840191505092915050565b6000611921603483611e7a565b915061192c8261218c565b604082019050919050565b6000611944602883611e7a565b915061194f826121db565b604082019050919050565b6000611967602b83611e7a565b91506119728261222a565b604082019050919050565b600061198a602983611e7a565b915061199582612279565b604082019050919050565b60006119ad602583611e7a565b91506119b8826122c8565b604082019050919050565b60006119d0603283611e7a565b91506119db82612317565b604082019050919050565b60006119f3602a83611e7a565b91506119fe82612366565b604082019050919050565b6000611a16602983611e7a565b9150611a21826123b5565b604082019050919050565b6000611a39602983611e7a565b9150611a4482612404565b604082019050919050565b6000611a5c602883611e7a565b9150611a6782612453565b604082019050919050565b611a7b81611f7f565b82525050565b611a8a81611f7f565b82525050565b600060a082019050611aa56000830188611826565b611ab26020830187611826565b8181036040830152611ac48186611835565b90508181036060830152611ad88185611835565b90508181036080830152611aec81846118a2565b90509695505050505050565b600060a082019050611b0d6000830188611826565b611b1a6020830187611826565b611b276040830186611a81565b611b346060830185611a81565b8181036080830152611b4681846118a2565b90509695505050505050565b60006020820190508181036000830152611b6c8184611835565b905092915050565b60006040820190508181036000830152611b8e8185611835565b90508181036020830152611ba28184611835565b90509392505050565b6000602082019050611bc06000830184611893565b92915050565b60006020820190508181036000830152611be081846118db565b905092915050565b60006020820190508181036000830152611c0181611914565b9050919050565b60006020820190508181036000830152611c2181611937565b9050919050565b60006020820190508181036000830152611c418161195a565b9050919050565b60006020820190508181036000830152611c618161197d565b9050919050565b60006020820190508181036000830152611c81816119a0565b9050919050565b60006020820190508181036000830152611ca1816119c3565b9050919050565b60006020820190508181036000830152611cc1816119e6565b9050919050565b60006020820190508181036000830152611ce181611a09565b9050919050565b60006020820190508181036000830152611d0181611a2c565b9050919050565b60006020820190508181036000830152611d2181611a4f565b9050919050565b6000602082019050611d3d6000830184611a81565b92915050565b6000604082019050611d586000830185611a81565b611d656020830184611a81565b9392505050565b6000611d76611d87565b9050611d828282611ffd565b919050565b6000604051905090565b600067ffffffffffffffff821115611dac57611dab612104565b5b602082029050602081019050919050565b600067ffffffffffffffff821115611dd857611dd7612104565b5b602082029050602081019050919050565b600067ffffffffffffffff821115611e0457611e03612104565b5b611e0d8261216e565b9050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b6000611e9682611f7f565b9150611ea183611f7f565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611ed657611ed5612077565b5b828201905092915050565b6000611eec82611f7f565b9150611ef783611f7f565b925082821015611f0a57611f09612077565b5b828203905092915050565b6000611f2082611f5f565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015611fb6578082015181840152602081019050611f9b565b83811115611fc5576000848401525b50505050565b60006002820490506001821680611fe357607f821691505b60208210811415611ff757611ff66120a6565b5b50919050565b6120068261216e565b810181811067ffffffffffffffff8211171561202557612024612104565b5b80604052505050565b600061203982611f7f565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561206c5761206b612077565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600060033d11156121525760046000803e61214f60005161217f565b90505b90565b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b60008160e01c9050919050565b7f455243313135353a207472616e7366657220746f206e6f6e204552433131353560008201527f526563656976657220696d706c656d656e746572000000000000000000000000602082015250565b7f455243313135353a204552433131353552656365697665722072656a6563746560008201527f6420746f6b656e73000000000000000000000000000000000000000000000000602082015250565b7f455243313135353a2062616c616e636520717565727920666f7220746865207a60008201527f65726f2061646472657373000000000000000000000000000000000000000000602082015250565b7f455243313135353a2063616c6c6572206973206e6f74206f776e6572206e6f7260008201527f20617070726f7665640000000000000000000000000000000000000000000000602082015250565b7f455243313135353a207472616e7366657220746f20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f455243313135353a207472616e736665722063616c6c6572206973206e6f742060008201527f6f776e6572206e6f7220617070726f7665640000000000000000000000000000602082015250565b7f455243313135353a20696e73756666696369656e742062616c616e636520666f60008201527f72207472616e7366657200000000000000000000000000000000000000000000602082015250565b7f455243313135353a2073657474696e6720617070726f76616c2073746174757360008201527f20666f722073656c660000000000000000000000000000000000000000000000602082015250565b7f455243313135353a206163636f756e747320616e6420696473206c656e67746860008201527f206d69736d617463680000000000000000000000000000000000000000000000602082015250565b7f455243313135353a2069647320616e6420616d6f756e7473206c656e6774682060008201527f6d69736d61746368000000000000000000000000000000000000000000000000602082015250565b600060443d10156124b257612535565b6124ba611d87565b60043d036004823e80513d602482011167ffffffffffffffff821117156124e2575050612535565b808201805167ffffffffffffffff8111156125005750505050612535565b80602083010160043d03850181111561251d575050505050612535565b61252c82602001850186611ffd565b82955050505050505b90565b61254181611f15565b811461254c57600080fd5b50565b61255881611f27565b811461256357600080fd5b50565b61256f81611f33565b811461257a57600080fd5b50565b61258681611f7f565b811461259157600080fd5b5056fea26469706673582212207cf7ec45cd26fff5c8b0527839da299ec71f9f5d028d9b1beada50c0d4057cb464736f6c63430008070033";

export class ERC1155__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC1155> {
    return super.deploy(overrides || {}) as Promise<ERC1155>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC1155 {
    return super.attach(address) as ERC1155;
  }
  connect(signer: Signer): ERC1155__factory {
    return super.connect(signer) as ERC1155__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC1155Interface {
    return new utils.Interface(_abi) as ERC1155Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155 {
    return new Contract(address, _abi, signerOrProvider) as ERC1155;
  }
}
