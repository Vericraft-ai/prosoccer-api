export const getPrivateKey = () => {
    const privateKey = process.env.PRIVATE_KEY

    if (!privateKey) throw new Error("private key not provided - check your environment variables")

    return privateKey
}

export const getSecondaryPrivateKey = () => {
    const privateKey = process.env.SECONDARY_PRIVATE_KEY

    if (!privateKey) throw new Error("private key not provided - check your environment variables")

    return privateKey
}
