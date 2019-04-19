import React from 'react';
import { Form, withFormik, FastField, ErrorMessage } from 'formik';
import Recaptcha from 'react-google-recaptcha';
import * as Yup from 'yup';
import { Input, theme, helpers } from '@style';
import styled from 'styled-components';
const { colors } = theme;

const GetInTouch = styled.h2`
  color: ${colors.blue};
  text-align: center;
`;

const Button = styled.button`
  ${helpers.largeButton};
  margin-left: 25%;
`;

const Error = styled.span`
  color: ${colors.orange};
`;

const Center = styled.div`
  text-align: left;
  h4 {
    font-weight: normal;
    color: ${colors.green};
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
  ReCaptcha,
  handleSubmit,
}) => (
  <Form
    id="#contact"
    onSubmit={handleSubmit}
    form-name="matty-portfolio"
    method="post"
    data-netlify="true"
    data-netlify-recaptcha="true"
    data-netlify-honeypot="bot-field"
  >
    <GetInTouch>Get In Touch</GetInTouch>
    <InputField>
      <Input
        as={FastField}
        type="text"
        name="name"
        form-name="matty-portfolio"
        component="input"
        aria-label="name"
        placeholder="name"
        error={touched.name && errors.name}
      />
      <ErrorMessage component={Error} name="name" />
    </InputField>
    <InputField>
      <Input
        as={FastField}
        id="email"
        type="email"
        form-name="matty-portfolio"
        name="email"
        component="input"
        aria-label="email"
        placeholder="email"
        error={touched.email && errors.email}
      />
      <ErrorMessage component={Error} name="email" />
    </InputField>
    <InputField>
      <Input
        as={FastField}
        id="message"
        type="text"
        form-name="matty-portfolio"
        name="message"
        component="textarea"
        aria-label="message"
        placeholder="message..."
        rows="8"
        error={touched.message && errors.message}
      />
      <ErrorMessage component={Error} name="message" />
    </InputField>
    {values.name && values.email && values.message && (
      <InputField>
        <FastField
          as={ReCaptcha}
          component={Recaptcha}
          sitekey={`${process.env.SITE_RECAPTCHA_KEY}`}
          form-name="matty-portfolio"
          name="recaptcha"
          onChange={value => setFieldValue('recaptcha', value)}
        />
        <ErrorMessage component={Error} name="recaptcha" />
      </InputField>
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
    <Center>
      <Button
        secondary
        type="submit"
        onSubmit={handleSubmit}
        disabled={isSubmitting}
      >
        submit
      </Button>
    </Center>
  </Form>
);

export default withFormik({
  mapPropsToValues: () => ({
    name: '',
    email: '',
    message: '',
    recaptcha: '',
    success: false,
  }),
  validationSchema: () =>
    Yup.object().shape({
      name: Yup.string().required('Full name field is required'),
      email: Yup.string()
        .email('Invalid email')
        .required('Email field is required'),
      message: Yup.string().required('Message field is required'),
      recaptcha: Yup.string().required('Robots are not welcome yet!'),
    }),
  handleSubmit: async (
    { name, email, message, recaptcha },
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
          'g-recaptcha-response': recaptcha,
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
