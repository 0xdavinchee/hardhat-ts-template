import { ethers } from "hardhat";
import { expect } from "chai";
import { Greeter, GreeterFactory } from "../typechain";

describe("Greeter", function () {
  let greeter: Greeter;
  let greeterFactory: GreeterFactory;
  it("Should return the new greeting once it's changed", async function () {
    greeterFactory = (await ethers.getContractFactory(
      "Greeter"
    )) as GreeterFactory;
    greeter = await greeterFactory.deploy("Hello, world!");

    await greeter.deployed();
    expect(await greeter.greet()).to.equal("Hello, world!");

    await greeter.setGreeting("Hola, mundo!");
    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});
