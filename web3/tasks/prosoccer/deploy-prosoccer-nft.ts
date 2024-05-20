import { task } from "hardhat/config"
import { HardhatRuntimeEnvironment, TaskArguments } from "hardhat/types"
import { Wallet, providers } from "ethers"
import { Spinner, getPrivateKey, getProviderRpcUrl } from "../../utils/"

import { ProsoccerNFT__factory } from "../../typechain"

task("deploy-prosoccer-nft", "Deploys the Prosoccer NFT contract")
    .addParam("name", "The name of the NFT Collection")
    .addParam("symbol", "The symbol of the NFT Collection")
    .setAction(async (taskArgs: TaskArguments, hre: HardhatRuntimeEnvironment): Promise<void> => {
        console.log({ hre })
        const networkId = hre.network.name
        const name = taskArgs.name
        const symbol = taskArgs.symbol

        const privateKey = getPrivateKey()
        const rpcProviderUrl = getProviderRpcUrl(hre.network.name)

        const provider = new providers.JsonRpcProvider(rpcProviderUrl)
        const wallet = new Wallet(privateKey)
        const deployer = wallet.connect(provider)

        const spinner: Spinner = new Spinner()

        console.log(
            `Deploying Prosoccer NFT contract on network ${networkId} using ${deployer.address} address`
        )

        spinner.start()

        const prosoccerNFTFactory = (await hre.ethers.getContractFactory(
            "ProsoccerNFT",
            deployer
        )) as ProsoccerNFT__factory

        const prosoccerNFT = await prosoccerNFTFactory.deploy(wallet.address, name, symbol)

        spinner.stop()
        console.log(`Prosoccer NFT contract deployed at: ${prosoccerNFT.address}`)
    })
