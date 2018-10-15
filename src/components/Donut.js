import React from 'react'
import { Box } from '@hackclub/design-system'

const Svg = Box.withComponent('svg')

const Donut = ({ size = 128, value = 10, strokeWidth, ...props }) => {
  const R = 16 - strokeWidth
  const C = 2 * Math.PI * R
  return (
    <Svg {...props} viewBox="0 0 32 32" width={size} height={size}>
      <circle
        cx={16}
        cy={16}
        r={R}
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        opacity="0.125"
      />
      <circle
        cx={16}
        cy={16}
        r={R}
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeDasharray={C}
        strokeDashoffset={C - value * C}
        transform="rotate(-90 16 16)"
      />
    </Svg>
  )
}

export default Donut
