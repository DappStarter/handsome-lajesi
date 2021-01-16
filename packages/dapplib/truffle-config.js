require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half arena october traffic walnut raw remember method heavy clog surge giggle'; 
let testAccounts = [
"0x6202822b5985e89fc3dec0d01ea7b3b7c310f6526eb2fcd3fd401158e3d60fb0",
"0xddde6a9abb578d37d086bc5365d41fc83c9750f1f70a12a48756ae35f94c92e5",
"0xb90a1a8d1119af06ec4f0e0169254a311fa7021bcf4fe1ec19e2a8a1f6ede81e",
"0xdd755a6052e8ff13a1e8eaa130283b7276f962fe4dc7540113ce201d9e5caed4",
"0xf77d092b98d42aa9cbec22951b245400aacd6bf92b45c1f636a482961cbd7640",
"0x559b3392fbebdc7ac37fe817dbf719b513627ecf4fcd6e308ecd045fd58e7767",
"0x07abf0ae3162c2406b576ba7936e1f60306ef533e366c733312cb88bae0dfdea",
"0x9b8ab479cbbec3c47d4b71fbb6f330f0bc68ee3de0396573e67f61cf836e2ad4",
"0x6675d013f7721f743c16175dbebb4134af0c1f4f85bf3c54b17809a4d81a40e3",
"0x082a483a4f859e75821b46385926190ab8e7c9f2fbd67b4615c4cd0634681727"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
