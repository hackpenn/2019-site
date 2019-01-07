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
import Action from 'components/Action'
import Apply from 'components/Apply'
import Bannerline from 'components/Bannerline'
import Calendar from 'components/Calendar'
import Footer from 'components/Footer'
import Grid from 'components/Grid'
import Headline from 'components/Headline'
import Layout from 'components/Layout'
import Leadership from 'components/Leadership'
import Module from 'components/Module'
import Nav from 'components/Nav'
import Photo from 'components/Photo'
import Sponsors from 'components/Sponsors'

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
    <Text f={2} color="black" my={0} children={body} />
  </Card>
)

export default () => (
  <Layout>
    <Nav />
    <Box.header
      bg={theme.colors.primaryDark}
      color={theme.colors.white}
      pt={[3, 4]}
      pb={[3, 5]}
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
          High schoolers: learn to code with 24&nbsp;hours of fun, free food, &
          prizes.
        </Heading.h1>
        <Flex align="center" my={4}>
          <Calendar month="January" day={19} />
          <Text.span align="left" fontSize={[3, 4]} ml={4} className="mono">
            Free registration
            <br />
            State&nbsp;College, PA
          </Text.span>
        </Flex>
        <Flex align="center" wrap>
          <Action
            to="/register"
            children="Reserve your spot"
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
          <Headline color="primaryDark">Welcome to the “hackathon.”</Headline>
          <Lead my={3} maxWidth={48}>
            Hack Pennsylvania is a 24-hour event where 100 programmers, artists,
            designers, & other high schoolers from across the Northeast will
            come to together to build apps & games. We’ll provide workshops,
            mentorship, free meals & drinks, & places to sleep. The next
            morning, judges will pick the best projects to demo and win prizes.
          </Lead>
        </Container>
        <Modules>
          <Module
            icon="welcome"
            name="Beginner-oriented"
            body="Students of all skill levels are welcome—we’ll hold multiple intro workshops & mentors will help you out!"
          />
          <Module
            icon="emoji"
            name="Endless fun"
            body="It goes way beyond coding. Meet new friends, come to the 2am dancy party, win prizes."
          />
          <Module
            icon="rep"
            name="Fab food"
            body="You’ll be served Panera dinner, midnight ice cream, bagel breakfast, & continuous snacks. (alt’s available)"
          />
          <Module
            icon="bag"
            name="You woodn’t believe the prizes"
            body="Pine over the AirPods, Google Homes, Raspberry Pis, speakers, batteries, software subscriptions, & much more."
          />
        </Modules>
        <Grid mt={[4, 5]} color="white">
          <Box bg="primary" p={[3, 4]}>
            <Heading.h3 fontSize={[4, 5]} my={0}>
              We’ve ele
            </Heading.h3>
            <Text fontSize={3} my={2}>
              Last spring, we ran central PA’s first community-organized HS
              hackathon. This year, the event grows bigger + better—a tree-umph,
              we could say.
            </Text>
            <A
              href="https://hackhappyvalley.com/recap"
              color="inherit"
              underline
              chevronRight
              bold
              fontSize={3}
              mt={2}
              className="sans"
            >
              See what happened at the last event
            </A>
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
              Hacking‽ Is that safe?
            </Heading.h3>
            <Text f={3} mt={2}>
              Hold up! No, we’re not “hacking” servers or databases. The word is
              being constructively re-defined as building things—apps, games,
              websites, etc. At Hack Pennsylvania, it’s all safe, supervised, &
              entirely educational.
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
            body="Any current student grades 8–12. If you’re under/over that age, send us an email (below) & we’ll see what we can do."
          />
          <Question
            name="What if I’m new to coding?"
            body="Still elemen-tree? Complete beginners are not only welcome, but expected! Learn as you go with our intro workshops & mentors."
          />
          <Question
            name="What if I already know how to code?"
            body="All skill levels are welcome! Though we primarily market to beginners, we welcome experts (& everyone in between)."
          />
          <Question
            name="How much does it cost?"
            body="Nothing, it’s totally free! Registration and attendance are 100% free, with meals, drinks, swag, & workshops included."
          />
          <Question
            name="Do I need a team?"
            body="Nope! You’ll have an opportunity to meet fellow hackers and make teams up to 4—find some new friends, bring yours, or work alone."
          />
          <Question
            name="What can I make?"
            body="Anything! A website, app, game, hardware, you name it. Judges will rate projects on creativity, technical difficulty, polish, & utility."
          />
          <Question
            name="What should I bring?"
            body="Bring your student ID, a computer, chargers, anything you’ll need for your hack (hardware?), toiletries, & a sleeping bag (optional)."
          />
          <Question
            id="FAQ-travel"
            name="How do I get there?"
            body="Any way you like! Check-in starts at 11am. We’re offering limited travel reimbursements ($25) to a few dozen hackers."
          />
        </Questions>
      </Container>
    </Box.section>
    <Box.section bg={theme.colors.white}>
      <Container width={1} px={3} pt={3} pb={[4, 5, 6]}>
        <Bannerline />
        <Headline color="primaryDark">Sponsors</Headline>
        <Text fontSize={3} color={theme.colors.steel} mb={4}>
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
