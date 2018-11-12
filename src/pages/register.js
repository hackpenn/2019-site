import React from 'react'
import styled from 'styled-components'
import { withFormik } from 'formik'
import * as yup from 'yup'
import {
  Box,
  Container,
  Heading,
  Link,
  Field,
  Button,
} from '@hackclub/design-system'
import { theme } from 'theme'
import Layout from 'components/Layout'
import Nav from 'components/Nav'
import BG from 'components/BG'
import Footer from 'components/Footer'
import Sheet from 'components/Sheet'
import IconButton from 'components/IconButton'

const Headline = styled(Heading.h2).attrs({
  color: 'white',
  fontSize: [6, 7],
  mb: 2
})`
  font-weight: 900;
  line-height: 1.125;
`
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
      type="checkbox" /* not working :( */
      name="reimbursable"
      label="Interested in travel reimbursement?"
      error={errors.reimbursable}
      value={values.reimbursable}
      onChange={handleChange}
    />
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
const RegistrationForm = withFormik({
  mapPropsToValues: () => ({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    gender: '',
    grade: '',
    shirt_size: '',
    dietary_restrictions: '',
    reimbursable: false,
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
    reimbursable: yup.boolean().required(),
    emergency_email: yup
      .string()
      .required()
      .email(),
    emergency_phone: yup.string().required()
  }),
  handleSubmit: (data, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(data, null, 2))
      setSubmitting(false)
    }, 1000)
  }
})(InnerForm)

const url = 'http://hackpenn.com/'
const twitterURL = (text, u = url) =>
  `https://twitter.com/intent/tweet?text=${text
    .split(' ')
    .join('%20')}&url=${u}`
const facebookURL = (text, u = url) =>
  `https://www.facebook.com/sharer/sharer.php?u=${u}`

const ShareButton = ({ children, ...props }) => (
  <Link href={props.url} target="_blank" rel="noopener noreferrer">
    <IconButton
      aria-label={`Share on ${props.service}`}
      f={2}
      glyph={props.service.toLowerCase()}
      {...props}
    >
      {children || props.service}
    </IconButton>
  </Link>
)

export default () => (
  <Layout>
    <Nav />
    <Box
      bg={theme.colors.primaryDark}
      color={theme.colors.white}
      px={2}
      pt={[4, 5]}
      pb={[4, 5, 6]}
    >
      <Container width={1} px={3}>
        <Headline>Register</Headline>
        <Heading.h2
          fontSize={[3, 4, 5]}
          style={{ fontFamily: theme.mono }}
          mt={3}
        >
          The event is totally free, lots of food, drinks, and prizes included.
        </Heading.h2>
        <Sheet mt={4}>
          <RegistrationForm />
        </Sheet>
      <Sheet
        p={[3, 4]}
          mt={[4, 5]}
        align="center"
        maxWidth={24}
        boxShadowSize="md"
      >
        <Heading.h2 f={3} caps mb={2}>
          Share it!
        </Heading.h2>
        <ShareButton
          service="Twitter"
          url={twitterURL(
            'Check out @hackpenn, PA’s largest high school hackathon!',
            url
          )}
          bg="#1da1f2"
          mr={3}
        />
        <ShareButton service="Facebook" url={facebookURL(url)} bg="#3b5998" />
      </Sheet>
      </Container>
    </Box>
    <Footer />
  </Layout>
)
