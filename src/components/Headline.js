import styled from 'styled-components'
import { Heading } from '@hackclub/design-system'

const Headline = styled(Heading.h2).attrs({
  color: 'white',
  fontSize: [6, 7],
  mb: 2
})`
  font-weight: 900;
  line-height: 1.125;
`

export default Headline
