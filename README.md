# Solidity Contract - NFT.sol

This contract uses OpenZepplin ERC721 standard, developed with Hardhat.
The contract contains standard functions, namely minting tokens, updating listing price, creating sale, reslling tokens, transferring ownership of token, returning unsold market items, returning purchased items for users, returning only listed items for users. 

# Hardhat Solidity Development Environment 

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```
# Running the Project
Clone the project locally and install dependencies
install using npm or yarn

```shell
git clone https://github.com/Meter-Ethereum-Hackathon/nft-marketplace.git

#run npm 

npm install 

#or

yarn

```
# Configuration
Hardhat chain ID: 1337
If you see a compatibility issue between solidity pragma version with semver requirement, add the following to solhint.json

```JSON
"compiler-version": ["error", "^0.8.4"] 

```

## Hardhat Configuration:

Note that to deploy to Polygon test or main networks, you should update configurations in the hardhat.config.js to use a private key. 


```JavaScript
require("@nomiclabs/hardhat-waffle");

// // This is a sample Hardhat task. To learn how to create your own go to
// // https://hardhat.org/guides/create-task.html
// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();

//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const fs = require("fs");
//reference to private key
const privateKey = fs.readFileSync("test/.secret").toString();
const projectId = "43996abd00574da789e54f0dc7e9aec1";

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      //Infura
      url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts: [privateKey],
    },
    mainnet: {
      //Infura
      url: `https://polygon-mainnet.infura.io/v3/${projectId}`,
      accounts: [privateKey],
    },
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
```

# Versions
node version 16.14.0
npm version 8.3.1
solidity pragma 0.8.4

# Testing
A sample test file, sample-test.js in the "test" directory, is written to test the contract. To run the sample test, run
```shell
npx hardhat test
```

# Authors and Acknowledgment
Original project tutorial by Nadir Dabit
https://dev.to/edge-and-node/building-scalable-full-stack-apps-on-ethereum-with-polygon-2cfb
https://github.com/dabit3/polygon-ethereum-nextjs-marketplace
