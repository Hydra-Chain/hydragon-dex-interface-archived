import { Trans } from '@lingui/macro'
import Column from 'components/Column'
import { BlockedIcon } from 'components/TokenSafety/TokenSafetyIcon'
import { HYDRACHAIN_CONTACT_URL, HYDRACHAIN_WEB_URL } from 'constants/chainInfo'
import styled from 'styled-components/macro'
import { ExternalLink, ThemedText } from 'theme'

import Modal from '../Modal'

const ContentWrapper = styled(Column)`
  align-items: center;
  margin: 32px;
  text-align: center;
  font-size: 12px;
`
// const Copy = styled(CopyHelper)`
//   font-size: 12px;
// `

interface ConnectedAccountBlockedProps {
  account: string | null | undefined
  isOpen: boolean
}

export default function ConnectedAccountBlocked(props: ConnectedAccountBlockedProps) {
  // const theme = useTheme()
  return (
    <Modal isOpen={props.isOpen} onDismiss={Function.prototype()}>
      <ContentWrapper>
        <BlockedIcon size="22px" />
        <ThemedText.DeprecatedLargeHeader lineHeight={2} marginBottom={1} marginTop={1}>
          <Trans>Blocked Address</Trans>
        </ThemedText.DeprecatedLargeHeader>
        <ThemedText.DeprecatedDarkGray fontSize={12} marginBottom={12}>
          {props.account}
        </ThemedText.DeprecatedDarkGray>
        <ThemedText.DeprecatedMain fontSize={14} marginBottom={12}>
          <Trans>This address is blocked on the HydraDex interface because it is associated with one or more</Trans>{' '}
          <ExternalLink href={HYDRACHAIN_WEB_URL}>
            <Trans>blocked activities</Trans>
          </ExternalLink>
          .
        </ThemedText.DeprecatedMain>
        <ThemedText.DeprecatedMain fontSize={12}>
          <Trans>If you believe this is an error, please send an email including your address to </Trans>{' '}
          {/* SAMVI Info: Use the contact form of the website */}
          <ExternalLink href={HYDRACHAIN_CONTACT_URL}>
            <Trans>our contact form</Trans>
          </ExternalLink>
        </ThemedText.DeprecatedMain>
        {/* <Copy
          toCopy="compliance@uniswap.org"
          fontSize={14}
          iconSize={16}
          gap={6}
          color={theme.accentAction}
          iconPosition="right"
        >
          compliance@uniswap.org
        </Copy> */}
      </ContentWrapper>
    </Modal>
  )
}
