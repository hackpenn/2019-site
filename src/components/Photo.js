import styled from 'styled-components'
import { BackgroundImage } from '@hackclub/design-system'

const Photo = styled(BackgroundImage).attrs({ role: 'img' })`
  overflow: hidden;
  transition: all 0.125s ease-out;
  background-size: auto 100%;
  height: 100%;
  &:hover {
    background-size: auto 108%;
  }
  @media (prefers-reduced-motion: reduce) {
    transition: none;
    background-size: cover !important;
  }
`

export default Photo
