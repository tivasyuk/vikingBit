// const SERVER_URL = 'http://localhost:3003'
const SERVER_URL = 'http://viking-bit.com:3003'
// const DOMAIN_NAME = 'http://localhost:3000'
const DOMAIN_NAME = 'https://viking-bit.com'

const CRYPTO_WALLETS = {
    'crypto': 'cryptoWallet',
    'fiat': 'cardNumber',
}

const CRYPTO_NETWORKS = {
    'BTC': ['BEP-2'], //BTC
    'ETH': ['ERC-20'], //ETH
    'USDC': ['TRC-20'],
    'USDT': ['TRC-20', 'ERC-20', 'WEB-20'], //USDT
}

export {
    SERVER_URL,
    DOMAIN_NAME,
    CRYPTO_WALLETS,
    CRYPTO_NETWORKS
}