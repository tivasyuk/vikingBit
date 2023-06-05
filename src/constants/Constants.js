const SERVER_URL = 'http://localhost:3003'
// const SERVER_URL = 'http://139.99.130.52:3003'
const DOMAIN_NAME = 'http://localhost:3000'
// const DOMAIN_NAME = 'http://viking-bit.com'

const CRYPTO_WALLETS = {
    'crypto': 'cryptoWallet',
    'fiat': 'cardNumber',
}

const CRYPTO_NETWORKS = {
    'Bitcoin': ['BEP-2'], //BTC
    'Etherium': ['ERC-20'], //ETH
    'USDC': ['TRC-20'],
    'Tether': ['TRC-20', 'ERC-20', 'WEB-20'], //USDT
}

export {
    SERVER_URL,
    DOMAIN_NAME,
    CRYPTO_WALLETS,
    CRYPTO_NETWORKS
}