import { InterfaceElementName } from '@uniswap/analytics-events'
import { HYDRACHAIN_DEVELOPERS_URL, HYDRACHAIN_DEX_INFO_URL } from 'constants/chainInfo'
import { DollarSign, Terminal } from 'react-feather'
import styled from 'styled-components/macro'
import { lightTheme } from 'theme/colors'

import hydraDragon from '../../assets/hydra/hydra-guard.png'
import hydraDragonLight from '../../assets/hydra/hydra-guard-whiteTheme.png'
import darkArrowImgSrc from './images/aboutArrowDark.png'
import lightArrowImgSrc from './images/aboutArrowLight.png'
import darkDollarImgSrc from './images/aboutDollarDark.png'
import darkTerminalImgSrc from './images/aboutTerminalDark.png'
import swapCardImgSrc from './images/swapCard.png'

export const MAIN_CARDS = [
  {
    to: '/add',
    title: 'Create pools',
    description: 'Create pools with your unique token pair on HydraDex and earn fees on swaps.',
    cta: 'Create a pool',
    darkBackgroundImgSrc: hydraDragon,
    lightBackgroundImgSrc: hydraDragonLight,
    elementName: InterfaceElementName.ABOUT_PAGE_NFTS_CARD,
  },
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
    description: 'Provide liquidity to an existing pools on HydraDex and earn fees on swaps.',
    lightIcon: <StyledCardLogo src={lightArrowImgSrc} alt="Earn" />,
    darkIcon: <StyledCardLogo src={darkArrowImgSrc} alt="Earn" />,
    cta: 'Provide liquidity',
    elementName: InterfaceElementName.ABOUT_PAGE_EARN_CARD,
  },
  {
    to: HYDRACHAIN_DEX_INFO_URL,
    external: true,
    title: 'Track pricing',
    description: 'Track tokens prices, pools volumes and statistics for on HydraDex.',
    lightIcon: <DollarSign color={lightTheme.textTertiary} size={48} />,
    darkIcon: <StyledCardLogo src={darkDollarImgSrc} alt="Statistics" />,
    cta: 'Swap statistics',
    elementName: InterfaceElementName.ABOUT_PAGE_EARN_CARD,
  },
  {
    to: HYDRACHAIN_DEVELOPERS_URL,
    external: true,
    title: 'Build dApps',
    description: 'Build apps and tools on the largest DeFi protocol on Hydra Chain.',
    lightIcon: <Terminal color={lightTheme.textTertiary} size={48} />,
    darkIcon: <StyledCardLogo src={darkTerminalImgSrc} alt="Developers" />,
    cta: 'Developer docs',
    elementName: InterfaceElementName.ABOUT_PAGE_DEV_DOCS_CARD,
  },
]
