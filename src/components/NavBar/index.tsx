import { Trans } from '@lingui/macro'
import Web3Status from 'components/Web3Status'
import { NftListV2Variant, useNftListV2Flag } from 'featureFlags/flags/nftListV2'
import { useIsNftPage } from 'hooks/useIsNftPage'
import { Box } from 'nft/components/Box'
import { Row } from 'nft/components/Flex'
import { useProfilePageState } from 'nft/hooks'
import { ProfilePageStateType } from 'nft/types'
import { ReactNode } from 'react'
import { NavLink, NavLinkProps, useLocation, useNavigate } from 'react-router-dom'
import { useIsDarkMode } from 'state/user/hooks'
import styled from 'styled-components/macro'

import hydraIconBlack from '../../assets/hydra/Hydra_Logo_Black.png'
import hydraIconWhite from '../../assets/hydra/Hydra_Logo_White.png'
import { Bag } from './Bag'
import { ChainSelector } from './ChainSelector'
import { MenuDropdown } from './MenuDropdown'
import * as styles from './style.css'

const Nav = styled.nav`
  padding: 20px 12px;
  width: 100%;
  height: ${({ theme }) => theme.navHeight}px;
  z-index: 2;
`

interface MenuItemProps {
  href: string
  id?: NavLinkProps['id']
  isActive?: boolean
  children: ReactNode
  dataTestId?: string
}

const MenuItem = ({ href, dataTestId, id, isActive, children }: MenuItemProps) => {
  return (
    <NavLink
      to={href}
      className={isActive ? styles.activeMenuItem : styles.menuItem}
      id={id}
      style={{ textDecoration: 'none' }}
      data-testid={dataTestId}
    >
      {children}
    </NavLink>
  )
}

export const PageTabs = () => {
  const { pathname } = useLocation()
  // const { chainId: connectedChainId } = useWeb3React()
  // const chainName = chainIdToBackendName(connectedChainId)

  const isPoolActive =
    pathname.startsWith('/pool') ||
    pathname.startsWith('/add') ||
    pathname.startsWith('/remove') ||
    pathname.startsWith('/increase')

  // const isNftPage = useIsNftPage()

  return (
    <>
      <MenuItem href="/swap" isActive={pathname.startsWith('/swap')}>
        <Trans>Swap</Trans>
      </MenuItem>
      {/* SAMVI Unused: disable NFTs and Tokens since we do not use them now */}
      {/* <MenuItem href={`/tokens/${chainName.toLowerCase()}`} isActive={pathname.startsWith('/tokens')}>
        <Trans>Tokens</Trans>
      </MenuItem>
      <MenuItem dataTestId="nft-nav" href="/nfts" isActive={isNftPage}>
        <Trans>NFTs</Trans>
      </MenuItem> */}
      <MenuItem href="/pool" id="pool-nav-link" isActive={isPoolActive}>
        <Trans>Pools</Trans>
      </MenuItem>
    </>
  )
}

const Navbar = () => {
  const isNftPage = useIsNftPage()
  const sellPageState = useProfilePageState((state) => state.state)
  const isNftListV2 = useNftListV2Flag() === NftListV2Variant.Enabled
  const navigate = useNavigate()
  const isDarkMode = useIsDarkMode()

  return (
    <>
      <Nav>
        <Box display="flex" height="full" flexWrap="nowrap">
          <Box className={styles.leftSideContainer}>
            <Box className={styles.logoContainer}>
              {/* <UniIcon SAMVI Style: Logo changed to HydraIcon + disable redirect
                width="48"
                height="48"
                data-testid="uniswap-logo"
                className={styles.logo}
                onClick={() => {
                  navigate({
                    pathname: "/",
                    search: "?intro=true",
                  });
                }}
              /> */}
              <img
                src={isDarkMode ? hydraIconWhite : hydraIconBlack}
                alt="HydraIcon"
                width="48"
                height="48"
                className={styles.logo}
                onClick={() => {
                  navigate({
                    pathname: '/',
                    search: '?intro=true',
                  })
                }}
              />
            </Box>
            {!isNftPage && (
              <Box display={{ sm: 'flex', lg: 'none' }}>
                <ChainSelector leftAlign={true} />
              </Box>
            )}
            <Row gap={{ xl: '0', xxl: '8' }} display={{ sm: 'none', lg: 'flex' }}>
              <PageTabs />
            </Row>
          </Box>
          {/* SAMVI Unused: We do not need the search bar here at this moment */}
          {/* <Box className={styles.searchContainer}>
            <SearchBar />
          </Box> */}
          <Box className={styles.rightSideContainer}>
            <Row gap="12">
              {/* <Box position="relative" display={{ sm: 'flex', xl: 'none' }}>
                <SearchBar />
              </Box> */}
              <Box display={{ sm: 'none', lg: 'flex' }}>
                <MenuDropdown />
              </Box>
              {isNftPage && (!isNftListV2 || sellPageState !== ProfilePageStateType.LISTING) && <Bag />}
              {!isNftPage && (
                <Box display={{ sm: 'none', lg: 'flex' }}>
                  <ChainSelector />
                </Box>
              )}

              <Web3Status />
            </Row>
          </Box>
        </Box>
      </Nav>
    </>
  )
}

export default Navbar
