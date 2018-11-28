import React from 'react'
import styled from 'styled-components'
import {
  Box,
  Container,
  Flex,
  Heading,
  Card,
  Image,
  Text,
  Link as A,
  Icon
} from '@hackclub/design-system'
import { theme } from 'theme'
import Layout from 'components/Layout'
import Nav from 'components/Nav'
import Action from 'components/Action'
import Module from 'components/Module'
import Sponsors from 'components/Sponsors'
import Leadership from 'components/Leadership'
import Apply from 'components/Apply'
import Footer from 'components/Footer'

const Headline = styled(Heading.h2).attrs({
  color: 'primaryDark',
  fontSize: [5, 6],
  mb: 2
})`
  font-weight: 900;
  line-height: 1.125;
`

const Lead = styled(Container.withComponent(Text)).attrs({
  fontSize: 4,
  mx: 'auto'
})``

const Modules = styled(Container).attrs({
  mt: 4,
  maxWidth: 48,
  mx: 0,
  align: 'left'
})`
  display: grid;
  grid-gap: ${theme.space[3]}px;
  svg {
    color: ${theme.colors.accent};
  }
  ${theme.mediaQueries.md} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${theme.space[4]}px;
    // > div {
    // align-items: center;
    // }
  }
`

const Bannerline = props => (
  <Box
    bg={theme.colors.accent}
    mt={[4, 5, 6]}
    mb={4}
    style={{ height: 4, width: '8rem' }}
    {...props}
  />
)

const Questions = styled(Container).attrs({ maxWidth: 72, mt: [3, 4] })`
  display: grid;
  grid-gap: ${theme.space[3]}px;
  width: 100%;
  ${theme.mediaQueries.sm} {
    grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
    grid-gap: ${theme.space[4]}px;
  }
  > div {
    background-color: rgba(255, 255, 255, 0.875);
    border-radius: ${theme.radii[2]};
    transition: ${theme.transition} all;
    box-shadow: ${theme.boxShadows[1]};
    &:hover {
      background-color: rgba(255, 255, 255, 0.95);
      box-shadow: ${theme.boxShadows[2]};
    }
  }
`
const Question = ({ name, body, ...props }) => (
  <Card p={[3, 4]} {...props}>
    <Heading.h3 f={2} color="altDark" caps mt={0} mb={[1, 2]} children={name} />
    <Text f={2} color="slate" my={0} children={body} />
  </Card>
)

const Patchline = styled(Container.withComponent(Heading.h2)).attrs({
  fontSize: [5, 6],
  color: 'white',
  py: [4, 5, 6]
})`
  font-weight: 500;
  line-height: 1.75;
`
const Patch = styled(Text.span)`
  font-weight: bold;
  position: relative;
  svg {
    position: absolute;
    min-height: 128px;
    width: 100%;
    fill: ${theme.colors.primaryWash};
    margin-top: -${theme.space[4]}px;
    z-index: 0;
  }
  span {
    z-index: 2;
  }
`

export default () => (
  <Layout>
    <Nav />
    <Box.header
      bg={theme.colors.primaryDark}
      color={theme.colors.white}
      pt={[4, 5]}
      pb={[3, 5, 6]}
    >
      <Container width={1} px={3}>
        <Image
          alt="Hack Pennsylvania logo"
          src={require('../../static/hero.svg')}
        />
        <Heading.h1
          fontSize={[4, 5, 6]}
          style={{ fontFamily: theme.mono }}
          mt={3}
        >
          Pennsylvania’s premiere high&nbsp;school hackathon is back.
        </Heading.h1>
        <Heading.h3 fontSize={[3, 4]} style={{ fontFamily: theme.mono }} mt={3}>
          January 19-20, 2019 in State&nbsp;College, PA.
        </Heading.h3>
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
    {/* <Box.section bg={theme.colors.primary}>
      <Patchline>
        <Patch>
          <Icon glyph="friend" />
          <span>200 hackers</span>
        </Patch>
        {' come together in '}
        SCE for 24 hours to work on spectacular projects.
      </Patchline>
    </Box.section> */}
    <Box.section bg={theme.colors.snow}>
      <Container
        width={1}
        px={3}
        pt={3}
        pb={[4, 5, 6]}
        color={theme.colors.black}
      >
        <Container maxWidth={48} mx={0}>
          <Bannerline />
          <Headline>24 hours of coding, fun, free food, & prizes.</Headline>
          <Lead maxWidth={48}>
            Hack Pennsylvania is a hackathon, a 24-hour coding event. 200
            students from across the state will come for the day. You’ll work
            with a team (or solo) to build an app, game, or website. We’ll help
            get you started, provide free food & drinks, and you can sleep (or
            not). 24 hours later, a group of judges will pick the best projects
            to demo and win prizes.
          </Lead>
        </Container>
        <Modules>
          <Module
            icon="welcome"
            name="Beginner-oriented"
            body="Most attendees will be new to coding, so we’ll have workshops and mentors to get you going."
          />
          <Module
            icon="support"
            name="A safe space for all"
            body="You’ll be in a friendly, safe environment, with diverse attendees, free of harassment."
          />
        </Modules>
      </Container>
    </Box.section>
    <Box.section bg={theme.colors.primary} color={theme.colors.black} width={1}>
      <Container py={[4, 5]} px={3}>
        <Headline color="white">FAQ</Headline>
        <Questions>
          <Question
            name="Who can participate?"
            body="Any current high school student! If you’re under/over that age, send us an email (below) and we’ll see what we can do."
          />
          <Question
            name="What if I’m new to coding?"
            body="Complete beginners are not only welcome, but expected! Learn as you go with our starting workshops and mentors."
          />
          <Question
            name="How much does it cost?"
            body="Nothing, it’s totally free! Registration and attendance are 100% free, with meals, drinks, swag, & workshops included."
          />
          <Question
            name="Do I need a team?"
            body="Nope! You’ll have an opportunity to meet fellow hackers, and make teams up to 4—find new friends! Or you can work alone."
          />
          <Question
            name="What can I make?"
            body="Anything! A website, mobile app, game, hardware, you name it. Judges will rate projects on creativity, technical difficulty, polish, and utility."
          />
          <Question
            name="What should I bring?"
            body="Bring your student ID, a computer, chargers, anything you’ll need for your hack (like hardware), toiletries, and a sleeping bag (if you’ll sleep)."
          />
        </Questions>
      </Container>
    </Box.section>
    <Box.section bg={theme.colors.white}>
      <Container width={1} px={3} pt={3} pb={[4, 5, 6]}>
        <Bannerline />
        <Headline>Sponsors</Headline>
        <Text fontSize={3} color={theme.colors.slate}>
          Want to sponsor Hack Pennsylvania?{' '}
          <A
            href="mailto:team@hackpenn.com"
            color={theme.colors.primary}
            style={{ fontFamily: theme.font }}
            hoverline
            chevronRight
          >
            Let’s chat
          </A>
        </Text>
        {/* <Sponsors /> */}
      </Container>
    </Box.section>
    <Leadership />
    <Apply />
    <Footer />
  </Layout>
)
