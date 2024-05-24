import hre from "hardhat"
import { Wallet, providers } from "ethers"
import { getSecondaryPrivateKey, getProviderRpcUrl } from "../utils"

async function main() {
    const contractaddress = "0xAef261A10E105777EDc79C6A79ca6667c0A6b69A"

    const prosoccerNFT = await hre.ethers.getContractFactory("ProsoccerNFT")

    const contract = prosoccerNFT.attach(contractaddress)

    const privateKey = getSecondaryPrivateKey()
    const rpcProviderUrl = getProviderRpcUrl(hre.network.name)

    const provider = new providers.JsonRpcProvider(rpcProviderUrl)

    const wallet = new Wallet(privateKey)
    const deployer = wallet.connect(provider)

    const tx = await contract.connect(deployer).getAllListings()

    console.log("Listings: ", tx)
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})
