/* eslint-disable import/no-unused-modules */
import celoCircleLogoUrl from 'assets/images/celoCircle.png'
import ethereumLogoUrl from 'assets/images/ethereum-logo.png'
import hydraLogoDark from 'assets/images/hydra-logo.png'
import hydraLogoBlue from 'assets/images/hydra-logo-blue.png'
import hydraLogo from 'assets/images/hydra-logo-white.png'
import polygonCircleLogoUrl from 'assets/images/polygonCircle.png'
import { default as arbitrumCircleLogoUrl, default as arbitrumLogoUrl } from 'assets/svg/arbitrum_logo.svg'
import celoLogo from 'assets/svg/celo_logo.svg'
import optimismLogoUrl from 'assets/svg/optimistic_ethereum.svg'
import polygonMaticLogo from 'assets/svg/polygon-matic-logo.svg'
import ms from 'ms.macro'
import { darkTheme } from 'theme/colors'
import { getEnvironmentVariable } from 'utils/env'

import { SupportedChainId, SupportedL1ChainId, SupportedL2ChainId } from './chains'
import {
  ARBITRUM_LIST,
  CELO_LIST,
  DEVNET_HYDRASWAP_LIST,
  MAINNET_HYDRASWAP_LIST,
  OPTIMISM_LIST,
  TESTNET_HYDRASWAP_LIST,
} from './lists'

export const AVERAGE_L1_BLOCK_TIME = ms`12s`

export const MAINNET_WHYDRA_ADDRESS = getEnvironmentVariable('REACT_APP_MAINNET_WHYDRA_ADDRESS')
export const MAINNET_EXPLORER = getEnvironmentVariable('REACT_APP_MAINNET_EXPLORER')

export const TESTNET_WHYDRA_ADDRESS = getEnvironmentVariable('REACT_APP_TESTNET_WHYDRA_ADDRESS')
export const TESTNET_EXPLORER = getEnvironmentVariable('REACT_APP_TESTNET_EXPLORER')

export const DEVNET_WHYDRA_ADDRESS = getEnvironmentVariable('REACT_APP_DEVNET_WHYDRA_ADDRESS')
export const DEVNET_EXPLORER = getEnvironmentVariable('REACT_APP_DEVNET_EXPLORER')

export const HYDRACHAIN_DEX_URL = getEnvironmentVariable('REACT_APP_HYDRACHAIN_DEX_URL')
export const HYDRACHAIN_DEX_INFO_URL = getEnvironmentVariable('REACT_APP_HYDRACHAIN_DEX_INFO_URL')

export const HYDRACHAIN_DOCS_URL = getEnvironmentVariable('REACT_APP_HYDRACHAIN_DOCS_URL')
export const HYDRACHAIN_INFO_URL = getEnvironmentVariable('REACT_APP_HYDRACHAIN_INFO_URL')
export const HYDRACHAIN_WEB_URL = getEnvironmentVariable('REACT_APP_HYDRACHAIN_WEB_URL')
export const HYDRACHAIN_DEVELOPERS_URL = getEnvironmentVariable('REACT_APP_HYDRACHAIN_DEVELOPERS_URL')
export const HYDRACHAIN_CONTACT_URL = getEnvironmentVariable('REACT_APP_HYDRACHAIN_CONTACT_URL')
export const HYDRACHAIN_GITHUB_URL = getEnvironmentVariable('REACT_APP_HYDRACHAIN_GITHUB_URL')
export const HYDRACHAIN_X_URL = getEnvironmentVariable('REACT_APP_HYDRACHAIN_X_URL')
export const HYDRACHAIN_TELEGRAM_URL = getEnvironmentVariable('REACT_APP_HYDRACHAIN_TELEGRAM_URL')
export const HYDRACHAIN_PRIVACY_POLICY_URL = getEnvironmentVariable('REACT_APP_HYDRACHAIN_PRIVACY_POLICY_URL')
export const HYDRACHAIN_BLOG_URL = getEnvironmentVariable('REACT_APP_HYDRACHAIN_BLOG_URL')
export const HYDRACHAIN_DAO_URL = getEnvironmentVariable('REACT_APP_HYDRACHAIN_DAO_URL')

