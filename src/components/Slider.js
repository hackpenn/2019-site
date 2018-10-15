import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Flex } from '@hackclub/design-system'

const slide1 = keyframes`
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-100%);
  }
`
const slide2 = keyframes`
  from {
    display: flex;
    transform: translateX(0%);
  }
  to {
    display: flex;
    transform: translateX(-100%);
  }
`

const Base = styled(Flex)`
  overflow: hidden;
  width: 100%;
  > div:first-child {
    width: 100%;
    animation: ${slide1} ${props => props.duration || 16}s linear infinite;
  }
  > div:last-child {
    width: 100%;
    animation: ${slide2} ${props => props.duration || 16}s linear infinite;
  }
`

const Slider = ({ children, ...props }) => (
  <Base {...props}>
    <Flex children={children} />
    <Flex children={children} />
  </Base>
)

export default Slider
