import React from 'react'
import styled from 'styled-components'
import { Box, Section, Container, Heading, Text } from '@hackclub/design-system'
import { theme } from 'theme'
import Action from 'components/Action'

const Pattern = styled(Box)`
  width: 128px;
  height: 128px;
  background-image: url(/${props => props.shape}-pattern.svg);
  background-size: 100% 100%;
  position: absolute;
  z-index: 0;
  ${theme.mediaQueries.md} {
    width: 192px;
    height: 192px;
  }
  &:nth-child(1) {
    left: 10%;
  }
  &:nth-child(2) {
    right: 8%;
    bottom: -8%;
  }
`

const Apply = props => (
  <Section
    bg={theme.colors.primary}
    style={{ position: 'relative', overflow: 'hidden' }}
  >
    <Pattern shape="square" />
    <Pattern shape="circle" />
    <Container maxWidth={32} px={3} py={4} style={{ zIndex: 1 }}>
      <Heading.h2 fontSize={[5, 6]}>Apply now.</Heading.h2>
      <Text fontSize={[3, 4]} my={3}>
        We can’t wait to see what you’ll make.
      </Text>
      <Action
        mt={3}
        is="a"
        href="/apply"
        bg={theme.colors.primary}
        inverted
        chevronRight
      >
        Apply
      </Action>
    </Container>
  </Section>
)

export default Apply
