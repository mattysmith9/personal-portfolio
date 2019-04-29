import React from 'react';
import { Container } from '@style';
import ContactForm from './ContactForm';
import styled from 'styled-components';

const Wrapper = styled(Container)`
  padding: 2.5rem 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Details = styled.div`
  flex: 1;
  padding-right: 2rem;
  @media (max-width: 960px) {
    padding-right: unset;
    width: 100%;
    order: 1;
  }
`;

const Contact = () => (
  <Wrapper id="contact" aria-label="contact-form">
    <Details>
      <ContactForm method="POST" />
    </Details>
  </Wrapper>
);

export default Contact;
