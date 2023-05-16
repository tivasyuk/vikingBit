const SERVER_URL = 'http://localhost:3003'

const CRYPTO_WALLETS = {
    'crypto': 'cryptoWallet',
    'fiat': 'cardNumber',
}

const CRYPTO_NETWORKS = {
    'Bitcoin': ['ERC-20', 'BEP-20', 'ERC-2'], //BTC
    'Etherium': ['TRC-20', 'ERC-20', 'WEB-20'], //ETH
    'USDC': ['TRC-20', 'ERC-20', 'WEB-20'],
    'Tether': ['TRC-20', 'ERC-20', 'WEB-20'], //USDT
}

export {
    SERVER_URL,
    CRYPTO_WALLETS,
    CRYPTO_NETWORKS
}