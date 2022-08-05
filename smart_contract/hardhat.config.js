//https://eth-rinkeby.alchemyapi.io/v2/GtggUv127JFNSNADjcoF5aT2qHexz-va

require("@nomiclabs/hardhat-waffle")

module.exports = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/GtggUv127JFNSNADjcoF5aT2qHexz-va',
      accounts: ['c665ce25b6aa1c33b04873454ea4d1f3a68333b78956f33f8dbb22e605f4e001']
    }
  }
};
