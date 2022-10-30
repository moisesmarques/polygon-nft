# Polygon NFT Minter

# Installation
To use this minter, you'll need to do the following:

1. Run `npm install` to download the `node_modules` folder.
2. Uncomment example.env and put your credentials.
3. Change the TestNFT.sol smart contract in `contracts` directory with your company/collection name and Symbol.
4. Run `npx hardhat run scripts/deploy.js --network <network>` to deploy the NFT Smart Contract. 
5. Run `npx hardhat run scripts/mint.js --network <network>` to mint a new NFT.