export enum NetworkType {
  L1,
  L2,
}
interface BaseChainInfo {
  readonly networkType: NetworkType
  readonly blockWaitMsBeforeWarning?: number
  readonly docs: string
  readonly bridge?: string
  readonly explorer: string
  readonly infoLink: string
  readonly logoUrl: string
  readonly circleLogoUrl?: string
  readonly label: string
  readonly helpCenterUrl?: string
  readonly nativeCurrency: {
    name: string // e.g. 'Goerli ETH',
    symbol: string // e.g. 'gorETH',
    decimals: number // e.g. 18,
  }
  readonly color?: string
  readonly backgroundColor?: string
}

interface L1ChainInfo extends BaseChainInfo {
  readonly networkType: NetworkType.L1
  readonly defaultListUrl?: string
  readonly label: string
}

export interface L2ChainInfo extends BaseChainInfo {
  readonly networkType: NetworkType.L2
  readonly bridge: string
  readonly statusPage?: string
  readonly defaultListUrl: string
  readonly label: string
}

type ChainInfoMap = { readonly [chainId: number]: L1ChainInfo | L2ChainInfo }

const CHAIN_INFO: ChainInfoMap = {
  // VITO: Update the mainnet when released
  [SupportedChainId.MAINNET]: {
    networkType: NetworkType.L1,
    docs: HYDRACHAIN_DOCS_URL,
    explorer: MAINNET_EXPLORER,
    infoLink: HYDRACHAIN_INFO_URL,
    label: 'Hydra Chain',
    logoUrl: hydraLogoBlue,
    circleLogoUrl: polygonCircleLogoUrl,
    nativeCurrency: { name: 'Hydra', symbol: 'HYDRA', decimals: 18 },
    defaultListUrl: MAINNET_HYDRASWAP_LIST,
    color: darkTheme.chain_137,
    backgroundColor: darkTheme.chain_137_background,
  },
  [SupportedChainId.TESTNET]: {
    networkType: NetworkType.L1,
    docs: HYDRACHAIN_DOCS_URL,
    explorer: TESTNET_EXPLORER,
    infoLink: HYDRACHAIN_INFO_URL,
    label: 'Hydra Chain Testnet',
    logoUrl: hydraLogo,
    circleLogoUrl: polygonCircleLogoUrl,
    nativeCurrency: { name: 'Hydra Testnet', symbol: 'tHYDRA', decimals: 18 },
    defaultListUrl: TESTNET_HYDRASWAP_LIST,
    color: darkTheme.chain_137,
    backgroundColor: darkTheme.chain_137_background,
  },
  [SupportedChainId.DEVNET]: {
    networkType: NetworkType.L1,
    docs: HYDRACHAIN_DOCS_URL,
    explorer: DEVNET_EXPLORER,
    infoLink: HYDRACHAIN_INFO_URL,
    label: 'Hydra Chain Devnet',
    logoUrl: hydraLogoDark,
    circleLogoUrl: polygonCircleLogoUrl,
    nativeCurrency: { name: 'Hydra Devnet', symbol: 'dHYDRA', decimals: 18 },
    defaultListUrl: DEVNET_HYDRASWAP_LIST,
    color: darkTheme.chain_137,
    backgroundColor: darkTheme.chain_137_background,
  },
  [SupportedChainId.RINKEBY]: {
    networkType: NetworkType.L1,
    docs: HYDRACHAIN_DOCS_URL,
    explorer: 'https://rinkeby.etherscan.io/',
    infoLink: HYDRACHAIN_DEX_INFO_URL,
    label: 'Rinkeby',
    logoUrl: ethereumLogoUrl,
    nativeCurrency: { name: 'Rinkeby Ether', symbol: 'rETH', decimals: 18 },
    color: darkTheme.chain_4,
  },
  [SupportedChainId.ROPSTEN]: {
    networkType: NetworkType.L1,
    docs: HYDRACHAIN_DOCS_URL,
    explorer: 'https://ropsten.etherscan.io/',
    infoLink: HYDRACHAIN_DEX_INFO_URL,
    label: 'Ropsten',
    logoUrl: ethereumLogoUrl,
    nativeCurrency: { name: 'Ropsten Ether', symbol: 'ropETH', decimals: 18 },
    color: darkTheme.chain_3,
  },
  [SupportedChainId.KOVAN]: {
    networkType: NetworkType.L1,
    docs: HYDRACHAIN_DOCS_URL,
    explorer: 'https://kovan.etherscan.io/',
    infoLink: HYDRACHAIN_DEX_INFO_URL,
    label: 'Kovan',
    logoUrl: ethereumLogoUrl,
    nativeCurrency: { name: 'Kovan Ether', symbol: 'kovETH', decimals: 18 },
    color: darkTheme.chain_420,
  },
  [SupportedChainId.GOERLI]: {
    networkType: NetworkType.L1,
    docs: HYDRACHAIN_DOCS_URL,
    explorer: 'https://goerli.etherscan.io/',
    infoLink: HYDRACHAIN_DEX_INFO_URL,
    label: 'Görli',
    logoUrl: ethereumLogoUrl,
    nativeCurrency: { name: 'Görli Ether', symbol: 'görETH', decimals: 18 },
    color: darkTheme.chain_5,
  },
  [SupportedChainId.OPTIMISM]: {
    networkType: NetworkType.L2,
    blockWaitMsBeforeWarning: ms`25m`,
    bridge: 'https://app.optimism.io/bridge',
    defaultListUrl: OPTIMISM_LIST,
    docs: 'https://optimism.io/',
    explorer: 'https://optimistic.etherscan.io/',
    infoLink: `${HYDRACHAIN_DEX_INFO_URL}/#/optimism/`,
    label: 'Optimism',
    logoUrl: optimismLogoUrl,
    // Optimism perfers same icon for both
    circleLogoUrl: optimismLogoUrl,
    statusPage: 'https://optimism.io/status',
    helpCenterUrl: HYDRACHAIN_CONTACT_URL,
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    color: darkTheme.chain_10,
    backgroundColor: darkTheme.chain_10_background,
  },
  [SupportedChainId.OPTIMISM_GOERLI]: {
    networkType: NetworkType.L2,
    blockWaitMsBeforeWarning: ms`25m`,
    bridge: 'https://app.optimism.io/bridge',
    defaultListUrl: OPTIMISM_LIST,
    docs: 'https://optimism.io/',
    explorer: 'https://goerli-optimism.etherscan.io/',
    infoLink: `${HYDRACHAIN_DEX_INFO_URL}/#/optimism/`,
    label: 'Optimism Görli',
    logoUrl: optimismLogoUrl,
    statusPage: 'https://optimism.io/status',
    helpCenterUrl: HYDRACHAIN_CONTACT_URL,
    nativeCurrency: { name: 'Optimism Goerli Ether', symbol: 'görOpETH', decimals: 18 },
    color: darkTheme.chain_420,
  },
  [SupportedChainId.ARBITRUM_ONE]: {
    networkType: NetworkType.L2,
    blockWaitMsBeforeWarning: ms`10m`,
    bridge: 'https://bridge.arbitrum.io/',
    docs: 'https://offchainlabs.com/',
    explorer: 'https://arbiscan.io/',
    infoLink: `${HYDRACHAIN_DEX_INFO_URL}/#/arbitrum`,
    label: 'Arbitrum',
    logoUrl: arbitrumLogoUrl,
    circleLogoUrl: arbitrumCircleLogoUrl,
    defaultListUrl: ARBITRUM_LIST,
    helpCenterUrl: HYDRACHAIN_CONTACT_URL,
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    color: darkTheme.chain_42,
    backgroundColor: darkTheme.chain_42161_background,
  },
  [SupportedChainId.ARBITRUM_RINKEBY]: {
    networkType: NetworkType.L2,
    blockWaitMsBeforeWarning: ms`10m`,
    bridge: 'https://bridge.arbitrum.io/',
    docs: 'https://offchainlabs.com/',
    explorer: 'https://rinkeby-explorer.arbitrum.io/',
    infoLink: `${HYDRACHAIN_DEX_INFO_URL}/#/arbitrum/`,
    label: 'Arbitrum Rinkeby',
    logoUrl: arbitrumLogoUrl,
    defaultListUrl: ARBITRUM_LIST,
    helpCenterUrl: HYDRACHAIN_CONTACT_URL,
    nativeCurrency: { name: 'Rinkeby Arbitrum Ether', symbol: 'rinkArbETH', decimals: 18 },
    color: darkTheme.chain_421611,
  },
  [SupportedChainId.POLYGON]: {
    networkType: NetworkType.L1,
    blockWaitMsBeforeWarning: ms`10m`,
    bridge: 'https://wallet.polygon.technology/login',
    docs: 'https://polygon.io/',
    explorer: 'https://polygonscan.com/',
    infoLink: `${HYDRACHAIN_DEX_INFO_URL}/#/polygon/`,
    label: 'Polygon',
    logoUrl: polygonMaticLogo,
    circleLogoUrl: polygonCircleLogoUrl,
    nativeCurrency: { name: 'Polygon Matic', symbol: 'MATIC', decimals: 18 },
    color: darkTheme.chain_137,
    backgroundColor: darkTheme.chain_137_background,
  },
  [SupportedChainId.POLYGON_MUMBAI]: {
    networkType: NetworkType.L1,
    blockWaitMsBeforeWarning: ms`10m`,
    bridge: 'https://wallet.polygon.technology/bridge',
    docs: 'https://polygon.io/',
    explorer: 'https://mumbai.polygonscan.com/',
    infoLink: `${HYDRACHAIN_DEX_INFO_URL}/#/polygon/`,
    label: 'Polygon Mumbai',
    logoUrl: polygonMaticLogo,
    nativeCurrency: { name: 'Polygon Mumbai Matic', symbol: 'mMATIC', decimals: 18 },
  },
  [SupportedChainId.CELO]: {
    networkType: NetworkType.L1,
    blockWaitMsBeforeWarning: ms`10m`,
    bridge: 'https://www.portalbridge.com/#/transfer',
    docs: 'https://docs.celo.org/',
    explorer: 'https://celoscan.io/',
    infoLink: `${HYDRACHAIN_DEX_INFO_URL}/#/celo`,
    label: 'Celo',
    logoUrl: celoLogo,
    circleLogoUrl: celoCircleLogoUrl,
    nativeCurrency: { name: 'Celo', symbol: 'CELO', decimals: 18 },
    defaultListUrl: CELO_LIST,
  },
  [SupportedChainId.CELO_ALFAJORES]: {
    networkType: NetworkType.L1,
    blockWaitMsBeforeWarning: ms`10m`,
    bridge: 'https://www.portalbridge.com/#/transfer',
    docs: 'https://docs.celo.org/',
    explorer: 'https://alfajores-blockscout.celo-testnet.org/',
    infoLink: `${HYDRACHAIN_DEX_INFO_URL}/#/celo`,
    label: 'Celo Alfajores',
    logoUrl: celoLogo,
    nativeCurrency: { name: 'Celo', symbol: 'CELO', decimals: 18 },
    defaultListUrl: CELO_LIST,
  },
}

export function getChainInfo(chainId: SupportedL1ChainId): L1ChainInfo
export function getChainInfo(chainId: SupportedL2ChainId): L2ChainInfo
export function getChainInfo(chainId: SupportedChainId): L1ChainInfo | L2ChainInfo
export function getChainInfo(
  chainId: SupportedChainId | SupportedL1ChainId | SupportedL2ChainId | number | undefined
): L1ChainInfo | L2ChainInfo | undefined

/**
 * Overloaded method for returning ChainInfo given a chainID
 * Return type varies depending on input type:
 * number | undefined -> returns chaininfo | undefined
 * SupportedChainId -> returns L1ChainInfo | L2ChainInfo
 * SupportedL1ChainId -> returns L1ChainInfo
 * SupportedL2ChainId -> returns L2ChainInfo
 */
export function getChainInfo(chainId: any): any {
  if (chainId) {
    return CHAIN_INFO[chainId] ?? undefined
  }
  return undefined
}

const MAINNET_INFO = CHAIN_INFO[SupportedChainId.MAINNET]
export function getChainInfoOrDefault(chainId: number | undefined) {
  return getChainInfo(chainId) ?? MAINNET_INFO
}
