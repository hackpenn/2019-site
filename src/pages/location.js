import React from 'react'
import styled from 'styled-components'
import {
  Box,
  Container,
  Heading,
  Text,
  Link as A
} from '@hackclub/design-system'
import { theme } from 'theme'
import Layout from 'components/Layout'
import Nav from 'components/Nav'
import Map from 'components/Map'
import Footer from 'components/Footer'
import Photo from 'components/Photo'
import Grid from 'components/Grid'
import Headline from 'components/Headline'
import Module from 'components/Module'

const ShortGrid = styled(Container.withComponent(Grid))``
const GridItem = styled(Box)`
  background-color: ${theme.colors.white};
  min-height: unset !important;
`

const PanoBox = styled(A)`
  background-image: url(/venue.jpg);
  background-size: cover;
  background-position: 25% center;
  ${theme.mediaQueries.md} {
    grid-column: span 2;
    padding: 0 !important;
  }
`

const LinkOut = styled(A).attrs({
  color: theme.colors.info,
  underline: true,
  chevronRight: true,
  bold: true,
  fontSize: 3,
  mt: 3,
  className: 'sans'
})`
  display: block;
`

export default () => (
  <Layout>
    <Nav />
    <Box bg={theme.colors.primaryDark} color={theme.colors.white} py={[4, 5]}>
      <Container width={1} px={3}>
        <Headline mt={0} fontSize={[6, 7]}>
          Location
        </Headline>
        <Heading.h2
          fontSize={[3, 4, 5]}
          style={{ fontFamily: theme.mono, maxWidth: '42rem' }}
          mt={3}
        >
          Welcome to{' '}
          <A
            href="https://en.wikipedia.org/wiki/State_College,_Pennsylvania"
            color="inherit"
            underline
          >
            State College, PA
          </A>
          —nestled in the forests of central Pennsylvania.
        </Heading.h2>
      </Container>
    </Box>
    <Box.section bg={theme.colors.smoke}>
      <ShortGrid width={1} px={3} id="details" py={[4, 5]}>
        <GridItem>
          <Headline fontSize={[4, 5]} color={theme.colors.primaryDark}>
            Good Shepherd Catholic&nbsp;Church
          </Headline>
          <Text
            className="sans"
            fontSize={[3, 4]}
            color={theme.colors.steel}
            style={{ lineHeight: '1.375' }}
          >
            867 Grays Woods Blvd
            <br />
            Port Matilda, PA 16870
          </Text>
          <Text fontSize={2} mt={1} color={theme.colors.slate}>
            (Parish Hall)
          </Text>
          <LinkOut
            fontSize={2}
            color="primary"
            href="https://goo.gl/maps/e1zaGxas6442"
            target="_blank"
          >
            View on Google Maps
          </LinkOut>
        </GridItem>
        <Map />
        <PanoBox href="/venue.jpg" style={{ minHeight: '16rem' }} />
        <GridItem>
          <Module
            lg
            icon="checkmark"
            name="Parking"
            color={theme.colors.slate}
            body="Free parking is provided for the duration of the event, directly outside the venue. Park in the back parking lot and enter the building near recycling."
          />
        </GridItem>
        <GridItem>
          <Module
            lg
            icon="support"
            name="Safety"
            iconColor={theme.colors.info}
            color={theme.colors.slate}
            body="Safety is our highest priority for the event. We’ll have a dozen adults (with background checks) at the event for continuous supervision of attendees."
          />
        </GridItem>
        <GridItem>
          <Module
            lg
            icon="payment-docs"
            name="Travel reimbursement"
            iconColor={theme.colors.primary}
            color={theme.colors.slate}
            body="Accessibility is core to our mission. We’re offering a few dozen attendees $30 travel reimbursements. Make sure to bring your receipts to the event."
          />
        </GridItem>
        <GridItem>
          <Module
            lg
            icon="explore"
            name="Sleeping arrangements"
            iconColor={theme.colors.info}
            color={theme.colors.slate}
            body="Sleeping during the event is optional but recommended. We’ll have a designated sleeping area at the venue: be sure to bring your sleeping bags!"
          />
        </GridItem>
        <GridItem>
          <Module
            lg
            icon="clock"
            name="Leaving early"
            iconColor={theme.colors.alt}
            color={theme.colors.slate}
            body="Attendees may leave early with parental consent (or if 18+). You can work on your project outside of the event as long as it’s submitted in-person at the deadline."
          />
        </GridItem>
      </ShortGrid>
    </Box.section>
    <Footer />
  </Layout>
)
