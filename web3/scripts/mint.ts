import hre from "hardhat"
import { BigNumber, utils } from "ethers"
import { Wallet, providers } from "ethers"
import { getPrivateKey, getProviderRpcUrl } from "../utils"

async function main() {
    const contractaddress = "0xd8D2631FFf643eA60E8954EAD9f64f6c6b67da86"

    const prosoccerNFT = await hre.ethers.getContractFactory("ProsoccerNFT")

    const contract = prosoccerNFT.attach(contractaddress)

    const privateKey = getPrivateKey()
    const rpcProviderUrl = getProviderRpcUrl(hre.network.name)

    const provider = new providers.JsonRpcProvider(rpcProviderUrl)

    const wallet = new Wallet(privateKey)
    const deployer = wallet.connect(provider)

    const tx = await contract.mintAndListNFT(
        "https://rose-eldest-crocodile-955.mypinata.cloud/ipfs/QmdtbKCvXTBE5pUtsadCV54KsQ8dNg9GN3PCbtFuLLUZFA",
        {
            value: utils.formatEther(1000000000000000),
            from: deployer.address,
        }
    )

    await tx.wait()

    console.log("Token Listed")
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})
