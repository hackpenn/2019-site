import React from 'react'
import styled from 'styled-components'
import { withFormik } from 'formik'
import * as yup from 'yup'
import 'unfetch/polyfill'
import { Field, Button, Flex, Text } from '@hackclub/design-system'
import { theme } from 'theme'

const FormField = styled(Field).attrs({
  bg: theme.colors.white
})`
  border: 1px solid ${theme.colors.gray[3]};
`

const InnerForm = ({
  values,
  errors,
  handleChange,
  handleSubmit,
  isSubmitting
}) => (
  <form onSubmit={handleSubmit}>
    <FormField
      type="text"
      name="first_name"
      label="First Name"
      error={errors.first_name}
      value={values.first_name}
      onChange={handleChange}
    />
    <FormField
      type="text"
      name="last_name"
      label="Last Name"
      error={errors.last_name}
      value={values.last_name}
      onChange={handleChange}
    />
    <FormField
      type="email"
      name="email"
      label="Email"
      error={errors.email}
      value={values.email}
      onChange={handleChange}
    />
    <FormField
      type="tel"
      name="phone_number"
      label="Phone Number"
      error={errors.phone_number}
      value={values.phone_number}
      onChange={handleChange}
    />
    <FormField
      type="select"
      name="gender"
      label="Gender"
      error={errors.gender}
      value={values.gender}
      onChange={handleChange}
    >
      <option value="" default>
        Select one
      </option>
      <option value="Female">Female</option>
      <option value="Male">Male</option>
      <option value="Non-binary">Non-binary</option>
      <option value="Prefer not to answer">Prefer not to answer</option>
      <option value="Other">Other</option>
    </FormField>
    <FormField
      type="select"
      name="grade"
      label="Grade"
      error={errors.grade}
      value={values.grade}
      onChange={handleChange}
    >
      <option value="" default>
        Select one
      </option>
      <option value="8">8th (Class of ’23)</option>
      <option value="9">9th (Class of ’22)</option>
      <option value="10">10th (Class of ’21)</option>
      <option value="11">11th (Class of ’20)</option>
      <option value="12">12th (Class of ’19)</option>
    </FormField>
    <FormField
      type="select"
      name="shirt_size"
      label="Shirt Size"
      error={errors.shirt_size}
      value={values.shirt_size}
      onChange={handleChange}
    >
      <option value="" default>
        Select one
      </option>
      <option value="S">S</option>
      <option value="M">M</option>
      <option value="L">L</option>
      <option value="XL">XL</option>
    </FormField>
    <FormField
      type="text"
      name="dietary_restrictions"
      label="Dietary Restrictions"
      error={errors.dietary_restrictions}
      value={values.dietary_restrictions}
      onChange={handleChange}
    />
    <FormField
      type="select"
      name="reimbursable"
      label="Interested in travel reimbursement?"
      error={errors.reimbursable}
      value={values.reimbursable}
      onChange={handleChange}
    >
      <option value="" default>
        Select one
      </option>
      <option value="false">No</option>
      <option value="true">Yes</option>
    </FormField>
    {/*<Flex
      align="center"
      color="primary"
      ml={1}
      onClick={handleChange('reimbursable')}
    >
      <Text.span caps bold={!values.reimbursable}>
        No
      </Text.span>
      <Switch
        color="primary"
        role="checkbox"
        checked={values.reimbursable}
        mx={1}
      />
      <Text.span caps bold={values.reimbursable}>
        Yes
      </Text.span>
    </Flex>*/}
    <FormField
      type="text"
      name="emergency_email"
      label="Emergency Contact Email"
      error={errors.emergency_email}
      value={values.emergency_email}
      onChange={handleChange}
    />
    <FormField
      type="tel"
      name="emergency_phone"
      label="Emergency Contact Phone"
      error={errors.emergency_phone}
      value={values.emergency_phone}
      onChange={handleChange}
    />
    <Button type="submit" onClick={handleSubmit} disabled={isSubmitting}>
      Submit
    </Button>
  </form>
)

export default withFormik({
  mapPropsToValues: () => ({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    gender: '',
    grade: '',
    shirt_size: '',
    dietary_restrictions: '',
    reimbursable: '',
    emergency_email: '',
    emergency_phone: ''
  }),
  validationSchema: yup.object().shape({
    first_name: yup.string().required(),
    last_name: yup.string().required(),
    email: yup
      .string()
      .required()
      .email(),
    phone_number: yup.string().required(),
    gender: yup.string().required(),
    grade: yup.string().required(),
    shirt_size: yup.string().required(),
    dietary_restrictions: yup.string(),
    reimbursable: yup.string().required(),
    emergency_email: yup
      .string()
      .required()
      .email(),
    emergency_phone: yup.string().required()
  }),
  handleSubmit: (attendee, { setSubmitting }) => {
    setSubmitting(true)
    fetch(
      'https://h-and-m.herokuapp.com/api/v1/events/hack-pennsylvania/attendees',
      {
        method: 'POST',
        body: JSON.stringify({ attendee }),
        headers: { 'Content-Type': 'application/json' }
      }
    ).then(res => {
      setSubmitting(false)
      if (res.status === 200) {
        this.setState({ submitted: true })
      }
    })
  }
})(InnerForm)
