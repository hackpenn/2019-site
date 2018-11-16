import React from 'react'
import { Box, Label, Flex, Text, Slider, Input } from '@hackclub/design-system'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme } from '../theme'

const BorderedInput = styled(Input).attrs({
  bg: 'smoke'
})`
  border: none;
`

const chevron = () => {
  const props = `xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'`
  const slate = '%23' + theme.colors.slate.replace('#', '')
  const pathProps = `fill='${slate}' d='M2 0L0 2h4zm0 5L0 3h4z'`
  return `%3Csvg ${props}%3E%3Cpath ${pathProps}/%3E%3C/svg%3E`
}
const InputSelect = styled(Input.withComponent('select'))`
  background: ${
    theme.colors.smoke
  } url('data:image/svg+xml;charset=utf8,${chevron()}') no-repeat right .75rem center;
  background-size: .5rem;
`
const InputTextarea = Input.withComponent('textarea')

const Suggestion = styled(Box).attrs({
  py: 1,
  px: 2,
  mr: 2,
  mb: 1,
  bg: 'snow'
})`
  border: 1px solid ${theme.colors.smoke};
  border-radius: ${theme.radius};
  cursor: pointer;
`
const InputSuggestions = ({ children, ...props }) => (
  <>
    <BorderedInput {...props} />
    <Flex mt={2}>
      {children.map(suggestion => (
        <Suggestion
          key={suggestion.props.value}
          onClick={e => alert(suggestion.props.value)}
          {...suggestion.props}
        />
      ))}
    </Flex>
  </>
)
/*class InputSuggestions extends React.Component {
  state = {
    value: ''
  }

  render() {
    const { children } = this.props
    return (
      <>
        <BorderedInput {...this.props} value={this.state.value} />
        <Flex mt={2}>
          {children.map(suggestion => (
            <Suggestion
              key={suggestion.props.value}
              onClick={e => e}
              {...suggestion.props}
            />
          ))}
        </Flex>
      </>
    )
  }
}*/

export const Error = styled(Text).attrs({
  className: 'error',
  color: 'error',
  fontSize: 1,
  ml: 1,
  my: 0
})`
  font-weight: normal;
  &:before {
    content: '— ';
  }
`

const Field = ({ type, name, label, placeholder, error, ...props }) => {
  const Component =
    {
      select: InputSelect,
      slider: Slider,
      textarea: InputTextarea,
      suggestions: InputSuggestions
    }[type] || BorderedInput
  return (
    <Label className={type} id={name} mb={2}>
      <Flex align="center" mb="2px" wrap>
        {label}
        {error && <Error children={error} />}
      </Flex>
      <Component name={name} type={type} placeholder={placeholder} {...props} />
    </Label>
  )
}

Field.displayName = 'Field'

Field.propTypes = {
  /** choose alternate field type (like email, password, textarea, or select) */
  type: PropTypes.oneOf([
    'checkbox',
    'date',
    'email',
    'file',
    'number',
    'password',
    'select',
    'tel',
    'textarea',
    'url',
    'text',
    'suggestions'
  ]),
  name: PropTypes.string.isRequired,
  /** label text */
  label: PropTypes.string.isRequired,
  /** validation message */
  error: PropTypes.string,
  /** placeholder text */
  placeholder: PropTypes.string
}

Field.defaultProps = {
  type: 'text'
}

export default Field
