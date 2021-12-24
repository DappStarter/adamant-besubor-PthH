require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture cart forget security trap birth maze purpose install beach symptom giggle'; 
let testAccounts = [
"0x868fa1f575290b81e1b176de331b95b5df2538a43decd89d5574f1b105c35ac5",
"0x16ec06fb7a9cdf69c1f648755df8b0a93612679a7c19cd628b68c038f2af223b",
"0xce70266c64283b1d68f69d29c5a802f626850d5979c7a5fc5cd99b8989137a92",
"0x20a65d8b74c6e526b6eee7bc380583adae1bff06d9885fbdeb97532844a23dfa",
"0xc253d8c31333444b46ce11a1e039a7b68d6d3fc56214bc9304df450285ce6edd",
"0xd2403e7d53e38b84b8135c44f4df712e142ce10c26d9602662ad8f61b366db1e",
"0xfffd175b7b0fccc9c52fb93945c5b8bc0d2f8523a6a9afa1475c8cb14a6215d5",
"0xb491ad229683483847cd95362604bcc6bede8dd0b74ee9043a02b3a652e32f3a",
"0x870fbc3f9ae60395b112062a2545cc8ae66d82a9c9480ee8083c11621c7d1457",
"0x02fb73b92f52ba40f9153d42a92786b287e714aeeee9a8ce9f5f8b2782d1cb42"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

