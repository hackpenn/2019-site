import React from 'react'
import styled from 'styled-components'
import { Box, Container, Text } from '@hackclub/design-system'
import { theme } from 'theme'
import Layout from 'components/Layout'
import Nav from 'components/Nav'
import Footer from 'components/Footer'
import Bannerline from 'components/Bannerline'
import Headline from 'components/Headline'
import data from 'data'

const List = styled(Text.withComponent('ol'))`
  list-style: none;
`

const Event = styled(Text.withComponent('li')).attrs({
  fontSize: [3, 4],
  pl: 0,
  mb: 2
})`
  line-height: 1.5;
  strong {
    display: block;
  }
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
      pt={[4, 5]}
      pb={[3, 4]}
    >
      <Container width={1} px={3}>
        <Headline fontSize={[7, 8]}>Schedule</Headline>
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
                  <strong children={event.time} />
                  <span role="img" aria-label={event.name}>
                    {event.emoji}
                  </span>{' '}
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
