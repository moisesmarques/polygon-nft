async function main() {
    const sm = await ethers.getContractFactory("TestErc1155")
  
    // Start deployment, returning a promise that resolves to a contract object
    const testNFT = await sm.deploy()
    await testNFT.deployed()
    const txHash = testNFT.deployTransaction.hash
    const txReceipt = await ethers.provider.waitForTransaction(txHash)
    const contractAddress = txReceipt.contractAddress
    console.log("Contract deployed to address:", contractAddress)
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
  