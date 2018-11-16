import React from 'react'
import styled from 'styled-components'
import { Formik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import jsCookie from 'js-cookie'
import { LargeButton, Box, Text, Heading } from '@hackclub/design-system'
import Field from '../components/Field'

export default class RegistrationForm extends React.Component {
  state = {
    submitted: false
  }

  render() {
    const { submitted } = this.state
    const signedUp = jsCookie.get('signedUp')

    return submitted ? (
      <Box align="center">
        <Text fontSize={4}>
          Thanks for signing up!{' '}
          <span role="img" aria-label="Celebration emoji">
            🎉
          </span>
        </Text>
      </Box>
    ) : signedUp ? (
      <Box align="center">
        <Text fontSize={4}>
          You’ve already signed up!{' '}
          <span role="img" aria-label="Celebration emoji">
            🎉
          </span>
        </Text>
        <Text fontSize={2}>
          If this is an error,{' '}
          <a
            onClick={e => {
              e.preventDefault()
              jsCookie.remove('signedUp')
              this.forceUpdate()
            }}
            href="#"
            children="click here"
          />
          .
        </Text>
      </Box>
    ) : (
      <Formik
        initialValues={{
          first_name: '',
          last_name: '',
          email: '',
          phone_number: '',
          pronouns: '',
          grade: '',
          shirt_size: '',
          dietary_restrictions: '',
          reimbursable: '',
          emergency_email: '',
          emergency_phone: ''
        }}
        validationSchema={yup.object().shape({
          first_name: yup.string().required('required'),
          last_name: yup.string().required('required'),
          email: yup
            .string()
            .required('required')
            .email('must be a valid email'),
          phone_number: yup.string().required('required'),
          pronouns: yup.string().required('required'),
          grade: yup.string().required('required'),
          shirt_size: yup.string().required('required'),
          dietary_restrictions: yup.string(),
          reimbursable: yup.string().required('required'),
          emergency_email: yup
            .string()
            .required('required')
            .email('must be a valid email'),
          emergency_phone: yup.string().required('required')
        })}
        validateOnChange={false}
        onSubmit={(attendee, { setSubmitting }) => {
          setSubmitting(true)
          axios
            .post(
              'https://h-and-m.herokuapp.com/api/v1/events/hack-pennsylvania/attendees',
              {
                attendee
              }
            )
            .then(res => {
              setSubmitting(false)
              if (res.status === 200) {
                this.setState({ submitted: true })
                jsCookie.set('signedUp', 'true')
              }
            })
        }}
      >
        {({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <Box color="slate" mb={3}>
              <Heading.h3>Attendee Information</Heading.h3>
              <Text>We can’t wait to meet you!</Text>
            </Box>
            <Field
              type="text"
              name="first_name"
              label="First Name"
              placeholder="Margaret"
              error={errors.first_name}
              value={values.first_name}
              onChange={handleChange}
            />
            <Field
              type="text"
              name="last_name"
              label="Last Name"
              placeholder="Hamilton"
              error={errors.last_name}
              value={values.last_name}
              onChange={handleChange}
            />
            <Field
              type="email"
              name="email"
              label="Email"
              placeholder="margaret@hackpenn.com"
              error={errors.email}
              value={values.email}
              onChange={handleChange}
            />
            <Field
              type="tel"
              name="phone_number"
              label="Phone number"
              placeholder="814-555-5555"
              error={errors.phone_number}
              value={values.phone_number}
              onChange={handleChange}
            />
            <Field
              type="suggestions"
              name="pronouns"
              label="Pronouns"
              placeholder="Select an option below or begin typing…"
              error={errors.pronouns}
              value={values.pronouns}
              onChange={handleChange}
            >
              <option value="she/her">she/her</option>
              <option value="he/him">he/him</option>
              <option value="they/them">they/them</option>
            </Field>
            <Text
              fontSize={1}
              mb={2}
              style={{
                fontFamily: 'inherit'
              }}
            >
              More info:{' '}
              <a
                href="https://pronoun.is/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://pronoun.is
              </a>
            </Text>
            {/*<Field
              type="select"
              name="pronouns"
              label="Pronouns"
              error={errors.pronouns}
              value={values.pronouns}
              onChange={handleChange}
            >
              <option value="" default>
                Select one
              </option>
              <option value="Female">She/her</option>
              <option value="Male">He/him</option>
              <option value="Non-binary">They/them</option>
              <option value="Prefer not to answer">Prefer not to answer</option>
              <option value="Other">Other</option>
            </Field>*/}
            <Field
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
            </Field>
            <Field
              type="select"
              name="shirt_size"
              label="Shirt size"
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
            </Field>
            <Field
              type="text"
              name="dietary_restrictions"
              label="Dietary restrictions"
              placeholder="(optional)"
              error={errors.dietary_restrictions}
              value={values.dietary_restrictions}
              onChange={handleChange}
            />
            <Field
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
              <option value="true">Yes (we’ll contact you later)</option>
            </Field>
            <Box color="slate" my={3}>
              <Heading.h3>Emergency Contact Information</Heading.h3>
              <Text>
                In case of emergency, we need to be able to reach your
                parent/guardian/etc.
              </Text>
            </Box>
            <Field
              type="text"
              name="emergency_email"
              label="Email"
              placeholder="margaret@hackpenn.com"
              error={errors.emergency_email}
              value={values.emergency_email}
              onChange={handleChange}
            />
            <Field
              type="tel"
              name="emergency_phone"
              label="Phone number"
              placeholder="814-555-5555"
              error={errors.emergency_phone}
              value={values.emergency_phone}
              onChange={handleChange}
            />
            <LargeButton
              mt={3}
              type="submit"
              onClick={handleSubmit}
              disabled={isSubmitting}
              scale
            >
              Submit
            </LargeButton>
          </form>
        )}
      </Formik>
    )
  }
}
