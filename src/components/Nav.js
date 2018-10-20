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
  justify: ['center', 'space-between'],
  align: 'center',
  mx: 'auto',
  role: 'navigation'
})``

export const Item = styled(A.withComponent(Link)).attrs({
  fontSize: 3,
  my: 1,
  mx: [2, 3]
})`
  color: inherit;
  opacity: 0.875;
  font-weight: 600;
  text-transform: uppercase;
  position: relative;
  display: inline-block;
  cursor: pointer;
  transition: ${theme.transition} all;

  &:hover {
    opacity: 1;

    &:after,
    &:before {
      width: 100%;
      left: 0;
    }
  }

  &:after,
  &:before {
    content: '';
    position: absolute;
    top: calc(100% + ${theme.space[1]}px);
    width: 0;
    right: 0;
    height: 3px;
  }

  &:before {
    transition: width 0.25s cubic-bezier(0.5, 0.2, 0, 0.9) 0.125s;
    background: ${theme.colors.alt};
  }

  &:after {
    transition: width 0.125s cubic-bezier(0.25, 0.2, 0.25, 0.75);
    background: ${theme.colors.primary};
  }
`

const Nav = ({ color = theme.colors.white, ...props }) => (
  <Base role="banner" {...props}>
    <Inner color={color} py={[1, 0]}>
      <Flag />
      <Box role="navigation" ml={3}>
        <Item to="/register" children="Register" />
        <Item to="/about" children="About" />
      </Box>
    </Inner>
  </Base>
)

export default Nav
