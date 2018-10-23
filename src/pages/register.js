import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import { Box, Container, Heading } from '@hackclub/design-system'
import { theme } from 'theme'
import Layout from 'components/Layout'
import Nav from 'components/Nav'
import BG from 'components/BG'
import Footer from 'components/Footer'

// awful temp solution for sticky footer, see L53
injectGlobal`
  html, body {
    height: 100%;
  }
`

const Headline = styled(Heading.h2).attrs({
  color: 'white',
  fontSize: [6, 7],
  mb: 2
})`
  font-weight: 900;
  line-height: 1.125;
`

export default () => (
  <Layout>
    <Nav />
    <BG color="primaryDark" />
    <Box.header
      bg={theme.colors.primaryDark}
      color={theme.colors.white}
      px={2}
      pt={[4, 5]}
      pb={[3, 5, 6]}
    >
      <Container width={1} px={3}>
        <Headline>Register</Headline>
        <Heading.h2
          fontSize={[3, 4, 5]}
          style={{ fontFamily: theme.mono }}
          mt={3}
        >
          Coming soon! We’re almost ready to open.
        </Heading.h2>
      </Container>
    </Box.header>
    <Box
      style={{
        position: 'absolute',
        bottom: 0,
        width: '100%'
      }} /* temporary + awful solution for sticky footer */
    >
      <Footer />
    </Box>
  </Layout>
)
