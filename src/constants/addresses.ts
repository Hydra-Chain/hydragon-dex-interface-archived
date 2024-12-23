import { FACTORY_ADDRESS as V2_FACTORY_ADDRESS } from '@uniswap/v2-sdk'
import { FACTORY_ADDRESS as V3_FACTORY_ADDRESS } from '@uniswap/v3-sdk'

import { constructSameAddressMap } from '../utils/constructSameAddressMap'
import { SupportedChainId } from './chains'

type AddressMap = { [chainId: number]: string }

export const UNI_ADDRESS: AddressMap = constructSameAddressMap('0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984')

// eslint-disable-next-line import/no-unused-modules
export const HYDRADEX_NFT_AIRDROP_CLAIM_ADDRESS = '0x8B799381ac40b838BBA4131ffB26197C432AFe78'

// celo v3 addresses
const CELO_V3_CORE_FACTORY_ADDRESSES = '0xAfE208a311B21f13EF87E33A90049fC17A7acDEc'
const CELO_ROUTER_ADDRESS = '0x5615CDAb10dc425a742d643d949a7F474C01abc4'
const CELO_V3_MIGRATOR_ADDRESSES = '0x3cFd4d48EDfDCC53D3f173F596f621064614C582'
const CELO_MULTICALL_ADDRESS = '0x633987602DE5C4F337e3DbF265303A1080324204'
const CELO_QUOTER_ADDRESSES = '0x82825d0554fA07f7FC52Ab63c961F330fdEFa8E8'
const CELO_NONFUNGIBLE_POSITION_MANAGER_ADDRESSES = '0x3d79EdAaBC0EaB6F08ED885C05Fc0B014290D95A'
const CELO_TICK_LENS_ADDRESSES = '0x5f115D9113F88e0a0Db1b5033D90D4a9690AcD3D'

// SAMVI Info: addresses for hydra v3 contracts and v2 contracts
// Hydra Chain
const HYDRACHAIN_V2_CORE_FACTORY_ADDRESSES = '0x9DCBe256259E8EE82103F88164C727e133B83030'
const HYDRACHAIN_V2_ROUTER_ADDRESSES = '0x352d2Db98842FebbcBe50a50A6fbF7A56C176079'

const HYDRACHAIN_V3_CORE_FACTORY_ADDRESSES = '0x664bC90358785F6C02c7e26696FE7E908CebAB86'
const HYDRACHAIN_MULTICALL_ADDRESS = '0x42320aDeF5D9B5890292251f35A89B39EA42d61c'
const HYDRACHAIN_TICK_LENS_ADDRESSES = '0x42320aDeF5D9B5890292251f35A89B39EA42d61c'

const HYDRACHAIN_SWAP_ROUTER_ADDRESSES = '0x9740a64B7F448E4fcE0Db5c3f0F0a0Ae1796e643' // Router 02 from swap-router-contracts
const HYDRACHAIN_NONFUNGIBLE_POSITION_MANAGER_ADDRESSES = '0x2Ff62B6EA2d6ED7bbcE8cc51b8D7402AeB671335'
const HYDRACHAIN_V3_MIGRATOR_ADDRESSES = '0x107EdE7C81CA2a91Bc54b5CACe30830daff538BE'
const HYDRACHAIN_QUOTER_ADDRESSES = '0x2f47EDDca7Ec038E542541E74FA8CA9558718773'

// Hydra Testnet
const HYDRACHAIN_V2_CORE_FACTORY_ADDRESSES_TESTNET = '0x2eF24A912d0bFD6148A1a291C958266a4aB132e9'
const HYDRACHAIN_V2_ROUTER_ADDRESSES_TESTNET = '0x41896612F0746cD8c9521489744e7961d77a8923'

const HYDRACHAIN_V3_CORE_FACTORY_ADDRESSES_TESTNET = '0x3887e4C46Bb809d0345dC1d8f0E4e783424ACEB2'
const HYDRACHAIN_MULTICALL_ADDRESS_TESTNET = '0xdbF3F5164A41FAbD326A6f5F74FC53ece7869f39'
const HYDRACHAIN_TICK_LENS_ADDRESSES_TESTNET = '0x870df4B8FCC2EaC7ad5cdaF0B89d5e1f99FD5945'

