import React from 'react'
import { Box, Container, Heading, Text, Link } from '@hackclub/design-system'
import { theme } from 'theme'
import Layout from 'components/Layout'
import Nav from 'components/Nav'
import Apply from 'components/Apply'
import Footer from 'components/Footer'

const Q = props => <Text fontSize={[4, 5]} mt={4} bold {...props} />
const P = props => <Text fontSize={[3, 4]} my={3} {...props} />

export default () => (
  <Layout>
    <Nav />
    <Container width={1} color={theme.colors.black} px={3} pt={[5, 6]} pb={4}>
      <Heading.h1
        fontSize={[6, 7, 8]}
        color={theme.colors.dark}
        style={{ lineHeight: '1.125' }}
      >
        Questions?
        <br />
        We’ve got answers.
      </Heading.h1>
    </Container>
    <Container pt={[3, 4]} pb={[4, 5]}>
      <Box
        color={theme.colors.black}
        px={3}
        ml="auto"
        style={{ maxWidth: '48rem' }}
      >
        <Q>My company wants to get involved, who do we contact?</Q>
        <P>
          Shoot us an <Link href="mailto:donate@stutech.org">email</Link>!
        </P>

        <Q>How much money is this first grant?</Q>
        <P>$200</P>

        <Q>Who runs this thing?</Q>
        <P>
          <Link href="https://theos.space">Theo</Link> does.
        </P>
        <Q>Can you walk me through the entire process?</Q>
        <P>
          Sure. At the beginning of the round, you apply by filling out the
          Application (criteria attached). Once the application period closes
          (generally 4 days from start), our judges will go through and rank
          every application from 1 → 10. The application with the consistently
          highest score gets the grant.
        </P>

        <Q>What happens when I win?</Q>
        <P>
          The process will be different for every grantee, however, generally
          we'll schedule a time to have an orientation call, and then from there
          we'll set goals based on the amount of money you were granted.
        </P>
        <P>Once we’ve agreed on a plan, we’ll send over the money!</P>

        <Q>How will I receive the money? Do I need a bank account?</Q>
        <P>Nope! We send you a card in the mail.</P>

        <Q>Why is it capped to 50 applicants per round?</Q>
        <P>
          Our judges are extremely busy people and we need to respect their
          time. It wouldn’t be fair to tell them that they have to rank every
          application regardless of count.
        </P>

        <Q>
          But, I have this incredible idea, and I urgently need funding, can you
          make an exception?
        </Q>
        <P>
          The best we can potentially do is reserve you a slot if someone drops
          out, shoot us an <Link href="mailto:hello@stutech.org">email</Link>.
        </P>

        <Q>
          I’m heavily involved in the tech industry, and I want to judge, where
          do I go?
        </Q>
        <P>
          <Link href="mailto:theo@stutech.org">Let’s chat!</Link>
        </P>

        <Q>I have a question that you didn't answer.</Q>
        <P><Link href="mailto:hello@stutech.org">Email me</Link></P>
      </Box>
    </Container>
    <Apply />
    <Footer />
  </Layout>
)
