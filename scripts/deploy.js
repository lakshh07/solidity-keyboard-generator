const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const keyboardsContractFactory = await hre.ethers.getContractFactory(
    "Keyboards"
  );
  const keyboardsContract = await keyboardsContractFactory.deploy();
  await keyboardsContract.deployed();

  console.log("The keyboards contract is deployed!", keyboardsContract.address);

  const keyboards = await keyboardsContract.getKeyboards();
  console.log("We got the keyboards!", keyboards);

  const contract_address = JSON.stringify({
    KeyboardAddress: keyboardsContract.address,
  });

  fs.writeFileSync(`${__dirname}/../contract_address.json`, contract_address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
