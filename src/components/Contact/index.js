import React from 'react';
import { Container } from '@style';
import ContactForm from './ContactForm';
import styled from 'styled-components';

const ContactWrapper = styled(Container)`
  padding: 2.5rem 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const ContactDetails = styled.div`
  flex: 1;
  padding-right: 2rem;
  @media (max-width: 960px) {
    padding-right: unset;
    width: 100%;
    order: 1;
  }
`;

const Contact = () => (
  <ContactWrapper id="contact" aria-label="contact-form">
    <ContactDetails>
      <ContactForm method="POST" />
    </ContactDetails>
  </ContactWrapper>
);

export default Contact;
