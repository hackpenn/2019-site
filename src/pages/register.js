import React from 'react'
import styled from 'styled-components'
import { Box, Container, Heading, Link } from '@hackclub/design-system'
import { theme } from 'theme'
import Layout from 'components/Layout'
import Nav from 'components/Nav'
import Footer from 'components/Footer'
import Sheet from 'components/Sheet'
import RegistrationForm from 'components/RegistrationForm'
import IconButton from 'components/IconButton'

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

const ShareButton = ({ children, ...props }) => (
  <Link href={props.url} target="_blank" rel="noopener noreferrer">
    <IconButton
      aria-label={`Share on ${props.service}`}
      f={2}
      glyph={props.service.toLowerCase()}
      {...props}
    >
      {children || props.service}
    </IconButton>
  </Link>
)

export default () => (
  <Layout>
    <Nav />
    <Box
      bg={theme.colors.primaryDark}
      color={theme.colors.white}
      px={2}
      pt={[4, 5]}
      pb={[4, 5, 6]}
    >
      <Container width={1} px={3}>
        <Headline>Register</Headline>
        <Heading.h2
          fontSize={[3, 4, 5]}
          style={{ fontFamily: theme.mono }}
          mt={3}
        >
          The event is totally free, lots of food, drinks, and prizes included.
        </Heading.h2>
        <Sheet mt={4}>
          <RegistrationForm />
        </Sheet>
        <Sheet
          p={[3, 4]}
          mt={[4, 5]}
          align="center"
          maxWidth={24}
          boxShadowSize="md"
        >
          <Heading.h2 f={3} caps mb={2}>
            Share it!
          </Heading.h2>
          <ShareButton
            service="Twitter"
            url={twitterURL(
              'Check out @hackpenn, PA’s largest high school hackathon!',
              url
            )}
            bg="#1da1f2"
            mr={3}
          />
          <ShareButton service="Facebook" url={facebookURL(url)} bg="#3b5998" />
        </Sheet>
      </Container>
    </Box>
    <Footer />
  </Layout>
)