const HYDRACHAIN_SWAP_ROUTER_ADDRESSES_TESTNET = '0xBCA3A954223718dba56b1649da4AcE1c6b0062F5' // Router 02 from swap-router-contracts
const HYDRACHAIN_NONFUNGIBLE_POSITION_MANAGER_ADDRESSES_TESTNET = '0x8ed4D244F25F37B35ee4778857da904D25F392Ca'
const HYDRACHAIN_V3_MIGRATOR_ADDRESSES_TESTNET = '0x0E4c31FABe0C7A3F690d71f4f4a34e66ee9ba5a2'
const HYDRACHAIN_QUOTER_ADDRESSES_TESTNET = '0xDc92b0FcacbF94B7cF0558a322e4AC89beC0786c'

// Hydra Devnet
const HYDRACHAIN_V2_CORE_FACTORY_ADDRESSES_DEVNET = '0x28cE260b7E028e4c4AA1e265ED61D517Bf4CFa4D'
const HYDRACHAIN_V2_ROUTER_ADDRESSES_DEVNET = '0xA4F50366b6F2CB220E7012CeA98f2FB81624d143'

const HYDRACHAIN_V3_CORE_FACTORY_ADDRESSES_DEVNET = '0xd555277891c118109b8bd066249D541FF4f993A4'
const HYDRACHAIN_MULTICALL_ADDRESS_DEVNET = '0x53E0043bcc270CC3f4222604b1Dbb0a735366bbD'
const HYDRACHAIN_TICK_LENS_ADDRESSES_DEVNET = '0xe0ABF31F69Ea2F1886CF550Cc5e272Ec968Cd918'

const HYDRACHAIN_SWAP_ROUTER_ADDRESSES_DEVNET = '0xfF28bb76BA331270ff6d18B61F325b59C974a7f6' // Router 02 from swap-router-contracts
const HYDRACHAIN_NONFUNGIBLE_POSITION_MANAGER_ADDRESSES_DEVNET = '0xeFF3D3b379294A09147D6cD3a5ac1b9B8a78341E'
const HYDRACHAIN_V3_MIGRATOR_ADDRESSES_DEVNET = '0xA205156Dba14584af6A5708Cc8b0CE666986De85'
const HYDRACHAIN_QUOTER_ADDRESSES_DEVNET = '0xEEDe86D3e3D88A1b2b35814Bc7465585B370FB16'

// eslint-disable-next-line import/no-unused-modules
export const V2_FACTORY_ADDRESSES: AddressMap = {
  ...constructSameAddressMap(V2_FACTORY_ADDRESS, [
    SupportedChainId.OPTIMISM,
    SupportedChainId.OPTIMISM_GOERLI,
    SupportedChainId.ARBITRUM_ONE,
    SupportedChainId.ARBITRUM_RINKEBY,
    SupportedChainId.POLYGON_MUMBAI,
    SupportedChainId.POLYGON,
    SupportedChainId.CELO,
    SupportedChainId.CELO_ALFAJORES,
  ]),
  [SupportedChainId.HYDRA]: HYDRACHAIN_V2_CORE_FACTORY_ADDRESSES,
  [SupportedChainId.TESTNET]: HYDRACHAIN_V2_CORE_FACTORY_ADDRESSES_TESTNET,
  [SupportedChainId.DEVNET]: HYDRACHAIN_V2_CORE_FACTORY_ADDRESSES_DEVNET,
}

// eslint-disable-next-line import/no-unused-modules
export const V2_ROUTER_ADDRESS: AddressMap = {
  ...constructSameAddressMap('0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D', [
    SupportedChainId.OPTIMISM,
    SupportedChainId.OPTIMISM_GOERLI,
    SupportedChainId.ARBITRUM_ONE,
    SupportedChainId.ARBITRUM_RINKEBY,
    SupportedChainId.POLYGON_MUMBAI,
    SupportedChainId.POLYGON,
    SupportedChainId.CELO,
    SupportedChainId.CELO_ALFAJORES,
  ]),
  [SupportedChainId.HYDRA]: HYDRACHAIN_V2_ROUTER_ADDRESSES,
  [SupportedChainId.TESTNET]: HYDRACHAIN_V2_ROUTER_ADDRESSES_TESTNET,
  [SupportedChainId.DEVNET]: HYDRACHAIN_V2_ROUTER_ADDRESSES_DEVNET,
}

