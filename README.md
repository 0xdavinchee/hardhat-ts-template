# hardhat-ts-template

A simple hardhat template modeled off of running `npx hardhat init`. 

This project includes: 
- `hardhat-deploy`: this is a powerful plugin for deployment and testing, allows you to utilize your deploy for testing and makes it easy to deploy to live networks. Also includes neat features like dependencies (allows handling the case where one deployment is dependent on another).
- `hardhat-deploy-ethers`: this extends the hre object and provides some additional functionality that comes with hardhat-deploy.
- `hardhat-prettier`: a plugin that makes it easy to format solidity files based on rules set in `.prettierrc`.
  - `npx hardhat format`
- `hardhat-typechain`: a plugin that generates typings files for use in test files and possibly even on the front-end.
- `solidity-coverage`: a plugin that generates a coverage report on how much of your code has been tested.
  - `npx hardhat coverage`

The deploy script and test files have been modified to work in a way that takes full advantage of the features which `hardhat-deploy` offers.