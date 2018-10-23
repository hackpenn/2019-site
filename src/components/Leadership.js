import React from 'react'
import { Box, Container, Heading, Text } from '@hackclub/design-system'
import Leaders from 'components/Leaders'
import { theme } from 'theme'

const Leadership = () => (
  <Box.section bg={theme.colors.snow} py={[4, 5]} id="leadership">
    <Container px={3} mb={[4, 5]}>
      <Heading.h2 color="primaryDark" fontSize={[5, 6]} mb={2}>
        Leadership
      </Heading.h2>
      <Text color="slate" fontSize={[3, 4]} mb={4}>
        We’re a diverse group of high school students passionate about
        revitalizing PA through coding.
      </Text>
      <Leaders />
    </Container>
  </Box.section>
)

export default Leadership
