require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
const { PRIVATE_KEY } = process.env;
module.exports = {
   solidity: "0.8.0",
   defaultNetwork: "mumbai",
   networks: {
      hardhat: {},
      mumbai: {
         url: "https://rpc-mumbai.maticvigil.com",
         accounts: [PRIVATE_KEY]
      },
      polygon: {
         url: "https://polygon-rpc.com",
         accounts: [PRIVATE_KEY]
      },
      alchemy_mumbai: {
         url: "https://polygon-mumbai.g.alchemy.com/v2/XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
         accounts: [PRIVATE_KEY]
      },
      alchemy_polygon: {
         url: "https://polygon-mainnet.g.alchemy.com/v2/XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
         accounts: [PRIVATE_KEY]
      },
      moralis_mumbai: {
         url: "https://speedy-nodes-nyc.moralis.io/XXXXXXXXXXXXXXXXXXXXXXX/polygon/mumbai",
         accounts: [PRIVATE_KEY]
      },      
      moralis_polygon: {
         url: "https://speedy-nodes-nyc.moralis.io/XXXXXXXXXXXXXXXXXXXx/polygon/mainnet",
         accounts: [PRIVATE_KEY]
      },
   },
}