/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "AggregatorInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AggregatorInterface__factory>;
    getContractFactory(
      name: "AggregatorV2V3Interface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AggregatorV2V3Interface__factory>;
    getContractFactory(
      name: "AggregatorV3Interface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AggregatorV3Interface__factory>;
    getContractFactory(
      name: "ChainlinkRequestInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ChainlinkRequestInterface__factory>;
    getContractFactory(
      name: "LinkTokenInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LinkTokenInterface__factory>;
    getContractFactory(
      name: "LinkTokenReceiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LinkTokenReceiver__factory>;
    getContractFactory(
      name: "MockV3Aggregator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockV3Aggregator__factory>;
    getContractFactory(
      name: "AutomationBase",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AutomationBase__factory>;
    getContractFactory(
      name: "AutomationCompatible",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AutomationCompatible__factory>;
    getContractFactory(
      name: "AutomationCompatibleInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AutomationCompatibleInterface__factory>;
    getContractFactory(
      name: "FunctionsClient",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FunctionsClient__factory>;
    getContractFactory(
      name: "IFunctionsClient",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IFunctionsClient__factory>;
    getContractFactory(
      name: "IFunctionsRouter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IFunctionsRouter__factory>;
    getContractFactory(
      name: "FunctionsRequest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FunctionsRequest__factory>;
    getContractFactory(
      name: "LinkTokenInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LinkTokenInterface__factory>;
    getContractFactory(
      name: "VRFCoordinatorV2Interface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VRFCoordinatorV2Interface__factory>;
    getContractFactory(
      name: "VRFCoordinatorV2Mock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VRFCoordinatorV2Mock__factory>;
    getContractFactory(
      name: "ConfirmedOwner",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ConfirmedOwner__factory>;
    getContractFactory(
      name: "ConfirmedOwnerWithProposal",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ConfirmedOwnerWithProposal__factory>;
    getContractFactory(
      name: "IOwnable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IOwnable__factory>;
    getContractFactory(
      name: "VRFConsumerBaseV2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VRFConsumerBaseV2__factory>;
    getContractFactory(
      name: "ERC677Token",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC677Token__factory>;
    getContractFactory(
      name: "LinkToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LinkToken__factory>;
    getContractFactory(
      name: "ERC677",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC677__factory>;
    getContractFactory(
      name: "ERC677Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC677Receiver__factory>;
    getContractFactory(
      name: "LinkBasicToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LinkBasicToken__factory>;
    getContractFactory(
      name: "LinkERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LinkERC20__factory>;
    getContractFactory(
      name: "LinkERC20Basic",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LinkERC20Basic__factory>;
    getContractFactory(
      name: "LinkStandardToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LinkStandardToken__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "IERC1155Errors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155Errors__factory>;
    getContractFactory(
      name: "IERC20Errors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Errors__factory>;
    getContractFactory(
      name: "IERC721Errors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Errors__factory>;
    getContractFactory(
      name: "IERC4906",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC4906__factory>;
    getContractFactory(
      name: "ERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155__factory>;
    getContractFactory(
      name: "ERC1155Supply",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155Supply__factory>;
    getContractFactory(
      name: "IERC1155MetadataURI",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155MetadataURI__factory>;
    getContractFactory(
      name: "IERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155__factory>;
    getContractFactory(
      name: "IERC1155Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155Receiver__factory>;
    getContractFactory(
      name: "ERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721__factory>;
    getContractFactory(
      name: "ERC721Enumerable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Enumerable__factory>;
    getContractFactory(
      name: "ERC721URIStorage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721URIStorage__factory>;
    getContractFactory(
      name: "IERC721Enumerable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Enumerable__factory>;
    getContractFactory(
      name: "IERC721Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Metadata__factory>;
    getContractFactory(
      name: "IERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721__factory>;
    getContractFactory(
      name: "IERC721Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Receiver__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "Math",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Math__factory>;
    getContractFactory(
      name: "Strings",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Strings__factory>;
    getContractFactory(
      name: "AutomatedFunctionsConsumer",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AutomatedFunctionsConsumer__factory>;
    getContractFactory(
      name: "FunctionsConsumer",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FunctionsConsumer__factory>;
    getContractFactory(
      name: "ProsoccerNFT",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ProsoccerNFT__factory>;
    getContractFactory(
      name: "MockOracle",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockOracle__factory>;

    getContractAt(
      name: "AggregatorInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AggregatorInterface>;
    getContractAt(
      name: "AggregatorV2V3Interface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AggregatorV2V3Interface>;
    getContractAt(
      name: "AggregatorV3Interface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AggregatorV3Interface>;
    getContractAt(
      name: "ChainlinkRequestInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ChainlinkRequestInterface>;
    getContractAt(
      name: "LinkTokenInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LinkTokenInterface>;
    getContractAt(
      name: "LinkTokenReceiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LinkTokenReceiver>;
    getContractAt(
      name: "MockV3Aggregator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockV3Aggregator>;
    getContractAt(
      name: "AutomationBase",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AutomationBase>;
    getContractAt(
      name: "AutomationCompatible",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AutomationCompatible>;
    getContractAt(
      name: "AutomationCompatibleInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AutomationCompatibleInterface>;
    getContractAt(
      name: "FunctionsClient",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FunctionsClient>;
    getContractAt(
      name: "IFunctionsClient",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IFunctionsClient>;
    getContractAt(
      name: "IFunctionsRouter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IFunctionsRouter>;
    getContractAt(
      name: "FunctionsRequest",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FunctionsRequest>;
    getContractAt(
      name: "LinkTokenInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LinkTokenInterface>;
    getContractAt(
      name: "VRFCoordinatorV2Interface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.VRFCoordinatorV2Interface>;
    getContractAt(
      name: "VRFCoordinatorV2Mock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.VRFCoordinatorV2Mock>;
    getContractAt(
      name: "ConfirmedOwner",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ConfirmedOwner>;
    getContractAt(
      name: "ConfirmedOwnerWithProposal",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ConfirmedOwnerWithProposal>;
    getContractAt(
      name: "IOwnable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IOwnable>;
    getContractAt(
      name: "VRFConsumerBaseV2",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.VRFConsumerBaseV2>;
    getContractAt(
      name: "ERC677Token",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC677Token>;
    getContractAt(
      name: "LinkToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LinkToken>;
    getContractAt(
      name: "ERC677",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC677>;
    getContractAt(
      name: "ERC677Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC677Receiver>;
    getContractAt(
      name: "LinkBasicToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LinkBasicToken>;
    getContractAt(
      name: "LinkERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LinkERC20>;
    getContractAt(
      name: "LinkERC20Basic",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LinkERC20Basic>;
    getContractAt(
      name: "LinkStandardToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LinkStandardToken>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "IERC1155Errors",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155Errors>;
    getContractAt(
      name: "IERC20Errors",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Errors>;
    getContractAt(
      name: "IERC721Errors",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Errors>;
    getContractAt(
      name: "IERC4906",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC4906>;
    getContractAt(
      name: "ERC1155",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155>;
    getContractAt(
      name: "ERC1155Supply",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155Supply>;
    getContractAt(
      name: "IERC1155MetadataURI",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155MetadataURI>;
    getContractAt(
      name: "IERC1155",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155>;
    getContractAt(
      name: "IERC1155Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155Receiver>;
    getContractAt(
      name: "ERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721>;
    getContractAt(
      name: "ERC721Enumerable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721Enumerable>;
    getContractAt(
      name: "ERC721URIStorage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721URIStorage>;
    getContractAt(
      name: "IERC721Enumerable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Enumerable>;
    getContractAt(
      name: "IERC721Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Metadata>;
    getContractAt(
      name: "IERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721>;
    getContractAt(
      name: "IERC721Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Receiver>;
    getContractAt(
      name: "ERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "Math",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Math>;
    getContractAt(
      name: "Strings",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Strings>;
    getContractAt(
      name: "AutomatedFunctionsConsumer",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AutomatedFunctionsConsumer>;
    getContractAt(
      name: "FunctionsConsumer",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FunctionsConsumer>;
    getContractAt(
      name: "ProsoccerNFT",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ProsoccerNFT>;
    getContractAt(
      name: "MockOracle",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockOracle>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
