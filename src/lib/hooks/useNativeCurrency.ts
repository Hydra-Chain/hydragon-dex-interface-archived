import { NativeCurrency, Token } from '@uniswap/sdk-core'
import { useWeb3React } from '@web3-react/core'
import { IS_PROD } from 'constants/chainInfo'
import { SupportedChainId } from 'constants/chains'
import { nativeOnChain } from 'constants/tokens'
import { useMemo } from 'react'

export default function useNativeCurrency(): NativeCurrency | Token {
  const { chainId } = useWeb3React()
  return useMemo(
    () =>
      chainId
        ? nativeOnChain(chainId)
        : // display mainnet when not connected
          // VITO: Update when mainnet released
          nativeOnChain(IS_PROD ? SupportedChainId.HYDRA : SupportedChainId.TESTNET),
    [chainId]
  )
}
