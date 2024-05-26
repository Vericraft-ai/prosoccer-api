/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../common";
import type {
  VRFCoordinatorV2Mock,
  VRFCoordinatorV2MockInterface,
} from "../../../../../../@chainlink/contracts/src/v0.8/mocks/VRFCoordinatorV2Mock";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint96",
        name: "_baseFee",
        type: "uint96",
      },
      {
        internalType: "uint96",
        name: "_gasPriceLink",
        type: "uint96",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "InsufficientBalance",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidConsumer",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidRandomWords",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidSubscription",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "MustBeSubOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "TooManyConsumers",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "subId",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "address",
        name: "consumer",
        type: "address",
      },
    ],
    name: "ConsumerAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "subId",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "address",
        name: "consumer",
        type: "address",
      },
    ],
    name: "ConsumerRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "outputSeed",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint96",
        name: "payment",
        type: "uint96",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    name: "RandomWordsFulfilled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "keyHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "preSeed",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "subId",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "minimumRequestConfirmations",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "callbackGasLimit",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "numWords",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RandomWordsRequested",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "subId",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "SubscriptionCanceled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "subId",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "SubscriptionCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "subId",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "oldBalance",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newBalance",
        type: "uint256",
      },
    ],
    name: "SubscriptionFunded",
    type: "event",
  },
  {
    inputs: [],
    name: "BASE_FEE",
    outputs: [
      {
        internalType: "uint96",
        name: "",
        type: "uint96",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "GAS_PRICE_LINK",
    outputs: [
      {
        internalType: "uint96",
        name: "",
        type: "uint96",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAX_CONSUMERS",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "_subId",
        type: "uint64",
      },
    ],
    name: "acceptSubscriptionOwnerTransfer",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "_subId",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "_consumer",
        type: "address",
      },
    ],
    name: "addConsumer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "_subId",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "cancelSubscription",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "_subId",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "_consumer",
        type: "address",
      },
    ],
    name: "consumerIsAdded",
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
    inputs: [],
    name: "createSubscription",
    outputs: [
      {
        internalType: "uint64",
        name: "_subId",
        type: "uint64",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_requestId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_consumer",
        type: "address",
      },
    ],
    name: "fulfillRandomWords",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_requestId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_consumer",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_words",
        type: "uint256[]",
      },
    ],
    name: "fulfillRandomWordsWithOverride",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "_subId",
        type: "uint64",
      },
      {
        internalType: "uint96",
        name: "_amount",
        type: "uint96",
      },
    ],
    name: "fundSubscription",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getConfig",
    outputs: [
      {
        internalType: "uint16",
        name: "minimumRequestConfirmations",
        type: "uint16",
      },
      {
        internalType: "uint32",
        name: "maxGasLimit",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "stalenessSeconds",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "gasAfterPaymentCalculation",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getFallbackWeiPerUnitLink",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getFeeConfig",
    outputs: [
      {
        internalType: "uint32",
        name: "fulfillmentFlatFeeLinkPPMTier1",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "fulfillmentFlatFeeLinkPPMTier2",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "fulfillmentFlatFeeLinkPPMTier3",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "fulfillmentFlatFeeLinkPPMTier4",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "fulfillmentFlatFeeLinkPPMTier5",
        type: "uint32",
      },
      {
        internalType: "uint24",
        name: "reqsForTier2",
        type: "uint24",
      },
      {
        internalType: "uint24",
        name: "reqsForTier3",
        type: "uint24",
      },
      {
        internalType: "uint24",
        name: "reqsForTier4",
        type: "uint24",
      },
      {
        internalType: "uint24",
        name: "reqsForTier5",
        type: "uint24",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getRequestConfig",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
      {
        internalType: "bytes32[]",
        name: "",
        type: "bytes32[]",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "_subId",
        type: "uint64",
      },
    ],
    name: "getSubscription",
    outputs: [
      {
        internalType: "uint96",
        name: "balance",
        type: "uint96",
      },
      {
        internalType: "uint64",
        name: "reqCount",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "consumers",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "subId",
        type: "uint64",
      },
    ],
    name: "pendingRequestExists",
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
        internalType: "uint64",
        name: "_subId",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "_consumer",
        type: "address",
      },
    ],
    name: "removeConsumer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_keyHash",
        type: "bytes32",
      },
      {
        internalType: "uint64",
        name: "_subId",
        type: "uint64",
      },
      {
        internalType: "uint16",
        name: "_minimumRequestConfirmations",
        type: "uint16",
      },
      {
        internalType: "uint32",
        name: "_callbackGasLimit",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "_numWords",
        type: "uint32",
      },
    ],
    name: "requestRandomWords",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "_subId",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "_newOwner",
        type: "address",
      },
    ],
    name: "requestSubscriptionOwnerTransfer",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x60e0604052606461ffff1660c09061ffff1681525060018055606460025534801562000029575f80fd5b5060405162002c4138038062002c4183398181016040528101906200004f9190620000e9565b816bffffffffffffffffffffffff166080816bffffffffffffffffffffffff1681525050806bffffffffffffffffffffffff1660a0816bffffffffffffffffffffffff168152505050506200012e565b5f80fd5b5f6bffffffffffffffffffffffff82169050919050565b620000c581620000a3565b8114620000d0575f80fd5b50565b5f81519050620000e381620000ba565b92915050565b5f80604083850312156200010257620001016200009f565b5b5f6200011185828601620000d3565b92505060206200012485828601620000d3565b9150509250929050565b60805160a05160c051612ad36200016e5f395f8181610c710152610db501525f818161078101526114a301525f81816107c601526109c60152612ad35ff3fe608060405234801561000f575f80fd5b5060043610610129575f3560e01c806382359740116100ab578063afc69b531161006f578063afc69b5314610314578063c3f909d414610330578063d7ae1d3014610351578063e82ad7d41461036d578063ed5eb06d1461039d57610129565b8063823597401461026d5780639f87fad714610289578063a21a23e4146102a5578063a410347f146102c3578063a47c7696146102e157610129565b80635d3b1d30116100f25780635d3b1d30146101c15780635fbbc0d2146101f157806364d51a2a146102175780637341c10c14610235578063808974ff1461025157610129565b80620122911461012d57806304c357cb1461014d57806308e3898e14610169578063356dac71146101855780633d18651e146101a3575b5f80fd5b6101356103cd565b60405161014493929190611d09565b60405180910390f35b61016760048036038101906101629190611ded565b61042b565b005b610183600480360381019061017e9190611fae565b610466565b005b61018d6109b6565b60405161019a9190612032565b60405180910390f35b6101ab6109c4565b6040516101b89190612071565b60405180910390f35b6101db60048036038101906101d69190612108565b6109e8565b6040516101e8919061218e565b60405180910390f35b6101f9610c37565b60405161020e999897969594939291906121c4565b60405180910390f35b61021f610c6f565b60405161022c919061224f565b60405180910390f35b61024f600480360381019061024a9190611ded565b610c93565b005b61026b60048036038101906102669190612268565b610f12565b005b610287600480360381019061028291906122a6565b610f69565b005b6102a3600480360381019061029e9190611ded565b610fa4565b005b6102ad6112f8565b6040516102ba91906122e0565b60405180910390f35b6102cb6114a1565b6040516102d89190612071565b60405180910390f35b6102fb60048036038101906102f691906122a6565b6114c5565b60405161030b94939291906123bf565b60405180910390f35b61032e60048036038101906103299190612433565b6116b6565b005b610338611874565b6040516103489493929190612471565b60405180910390f35b61036b60048036038101906103669190611ded565b611892565b005b610387600480360381019061038291906122a6565b611aa6565b60405161039491906124ce565b60405180910390f35b6103b760048036038101906103b29190611ded565b611ae2565b6040516103c491906124ce565b60405180910390f35b5f8060606003621e84805f67ffffffffffffffff8111156103f1576103f0611e72565b5b60405190808252806020026020018201604052801561041f5781602001602082028036833780820191505090505b50925092509250909192565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161045d90612541565b60405180910390fd5b5f5a90505f60055f8681526020019081526020015f205f015f9054906101000a900467ffffffffffffffff1667ffffffffffffffff16036104dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104d3906125a9565b60405180910390fd5b5f60055f8681526020019081526020015f206040518060600160405290815f82015f9054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff1681526020015f820160089054906101000a900463ffffffff1663ffffffff1663ffffffff1681526020015f8201600c9054906101000a900463ffffffff1663ffffffff1663ffffffff168152505090505f83510361064957806040015163ffffffff1667ffffffffffffffff8111156105a1576105a0611e72565b5b6040519080825280602002602001820160405280156105cf5781602001602082028036833780820191505090505b5092505f5b816040015163ffffffff168110156106435785816040516020016105f99291906125c7565b604051602081830303815290604052805190602001205f1c848281518110610624576106236125ee565b5b602002602001018181525050808061063b90612648565b9150506105d4565b5061068e565b806040015163ffffffff1683511461068d576040517f3f3df5b600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5b5f80631fe543e360e01b87866040516024016106ab929190612746565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505090505f8673ffffffffffffffffffffffffffffffffffffffff16846020015163ffffffff168360405161073b91906127e0565b5f604051808303815f8787f1925050503d805f8114610775576040519150601f19603f3d011682016040523d82523d5f602084013e61077a565b606091505b505090505f7f00000000000000000000000000000000000000000000000000000000000000006bffffffffffffffffffffffff165a876107ba91906127f6565b6107c49190612829565b7f00000000000000000000000000000000000000000000000000000000000000006bffffffffffffffffffffffff166107fd919061286a565b9050806bffffffffffffffffffffffff1660035f875f015167ffffffffffffffff1667ffffffffffffffff1681526020019081526020015f205f0160149054906101000a90046bffffffffffffffffffffffff166bffffffffffffffffffffffff161015610897576040517ff4d678b800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060035f875f015167ffffffffffffffff1667ffffffffffffffff1681526020019081526020015f205f0160148282829054906101000a90046bffffffffffffffffffffffff166108e8919061289d565b92506101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff16021790555060055f8a81526020019081526020015f205f8082015f6101000a81549067ffffffffffffffff02191690555f820160086101000a81549063ffffffff02191690555f8201600c6101000a81549063ffffffff02191690555050887f7dffc5ae5ee4e2e4df1651cf6ad329a73cebdb728f37ea0187b9b17e036756e48a83856040516109a3939291906128dc565b60405180910390a2505050505050505050565b5f660e35fa931a0000905090565b7f000000000000000000000000000000000000000000000000000000000000000081565b5f84336109f58282611ae2565b610a2b576040517f71e8313700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff1660035f8967ffffffffffffffff1667ffffffffffffffff1681526020019081526020015f205f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603610ad6576040517f1f6a65b600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f60015f815480929190610ae990612648565b9190505590505f60025f815480929190610b0290612648565b91905055905060405180606001604052808a67ffffffffffffffff1681526020018863ffffffff1681526020018763ffffffff1681525060055f8481526020019081526020015f205f820151815f015f6101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055506020820151815f0160086101000a81548163ffffffff021916908363ffffffff1602179055506040820151815f01600c6101000a81548163ffffffff021916908363ffffffff1602179055509050503373ffffffffffffffffffffffffffffffffffffffff168967ffffffffffffffff168b7f63373d1c4696214b898952999c9aaec57dac1ee2723cec59bea6888f489a977285858d8d8d604051610c1f959493929190612911565b60405180910390a48194505050505095945050505050565b5f805f805f805f805f620186a080620186a080620186a05f805f80985098509850985098509850985098509850909192939495969798565b7f000000000000000000000000000000000000000000000000000000000000000081565b815f60035f8367ffffffffffffffff1667ffffffffffffffff1681526020019081526020015f205f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610d43576040517f1f6a65b600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610db357806040517fd8a3fb52000000000000000000000000000000000000000000000000000000008152600401610daa9190612962565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000061ffff1660045f8667ffffffffffffffff1667ffffffffffffffff1681526020019081526020015f208054905003610e38576040517f05a48e0f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e428484611ae2565b610f0c5760045f8567ffffffffffffffff1667ffffffffffffffff1681526020019081526020015f2083908060018154018082558091505060019003905f5260205f20015f9091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508367ffffffffffffffff167f752ead9f4536ec1319ee3a5a604e1d65eded22e0924251552ba14ae4faa1bbc384604051610f039190612962565b60405180910390a25b50505050565b610f6582825f67ffffffffffffffff811115610f3157610f30611e72565b5b604051908082528060200260200182016040528015610f5f5781602001602082028036833780820191505090505b50610466565b5050565b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f9b90612541565b60405180910390fd5b815f60035f8367ffffffffffffffff1667ffffffffffffffff1681526020019081526020015f205f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603611054576040517f1f6a65b600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146110c457806040517fd8a3fb520000000000000000000000000000000000000000000000000000000081526004016110bb9190612962565b60405180910390fd5b83836110d08282611ae2565b611106576040517f71e8313700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f60045f8867ffffffffffffffff1667ffffffffffffffff1681526020019081526020015f2090505f5b81805490508110156112ac578673ffffffffffffffffffffffffffffffffffffffff16828281548110611166576111656125ee565b5b905f5260205f20015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603611299575f82600184805490506111bc91906127f6565b815481106111cd576111cc6125ee565b5b905f5260205f20015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508083838154811061120b5761120a6125ee565b5b905f5260205f20015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550828054806112615761126061297b565b5b600190038181905f5260205f20015f6101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690559055506112ac565b80806112a490612648565b915050611130565b508667ffffffffffffffff167ff9bc9d5b5733d904409def43a5ecc888dbdac9a95687780d8fd489d3bb3813fc876040516112e79190612962565b60405180910390a250505050505050565b5f805f81819054906101000a900467ffffffffffffffff168092919061131d906129a8565b91906101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055505060405180604001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020015f6bffffffffffffffffffffffff1681525060035f805f9054906101000a900467ffffffffffffffff1667ffffffffffffffff1667ffffffffffffffff1681526020019081526020015f205f820151815f015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151815f0160146101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff1602179055509050505f8054906101000a900467ffffffffffffffff1667ffffffffffffffff167f464722b4166576d3dcbba877b999bc35cf911f4eaf434b7eba68fa113951d0bf336040516114809190612962565b60405180910390a25f8054906101000a900467ffffffffffffffff16905090565b7f000000000000000000000000000000000000000000000000000000000000000081565b5f805f60605f73ffffffffffffffffffffffffffffffffffffffff1660035f8767ffffffffffffffff1667ffffffffffffffff1681526020019081526020015f205f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603611575576040517f1f6a65b600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60035f8667ffffffffffffffff1667ffffffffffffffff1681526020019081526020015f205f0160149054906101000a90046bffffffffffffffffffffffff165f60035f8867ffffffffffffffff1667ffffffffffffffff1681526020019081526020015f205f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660045f8967ffffffffffffffff1667ffffffffffffffff1681526020019081526020015f20808054806020026020016040519081016040528092919081815260200182805480156116a057602002820191905f5260205f20905b815f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611657575b5050505050905093509350935093509193509193565b5f73ffffffffffffffffffffffffffffffffffffffff1660035f8467ffffffffffffffff1667ffffffffffffffff1681526020019081526020015f205f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603611761576040517f1f6a65b600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f60035f8467ffffffffffffffff1667ffffffffffffffff1681526020019081526020015f205f0160149054906101000a90046bffffffffffffffffffffffff1690508160035f8567ffffffffffffffff1667ffffffffffffffff1681526020019081526020015f205f0160148282829054906101000a90046bffffffffffffffffffffffff166117f291906129d7565b92506101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff1602179055508267ffffffffffffffff167fd39ec07f4e209f627a4c427971473820dc129761ba28de8906bd56f57101d4f882848461185991906129d7565b604051611867929190612a4f565b60405180910390a2505050565b5f805f806004622625a0610a8c618205935093509350935090919293565b815f60035f8367ffffffffffffffff1667ffffffffffffffff1681526020019081526020015f205f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690505f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603611942576040517f1f6a65b600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146119b257806040517fd8a3fb520000000000000000000000000000000000000000000000000000000081526004016119a99190612962565b60405180910390fd5b8367ffffffffffffffff167fe8ed5b475a5b5987aa9165e8731bb78043f39eee32ec5a1169a89e27fcd498158460035f8867ffffffffffffffff1667ffffffffffffffff1681526020019081526020015f205f0160149054906101000a90046bffffffffffffffffffffffff16604051611a2d929190612a76565b60405180910390a260035f8567ffffffffffffffff1667ffffffffffffffff1681526020019081526020015f205f8082015f6101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690555f820160146101000a8154906bffffffffffffffffffffffff0219169055505050505050565b5f6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ad990612541565b60405180910390fd5b5f8060045f8567ffffffffffffffff1667ffffffffffffffff1681526020019081526020015f20805480602002602001604051908101604052809291908181526020018280548015611b8657602002820191905f5260205f20905b815f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611b3d575b505050505090505f5b8151811015611c03578373ffffffffffffffffffffffffffffffffffffffff16828281518110611bc257611bc16125ee565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1603611bf057600192505050611c09565b8080611bfb90612648565b915050611b8f565b505f9150505b92915050565b5f61ffff82169050919050565b611c2581611c0f565b82525050565b5f63ffffffff82169050919050565b611c4381611c2b565b82525050565b5f81519050919050565b5f82825260208201905092915050565b5f819050602082019050919050565b5f819050919050565b611c8481611c72565b82525050565b5f611c958383611c7b565b60208301905092915050565b5f602082019050919050565b5f611cb782611c49565b611cc18185611c53565b9350611ccc83611c63565b805f5b83811015611cfc578151611ce38882611c8a565b9750611cee83611ca1565b925050600181019050611ccf565b5085935050505092915050565b5f606082019050611d1c5f830186611c1c565b611d296020830185611c3a565b8181036040830152611d3b8184611cad565b9050949350505050565b5f604051905090565b5f80fd5b5f80fd5b5f67ffffffffffffffff82169050919050565b611d7281611d56565b8114611d7c575f80fd5b50565b5f81359050611d8d81611d69565b92915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f611dbc82611d93565b9050919050565b611dcc81611db2565b8114611dd6575f80fd5b50565b5f81359050611de781611dc3565b92915050565b5f8060408385031215611e0357611e02611d4e565b5b5f611e1085828601611d7f565b9250506020611e2185828601611dd9565b9150509250929050565b5f819050919050565b611e3d81611e2b565b8114611e47575f80fd5b50565b5f81359050611e5881611e34565b92915050565b5f80fd5b5f601f19601f8301169050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b611ea882611e62565b810181811067ffffffffffffffff82111715611ec757611ec6611e72565b5b80604052505050565b5f611ed9611d45565b9050611ee58282611e9f565b919050565b5f67ffffffffffffffff821115611f0457611f03611e72565b5b602082029050602081019050919050565b5f80fd5b5f611f2b611f2684611eea565b611ed0565b90508083825260208201905060208402830185811115611f4e57611f4d611f15565b5b835b81811015611f775780611f638882611e4a565b845260208401935050602081019050611f50565b5050509392505050565b5f82601f830112611f9557611f94611e5e565b5b8135611fa5848260208601611f19565b91505092915050565b5f805f60608486031215611fc557611fc4611d4e565b5b5f611fd286828701611e4a565b9350506020611fe386828701611dd9565b925050604084013567ffffffffffffffff81111561200457612003611d52565b5b61201086828701611f81565b9150509250925092565b5f819050919050565b61202c8161201a565b82525050565b5f6020820190506120455f830184612023565b92915050565b5f6bffffffffffffffffffffffff82169050919050565b61206b8161204b565b82525050565b5f6020820190506120845f830184612062565b92915050565b61209381611c72565b811461209d575f80fd5b50565b5f813590506120ae8161208a565b92915050565b6120bd81611c0f565b81146120c7575f80fd5b50565b5f813590506120d8816120b4565b92915050565b6120e781611c2b565b81146120f1575f80fd5b50565b5f81359050612102816120de565b92915050565b5f805f805f60a0868803121561212157612120611d4e565b5b5f61212e888289016120a0565b955050602061213f88828901611d7f565b9450506040612150888289016120ca565b9350506060612161888289016120f4565b9250506080612172888289016120f4565b9150509295509295909350565b61218881611e2b565b82525050565b5f6020820190506121a15f83018461217f565b92915050565b5f62ffffff82169050919050565b6121be816121a7565b82525050565b5f610120820190506121d85f83018c611c3a565b6121e5602083018b611c3a565b6121f2604083018a611c3a565b6121ff6060830189611c3a565b61220c6080830188611c3a565b61221960a08301876121b5565b61222660c08301866121b5565b61223360e08301856121b5565b6122416101008301846121b5565b9a9950505050505050505050565b5f6020820190506122625f830184611c1c565b92915050565b5f806040838503121561227e5761227d611d4e565b5b5f61228b85828601611e4a565b925050602061229c85828601611dd9565b9150509250929050565b5f602082840312156122bb576122ba611d4e565b5b5f6122c884828501611d7f565b91505092915050565b6122da81611d56565b82525050565b5f6020820190506122f35f8301846122d1565b92915050565b61230281611db2565b82525050565b5f81519050919050565b5f82825260208201905092915050565b5f819050602082019050919050565b61233a81611db2565b82525050565b5f61234b8383612331565b60208301905092915050565b5f602082019050919050565b5f61236d82612308565b6123778185612312565b935061238283612322565b805f5b838110156123b25781516123998882612340565b97506123a483612357565b925050600181019050612385565b5085935050505092915050565b5f6080820190506123d25f830187612062565b6123df60208301866122d1565b6123ec60408301856122f9565b81810360608301526123fe8184612363565b905095945050505050565b6124128161204b565b811461241c575f80fd5b50565b5f8135905061242d81612409565b92915050565b5f806040838503121561244957612448611d4e565b5b5f61245685828601611d7f565b92505060206124678582860161241f565b9150509250929050565b5f6080820190506124845f830187611c1c565b6124916020830186611c3a565b61249e6040830185611c3a565b6124ab6060830184611c3a565b95945050505050565b5f8115159050919050565b6124c8816124b4565b82525050565b5f6020820190506124e15f8301846124bf565b92915050565b5f82825260208201905092915050565b7f6e6f7420696d706c656d656e74656400000000000000000000000000000000005f82015250565b5f61252b600f836124e7565b9150612536826124f7565b602082019050919050565b5f6020820190508181035f8301526125588161251f565b9050919050565b7f6e6f6e6578697374656e742072657175657374000000000000000000000000005f82015250565b5f6125936013836124e7565b915061259e8261255f565b602082019050919050565b5f6020820190508181035f8301526125c081612587565b9050919050565b5f6040820190506125da5f83018561217f565b6125e7602083018461217f565b9392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f61265282611e2b565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036126845761268361261b565b5b600182019050919050565b5f81519050919050565b5f82825260208201905092915050565b5f819050602082019050919050565b6126c181611e2b565b82525050565b5f6126d283836126b8565b60208301905092915050565b5f602082019050919050565b5f6126f48261268f565b6126fe8185612699565b9350612709836126a9565b805f5b8381101561273957815161272088826126c7565b975061272b836126de565b92505060018101905061270c565b5085935050505092915050565b5f6040820190506127595f83018561217f565b818103602083015261276b81846126ea565b90509392505050565b5f81519050919050565b5f81905092915050565b5f5b838110156127a557808201518184015260208101905061278a565b5f8484015250505050565b5f6127ba82612774565b6127c4818561277e565b93506127d4818560208601612788565b80840191505092915050565b5f6127eb82846127b0565b915081905092915050565b5f61280082611e2b565b915061280b83611e2b565b92508282039050818111156128235761282261261b565b5b92915050565b5f61283382611e2b565b915061283e83611e2b565b925082820261284c81611e2b565b915082820484148315176128635761286261261b565b5b5092915050565b5f61287482611e2b565b915061287f83611e2b565b92508282019050808211156128975761289661261b565b5b92915050565b5f6128a78261204b565b91506128b28361204b565b925082820390506bffffffffffffffffffffffff8111156128d6576128d561261b565b5b92915050565b5f6060820190506128ef5f83018661217f565b6128fc6020830185612062565b61290960408301846124bf565b949350505050565b5f60a0820190506129245f83018861217f565b612931602083018761217f565b61293e6040830186611c1c565b61294b6060830185611c3a565b6129586080830184611c3a565b9695505050505050565b5f6020820190506129755f8301846122f9565b92915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603160045260245ffd5b5f6129b282611d56565b915067ffffffffffffffff82036129cc576129cb61261b565b5b600182019050919050565b5f6129e18261204b565b91506129ec8361204b565b925082820190506bffffffffffffffffffffffff811115612a1057612a0f61261b565b5b92915050565b5f819050919050565b5f612a39612a34612a2f8461204b565b612a16565b611e2b565b9050919050565b612a4981612a1f565b82525050565b5f604082019050612a625f830185612a40565b612a6f6020830184612a40565b9392505050565b5f604082019050612a895f8301856122f9565b612a966020830184612a40565b939250505056fea2646970667358221220f249c78cf2536d8c1b9c983fd7a3cca00417e6de8d1df14755dd57e76d469a9b64736f6c63430008140033";

type VRFCoordinatorV2MockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VRFCoordinatorV2MockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class VRFCoordinatorV2Mock__factory extends ContractFactory {
  constructor(...args: VRFCoordinatorV2MockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _baseFee: PromiseOrValue<BigNumberish>,
    _gasPriceLink: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<VRFCoordinatorV2Mock> {
    return super.deploy(
      _baseFee,
      _gasPriceLink,
      overrides || {}
    ) as Promise<VRFCoordinatorV2Mock>;
  }
  override getDeployTransaction(
    _baseFee: PromiseOrValue<BigNumberish>,
    _gasPriceLink: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_baseFee, _gasPriceLink, overrides || {});
  }
  override attach(address: string): VRFCoordinatorV2Mock {
    return super.attach(address) as VRFCoordinatorV2Mock;
  }
  override connect(signer: Signer): VRFCoordinatorV2Mock__factory {
    return super.connect(signer) as VRFCoordinatorV2Mock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VRFCoordinatorV2MockInterface {
    return new utils.Interface(_abi) as VRFCoordinatorV2MockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VRFCoordinatorV2Mock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as VRFCoordinatorV2Mock;
  }
}