/* V3 Contract Addresses */
export const V3_CORE_FACTORY_ADDRESSES: AddressMap = {
  ...constructSameAddressMap(V3_FACTORY_ADDRESS, [
    SupportedChainId.OPTIMISM,
    SupportedChainId.OPTIMISM_GOERLI,
    SupportedChainId.ARBITRUM_ONE,
    SupportedChainId.ARBITRUM_RINKEBY,
    SupportedChainId.POLYGON_MUMBAI,
    SupportedChainId.POLYGON,
  ]),
  [SupportedChainId.HYDRA]: HYDRACHAIN_V3_CORE_FACTORY_ADDRESSES,
  [SupportedChainId.TESTNET]: HYDRACHAIN_V3_CORE_FACTORY_ADDRESSES_TESTNET,
  [SupportedChainId.DEVNET]: HYDRACHAIN_V3_CORE_FACTORY_ADDRESSES_DEVNET,
  [SupportedChainId.CELO]: CELO_V3_CORE_FACTORY_ADDRESSES,
  [SupportedChainId.CELO_ALFAJORES]: CELO_V3_CORE_FACTORY_ADDRESSES,
}

export const V3_MIGRATOR_ADDRESSES: AddressMap = {
  ...constructSameAddressMap('0xA5644E29708357803b5A882D272c41cC0dF92B34', [
    SupportedChainId.ARBITRUM_ONE,
    SupportedChainId.ARBITRUM_RINKEBY,
    SupportedChainId.POLYGON_MUMBAI,
    SupportedChainId.POLYGON,
  ]),
  [SupportedChainId.HYDRA]: HYDRACHAIN_V3_MIGRATOR_ADDRESSES,
  [SupportedChainId.TESTNET]: HYDRACHAIN_V3_MIGRATOR_ADDRESSES_TESTNET,
  [SupportedChainId.DEVNET]: HYDRACHAIN_V3_MIGRATOR_ADDRESSES_DEVNET,
  [SupportedChainId.CELO]: CELO_V3_MIGRATOR_ADDRESSES,
  [SupportedChainId.CELO_ALFAJORES]: CELO_V3_MIGRATOR_ADDRESSES,
}

export const MULTICALL_ADDRESS: AddressMap = {
  ...constructSameAddressMap('0x1F98415757620B543A52E61c46B32eB19261F984', [
    SupportedChainId.OPTIMISM_GOERLI,
    SupportedChainId.OPTIMISM,
    SupportedChainId.POLYGON_MUMBAI,
    SupportedChainId.POLYGON,
  ]),
  [SupportedChainId.ARBITRUM_ONE]: '0xadF885960B47eA2CD9B55E6DAc6B42b7Cb2806dB',
  [SupportedChainId.ARBITRUM_RINKEBY]: '0xa501c031958F579dB7676fF1CE78AD305794d579',
  [SupportedChainId.HYDRA]: HYDRACHAIN_MULTICALL_ADDRESS,
  [SupportedChainId.TESTNET]: HYDRACHAIN_MULTICALL_ADDRESS_TESTNET,
  [SupportedChainId.DEVNET]: HYDRACHAIN_MULTICALL_ADDRESS_DEVNET,
  [SupportedChainId.CELO]: CELO_MULTICALL_ADDRESS,
  [SupportedChainId.CELO_ALFAJORES]: CELO_MULTICALL_ADDRESS,
}

export const SWAP_ROUTER_ADDRESSES: AddressMap = {
  ...constructSameAddressMap('0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45', [
    SupportedChainId.OPTIMISM,
    SupportedChainId.OPTIMISM_GOERLI,
    SupportedChainId.ARBITRUM_ONE,
    SupportedChainId.ARBITRUM_RINKEBY,
    SupportedChainId.POLYGON,
    SupportedChainId.POLYGON_MUMBAI,
  ]),
  [SupportedChainId.HYDRA]: HYDRACHAIN_SWAP_ROUTER_ADDRESSES,
  [SupportedChainId.TESTNET]: HYDRACHAIN_SWAP_ROUTER_ADDRESSES_TESTNET,
  [SupportedChainId.DEVNET]: HYDRACHAIN_SWAP_ROUTER_ADDRESSES_DEVNET,
  [SupportedChainId.CELO]: CELO_ROUTER_ADDRESS,
  [SupportedChainId.CELO_ALFAJORES]: CELO_ROUTER_ADDRESS,
}

/**
 * The oldest V0 governance address
 */
export const GOVERNANCE_ALPHA_V0_ADDRESSES: AddressMap = constructSameAddressMap(
  '0x5e4be8Bc9637f0EAA1A755019e06A68ce081D58F'
)
/**
 * The older V1 governance address
 */
export const GOVERNANCE_ALPHA_V1_ADDRESSES: AddressMap = {
  [SupportedChainId.MAINNET]: '0xC4e172459f1E7939D522503B81AFAaC1014CE6F6',
}
/**
 * The latest governor bravo that is currently admin of timelock
 */
