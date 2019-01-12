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

const List = styled(Text.withComponent('ol'))`
  list-style: none;
  padding: 0 2rem;
  border-left: 8px solid ${theme.colors.slate};
`

const Event = styled(Text.withComponent('li')).attrs({
  fontSize: [3, 4],
  pl: 0,
  mb: 2
})`
  line-height: 1.5;
  position: relative;

  &:before {
    content: '';
    background-color: ${theme.colors.snow};
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;
    position: absolute;
    top: 2.1rem;
    left: -3.5rem;
  }
`
const Time = styled.strong`
  display: block;
`
const Emoji = styled.span.attrs({ role: 'img' })`
  position: absolute;
  left: -3rem;
`
const Schedule = styled(Container).attrs({ mx: 0 })`
  display: grid;
  grid-gap: ${theme.space[3]}px;
  ${theme.mediaQueries.md} {
    grid-template-columns: repeat(2, 1fr);
  }
`
export default () => (
  <Layout>
    <Nav />
    <Box.header
      bg={theme.colors.primaryDark}
      color={theme.colors.white}
      px={2}
      py={[4, 5]}
    >
      <Container width={1} px={3}>
        <Headline fontSize={[7, 8]}>Schedule</Headline>
        <Heading.h2
          fontSize={[3, 4, 5]}
          style={{ fontFamily: theme.mono, maxWidth: '42rem' }}
          mt={3}
        >
          The best weekend of your life.
        </Heading.h2>
      </Container>
    </Box.header>
    <Container width={1} px={3} pb={[4, 5, 6]} color={theme.colors.black}>
      <Schedule>
        {data.schedule.map(day => (
          <Box>
            <Bannerline mt={5} />
            <Headline color={theme.colors.primaryDark}>{day.date}</Headline>
            <List mt={3}>
              {day.events.map(event => (
                <Event>
                  <Time children={event.time} />
                  <Emoji aria-label={event.name}>{event.emoji}</Emoji>
                  {event.name}
                </Event>
              ))}
            </List>
          </Box>
        ))}
      </Schedule>
    </Container>
    <Footer />
  </Layout>
)
