import { SupportedChainId } from 'constants/chains'
import useHttpLocations from 'hooks/useHttpLocations'
import { useMemo } from 'react'
import { isAddress } from 'utils'

import HydraLogo from '../../assets/hydra/Hydra_Logo_Black.png'
import CeloLogo from '../../assets/svg/celo_logo.svg'
import MaticLogo from '../../assets/svg/matic-token-icon.svg'
import { isCelo, isHydra, NATIVE_CHAIN_ID, nativeOnChain } from '../../constants/tokens'

type Network = 'hydrachain' | 'ethereum' | 'arbitrum' | 'optimism' | 'polygon'

export function chainIdToNetworkName(networkId: SupportedChainId): Network {
  switch (networkId) {
    // SAMVI Unused: Mainly used for URLs with token logos, but we use custom URLs for token logos
    case SupportedChainId.HYDRA:
      return 'hydrachain'
    case SupportedChainId.TESTNET:
      return 'hydrachain'
    case SupportedChainId.DEVNET:
      return 'hydrachain'
    case SupportedChainId.MAINNET:
      return 'ethereum'
    case SupportedChainId.ARBITRUM_ONE:
      return 'arbitrum'
    case SupportedChainId.OPTIMISM:
      return 'optimism'
    case SupportedChainId.POLYGON:
      return 'polygon'
    default:
      return 'hydrachain'
  }
}

export function getNativeLogoURI(chainId: SupportedChainId = SupportedChainId.MAINNET): string {
  switch (chainId) {
    case SupportedChainId.TESTNET || SupportedChainId.DEVNET || SupportedChainId.MAINNET:
      return HydraLogo
    case SupportedChainId.POLYGON:
    case SupportedChainId.POLYGON_MUMBAI:
      return MaticLogo
    case SupportedChainId.CELO:
    case SupportedChainId.CELO_ALFAJORES:
      return CeloLogo
    default:
      return HydraLogo
  }
}

function getTokenLogoURI(address: string, chainId: SupportedChainId = SupportedChainId.MAINNET): string | void {
  // SAMVI Info: Urls for wrapped native tokens
  if (isHydra(chainId)) {
    if (address === nativeOnChain(chainId).wrapped.address) {
      return 'https://raw.githubusercontent.com/Hydra-Chain/hydragon-dex-token-list/main/assets/icons/Hydra_Logo_Black.png'
    }
  }

  const networkName = chainIdToNetworkName(chainId)
  const networksWithUrls = [SupportedChainId.ARBITRUM_ONE, SupportedChainId.MAINNET, SupportedChainId.OPTIMISM]
  if (networksWithUrls.includes(chainId)) {
    return `https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/${networkName}/assets/${address}/logo.png`
  }

  // Celo logo logo is hosted elsewhere.
  if (isCelo(chainId)) {
    if (address === nativeOnChain(chainId).wrapped.address) {
      return 'https://raw.githubusercontent.com/ubeswap/default-token-list/master/assets/asset_CELO.png'
    }
  }
}

export default function useCurrencyLogoURIs(
  currency:
    | {
        isNative?: boolean
        isToken?: boolean
        address?: string
        chainId: number
        logoURI?: string | null
      }
    | null
    | undefined
): string[] {
  const locations = useHttpLocations(currency?.logoURI)
  return useMemo(() => {
    const logoURIs = [...locations]
    if (currency) {
      if (currency.isNative || currency.address === NATIVE_CHAIN_ID) {
        logoURIs.push(getNativeLogoURI(currency.chainId))
      } else if (currency.isToken || currency.address) {
        const checksummedAddress = isAddress(currency.address)
        const logoURI = checksummedAddress && getTokenLogoURI(checksummedAddress, currency.chainId)
        if (logoURI) {
          logoURIs.push(logoURI)
        }
      }
    }
    return logoURIs
  }, [currency, locations])
}
