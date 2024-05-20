import hre from "hardhat"
import { BigNumber, utils } from "ethers"
import { Wallet, providers } from "ethers"
import { getSecondaryPrivateKey, getProviderRpcUrl } from "../utils"

async function main() {
    const contractaddress = "0xd8D2631FFf643eA60E8954EAD9f64f6c6b67da86"

    const prosoccerNFT = await hre.ethers.getContractFactory("ProsoccerNFT")

    const contract = prosoccerNFT.attach(contractaddress)

    const privateKey = getSecondaryPrivateKey()
    const rpcProviderUrl = getProviderRpcUrl(hre.network.name)

    const provider = new providers.JsonRpcProvider(rpcProviderUrl)

    const wallet = new Wallet(privateKey)
    const deployer = wallet.connect(provider)

    const tx = await contract.connect(deployer).buyToken(BigNumber.from(1), {
        value: utils.parseEther("0.0011"),
    })

    await tx.wait()

    console.log("Token bought")
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})
