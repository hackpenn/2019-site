import styled from 'styled-components'
import { Box } from '@hackclub/design-system'

const Grid = styled(Box)`
  display: grid;
  grid-gap: ${({ theme }) => theme.space[2]}px;
  width: 100%;
  > div {
    width: 100%;
    box-shadow: ${({ theme }) => theme.boxShadows[2]};
    border-radius: ${({ theme }) => theme.radius};
    max-width: 100%;
    min-height: 16rem;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${({ theme }) => theme.space[4]}px;
  }
`

export default Grid
