import TokenLogoLookupTable from 'constants/TokenLogoLookupTable'
import { isDevnet, isHydra, isHydraMain, isTestnet } from 'constants/tokens'
import { chainIdToNetworkName, getNativeLogoURI } from 'lib/hooks/useCurrencyLogoURIs'
import uriToHttp from 'lib/utils/uriToHttp'
import { useCallback, useEffect, useState } from 'react'
import { isAddress } from 'utils'
import { getEnvironmentVariable } from 'utils/env'

const BAD_SRCS: { [tokenAddress: string]: true } = {}

// SAMVI Style: URLs for token logos on hydraswap
// eslint-disable-next-line import/no-unused-modules
export const MAINNET_HYDRASWAP_LOGO = getEnvironmentVariable('REACT_APP_MAINNET_HYDRASWAP_TOKEN_LOGO')
// eslint-disable-next-line import/no-unused-modules
export const TESTNET_HYDRASWAP_LOGO = getEnvironmentVariable('REACT_APP_TESTNET_HYDRASWAP_TOKEN_LOGO')
// eslint-disable-next-line import/no-unused-modules
export const DEVNET_HYDRASWAP_LOGO = getEnvironmentVariable('REACT_APP_DEVNET_HYDRASWAP_TOKEN_LOGO')

// Converts uri's into fetchable urls
function parseLogoSources(uris: string[]) {
  const urls: string[] = []
  uris.forEach((uri) => urls.push(...uriToHttp(uri)))
  return urls
}

// Parses uri's, favors non-coingecko images, and improves coingecko logo quality
function prioritizeLogoSources(uris: string[]) {
  const parsedUris = uris.map((uri) => uriToHttp(uri)).flat(1)
  const preferredUris: string[] = []

  // Consolidate duplicate coingecko urls into one fallback source
  let coingeckoUrl: string | undefined = undefined

  parsedUris.forEach((uri) => {
    if (uri.startsWith('https://assets.coingecko')) {
      if (!coingeckoUrl) {
        coingeckoUrl = uri.replace(/small|thumb/g, 'large')
      }
    } else {
      preferredUris.push(uri)
    }
  })
  // Places coingecko urls in the back of the source array
  return coingeckoUrl ? [...preferredUris, coingeckoUrl] : preferredUris
}

function getInitialUrl(address?: string | null, chainId?: number | null, isNative?: boolean): string | undefined {
  if (chainId && isNative) return getNativeLogoURI(chainId)

  const networkName = chainId ? chainIdToNetworkName(chainId) : 'ethereum'
  const checksummedAddress = isAddress(address)
  if (checksummedAddress) {
    // SAMVI Info: add token logos here to use for hydraswap, create and use links to token logos
    if (chainId && isHydra(chainId)) {
      if (isHydraMain(chainId)) {
        return `${MAINNET_HYDRASWAP_LOGO}${checksummedAddress}/logo.png`
      } else if (isTestnet(chainId)) {
        return `${TESTNET_HYDRASWAP_LOGO}${checksummedAddress}/logo.png`
      } else if (isDevnet(chainId)) {
        return `${DEVNET_HYDRASWAP_LOGO}${checksummedAddress}/logo.png`
      }
    } else if (!chainId) {
      return `https://raw.githubusercontent.com/Hydra-Chain/hydragon-dex-token-list/main/assets/icons/Hydra_Logo_Black.png`
    } else {
      return `https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/${networkName}/assets/${checksummedAddress}/logo.png`
    }
  }
  return undefined
}

export default function useAssetLogoSource(
  address?: string | null,
  chainId?: number | null,
  isNative?: boolean,
  backupImg?: string | null
): [string | undefined, () => void] {
  const [current, setCurrent] = useState<string | undefined>(getInitialUrl(address, chainId, isNative))
  const [fallbackSrcs, setFallbackSrcs] = useState<string[] | undefined>(undefined)

  useEffect(() => {
    setCurrent(getInitialUrl(address, chainId, isNative))
    setFallbackSrcs(undefined)
  }, [address, chainId, isNative])

  const nextSrc = useCallback(() => {
    if (current) {
      BAD_SRCS[current] = true
    }
    // Parses and stores logo sources from tokenlists if assets repo url fails
    if (!fallbackSrcs) {
      const uris = TokenLogoLookupTable.getIcons(address, chainId) ?? []
      if (backupImg) uris.push(backupImg)
      const tokenListIcons = prioritizeLogoSources(parseLogoSources(uris))

      setCurrent(tokenListIcons.find((src) => !BAD_SRCS[src]))
      setFallbackSrcs(tokenListIcons)
    } else {
      setCurrent(fallbackSrcs.find((src) => !BAD_SRCS[src]))
    }
  }, [current, fallbackSrcs, address, chainId, backupImg])

  return [current, nextSrc]
}
