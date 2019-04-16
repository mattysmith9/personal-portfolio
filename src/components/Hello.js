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
  color: ${colors.blue};
  margin: 0 0 10px 2.5rem;
  font-size: 1.5rem;
  font-weight: normal;
  font-family: ${theme.fontFamily};
`;

const FullName = styled.h2`
  font-size: 85px;
  line-height: 1.1;
  margin: 0 0 10px 2rem;
  color: ${colors.blue};
`;

const Subtitle = styled.h3`
  font-size: 35px;
  line-height: 1.1;
  color: ${colors.green};
  margin: 0 0 10px 2.1rem;
`;

const Blob = styled.div`
  margin: 0 0 20px 2.1rem;
  width: 50%;
  max-width: 500px;
  color: ${colors.blue};
  font-family: ${theme.fontFamily};
  span {
    font-size: 1rem;
  }
`;

export const Hello = () => (
  <HelloContainer>
    <Hola>Hola, My name is</Hola>
    <FullName>Matty Smith.</FullName>
    <Subtitle>
      engineer | developer | avid golfer | aspiring polyglot .
    </Subtitle>
    <Blob />
  </HelloContainer>
);

/*I am a Software Engineer from Burlington, Vermont
        with a focus on technologies such as JavaScript, Node.JS and React. */
