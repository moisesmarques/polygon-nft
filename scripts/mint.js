const { config, ethers } = require("hardhat");
const axios = require("axios");
const { PINATA_API_KEY, PINATA_API_SECRET } = process.env;

const contractAddress = "0xAA5BD81f4fB06494238167Ec7342f45458a73479";
const metadata = new Object();
metadata.name = "Test NFT 0002";
metadata.image = "https://bafkreic3eevu2k2xto2cam6pusgr5ud3gxdg2cterxkwj6dv6bazqlcq2m.ipfs.nftstorage.link/";
metadata.description = "This is my NFT";


const pinJSONToIPFS = async(JSONBody) => {
  const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
  return axios
      .post(url, JSONBody, {
          headers: {
              pinata_api_key: PINATA_API_KEY,
              pinata_secret_api_key: PINATA_API_SECRET,
          }
      })
      .then(function (response) {
         return {
             success: true,
             pinataUrl: "https://gateway.pinata.cloud/ipfs/" + response.data.IpfsHash
         };
      })
      .catch(function (error) {
          console.log(error)
          return {
              success: false,
              message: error.message,
          }
      });
};

async function main() {

    const [deployer] = await ethers.getSigners();    

    const pinataResponse = await pinJSONToIPFS(metadata);
    if (!pinataResponse.success){
        console.log("Something went wrong while uploading your tokenURI.");
        return;
    }
    
    const tokenURI = pinataResponse.pinataUrl;
    console.log("Token URI: ", tokenURI);

    const TestNFT = await ethers.getContractFactory("TestNFT");
    const tx = await TestNFT.attach(contractAddress).mintNFT(deployer.address, tokenURI);
    console.log("NFT minted: ", tx.hash);

};

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
});
  