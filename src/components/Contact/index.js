import React from 'react';
import { Container } from '@style';
import ContactForm from './ContactForm';
import styled from 'styled-components';
import { theme } from '@style';
const { colors } = theme;

const Wrapper = styled.div`
  padding: 4rem 0;
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
  h1 {
    margin-bottom: 2rem;
    font-size: 26pt;
    color: ${colors.blue};
  }
  p {
    margin-bottom: 2.5rem;
    font-size: 20pt;
    font-weight: normal;
    line-height: 1.3;
    color: ${colors.green};
  }
`;

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

const Contact = () => (
  <Wrapper as={Container} id="contact">
    <Details>
      <ContactForm method="post" />
    </Details>
    <Button>submit</Button>
  </Wrapper>
);

export default Contact;
