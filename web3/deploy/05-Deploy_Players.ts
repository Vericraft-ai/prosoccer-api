import { DeployFunction } from "hardhat-deploy/types"
import { network } from "hardhat"
import {
    networkConfig,
    developmentChains,
    VERIFICATION_BLOCK_CONFIRMATIONS,
} from "../helper-hardhat-config"
import { verify } from "../helper-functions"
import { Spinner } from "../utils"

// deploy ProsoccerPlayers nft contract
const deployFunction: DeployFunction = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments

    const collectionsArgs = {
        players: ["ProsoccerPlayers", "PSP"],
        scouts: ["ProsoccerScouts", "PSS"],
        coaches: ["ProsoccerCoaches", "PSC"],
    }

    const { deployer } = await getNamedAccounts()
    const chainId: number | undefined = network.config.chainId
    if (!chainId) return

    const waitBlockConfirmations: number = developmentChains.includes(network.name)
        ? 1
        : VERIFICATION_BLOCK_CONFIRMATIONS

    // const args = [deployer, ...collectionsArgs.coaches]
    // const args = [deployer, ...collectionsArgs.scouts]
    const args = [deployer, ...collectionsArgs.players]

    const spinner: Spinner = new Spinner()
    log(`Deploying Prosoccer NFT contract on network ${network.name} using ${deployer} address`)

    spinner.start()

    const prosoccerPlayers = await deploy(`ProsoccerNFT`, {
        from: deployer,
        args,
        log: true,
        waitConfirmations: waitBlockConfirmations,
    })

    spinner.stop()
    log(`Prosoccer NFT contract deployed at: ${prosoccerPlayers.address}`)

    if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
        log("Verifying...")
        await verify(prosoccerPlayers.address, args)
    }
}

export default deployFunction
deployFunction.tags = [`Prosoccer`]
