export const getProviderRpcUrl = (network: string) => {
    let rpcUrl

    switch (network) {
        case "ethereumSepolia":
            rpcUrl = process.env.ETHEREUM_SEPOLIA_RPC_URL
            break
        case "optimismGoerli":
            rpcUrl = process.env.OPTIMISM_GOERLI_RPC_URL
            break
        case "arbitrumTestnet":
            rpcUrl = process.env.ARBITRUM_TESTNET_RPC_URL
            break
        case "avalancheFuji":
            rpcUrl = process.env.AVALANCHE_FUJI_RPC_URL
            // rpcUrl = "https://api.avax-test.network/ext/bc/C/rpc"
            break
        case "polygonMumbai":
            rpcUrl = process.env.POLYGON_MUMBAI_RPC_URL
            break
        case "polygonAmoy":
            rpcUrl = process.env.POLYGON_AMOY_RPC_URL
            break
        default:
            throw new Error("Unknown network: " + network)
    }

    if (!rpcUrl)
        throw new Error(`rpcUrl empty for network ${network} - check your environment variables`)

    return rpcUrl
}
