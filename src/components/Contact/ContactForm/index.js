import React from 'react';
import { Form, withFormik, FastField, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Input, theme } from '@style';
import styled from 'styled-components';
const { colors } = theme;

const Button = styled.button`
  cursor: pointer;
  border-radius: 3px;
  padding: 0.7rem 2.5rem;
  border: none;
  -webkit-appearance: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #fff;
  background: #0074d9;
  &:focus {
    outline: none;
  }
  &:disabled {
    background: gray;
  }
  ${({ secondary }) =>
    secondary &&
    `
		background: #001F3F;
	`}
`;

const Error = styled.span`
  color: ${colors.orange};
`;

const Center = styled.div`
  text-align: left;
  h4 {
    font-weight: normal;
  }
`;

const InputField = styled.div`
  position: relative;
  margin-bottom: 1rem;
`;

const ContactForm = ({
  setFieldValue,
  isSubmitting,
  values,
  errors,
  touched,
}) => (
  <Form
    name="matty-portfolio"
    method="post"
    data-netlify="true"
    data-netlify-recaptcha="true"
    data-netlify-honeypot="bot-field"
  >
    <InputField>
      <Input
        as={FastField}
        type="text"
        name="name"
        component="input"
        aria-label="name"
        placeholder="Full name*"
        error={touched.name && errors.name}
      />
      <ErrorMessage component={Error} name="name" />
    </InputField>
    <InputField>
      <Input
        id="email"
        as={FastField}
        type="email"
        name="email"
        component="input"
        aria-label="email"
        placeholder="Email*"
        error={touched.email && errors.email}
      />
      <ErrorMessage component={Error} name="email" />
    </InputField>
    <InputField>
      <Input
        id="message"
        as={FastField}
        type="text"
        name="message"
        component="textarea"
        aria-label="message"
        placeholder="Message*"
        rows="8"
        error={touched.message && errors.message}
      />
      <ErrorMessage component={Error} name="message" />
    </InputField>
    {values.name && values.email && values.message && (
      <Button
        type="submit"
        disabled={isSubmitting}
        onSubmit={value => setFieldValue(value)}
      >
        Submit
      </Button>
    )}
    {values.success && (
      <InputField>
        <Center>
          <h4>
            Your message has been successfully sent, I will get back to you
            ASAP!
          </h4>
        </Center>
      </InputField>
    )}
  </Form>
);

export default withFormik({
  mapPropsToValues: () => ({
    name: '',
    email: '',
    message: '',
    success: false,
  }),
  validationSchema: () =>
    Yup.object().shape({
      name: Yup.string().required('Full name is required'),
      email: Yup.string()
        .email('Invalid Email')
        .required('Email field is required'),
      message: Yup.string().required('Message field is required'),
    }),
  handleSubmit: async (
    { name, email, message },
    { setSubmitting, resetForm, setFieldValue }
  ) => {
    try {
      const encode = data => {
        return Object.keys(data)
          .map(
            key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
          )
          .join('&');
      };
      await fetch('/?no-cache=1', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'matty-portfolio',
          name,
          email,
          message,
        }),
      });
      await setSubmitting(false);
      await setFieldValue('success', true);
      setTimeout(() => resetForm(), 2000);
    } catch (err) {
      setSubmitting(false);
      setFieldValue('success', false);
      alert('Something went wrong, please try again!'); // eslint-disable-line
    }
  },
})(ContactForm);
