import hre from "hardhat"
import {  utils } from "ethers"
import { Wallet, providers } from "ethers"
import { getPrivateKey, getProviderRpcUrl } from "../utils"
import { tokenURIs } from "./data/tokens"

async function main() {
    // AvalancheFuji
    const contractaddress = "0xAef261A10E105777EDc79C6A79ca6667c0A6b69A"

    // Polygon Amoy  
    // const contractaddress = "0xF23cE46AE7b6edAF44a69Be837Bc0813E6f263F9"

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
