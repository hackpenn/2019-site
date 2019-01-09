import React from 'react'
import styled from 'styled-components'
import { Flex, Box, Container, Link as A } from '@hackclub/design-system'
import { theme } from 'theme'
import Flag from 'components/Flag'
import Link from 'gatsby-link'

const Base = styled(Box).attrs({
  bg: theme.colors.primaryDark,
  py: 3,
  width: 1
})`
  font-family: ${theme.fontSans};
  z-index: 4;
`

const Inner = styled(Container.withComponent(Flex)).attrs({
  px: 3,
  justify: 'space-between',
  align: 'center',
  mx: 'auto',
  role: 'navigation'
})``

export const Item = styled(A.withComponent(Link)).attrs({
  color: 'white',
  fontSize: [2, 3],
  my: 1,
  mx: [2, 3]
})`
  opacity: 0.875;
  text-transform: uppercase;
  position: relative;
  display: inline-block;
  cursor: pointer;
  transition: ${theme.transition} opacity;

  &:hover,
  &:focus {
    opacity: 1;
  }
`

const Nav = ({ color = theme.colors.white, ...props }) => (
  <Base role="banner" {...props}>
    <Inner color={color} py={[1, 0]}>
      <Flag />
      <Box role="navigation" ml={3}>
        <Item to="/schedule" children="Schedule" />
        <Item to="/register" children="Register" />
      </Box>
    </Inner>
  </Base>
)

export default Nav
