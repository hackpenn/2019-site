import React from 'react'
import styled from 'styled-components'
import { Box, Container, Flex, Heading, Text } from '@hackclub/design-system'
import { theme } from 'theme'
import data from 'data'
import axios from 'axios'
import { toNumber } from 'lodash'
import Component from '@reach/component-component'
import Layout from 'components/Layout'
import Nav from 'components/Nav'
import Donut from 'components/Donut'
import Footer from 'components/Footer'
import Action from 'components/Action'

const Page = styled(Flex).attrs({
  flexDirection: 'column',
  justify: 'center',
  align: 'center',
  px: 3,
  py: [4, 5],
  my: 5
})`
  min-height: 100vh;
  position: relative;
`

const TextContainer = styled(Container).attrs({
  width: 1,
  maxWidth: 36
})`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  h2 {
    max-width: 24rem;
    margin: auto;
  }
`

const Graph = styled(Donut)`
  width: 95vh;
  height: 95vh;
  min-width: 36rem;
  min-height: 36rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`

const Stat = styled(Text)`
  display: inline-block;
  line-height: 1;
  font-family: ${theme.fontDisplay};
`

const nextRound = () => {
  const dt = new Date(data.apply.nextRound)
  dt.setDate(dt.getDate() + 1)
  return dt.toLocaleString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  })
}

const displayApplyButton = () => {
  const dt = new Date(data.apply.nextRound)
  const dnow = new Date()

  return !(dt >= dnow)
}

export default () => (
  <Layout>
    <Nav />
    <Page>
      <Component
        initialState={{ current: 0 }}
        didMount={({ setState }) => {
          axios
            .get('https://api.stutech.org/api/remaining')
            .then(res => {
              setState({ current: toNumber(res.data) || 0 })
            })
            .catch(err => console.error(err))
        }}
      >
        {({ state }) => (
          <>
            <Graph
              value={(state.current || 0) / data.apply.applicationSlots}
              strokeWidth={1 / 2}
              size={256}
              color={theme.colors.primary}
            />
            <TextContainer
              width={1}
              maxWidth={24}
              color={theme.colors.black}
              px={3}
              align="center"
            >
              <Text
                fontSize={[3, 4]}
                color="primary"
                mb={2}
                style={{ fontWeight: '500' }}
                caps
              >
                Apply to Grants
              </Text>
              <Heading.h1
                fontSize={6}
                mb={2}
                color={theme.colors.dark}
                style={{ lineHeight: '1.125' }}
              >
                {displayApplyButton()
                  ? state.current > 49
                    ? 'Applications are filled.'
                    : 'We’re open for business!'
                  : 'You’ve caught us a little early.'}
              </Heading.h1>
              <Heading.h2 fontSize={4}>
                {displayApplyButton()
                  ? state.current > 49
                    ? 'Check back in a day to see if any slots open!'
                    : 'This round is open, apply now!'
                  : `The next round of applications opens on ${nextRound()}.`}
              </Heading.h2>
              <Flex align="center" justify="center" mt={[3, 4]}>
                <Stat fontSize={[8, 9]} children={`${state.current} /`} />
                <Box align="left" ml={3}>
                  <Stat fontSize={5} color={theme.colors.slate} children={50} />
                  <Text fontSize={3} color={theme.colors.muted} caps>
                    slots filled
                  </Text>
                </Box>
              </Flex>
              {displayApplyButton() &&
                state.current < 50 && (
                  <Action
                    href="https://docs.google.com/forms/d/e/1FAIpQLScdAmmKW_c86p6tu9WpCsBgMQBrFrLDI-kwLrCAWrWlg4Otsw/viewform"
                    is="a"
                    fontSize={[3, 4]}
                    mt={[2, 3]}
                    bg={theme.colors.primary}
                  >
                    Apply now!
                  </Action>
                )}
            </TextContainer>
          </>
        )}
      </Component>
    </Page>
    <Footer />
  </Layout>
)
