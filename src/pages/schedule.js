import React from 'react'
import styled from 'styled-components'
import { Box, Container, Heading, Text, Link } from '@hackclub/design-system'
import { theme } from 'theme'
import Layout from 'components/Layout'
import Nav from 'components/Nav'
import Footer from 'components/Footer'
import Bannerline from 'components/Bannerline'
import Headline from 'components/Headline'
import data from 'data'

const Event = styled(Text).attrs({
  fontSize: [3, 4]
})``

export default () => (
  <Layout>
    <Nav />
    <Box.header
      bg={theme.colors.primaryDark}
      color={theme.colors.white}
      px={2}
      pt={[4, 5]}
      pb={[4, 5, 6]}
    >
      <Container width={1} px={3}>
        <Headline fontSize={[6, 7]}>Schedule</Headline>
        <Heading.h2
          fontSize={[3, 4, 5]}
          style={{ fontFamily: theme.mono }}
          mt={3}
        >
          24 hours of free food, coding, and fun!
        </Heading.h2>
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
          {data.schedule.map(day => (
            <>
              <Bannerline />
              <Headline color={theme.colors.primaryDark}>{day.date}</Headline>
              <Box mt={3}>
                {day.events.map(event => (
                  <Event>
                    {event.time} —{' '}
                    <span role="img" aria-label={event.name}>
                      {event.emoji}
                    </span>{' '}
                    {event.name}
                  </Event>
                ))}
              </Box>
            </>
          ))}
        </Container>
      </Container>
    </Box.section>
    <Footer />
  </Layout>
)
