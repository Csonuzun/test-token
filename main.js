const { createUmi } = require('@metaplex-foundation/umi-bundle-defaults');
const { mplTokenMetadata } = require('@metaplex-foundation/mpl-token-metadata');


// Use the RPC endpoint of your choice.
const umi = createUmi('https://api.devnet.solana.com').use(mplTokenMetadata())