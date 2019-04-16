import React from 'react';
import { Container } from '../styled/Container';
import Button from './Button';
import styled from 'styled-components';
import theme from '../styled/theme';
const { colors } = theme;

const Wrapper = styled.div`
  background-size: contain;
  background-position: left top;
  background-repeat: no-repeat;
  min-height: 70vh;
`;

const SkillsWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 960px) {
    flex-direction: column;
  }
  span {
    color: ${colors.blue};
    font-size: 1.2rem;
  }
`;

const Details = styled.div`
  flex: 1;
  padding-left: 2rem;
  @media (max-width: 960px) {
    padding-left: unset;
    width: 100%;
  }
  h2 {
    margin-bottom: 2rem;
    color: ${colors.blue};
  }
`;

export const About = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Details>
        <h2>Coming Soon</h2>
        <Button href="#contact">
          <span>résumé</span>
        </Button>
      </Details>
    </SkillsWrapper>
  </Wrapper>
);