export const GOVERNANCE_BRAVO_ADDRESSES: AddressMap = {
  [SupportedChainId.MAINNET]: '0x408ED6354d4973f66138C91495F2f2FCbd8724C3',
}

export const TIMELOCK_ADDRESS: AddressMap = constructSameAddressMap('0x1a9C8182C09F50C8318d769245beA52c32BE35BC')

export const MERKLE_DISTRIBUTOR_ADDRESS: AddressMap = {
  [SupportedChainId.MAINNET]: '0x090D4613473dEE047c3f2706764f49E0821D256e',
}

export const ARGENT_WALLET_DETECTOR_ADDRESS: AddressMap = {
  [SupportedChainId.MAINNET]: '0xeca4B0bDBf7c55E9b7925919d03CbF8Dc82537E8',
}

export const QUOTER_ADDRESSES: AddressMap = {
  ...constructSameAddressMap('0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6', [
    SupportedChainId.OPTIMISM,
    SupportedChainId.OPTIMISM_GOERLI,
    SupportedChainId.ARBITRUM_ONE,
    SupportedChainId.ARBITRUM_RINKEBY,
    SupportedChainId.POLYGON_MUMBAI,
    SupportedChainId.POLYGON,
  ]),
  [SupportedChainId.HYDRA]: HYDRACHAIN_QUOTER_ADDRESSES,
  [SupportedChainId.TESTNET]: HYDRACHAIN_QUOTER_ADDRESSES_TESTNET,
  [SupportedChainId.DEVNET]: HYDRACHAIN_QUOTER_ADDRESSES_DEVNET,
  [SupportedChainId.CELO]: CELO_QUOTER_ADDRESSES,
  [SupportedChainId.CELO_ALFAJORES]: CELO_QUOTER_ADDRESSES,
}

export const NONFUNGIBLE_POSITION_MANAGER_ADDRESSES: AddressMap = {
  ...constructSameAddressMap('0xC36442b4a4522E871399CD717aBDD847Ab11FE88', [
    SupportedChainId.OPTIMISM,
    SupportedChainId.OPTIMISM_GOERLI,
    SupportedChainId.ARBITRUM_ONE,
    SupportedChainId.ARBITRUM_RINKEBY,
    SupportedChainId.POLYGON_MUMBAI,
    SupportedChainId.POLYGON,
  ]),
  [SupportedChainId.HYDRA]: HYDRACHAIN_NONFUNGIBLE_POSITION_MANAGER_ADDRESSES,
  [SupportedChainId.TESTNET]: HYDRACHAIN_NONFUNGIBLE_POSITION_MANAGER_ADDRESSES_TESTNET,
  [SupportedChainId.DEVNET]: HYDRACHAIN_NONFUNGIBLE_POSITION_MANAGER_ADDRESSES_DEVNET,
  [SupportedChainId.CELO]: CELO_NONFUNGIBLE_POSITION_MANAGER_ADDRESSES,
  [SupportedChainId.CELO_ALFAJORES]: CELO_NONFUNGIBLE_POSITION_MANAGER_ADDRESSES,
}

export const ENS_REGISTRAR_ADDRESSES: AddressMap = {
  [SupportedChainId.MAINNET]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
  [SupportedChainId.ROPSTEN]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
  [SupportedChainId.GOERLI]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
  [SupportedChainId.RINKEBY]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
}

export const SOCKS_CONTROLLER_ADDRESSES: AddressMap = {
  [SupportedChainId.MAINNET]: '0x65770b5283117639760beA3F867b69b3697a91dd',
}

export const TICK_LENS_ADDRESSES: AddressMap = {
  [SupportedChainId.ARBITRUM_ONE]: '0xbfd8137f7d1516D3ea5cA83523914859ec47F573',
  [SupportedChainId.ARBITRUM_RINKEBY]: '0xbfd8137f7d1516D3ea5cA83523914859ec47F573',
  [SupportedChainId.HYDRA]: HYDRACHAIN_TICK_LENS_ADDRESSES,
  [SupportedChainId.TESTNET]: HYDRACHAIN_TICK_LENS_ADDRESSES_TESTNET,
  [SupportedChainId.DEVNET]: HYDRACHAIN_TICK_LENS_ADDRESSES_DEVNET,
  [SupportedChainId.CELO]: CELO_TICK_LENS_ADDRESSES,
  [SupportedChainId.CELO_ALFAJORES]: CELO_TICK_LENS_ADDRESSES,
}
