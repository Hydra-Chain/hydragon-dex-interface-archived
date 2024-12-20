import { useWeb3React } from '@web3-react/core'
import { useIsNftPage } from 'hooks/useIsNftPage'
import { useEffect } from 'react'
import { useDarkModeManager } from 'state/user/hooks'

import { SupportedChainId } from '../../constants/chains'
import { darkTheme, lightTheme } from '../colors'

const initialStyles = {
  width: '200vw',
  height: '200vh',
  transform: 'translate(-50vw, -100vh)',
}
const backgroundResetStyles = {
  width: '100vw',
  height: '100vh',
  transform: 'unset',
}

type TargetBackgroundStyles = typeof initialStyles | typeof backgroundResetStyles

const backgroundRadialGradientElement = document.getElementById('background-radial-gradient')
const setBackground = (newValues: TargetBackgroundStyles) =>
  Object.entries(newValues).forEach(([key, value]) => {
    if (backgroundRadialGradientElement) {
      backgroundRadialGradientElement.style[key as keyof typeof backgroundResetStyles] = value
    }
  })

export default function RadialGradientByChainUpdater(): null {
  const { chainId } = useWeb3React()
  const [darkMode] = useDarkModeManager()
  const isNftPage = useIsNftPage()

  // manage background color
  useEffect(() => {
    if (!backgroundRadialGradientElement) {
      return
    }

    if (isNftPage) {
      setBackground(initialStyles)
      backgroundRadialGradientElement.style.background = darkMode
        ? darkTheme.backgroundBackdrop
        : lightTheme.backgroundBackdrop
      return
    }

    switch (chainId) {
      // SAMVI Style: Chains background colors
      case SupportedChainId.HYDRA: {
        setBackground(backgroundResetStyles)
        const hydraLightGradient =
          'radial-gradient(100% 100% at 50% 0%, hsl(180, 17.60%, 93.30%) 0%, rgba(229, 234, 236, 0.65) 49.48%, rgba(159, 113, 172, 0) 100%),rgb(75, 114, 135)'
        const hydraDarkGradient =
          'radial-gradient(100% 100% at 50% 0%, rgba(65, 78, 119, 0.29) 0%, rgba(50, 47, 100, 0.65) 49.48%, rgba(51, 27, 66, 0) 100%, rgba(31, 33, 40, 0) 100%), #0D0E0E'
        backgroundRadialGradientElement.style.background = darkMode ? hydraDarkGradient : hydraLightGradient
        break
      }
      case SupportedChainId.TESTNET: {
        setBackground(backgroundResetStyles)
        const hydraLightGradient =
          'radial-gradient(100% 100% at 50% 0%, rgba(129, 50, 50, 0.7) 0%, rgba(22, 47, 187, 0.65) 49.48%, rgba(74, 65, 65, 0) 100%),rgb(247, 205, 205)'
        const hydraDarkGradient =
          'radial-gradient(100% 100% at 50% 0%, rgba(176, 95, 97, 0.29) 0%, rgba(79, 75, 150, 0.65) 49.48%, rgba(51, 27, 66, 0) 100%, rgba(31, 33, 40, 0) 100%), #0D0E0E'
        backgroundRadialGradientElement.style.background = darkMode ? hydraDarkGradient : hydraLightGradient
        break
      }
      case SupportedChainId.DEVNET: {
        setBackground(backgroundResetStyles)
        const hydraLightGradient =
          'radial-gradient(100% 100% at 50% 0%, rgba(22, 91, 116, 0.7) 0%, rgba(68, 78, 167, 0.65) 49.48%, rgba(96, 54, 54, 0) 100%),rgb(166, 218, 238)'
        const hydraDarkGradient =
          'radial-gradient(100% 100% at 50% 0%, rgba(67, 44, 86, 0.29) 0%, rgba(34, 52, 84, 0.65) 49.48%, rgba(50, 30, 62, 0) 100%, rgba(57, 64, 43, 0) 100%), #0D0E0E'
        backgroundRadialGradientElement.style.background = darkMode ? hydraDarkGradient : hydraLightGradient
        break
      }
      case SupportedChainId.ARBITRUM_ONE:
      case SupportedChainId.ARBITRUM_RINKEBY: {
        setBackground(backgroundResetStyles)
        const arbitrumLightGradient =
          'radial-gradient(100% 100% at 50% 0%, rgba(205, 232, 251, 0.7) 0%, rgba(252, 243, 249, 0.6536) 49.48%, rgba(255, 255, 255, 0) 100%), #FFFFFF'
        const arbitrumDarkGradient =
          'radial-gradient(100% 100% at 50% 0%, rgba(10, 41, 75, 0.7) 0%, rgba(34, 30, 48, 0.6536) 49.48%, rgba(31, 33, 40, 0) 100%), #0D0E0E'
        backgroundRadialGradientElement.style.background = darkMode ? arbitrumDarkGradient : arbitrumLightGradient
        break
      }
      case SupportedChainId.OPTIMISM:
      case SupportedChainId.OPTIMISM_GOERLI: {
        setBackground(backgroundResetStyles)
        const optimismLightGradient =
          'radial-gradient(100% 100% at 50% 0%, rgba(255, 251, 242, 0.8) 0%, rgba(255, 244, 249, 0.6958) 50.52%, rgba(255, 255, 255, 0) 100%), #FFFFFF'
        const optimismDarkGradient =
          'radial-gradient(100% 100% at 50% 0%, rgba(62, 46, 56, 0.8) 0%, rgba(44, 31, 45, 0.6958) 50.52%, rgba(31, 33, 40, 0) 100%), #0D0E0E'
        backgroundRadialGradientElement.style.background = darkMode ? optimismDarkGradient : optimismLightGradient
        break
      }
      case SupportedChainId.POLYGON:
      case SupportedChainId.POLYGON_MUMBAI: {
        setBackground(backgroundResetStyles)
        const polygonLightGradient =
          'radial-gradient(100% 100% at 50% 0%, rgba(130, 71, 229, 0.2) 0%, rgba(200, 168, 255, 0.05) 52.6%, rgba(0, 0, 0, 0) 100%), #FFFFFF'
        const polygonDarkGradient =
          'radial-gradient(100% 100% at 50% 0%, rgba(130, 71, 229, 0.2) 0%, rgba(200, 168, 255, 0.05) 52.6%, rgba(0, 0, 0, 0) 100%), #0D0E0E'
        backgroundRadialGradientElement.style.background = darkMode ? polygonDarkGradient : polygonLightGradient
        break
      }
      case SupportedChainId.CELO:
      case SupportedChainId.CELO_ALFAJORES: {
        setBackground(backgroundResetStyles)
        const celoLightGradient =
          'radial-gradient(100% 100% at 50% 0%, rgba(186, 228, 210, 0.7) 0%, rgba(252, 243, 249, 0.6536) 49.48%, rgba(255, 255, 255, 0) 100%), #FFFFFF'
        const celoDarkGradient =
          'radial-gradient(100% 100% at 50% 0%, rgba(20, 49, 37, 0.29) 0%, rgba(12, 31, 23, 0.6536) 49.48%, rgba(31, 33, 40, 0) 100%, rgba(31, 33, 40, 0) 100%), #0D0E0E'
        backgroundRadialGradientElement.style.background = darkMode ? celoDarkGradient : celoLightGradient
        break
      }
      default: {
        setBackground(initialStyles)
        const defaultLightGradient =
          'radial-gradient(100% 100% at 50% 0%, rgba(255, 184, 226, 0.51) 0%, rgba(255, 255, 255, 0) 100%), #FFFFFF'
        const defaultDarkGradient = 'linear-gradient(180deg, #202738 0%, #070816 100%)'
        backgroundRadialGradientElement.style.background = darkMode ? defaultDarkGradient : defaultLightGradient
      }
    }
  }, [darkMode, chainId, isNftPage])
  return null
}
