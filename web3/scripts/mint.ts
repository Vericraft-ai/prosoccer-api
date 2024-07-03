import hre from "hardhat"
import {  utils } from "ethers"
import { Wallet, providers } from "ethers"
import { getPrivateKey, getProviderRpcUrl } from "../utils"
import { tokenURIs } from "./data/tokens"

async function main() {
    // AvalancheFuji
    const contractaddress = "0xb502c9766Eb1915f4fc480ed2a639cd1Bef4863B"

    // Polygon Amoy  
    // const contractaddress = "0xEa65C2781B5042223ed5C9CC0d7Fc43d59014e08"

    const prosoccerNFT = await hre.ethers.getContractFactory("ProsoccerNFT")

    const contract = prosoccerNFT.attach(contractaddress)


    const privateKey = getPrivateKey()
    const rpcProviderUrl = getProviderRpcUrl(hre.network.name)

    const provider = new providers.JsonRpcProvider(rpcProviderUrl)

    const wallet = new Wallet(privateKey)
    const deployer = wallet.connect(provider)

    for (const [i, tokenURI] of tokenURIs.entries()) {
        const tx = await contract.mintAndListToken(tokenURI, {
            value: utils.parseEther("0.001"),
            from: deployer.address,
        })

        await tx.wait()

        console.log(`Token ${i} Minted and Listed`)
    }
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})
