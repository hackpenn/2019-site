import React from 'react'
import styled from 'styled-components'
import { Avatar, Box, Container, Heading, Text } from '@hackclub/design-system'
import { theme } from 'theme'
import Layout from 'components/Layout'
import Nav from 'components/Nav'
import Apply from 'components/Apply'
import Footer from 'components/Footer'

const Highlight = styled(Text.span)`
  border-radius: 1em 0 1em 0;
  background-image: linear-gradient(
    -100deg,
    ${theme.hexa('orange.4', 1 / 5)},
    ${theme.hexa('orange.4', 2 / 5)},
    95%,
    ${theme.hexa('orange.4', 1 / 10)}
  );
`

export default () => (
  <Layout>
    <Nav />
    <Box.header px={3} pt={[4, 5, 6]} pb={5}>
      <Container width={1} color={theme.colors.black}>
        <Avatar src="/theo.jpg" size={128 * 1.5} alt="Theo Bleier" />
        <Heading.h1
          fontSize={[6, 7, 8]}
          mt={[3, 4]}
          mb={2}
          color={theme.colors.dark}
          style={{ lineHeight: '1.125' }}
        >
          Hi, I’m Theo Bleier & I’m building the nonprofit I needed.
        </Heading.h1>
        <Heading.h2 style={{ maxWidth: '48rem' }} fontSize={[3, 4, 5]}>
          High school students who are pursuing STEM projects generally don’t
          have the resources to expand and fund their projects. That needs to
          change.
        </Heading.h2>
      </Container>
    </Box.header>
    <Container py={[4, 5]}>
      <Box
        color={theme.colors.black}
        px={3}
        ml="auto"
        mr={0}
        style={{ maxWidth: '48rem' }}
      >
        <Text fontSize={[4, 5]} mt={2} mb={3}>
          I’m a freshman in high school near Boston, MA, with a vision for a
          future of STEM built by young people everywhere.
        </Text>
        <Text fontSize={[3, 4]} my={3}>
          Last year, I tried to start a 3D Printing Club at my middle school. We
          got around ~20 kids to show interest, but couldn't find any money to
          replace the aging printer that the school had. We were in a jam.
        </Text>
        <Text fontSize={[3, 4]} my={3}>
          Sadly, this isn’t an isolated case. There is currently no easy way for
          students to get funding for their STEM projects and clubs without
          going through a time-consuming grant process. Even if students manage
          to navigate the process and receive a traditional grant, they still
          never have direct access to the money, having to fill out bureaucratic
          expense forms.
        </Text>
        <Text fontSize={[3, 4]} bold my={[3, 4]}>
          <Highlight>
            These kinds of barriers are squandering talent everywhere
          </Highlight>
          — forcing young people with innovative new ideas to bury them due to a
          lack of funding.
        </Text>
        <Text fontSize={[3, 4]} my={3}>
          We're changing that. We’re funding the best ideas from the brightest
          minds of our generation. We can’t wait to see what they make.
        </Text>
      </Box>
    </Container>
    <Apply />
    <Footer />
  </Layout>
)
