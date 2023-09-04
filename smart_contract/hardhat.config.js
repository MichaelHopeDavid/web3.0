//https://eth-ropsten.alchemyapi.io/v2/cGXHcdgFoZ3FRr3Kt53FIXbwdQJzZW2O
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: '0.8.0',
  networks:{
    ropsten:{
      url: "https://eth-ropsten.alchemyapi.io/v2/cGXHcdgFoZ3FRr3Kt53FIXbwdQJzZW2O",
      accounts: ["5582d79d1b9aebb8b4704a134372369b7771949d27111c477f1684eebd346aa2"]
    }
  }

}