import { theme } from '@hackclub/design-system'
import palx from 'palx'

const primary = '#087fd9'
export const palette = palx(primary)

export const grays = {
  black: '#1f2d3d',
  steel: '#273444',
  slate: '#3c4858',
  grey: '#8492a6',
  smoke: '#e0e6ed',
  snow: '#f9fafc',
  brown: '#877457',
  white: '#ffffff'
}

export const brand = {
  primary: '#2b34b6',
  alt: '#ffa235',
  accent: palette.fuschia[5],
  success: palette.green[5],
  info: palette.blue[5],
  warning: palette.orange[5],
  error: palette.red[7],
  muted: grays.grey
}

export const colors = {
  ...palette,
  ...grays,
  ...brand
}

theme.colors = colors

const baseFamily =
  '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif'

const sans = '"Klima Web"'
const display = '"Glosa Display"'

theme.font = `${sans},${baseFamily}`
theme.fontDisplay = `${display},${baseFamily}`
theme.bold = '700'

export default theme
