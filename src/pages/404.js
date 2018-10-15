import React from 'react'
import { Container, Heading, Text } from '@hackclub/design-system'
import { theme } from 'theme'
import Layout from 'components/Layout'
import Nav from 'components/Nav'
import Action from 'components/Action'

export default () => (
  <Layout>
    <Nav />
    <Container px={3} py={6} align="center">
      <Heading.h1 color={theme.colors.primary} fontSize={[128, 256]}>
        404!
      </Heading.h1>
      <Text color={theme.colors.slate} fontSize={[4, 5]}>
        Sorry, that page isn’t here.
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
