import React from 'react'
import styled from 'styled-components'
import {
  Box,
  Container,
  Flex,
  Heading,
  Divider,
  Image,
  Text
} from '@hackclub/design-system'
import { theme } from 'theme'
import data from 'data'
import Layout from 'components/Layout'
import Nav from 'components/Nav'
import Action from 'components/Action'
import Module from 'components/Module'
import Sponsors from 'components/Sponsors'
import Apply from 'components/Apply'
import Footer from 'components/Footer'

const Banner = styled(Container).attrs({
  maxWidth: 48,
  mt: 5,
  mb: [3, 4],
  mx: 'auto',
  px: 3,
  align: ['left', 'center']
})``

const Headline = styled(Heading.h2).attrs({
  fontSize: [5, 6],
  mb: 2
})`
  line-height: 1.25;
`

const Lead = styled(Container.withComponent(Text)).attrs({
  fontSize: 3,
  mx: 'auto'
})``

const Modules = styled(Container).attrs({
  px: 3,
  mt: [4, null, 3],
  mb: 3,
  mx: 'auto',
  maxWidth: 48,
  align: ['left', null, 'center']
})`
  display: grid;
  grid-gap: ${theme.space[3]}px;
  svg {
    color: ${theme.colors.alt};
  }
  ${theme.mediaQueries.md} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${theme.space[4]}px;
    > div {
      align-items: center;
    }
  }
`

const Bannerline = props => (
  <Divider
    height="2px"
    color={theme.colors.smoke}
    mx="auto"
    mb={4}
    style={{ maxWidth: '8rem' }}
    {...props}
  />
)

export default () => (
  <Layout>
    <Nav />
    <Box.header
      bg={theme.colors.primaryDark}
      color={theme.colors.white}
      px={2}
      pt={[4, 5]}
      pb={[3, 5, 6]}
    >
      <Container width={1} px={3}>
        <Image alt="Hack Pennsylvania logo" src="/hero.svg" />
        <Heading.h1 fontSize={[4, 5, 6]} mt={3}>
          Pennsylvania’s premiere high&nbsp;school hackathon is back.
        </Heading.h1>
        <Flex align="center" wrap mt={4}>
          <Action
            to="/register"
            children="Register"
            fontSize={[3, 4]}
            bg={theme.colors.primary}
            chevronRight
            mr={3}
            mb={3}
          />
        </Flex>
      </Container>
    </Box.header>
    <Box.section bg={theme.colors.snow}>
      <Container
        width={1}
        px={[3, 4, null, 2]}
        pt={3}
        pb={[4, 5, 6]}
        color={theme.colors.black}
      >
        <Banner>
          <Bannerline />
          <Headline>Grants, done right.</Headline>
          <Lead maxWidth={32}>
            No bureaucracy, no BS: Hack Pennsylvania are the end of 18+
            requirements, weeks of waiting, expense forms, and the rest of the
            mess of traditional grants. Game on.
          </Lead>
        </Banner>
        <Modules>
          <Module
            icon="clock"
            name="Superfast turnaround"
            body="We’re not about waiting. Applications are all reviewed by our judges within the week."
          />
          <Module
            icon="payment"
            name="Funding, no strings attached"
            body="No expense forms to fill out here: the money comes on a card & is yours to spend freely."
          />
        </Modules>
      </Container>
    </Box.section>
    <Box.section
      bg={theme.colors.alt}
      color={theme.colors.black}
      width={1}
      px={0}
      py={3}
    >
      <Banner pt={[0, 4]} pb={3} px={3}>
        <Bannerline color={theme.colors.orange[3]} />
        <Headline>
          Every application is judged by the best in the industry.
        </Headline>
      </Banner>
    </Box.section>
    <Container
      width={1}
      px={[3, 4, null, 2]}
      pt={3}
      pb={[4, 5]}
      color={theme.colors.black}
    >
      <Banner>
        <Bannerline />
        <Headline>Here’s the breakdown.</Headline>
        <Lead maxWidth={32}>
          Hack Pennsylvania are easy to apply for, quick to receive, & maximize
          you moving your project forward.
        </Lead>
      </Banner>
      <Modules>
        <Module
          icon="docs"
          name="1. Apply for a Grant"
          body="Write up a description of your project & progress. We open rounds every few weeks."
        />
        <Module
          icon="idea"
          name="2. Get accepted"
          body="Every application is ranked 1-10 by our panel of judges. The project with the consistently-highest score gets funded."
        />
        <Module
          icon="rep"
          name="3. Build your project"
          body="Use your grant money however you need to take your project to the next level."
        />
        <Module
          icon="post"
          name="4. Impact report"
          body="A month after you get your grant, assemble a report about progress on your project."
        />
      </Modules>
    </Container>
    {/* <Box.section bg={theme.colors.snow}>
      <Container
        width={1}
        maxWidth={36}
        px={3}
        pt={3}
        pb={[4, 5]}
        color={theme.colors.black}
      >
        <Banner>
          <Bannerline />
          <Headline>Sponsors</Headline>
        </Banner>
        <Sponsors />
      </Container>
    </Box.section> */}
    <Apply />
    <Footer />
  </Layout>
)
