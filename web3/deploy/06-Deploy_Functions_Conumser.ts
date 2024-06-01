import { DeployFunction } from "hardhat-deploy/types"
import { network } from "hardhat"
import {
    networkConfig,
    developmentChains,
    VERIFICATION_BLOCK_CONFIRMATIONS,
} from "../helper-hardhat-config"
import { verify } from "../helper-functions"
import { Spinner } from "../utils"

//deploy functions consumer contract
const deployFunction: DeployFunction = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments

    const { deployer } = await getNamedAccounts()
    const chainId: number | undefined = network.config.chainId
    if (!chainId) return

    const waitBlockConfirmations: number = developmentChains.includes(network.name)
        ? 1
        : VERIFICATION_BLOCK_CONFIRMATIONS

    const spinner: Spinner = new Spinner()
    log(
        `Deploying Functions Consumer contract on network ${network.name} using ${deployer} address`
    )

    spinner.start()

    const functionsConsumer = await deploy(`FunctionsConsumer`, {
        from: deployer,
        log: true,
        // to polygon amoy
        args: [
            "0xC22a79eBA640940ABB6dF0f7982cc119578E11De",
            "0x66756e2d706f6c79676f6e2d616d6f792d310000000000000000000000000000",
        ],
        waitConfirmations: waitBlockConfirmations,
    })

    spinner.stop()
    log(`Functions Consumer contract deployed at: ${functionsConsumer.address}`)

    if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
        log("Verifying...")
        await verify(functionsConsumer.address, [])
    }
}

export default deployFunction
deployFunction.tags = [`FunctionsConsumer`]
