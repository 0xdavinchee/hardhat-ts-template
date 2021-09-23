import { HardhatUserConfig, task } from "hardhat/config";
import { config as dotEnvConfig } from "dotenv";
dotEnvConfig();
import "hardhat-deploy";
import "hardhat-deploy-ethers";
import "hardhat-prettier";
import "@typechain/hardhat";
import "solidity-coverage";
import { NetworkUserConfig } from "hardhat/types";

const chainIds = {
    ganache: 1337,
    goerli: 5,
    hardhat: 1337,
    kovan: 42,
    mainnet: 1,
    rinkeby: 4,
    ropsten: 3,
    polygon: 137,
    harmony: 1666600000,
};

const INFURA_API_KEY = process.env.INFURA_API_KEY || "";
const TEST_ACCOUNT = process.env.TEST_ACCOUNT || "";

const createUrl = (network: string) =>
    "https://" + network + ".infura.io/v3/" + INFURA_API_KEY;

const layerTwoUrlMap = new Map([
    ["harmony", "https://api.s0.t.hmny.io"],
    ["polygon", createUrl("polygon-mainnet")],
]);

const createTestnetConfig = (
    network: keyof typeof chainIds,
    isLayerTwo?: boolean
): NetworkUserConfig => {
    const url = isLayerTwo ? layerTwoUrlMap.get(network) : createUrl(network);
    return {
        accounts: [TEST_ACCOUNT],
        chainId: chainIds[network],
        url,
    };
};
const config: HardhatUserConfig = {
    solidity: {
        version: "0.8.0",
        settings: {
            optimizer: {
                enabled: true,
                runs: 800,
            },
        },
    },
    networks: {
        hardhat: {
            hardfork: "london",
            gasPrice: "auto"
        },
        goerli: createTestnetConfig("goerli"),
        kovan: createTestnetConfig("kovan"),
        rinkeby: createTestnetConfig("rinkeby"),
        ropsten: createTestnetConfig("ropsten"),
        matic: createTestnetConfig("polygon"),
        harmony: createTestnetConfig("harmony"),
    },
    namedAccounts: {
        deployer: 0,
    },
};

export default config;
