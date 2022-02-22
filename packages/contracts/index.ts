/**
 * This package contains deployed contract addresses, ABIs, and Typechain types
 * for the Dark Forest game.
 *
 * ## Installation
 *
 * You can install this package using [`npm`](https://www.npmjs.com) or
 * [`yarn`](https://classic.yarnpkg.com/lang/en/) by running:
 *
 * ```bash
 * npm install --save @darkforest_eth/contracts
 * ```
 * ```bash
 * yarn add @darkforest_eth/contracts
 * ```
 *
 * When using this in a plugin, you might want to load it with [skypack](https://www.skypack.dev)
 *
 * ```js
 * import * as contracts from 'http://cdn.skypack.dev/@darkforest_eth/contracts'
 * ```
 *
 * ## Typechain
 *
 * The Typechain types can be found in the `typechain` directory.
 *
 * ## ABIs
 *
 * The contract ABIs can be found in the `abis` directory.
 *
 * @packageDocumentation
 */

/**
 * The name of the network where these contracts are deployed.
 */
export const NETWORK = 'testnet';
/**
 * The id of the network where these contracts are deployed.
 */
export const NETWORK_ID = 3;
/**
 * The block in which the DarkForestCore contract was deployed.
 */
export const START_BLOCK = 12002438;
/**
 * The address for the DarkForestUtils library.
 */
export const UTILS_LIBRARY_ADDRESS = '0x678DA07E35798b1156cFA3dA6EA930e85f4Fa80B';
/**
 * The address for the DarkForestPlanet library.
 */
export const PLANET_LIBRARY_ADDRESS = '0x0b01f62DF97b7Ed97ca6B4a57190c3F5958fEFB3';
/**
 * The address for the DarkForestArtifactUtils library.
 */
export const ARTIFACT_UTILS_LIBRARY_ADDRESS = '0x25e838f110A0B866fAa029C3c3234334dB9571DE';
/**
 * The address for the Verifier library.
 */
export const VERIFIER_LIBRARY_ADDRESS = '0x2CABe7847ADd557E2CAfBeA72fC262c6954b6607';
/**
 * The address for the DarkForestInitialize library.
 */
export const INITIALIZE_LIBRARY_ADDRESS = '0xa2Fe580dFF779122da5f494f3c81b5D84fd7369D';
/**
 * The address for the DarkForestLazyUpdate library.
 */
export const LAZY_UPDATE_LIBRARY_ADDRESS = '0x70271aD56ab80680Ea41D37EBECb488990101a0a';
/**
 * The address for the DarkForestCore contract.
 */
export const CORE_CONTRACT_ADDRESS = '0x5AE82a33B7d046e369E498f9f0Fec62B8C79C4Ca';
/**
 * The address for the DarkForestTokens contract.
 */
export const TOKENS_CONTRACT_ADDRESS = '0xB935411533Ba5F0ddA398B72A75Cb0524Db5C5C8';
/**
 * The address for the DarkForestGetters contract.
 */
export const GETTERS_CONTRACT_ADDRESS = '0x2f23AC4B14b0b5a1164Ed56795063BD415B277ed';
/**
 * The address for the Whitelist contract.
 */
export const WHITELIST_CONTRACT_ADDRESS = '0x21776f0dF60209ff6a2bda734305966Fa0c59211';
/**
 * The address for the DarkForestGPTCredit contract.
 */
export const GPT_CREDIT_CONTRACT_ADDRESS = '0x4ef1e5d509E9c2e3f39f1c8399e644063408d612';
/**
 * The address for the DarkForestScoring contract.
 */
export const SCORING_CONTRACT_ADDRESS = '';
