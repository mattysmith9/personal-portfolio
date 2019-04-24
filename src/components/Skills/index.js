import React from 'react';
import styled from 'styled-components';
import { theme, Container } from '@style';

const { colors } = theme;

const Wrapper = styled.div`
  background-size: contain;
  background-position: left top;
  background-repeat: no-repeat;
  min-height: 70vh;
`;

const Details = styled.div`
  flex: 1;
  padding-left: 2rem;
  @media (max-width: 960px) {
    padding-left: unset;
    width: 100%;
  }
  h1 {
    font-size: 7rem;
    margin-top: 10rem;
    color: ${colors.blue};
    text-align: center;
  }
  p {
    color: ${colors.green};
    text-align: center;
    font-size: 1.5rem;
  }
`;

const Skills = () => (
  <Wrapper as={Container} id="skills">
    <Details>
      <h1>Coming Soon</h1>
      <p>I am currently updating the page. Final product will be live soon!</p>
    </Details>
  </Wrapper>
);

export default Skills;
