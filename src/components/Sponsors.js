import React from 'react'
import styled from 'styled-components'
import { Container } from '@hackclub/design-system'
import data from 'data'

const Base = styled(Container)`
  display: grid;
  grid-gap: ${props => props.theme.space[3]}px;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  align-items: center;
  justify-content: center;
  img {
    max-width: 50%;
  }
`

const Sponsors = props => (
  <Base maxWidth={48} {...props}>
    {data.sponsors.map(sponsor => (
      <a href={`${sponsor.link}`}>
        <img
          alt={sponsor.name}
          src={`/sponsors/${sponsor.image}`}
          key={sponsor.image}
        />
      </a>
    ))}
  </Base>
)

export default Sponsors
