import { InterfaceElementName } from '@uniswap/analytics-events'
import { HYDRACHAIN_DOCS_URL } from 'constants/chainInfo'
import { Terminal } from 'react-feather'
import styled from 'styled-components/macro'
import { lightTheme } from 'theme/colors'

import darkArrowImgSrc from './images/aboutArrowDark.png'
import lightArrowImgSrc from './images/aboutArrowLight.png'
import darkTerminalImgSrc from './images/aboutTerminalDark.png'
import swapCardImgSrc from './images/swapCard.png'

export const MAIN_CARDS = [
  {
    to: '/swap',
    title: 'Swap tokens',
    description: 'Buy, sell, and explore tokens on Hydra Chain.',
    cta: 'Trade Tokens',
    darkBackgroundImgSrc: swapCardImgSrc,
    lightBackgroundImgSrc: swapCardImgSrc,
    elementName: InterfaceElementName.ABOUT_PAGE_SWAP_CARD,
  },
  // SAMVI Unused: We currently do not have the NFTs option
  // {
  //   to: '/nfts',
  //   title: 'Trade NFTs',
  //   description: 'Buy and sell NFTs across marketplaces to find more listings at better prices.',
  //   cta: 'Explore NFTs',
  //   darkBackgroundImgSrc: nftCardImgSrc,
  //   lightBackgroundImgSrc: nftCardImgSrc,
  //   elementName: InterfaceElementName.ABOUT_PAGE_NFTS_CARD,
  // },
]

const StyledCardLogo = styled.img`
  min-width: 20px;
  min-height: 20px;
  max-height: 48px;
  max-width: 48px;
`

export const MORE_CARDS = [
  // SAMVI Unused: We currently do not have the buy option
  // {
  //   to: 'https://support.uniswap.org/hc/en-us/articles/11306574799117-How-to-use-Moon-Pay-on-the-Uniswap-web-app-',
  //   external: true,
  //   title: 'Buy crypto',
  //   description: 'Buy crypto with your credit card or bank account at the best rates.',
  //   lightIcon: <DollarSign color={lightTheme.textTertiary} size={48} />,
  //   darkIcon: <StyledCardLogo src={darkDollarImgSrc} alt="Earn" />,
  //   cta: 'Buy now',
  //   elementName: InterfaceElementName.ABOUT_PAGE_BUY_CRYPTO_CARD,
  // },
  {
    to: '/pool',
    title: 'Earn',
    description: 'Provide liquidity to pools on HydraDex and earn fees on swaps.',
    lightIcon: <StyledCardLogo src={lightArrowImgSrc} alt="Analytics" />,
    darkIcon: <StyledCardLogo src={darkArrowImgSrc} alt="Analytics" />,
    cta: 'Provide liquidity',
    elementName: InterfaceElementName.ABOUT_PAGE_EARN_CARD,
  },
  {
    to: HYDRACHAIN_DOCS_URL,
    external: true,
    title: 'Build dApps',
    description: 'Build apps and tools on the largest DeFi protocol on Hydra Chain.',
    lightIcon: <Terminal color={lightTheme.textTertiary} size={48} />,
    darkIcon: <StyledCardLogo src={darkTerminalImgSrc} alt="Developers" />,
    cta: 'Developer docs',
    elementName: InterfaceElementName.ABOUT_PAGE_DEV_DOCS_CARD,
  },
]
