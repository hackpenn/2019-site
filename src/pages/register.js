import React from 'react'
import { Container, Heading, Text } from '@hackclub/design-system'
import { theme } from 'theme'
import Layout from 'components/Layout'
import BG from 'components/BG'
import Nav from 'components/Nav'
import Action from 'components/Action'

export default () => (
  <Layout>
    <Nav />
    <BG color="primaryDark" />
    <Container px={3} py={5} align="center">
      <Heading.h1 color={theme.colors.primary} fontSize={[6, 7, 8]}>
        Registration closed
      </Heading.h1>
      <Text color={theme.colors.white} fontSize={[4, 5]}>
        See you on January 19!{' '}
        <span role="img" aria-label="Home emoji">
          🎉
        </span>
      </Text>
      <Action to="/" mt={4}>
        Go Home{' '}
        <span role="img" aria-label="Home emoji">
          🏡
        </span>
      </Action>
    </Container>
  </Layout>
)
