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
  Hide,
  Link as A
} from '@hackclub/design-system'
import { theme } from 'theme'
import Layout from 'components/Layout'
import Bannerline from 'components/Bannerline'
import Nav from 'components/Nav'
import Action from 'components/Action'
import Module from 'components/Module'
import Grid from 'components/Grid'
import Photo from 'components/Photo'
import Sponsors from 'components/Sponsors'
import Leadership from 'components/Leadership'
import Apply from 'components/Apply'
import Footer from 'components/Footer'
import Headline from 'components/Headline'

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
  }
`

const HiddenPhoto = styled(Hide.withComponent(Photo))``

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
          <Headline color="primaryDark">
            24 hours of coding, fun, free food, & prizes.
          </Headline>
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
        <Grid mt={4} color="white">
          <Box bg="primary" p={[3, 4]}>
            <Heading.h3 f={[4, 5]} my={0}>
              Last year.
            </Heading.h3>
            <Text f={3} mt={2}>
              We organized central Pennsylvania’s first high school hackathon.
              We saw dozens of teens learn to code & hone their skills. With
              tens of projects presented, it was a major success.
            </Text>
          </Box>
          <HiddenPhoto
            xs
            sm
            aria-label="High school students coding at Hack Happy Valley"
            src="/hackhv/1.jpg"
          />
          <Photo
            aria-label="Projects being presented at Hack Happy Valley"
            src="/hackhv/2.jpg"
          />
          <Box bg="primaryDark" p={[3, 4]}>
            <Heading.h3 f={[4, 5]} my={0}>
              This year.
            </Heading.h3>
            <Text f={3} mt={2}>
              We’re dramatically expanding our reach by sending buses to
              Pittsburgh & Philadelphia. We encourage both beginners & more
              experienced coders to come: everyone will learn something, and
              maybe even win a prize.
            </Text>
          </Box>
        </Grid>
      </Container>
    </Box.section>
    <Box.section
      bg={theme.colors.primary}
      color={theme.colors.black}
      width={1}
      id="FAQ"
    >
      <Container py={[4, 5]} px={3}>
        <Bannerline mt={[3, 4]} bg={theme.colors.white} />
        <Headline>FAQ</Headline>
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
            name="What if I already know how to code?"
            body="All skill levels are welcome! Though we primarily market to beginners, we welcome experts (and everyone in between) too."
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
          <Question
            id="FAQ-travel"
            name="How do I get there?"
            body="We’ll send buses to Pittsburgh & Philadelphia on the morning of Jan 19, so if you’re in PA, it’s super easy to come. For out-of-state, we’re currently looking into offering travel reimbursements—stay tuned."
          />
        </Questions>
      </Container>
    </Box.section>
    <Box.section bg={theme.colors.white}>
      <Container width={1} px={3} pt={3} pb={[4, 5, 6]}>
        <Bannerline />
        <Headline color="primaryDark">Sponsors</Headline>
        <Text fontSize={3} color={theme.colors.slate} mb={4}>
          Want to sponsor Hack Pennsylvania?{' '}
          <A
            href="mailto:theo@hackpenn.com"
            color={theme.colors.primary}
            style={{ fontFamily: theme.font }}
            hoverline
            chevronRight
          >
            Let’s chat
          </A>
        </Text>
        <Sponsors />
      </Container>
    </Box.section>
    <Leadership />
    <Apply />
    <Footer />
  </Layout>
)
