import React from 'react'
import styled from 'styled-components'
import { Box, Container, Heading, Button } from '@hackclub/design-system'
import { theme } from 'theme'
import Layout from 'components/Layout'
import Nav from 'components/Nav'
import BG from 'components/BG'
import Footer from 'components/Footer'
import Sheet from 'components/Sheet'

const Headline = styled(Heading.h2).attrs({
  color: 'white',
  fontSize: [6, 7],
  mb: 2
})`
  font-weight: 900;
  line-height: 1.125;
`

const url = 'http://hackpenn.com/'
const twitterURL = (text, u = url) =>
  `https://twitter.com/intent/tweet?text=${text
    .split(' ')
    .join('%20')}&url=${u}`
const facebookURL = (text, u = url) =>
  `https://www.facebook.com/sharer/sharer.php?u=${u}`

const InlineButton = Button.extend`
  display: inline-flex;
  align-items: center;
  div {
    background-repeat: no-repeat;
    background-size: 100%;
    width: 18px;
    height: 18px;
  }
`
const ShareButton = ({ children, ...props }) => (
  <InlineButton
    target="_blank"
    aria-label={`Share on ${props.service}`}
    f={2}
    {...props}
  >
    <Box mr={2} />
    {children || props.service}
  </InlineButton>
)

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
    <Box>
      <Sheet
        p={[3, 4]}
        bg={theme.colors.smoke}
        align="center"
        maxWidth={24}
        boxShadowSize="md"
      >
        <Heading.h2 f={3} caps mb={2}>
          Share it!
        </Heading.h2>
        <ShareButton
          service="Twitter"
          href={twitterURL(
            'Check out @hackpenn, PA’s largest high school hackathon!',
            url
          )}
          bg="#1da1f2"
          mr={3}
        />
        <ShareButton service="Facebook" href={facebookURL(url)} bg="#3b5998" />
      </Sheet>
    </Box>
    <Footer />
  </Layout>
)
