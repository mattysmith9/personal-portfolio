import React from 'react';
import { Container } from '../styled/Container';
import styled from 'styled-components';
import theme from '../styled/theme';
const { colors } = theme;

const HelloContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-items: flex-start;
  min-height: 70vh;
`;

const Hola = styled.h1`
  color: ${colors.grey};
  margin: 0 0 10px 2.3rem;
  font-size: 1.5rem;
  font-weight: normal;
  font-family: ${theme.fontFamily};
`;

const FullName = styled.h2`
  font-size: 85px;
  line-height: 1.1;
  margin: 0 0 10px 1.8rem;
  color: ${colors.blue};
`;

const Subtitle = styled.h3`
  font-size: 35px;
  line-height: 1.1;
  color: ${colors.green};
  margin: 0 0 10px 2rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 0 0 5px 2rem;
  padding-top: 1.5rem;
`;

const Button = styled.a`
  font-family: ${theme.fontFamily};
  background-color: ${colors.body};
  border: 1px solid ${colors.green};
  border-radius: ${theme.borderRadiusCard};
  color: ${colors.blue};
  font-size: 1rem;
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  letter-spacing: 0.5px;
  margin: 20px auto;
  padding: 18px 23px;
`;

export const Hello = () => (
  <HelloContainer>
    <Hola>Hola, My name is</Hola>
    <FullName>Matty Smith.</FullName>
    <Subtitle>
      engineer | developer | avid golfer | aspiring polyglot .
    </Subtitle>
    <ButtonWrapper>
      <Button href="mail">Contact</Button>
    </ButtonWrapper>
  </HelloContainer>
);

/*I am a Software Engineer from Burlington, Vermont
        with a focus on technologies such as JavaScript, Node.JS and React. */
