/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BytesLike,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  FunctionsConsumer,
  FunctionsConsumerInterface,
} from "../../contracts/FunctionsConsumer";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_donId",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "EmptyArgs",
    type: "error",
  },
  {
    inputs: [],
    name: "EmptySource",
    type: "error",
  },
  {
    inputs: [],
    name: "NoInlineSecrets",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyRouterCanFulfill",
    type: "error",
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
    ],
    name: "OwnershipTransferRequested",
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
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "RequestFulfilled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "RequestSent",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "donId",
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
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "response",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "err",
        type: "bytes",
      },
    ],
    name: "handleOracleFulfillment",
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
    inputs: [],
    name: "s_lastError",
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
    inputs: [],
    name: "s_lastRequestId",
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
    name: "s_lastResponse",
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
        internalType: "string",
        name: "source",
        type: "string",
      },
      {
        internalType: "enum FunctionsRequest.Location",
        name: "secretsLocation",
        type: "uint8",
      },
      {
        internalType: "bytes",
        name: "encryptedSecretsReference",
        type: "bytes",
      },
      {
        internalType: "string[]",
        name: "args",
        type: "string[]",
      },
      {
        internalType: "bytes[]",
        name: "bytesArgs",
        type: "bytes[]",
      },
      {
        internalType: "uint64",
        name: "subscriptionId",
        type: "uint64",
      },
      {
        internalType: "uint32",
        name: "callbackGasLimit",
        type: "uint32",
      },
    ],
    name: "sendRequest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "newDonId",
        type: "bytes32",
      },
    ],
    name: "setDonId",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801562000010575f80fd5b5060405162002add38038062002add833981810160405281019062000036919062000341565b33805f848073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1681525050505f73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603620000e0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000d790620003e4565b60405180910390fd5b815f806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614620001655762000164816200017760201b60201c565b5b50505080600281905550505062000472565b3373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603620001e8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620001df9062000452565b60405180910390fd5b8060015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff165f8054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127860405160405180910390a350565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f620002d382620002a8565b9050919050565b620002e581620002c7565b8114620002f0575f80fd5b50565b5f815190506200030381620002da565b92915050565b5f819050919050565b6200031d8162000309565b811462000328575f80fd5b50565b5f815190506200033b8162000312565b92915050565b5f80604083850312156200035a5762000359620002a4565b5b5f6200036985828601620002f3565b92505060206200037c858286016200032b565b9150509250929050565b5f82825260208201905092915050565b7f43616e6e6f7420736574206f776e657220746f207a65726f00000000000000005f82015250565b5f620003cc60188362000386565b9150620003d98262000396565b602082019050919050565b5f6020820190508181035f830152620003fd81620003be565b9050919050565b7f43616e6e6f74207472616e7366657220746f2073656c660000000000000000005f82015250565b5f6200043a60178362000386565b9150620004478262000404565b602082019050919050565b5f6020820190508181035f8301526200046b816200042c565b9050919050565b60805161264b620004925f395f81816101b20152610cd5015261264b5ff3fe608060405234801561000f575f80fd5b506004361061009c575f3560e01c806379ba50971161006457806379ba5097146101305780638da5cb5b1461013a5780638dbe7b9d14610158578063b1e2174914610176578063f2fde38b146101945761009c565b80630ca76175146100a0578063231c1619146100bc5780633944ea3a146100d85780634b0795a8146100f657806378ca5de714610114575b5f80fd5b6100ba60048036038101906100b5919061165b565b6101b0565b005b6100d660048036038101906100d191906118d8565b610272565b005b6100e06103d8565b6040516100ed9190611a6f565b60405180910390f35b6100fe610464565b60405161010b9190611a6f565b60405180910390f35b61012e60048036038101906101299190611a8f565b6104f0565b005b610138610502565b005b610142610691565b60405161014f9190611af9565b60405180910390f35b6101606106b8565b60405161016d9190611b21565b60405180910390f35b61017e6106be565b60405161018b9190611b21565b60405180910390f35b6101ae60048036038101906101a99190611b64565b6106c4565b005b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610235576040517fc6829f8300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102408383836106d8565b827f85e1543bf2f84fe80c6badbce3648c8539ad1df4d2b3d822938ca0538be727e660405160405180910390a2505050565b61027a6106fd565b610282611434565b6102dc5f808e8e8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f81840152601f19601f820116905080830192505050505050508461078c909392919063ffffffff16565b89816020019060028111156102f4576102f3611b8f565b5b9081600281111561030857610307611b8f565b5b8152505088888080601f0160208091040260200160405190810160405280939291908181526020018383808284375f81840152601f19601f8201169050808301925050505050505081608001819052505f878790501115610383576103828787906103739190611d0b565b8261083290919063ffffffff16565b5b5f8585905011156103ae576103ad85859061039e9190611dd0565b8261087990919063ffffffff16565b5b6103c46103ba826108c0565b8484600254610cd1565b600381905550505050505050505050505050565b600480546103e590611e11565b80601f016020809104026020016040519081016040528092919081815260200182805461041190611e11565b801561045c5780601f106104335761010080835404028352916020019161045c565b820191905f5260205f20905b81548152906001019060200180831161043f57829003601f168201915b505050505081565b6005805461047190611e11565b80601f016020809104026020016040519081016040528092919081815260200182805461049d90611e11565b80156104e85780601f106104bf576101008083540402835291602001916104e8565b820191905f5260205f20905b8154815290600101906020018083116104cb57829003601f168201915b505050505081565b6104f86106fd565b8060028190555050565b60015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610591576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161058890611e9b565b60405180910390fd5b5f805f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050335f806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505f60015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055503373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a350565b5f805f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60025481565b60035481565b6106cc6106fd565b6106d581610db0565b50565b81600490816106e7919061205f565b5080600590816106f7919061205f565b50505050565b5f8054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461078a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161078190612178565b60405180910390fd5b565b5f8151036107c6576040517f22ce3edd00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b82845f019060028111156107dd576107dc611b8f565b5b908160028111156107f1576107f0611b8f565b5b815250508184604001905f81111561080c5761080b611b8f565b5b90815f81111561081f5761081e611b8f565b5b8152505080846060018190525050505050565b5f81510361086c576040517ffe936cb700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b808260a001819052505050565b5f8151036108b3576040517ffe936cb700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b808260c001819052505050565b60605f6108ce610100610eda565b90506109186040518060400160405280600c81526020017f636f64654c6f636174696f6e000000000000000000000000000000000000000081525082610eff90919063ffffffff16565b610940835f0151600281111561093157610930611b8f565b5b82610f2790919063ffffffff16565b6109886040518060400160405280600881526020017f6c616e677561676500000000000000000000000000000000000000000000000081525082610eff90919063ffffffff16565b6109b083604001515f8111156109a1576109a0611b8f565b5b82610f2790919063ffffffff16565b6109f86040518060400160405280600681526020017f736f75726365000000000000000000000000000000000000000000000000000081525082610eff90919063ffffffff16565b610a0f836060015182610eff90919063ffffffff16565b5f8360a00151511115610ac957610a646040518060400160405280600481526020017f617267730000000000000000000000000000000000000000000000000000000081525082610eff90919063ffffffff16565b610a6d81610f76565b5f5b8360a0015151811015610abe57610aad8460a001518281518110610a9657610a95612196565b5b602002602001015183610eff90919063ffffffff16565b80610ab7906121f0565b9050610a6f565b50610ac881610f9e565b5b5f8360800151511115610c08575f6002811115610ae957610ae8611b8f565b5b83602001516002811115610b0057610aff611b8f565b5b03610b37576040517fa80d31f700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610b7f6040518060400160405280600f81526020017f736563726574734c6f636174696f6e000000000000000000000000000000000081525082610eff90919063ffffffff16565b610ba883602001516002811115610b9957610b98611b8f565b5b82610f2790919063ffffffff16565b610bf06040518060400160405280600781526020017f736563726574730000000000000000000000000000000000000000000000000081525082610eff90919063ffffffff16565b610c07836080015182610fc690919063ffffffff16565b5b5f8360c00151511115610cc257610c5d6040518060400160405280600981526020017f627974657341726773000000000000000000000000000000000000000000000081525082610eff90919063ffffffff16565b610c6681610f76565b5f5b8360c0015151811015610cb757610ca68460c001518281518110610c8f57610c8e612196565b5b602002602001015183610fc690919063ffffffff16565b80610cb0906121f0565b9050610c68565b50610cc181610f9e565b5b805f01515f0151915050919050565b5f807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663461d27628688600188886040518663ffffffff1660e01b8152600401610d35959493929190612271565b6020604051808303815f875af1158015610d51573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610d7591906122dd565b9050807f1131472297a800fee664d1d89cfa8f7676ff07189ecc53f80bbb5f4969099db860405160405180910390a280915050949350505050565b3373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610e1e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e1590612352565b60405180910390fd5b8060015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff165f8054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127860405160405180910390a350565b610ee26114a3565b610eef815f015183610fee565b505f816020018181525050919050565b610f0c8260038351611064565b610f2281835f015161120490919063ffffffff16565b505050565b610f4860026005600660ff16901b17835f015161122090919063ffffffff16565b50610f728282604051602001610f5e919061237f565b604051602081830303815290604052610fc6565b5050565b610f81816004611287565b600181602001818151610f949190612398565b9150818152505050565b610fa9816007611287565b600181602001818151610fbc91906123cb565b9150818152505050565b610fd38260028351611064565b610fe981835f015161120490919063ffffffff16565b505050565b610ff66114c2565b5f602083611004919061242b565b1461103057602082611016919061242b565b602061102291906123cb565b8261102d9190612398565b91505b818360200181815250506040518084525f815282810160200181811015611055575f80fd5b80604052505082905092915050565b60178167ffffffffffffffff161161109e576110988160058460ff16901b60ff1617845f015161122090919063ffffffff16565b506111ff565b60ff8167ffffffffffffffff16116110fa576110d0601860058460ff16901b17845f015161122090919063ffffffff16565b506110f48167ffffffffffffffff166001855f01516112ac9092919063ffffffff16565b506111fe565b61ffff8167ffffffffffffffff16116111575761112d601960058460ff16901b17845f015161122090919063ffffffff16565b506111518167ffffffffffffffff166002855f01516112ac9092919063ffffffff16565b506111fd565b63ffffffff8167ffffffffffffffff16116111b65761118c601a60058460ff16901b17845f015161122090919063ffffffff16565b506111b08167ffffffffffffffff166004855f01516112ac9092919063ffffffff16565b506111fc565b6111d6601b60058460ff16901b17845f015161122090919063ffffffff16565b506111fa8167ffffffffffffffff166008855f01516112ac9092919063ffffffff16565b505b5b5b5b505050565b61120c6114c2565b61121883838451611335565b905092915050565b6112286114c2565b5f835f01515190505f60018261123e9190612398565b905084602001518210611262576112618560028361125c919061245b565b611412565b5b8451602083820101858153815183111561127a578282525b5050849250505092915050565b6112a7601f60058360ff16901b17835f015161122090919063ffffffff16565b505050565b6112b46114c2565b5f845f01515190505f81846112c99190612398565b905085602001518111156112ee576112ed866002836112e8919061245b565b611412565b5b5f6001856101006112ff91906125cb565b61130991906123cb565b905086518281018783198251161781528151841115611326578382525b50508693505050509392505050565b61133d6114c2565b825182111561134a575f80fd5b5f845f01515190505f838261135f9190612398565b90508560200151811115611384576113838660028361137e919061245b565b611412565b5b5f808751805185602083010193508085111561139e578482525b60208901925050505b602086106113e557805182526020826113c09190612398565b91506020816113cf9190612398565b90506020866113de91906123cb565b95506113a7565b5f6001876020036101000a0390508019825116818451168181178552505050879450505050509392505050565b5f825f015190506114238383610fee565b5061142e8382611204565b50505050565b6040518060e001604052805f600281111561145257611451611b8f565b5b81526020015f600281111561146a57611469611b8f565b5b81526020015f8081111561148157611480611b8f565b5b8152602001606081526020016060815260200160608152602001606081525090565b60405180604001604052806114b66114c2565b81526020015f81525090565b6040518060400160405280606081526020015f81525090565b5f604051905090565b5f80fd5b5f80fd5b5f819050919050565b6114fe816114ec565b8114611508575f80fd5b50565b5f81359050611519816114f5565b92915050565b5f80fd5b5f80fd5b5f601f19601f8301169050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b61156d82611527565b810181811067ffffffffffffffff8211171561158c5761158b611537565b5b80604052505050565b5f61159e6114db565b90506115aa8282611564565b919050565b5f67ffffffffffffffff8211156115c9576115c8611537565b5b6115d282611527565b9050602081019050919050565b828183375f83830152505050565b5f6115ff6115fa846115af565b611595565b90508281526020810184848401111561161b5761161a611523565b5b6116268482856115df565b509392505050565b5f82601f8301126116425761164161151f565b5b81356116528482602086016115ed565b91505092915050565b5f805f60608486031215611672576116716114e4565b5b5f61167f8682870161150b565b935050602084013567ffffffffffffffff8111156116a05761169f6114e8565b5b6116ac8682870161162e565b925050604084013567ffffffffffffffff8111156116cd576116cc6114e8565b5b6116d98682870161162e565b9150509250925092565b5f80fd5b5f80fd5b5f8083601f840112611700576116ff61151f565b5b8235905067ffffffffffffffff81111561171d5761171c6116e3565b5b602083019150836001820283011115611739576117386116e7565b5b9250929050565b6003811061174c575f80fd5b50565b5f8135905061175d81611740565b92915050565b5f8083601f8401126117785761177761151f565b5b8235905067ffffffffffffffff811115611795576117946116e3565b5b6020830191508360018202830111156117b1576117b06116e7565b5b9250929050565b5f8083601f8401126117cd576117cc61151f565b5b8235905067ffffffffffffffff8111156117ea576117e96116e3565b5b602083019150836020820283011115611806576118056116e7565b5b9250929050565b5f8083601f8401126118225761182161151f565b5b8235905067ffffffffffffffff81111561183f5761183e6116e3565b5b60208301915083602082028301111561185b5761185a6116e7565b5b9250929050565b5f67ffffffffffffffff82169050919050565b61187e81611862565b8114611888575f80fd5b50565b5f8135905061189981611875565b92915050565b5f63ffffffff82169050919050565b6118b78161189f565b81146118c1575f80fd5b50565b5f813590506118d2816118ae565b92915050565b5f805f805f805f805f805f60e08c8e0312156118f7576118f66114e4565b5b5f8c013567ffffffffffffffff811115611914576119136114e8565b5b6119208e828f016116eb565b9b509b505060206119338e828f0161174f565b99505060408c013567ffffffffffffffff811115611954576119536114e8565b5b6119608e828f01611763565b985098505060608c013567ffffffffffffffff811115611983576119826114e8565b5b61198f8e828f016117b8565b965096505060808c013567ffffffffffffffff8111156119b2576119b16114e8565b5b6119be8e828f0161180d565b945094505060a06119d18e828f0161188b565b92505060c06119e28e828f016118c4565b9150509295989b509295989b9093969950565b5f81519050919050565b5f82825260208201905092915050565b5f5b83811015611a2c578082015181840152602081019050611a11565b5f8484015250505050565b5f611a41826119f5565b611a4b81856119ff565b9350611a5b818560208601611a0f565b611a6481611527565b840191505092915050565b5f6020820190508181035f830152611a878184611a37565b905092915050565b5f60208284031215611aa457611aa36114e4565b5b5f611ab18482850161150b565b91505092915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f611ae382611aba565b9050919050565b611af381611ad9565b82525050565b5f602082019050611b0c5f830184611aea565b92915050565b611b1b816114ec565b82525050565b5f602082019050611b345f830184611b12565b92915050565b611b4381611ad9565b8114611b4d575f80fd5b50565b5f81359050611b5e81611b3a565b92915050565b5f60208284031215611b7957611b786114e4565b5b5f611b8684828501611b50565b91505092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602160045260245ffd5b5f67ffffffffffffffff821115611bd657611bd5611537565b5b602082029050602081019050919050565b5f67ffffffffffffffff821115611c0157611c00611537565b5b611c0a82611527565b9050602081019050919050565b5f611c29611c2484611be7565b611595565b905082815260208101848484011115611c4557611c44611523565b5b611c508482856115df565b509392505050565b5f82601f830112611c6c57611c6b61151f565b5b8135611c7c848260208601611c17565b91505092915050565b5f611c97611c9284611bbc565b611595565b90508083825260208201905060208402830185811115611cba57611cb96116e7565b5b835b81811015611d0157803567ffffffffffffffff811115611cdf57611cde61151f565b5b808601611cec8982611c58565b85526020850194505050602081019050611cbc565b5050509392505050565b5f611d17368484611c85565b905092915050565b5f67ffffffffffffffff821115611d3957611d38611537565b5b602082029050602081019050919050565b5f611d5c611d5784611d1f565b611595565b90508083825260208201905060208402830185811115611d7f57611d7e6116e7565b5b835b81811015611dc657803567ffffffffffffffff811115611da457611da361151f565b5b808601611db1898261162e565b85526020850194505050602081019050611d81565b5050509392505050565b5f611ddc368484611d4a565b905092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f6002820490506001821680611e2857607f821691505b602082108103611e3b57611e3a611de4565b5b50919050565b5f82825260208201905092915050565b7f4d7573742062652070726f706f736564206f776e6572000000000000000000005f82015250565b5f611e85601683611e41565b9150611e9082611e51565b602082019050919050565b5f6020820190508181035f830152611eb281611e79565b9050919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f60088302611f157fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82611eda565b611f1f8683611eda565b95508019841693508086168417925050509392505050565b5f819050919050565b5f819050919050565b5f611f63611f5e611f5984611f37565b611f40565b611f37565b9050919050565b5f819050919050565b611f7c83611f49565b611f90611f8882611f6a565b848454611ee6565b825550505050565b5f90565b611fa4611f98565b611faf818484611f73565b505050565b5b81811015611fd257611fc75f82611f9c565b600181019050611fb5565b5050565b601f82111561201757611fe881611eb9565b611ff184611ecb565b81016020851015612000578190505b61201461200c85611ecb565b830182611fb4565b50505b505050565b5f82821c905092915050565b5f6120375f198460080261201c565b1980831691505092915050565b5f61204f8383612028565b9150826002028217905092915050565b612068826119f5565b67ffffffffffffffff81111561208157612080611537565b5b61208b8254611e11565b612096828285611fd6565b5f60209050601f8311600181146120c7575f84156120b5578287015190505b6120bf8582612044565b865550612126565b601f1984166120d586611eb9565b5f5b828110156120fc578489015182556001820191506020850194506020810190506120d7565b868310156121195784890151612115601f891682612028565b8355505b6001600288020188555050505b505050505050565b7f4f6e6c792063616c6c61626c65206279206f776e6572000000000000000000005f82015250565b5f612162601683611e41565b915061216d8261212e565b602082019050919050565b5f6020820190508181035f83015261218f81612156565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f6121fa82611f37565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361222c5761222b6121c3565b5b600182019050919050565b61224081611862565b82525050565b5f61ffff82169050919050565b61225c81612246565b82525050565b61226b8161189f565b82525050565b5f60a0820190506122845f830188612237565b81810360208301526122968187611a37565b90506122a56040830186612253565b6122b26060830185612262565b6122bf6080830184611b12565b9695505050505050565b5f815190506122d7816114f5565b92915050565b5f602082840312156122f2576122f16114e4565b5b5f6122ff848285016122c9565b91505092915050565b7f43616e6e6f74207472616e7366657220746f2073656c660000000000000000005f82015250565b5f61233c601783611e41565b915061234782612308565b602082019050919050565b5f6020820190508181035f83015261236981612330565b9050919050565b61237981611f37565b82525050565b5f6020820190506123925f830184612370565b92915050565b5f6123a282611f37565b91506123ad83611f37565b92508282019050808211156123c5576123c46121c3565b5b92915050565b5f6123d582611f37565b91506123e083611f37565b92508282039050818111156123f8576123f76121c3565b5b92915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b5f61243582611f37565b915061244083611f37565b9250826124505761244f6123fe565b5b828206905092915050565b5f61246582611f37565b915061247083611f37565b925082820261247e81611f37565b91508282048414831517612495576124946121c3565b5b5092915050565b5f8160011c9050919050565b5f808291508390505b60018511156124f1578086048111156124cd576124cc6121c3565b5b60018516156124dc5780820291505b80810290506124ea8561249c565b94506124b1565b94509492505050565b5f8261250957600190506125c4565b81612516575f90506125c4565b816001811461252c576002811461253657612565565b60019150506125c4565b60ff841115612548576125476121c3565b5b8360020a91508482111561255f5761255e6121c3565b5b506125c4565b5060208310610133831016604e8410600b841016171561259a5782820a905083811115612595576125946121c3565b5b6125c4565b6125a784848460016124a8565b925090508184048111156125be576125bd6121c3565b5b81810290505b9392505050565b5f6125d582611f37565b91506125e083611f37565b925061260d7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff84846124fa565b90509291505056fea2646970667358221220ad0908327ac23b3e8f1eb520c457574076e18eba77415e3c7d35779b43147e1f64736f6c63430008140033";

type FunctionsConsumerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FunctionsConsumerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FunctionsConsumer__factory extends ContractFactory {
  constructor(...args: FunctionsConsumerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    router: PromiseOrValue<string>,
    _donId: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<FunctionsConsumer> {
    return super.deploy(
      router,
      _donId,
      overrides || {}
    ) as Promise<FunctionsConsumer>;
  }
  override getDeployTransaction(
    router: PromiseOrValue<string>,
    _donId: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(router, _donId, overrides || {});
  }
  override attach(address: string): FunctionsConsumer {
    return super.attach(address) as FunctionsConsumer;
  }
  override connect(signer: Signer): FunctionsConsumer__factory {
    return super.connect(signer) as FunctionsConsumer__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FunctionsConsumerInterface {
    return new utils.Interface(_abi) as FunctionsConsumerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FunctionsConsumer {
    return new Contract(address, _abi, signerOrProvider) as FunctionsConsumer;
  }
}