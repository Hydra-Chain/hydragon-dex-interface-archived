import { useWeb3React } from '@web3-react/core'
import { isDevnet, isTestnet } from 'constants/tokens'
import { isSupportedChainId } from 'lib/hooks/routing/clientSideSmartOrderRouter'

export default function useAutoRouterSupported(): boolean {
  const { chainId } = useWeb3React()
  if (!chainId) return false
  // SAMI: disable auto router for hydraswap
  if (isTestnet(chainId) || isDevnet(chainId)) return false
  return isSupportedChainId(chainId)
}
