import styled from 'styled-components'
import { Box } from '@hackclub/design-system'

export default styled(Box)`
  border-radius: 99999px;
  display: inline-flex;
  width: 40px;
  height: 24px;
  background-color: ${props =>
    props.checked ? props.theme.cx(props.color) : 'transparent'};
  box-shadow: inset 0 0 0 2px;
  transition-property: background-color;
  transition-duration: 0.25s;
  transition-timing-function: ease-out;
  user-select: none;
  &:after {
    content: ' ';
    width: 16px;
    height: 16px;
    margin: 4px;
    border-radius: 8px;
    background-color: ${props =>
      props.checked ? props.theme.colors.white : props.theme.cx(props.color)};
    transition-property: transform, color;
    transition-duration: 0.125s;
    transition-timing-function: ease-out;
    transform: ${props =>
      props.checked ? `translateX(16px)` : `translateX(0)`};
  }
`
