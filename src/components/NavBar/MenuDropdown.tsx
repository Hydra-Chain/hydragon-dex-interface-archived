import { Trans } from '@lingui/macro'
import FeatureFlagModal from 'components/FeatureFlagModal/FeatureFlagModal'
import { PrivacyPolicyModal } from 'components/PrivacyPolicy'
import {
  HYDRACHAIN_CONTACT_URL,
  HYDRACHAIN_DEVELOPERS_URL,
  HYDRACHAIN_DEX_URL,
  HYDRACHAIN_GITHUB_URL,
  HYDRACHAIN_WEB_URL,
  HYDRACHAIN_X_URL,
} from 'constants/chainInfo'
import { useOnClickOutside } from 'hooks/useOnClickOutside'
import { Box } from 'nft/components/Box'
import { Column, Row } from 'nft/components/Flex'
import { BarChartIcon, EllipsisIcon, GithubIconMenu, TwitterIconMenu } from 'nft/components/icons'
import { body, bodySmall } from 'nft/css/common.css'
import { themeVars } from 'nft/css/sprinkles.css'
import { ReactNode, useReducer, useRef } from 'react'
import { NavLink, NavLinkProps } from 'react-router-dom'
import styled from 'styled-components/macro'

import * as styles from './MenuDropdown.css'
import { NavDropdown } from './NavDropdown'
import { NavIcon } from './NavIcon'

const PrimaryMenuRow = ({
  to,
  href,
  close,
  children,
}: {
  to?: NavLinkProps['to']
  href?: string
  close?: () => void
  children: ReactNode
}) => {
  return (
    <>
      {to ? (
        <NavLink to={to} className={styles.MenuRow}>
          <Row onClick={close}>{children}</Row>
        </NavLink>
      ) : (
        <Row as="a" href={href} target="_blank" rel="noopener noreferrer" className={styles.MenuRow}>
          {children}
        </Row>
      )}
    </>
  )
}

const StyledBox = styled(Box)`
  align-items: center;
  display: flex;
  justify-content: center;
`
const PrimaryMenuRowText = ({ children }: { children: ReactNode }) => {
  return <StyledBox className={`${styles.PrimaryText} ${body}`}>{children}</StyledBox>
}

PrimaryMenuRow.Text = PrimaryMenuRowText

const SecondaryLinkedText = ({
  href,
  onClick,
  children,
}: {
  href?: string
  onClick?: () => void
  children: ReactNode
}) => {
  return (
    <Box
      as={href ? 'a' : 'div'}
      href={href ?? undefined}
      target={href ? '_blank' : undefined}
      rel={href ? 'noopener noreferrer' : undefined}
      className={`${styles.SecondaryText} ${bodySmall}`}
      onClick={onClick}
      cursor="pointer"
    >
      {children}
    </Box>
  )
}

const Separator = () => {
  return <Box className={styles.Separator} />
}

const IconRow = ({ children }: { children: ReactNode }) => {
  return <Row className={styles.IconRow}>{children}</Row>
}

const Icon = ({ href, children }: { href?: string; children: ReactNode }) => {
  return (
    <>
      <Box
        as={href ? 'a' : 'div'}
        href={href ?? undefined}
        target={href ? '_blank' : undefined}
        rel={href ? 'noopener noreferrer' : undefined}
        display="flex"
        flexDirection="column"
        color="textPrimary"
        background="none"
        border="none"
        justifyContent="center"
        textAlign="center"
        marginRight="12"
      >
        {children}
      </Box>
    </>
  )
}

export const MenuDropdown = () => {
  const [isOpen, toggleOpen] = useReducer((s) => !s, false)
  // const togglePrivacyPolicy = useToggleModal(ApplicationModal.PRIVACY_POLICY)
  // const openFeatureFlagsModal = useToggleModal(ApplicationModal.FEATURE_FLAGS)
  const ref = useRef<HTMLDivElement>(null)
  useOnClickOutside(ref, isOpen ? toggleOpen : undefined)

  return (
    <>
      <Box position="relative" ref={ref}>
        <NavIcon isActive={isOpen} onClick={toggleOpen}>
          <EllipsisIcon viewBox="0 0 20 20" width={24} height={24} />
        </NavIcon>

        {isOpen && (
          <NavDropdown top={{ sm: 'unset', lg: '56' }} bottom={{ sm: '56', lg: 'unset' }} right="0">
            <Column gap="16">
              <Column paddingX="8" gap="4">
                {/* Hydra: Remove the some options because we do not support vote currently */}
                {/* <PrimaryMenuRow to="/vote" close={toggleOpen}>
                  <Icon>
                    <GovernanceIcon width={24} height={24} />
                  </Icon>
                  <PrimaryMenuRow.Text>
                    <Trans>Vote in governance</Trans>
                  </PrimaryMenuRow.Text>
                </PrimaryMenuRow> */}
                <PrimaryMenuRow href={HYDRACHAIN_DEX_URL}>
                  <Icon>
                    <BarChartIcon width={24} height={24} />
                  </Icon>
                  <PrimaryMenuRow.Text>
                    <Trans>View more analytics</Trans>
                  </PrimaryMenuRow.Text>
                </PrimaryMenuRow>
              </Column>
              <Separator />
              <Box
                display="flex"
                flexDirection={{ sm: 'row', md: 'column' }}
                flexWrap="wrap"
                alignItems={{ sm: 'center', md: 'flex-start' }}
                paddingX="8"
              >
                <SecondaryLinkedText href={HYDRACHAIN_WEB_URL}>
                  <Trans>About</Trans> ↗
                </SecondaryLinkedText>
                <SecondaryLinkedText href={HYDRACHAIN_DEVELOPERS_URL}>
                  <Trans>Documentation</Trans> ↗
                </SecondaryLinkedText>
                <SecondaryLinkedText href={HYDRACHAIN_CONTACT_URL}>
                  <Trans>Contact Us</Trans> ↗
                </SecondaryLinkedText>
                {/* Hydra: Remove these because we don't need them now */}
                {/* <SecondaryLinkedText
                  onClick={() => {
                    toggleOpen()
                    togglePrivacyPolicy()
                  }}
                >
                  <Trans>Legal & Privacy</Trans> ↗
                </SecondaryLinkedText>
                {(isDevelopmentEnv() || isStagingEnv()) && (
                  <SecondaryLinkedText onClick={openFeatureFlagsModal}>
                    <Trans>Feature Flags</Trans>
                  </SecondaryLinkedText>
                )} */}
              </Box>
              <IconRow>
                {/* Hydra: Remove this because we don't have discord currently */}
                {/* <Icon href="https://discord.com/invite/FCfyBSbCU5">
                  <DiscordIconMenu
                    className={styles.hover}
                    width={24}
                    height={24}
                    color={themeVars.colors.textSecondary}
                  />
                </Icon> */}
                <Icon href={HYDRACHAIN_X_URL}>
                  <TwitterIconMenu
                    className={styles.hover}
                    width={24}
                    height={24}
                    color={themeVars.colors.textSecondary}
                  />
                </Icon>
                <Icon href={HYDRACHAIN_GITHUB_URL}>
                  <GithubIconMenu
                    className={styles.hover}
                    width={24}
                    height={24}
                    color={themeVars.colors.textSecondary}
                  />
                </Icon>
              </IconRow>
            </Column>
          </NavDropdown>
        )}
      </Box>
      <PrivacyPolicyModal />
      <FeatureFlagModal />
    </>
  )
}
