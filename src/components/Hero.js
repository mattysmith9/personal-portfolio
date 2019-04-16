import React from 'react';
import Button from './Button';
import styled from 'styled-components';

const HeroContainer = styled.div`
  position: relative;
  padding-top: 4rem;
`;

const Intro = styled.h1`
  font-size: 22rem;
  font-weight: 500;
  text-align: center;
  border: 4px solid #6da6b2;
  border-radius: 20px;
  color: #6da6b2;
  mix-blend-mode: color-burn;
`;

const Next = styled(Button)`
  font-size: 3rem;
  margin-left: 23rem;
  margin-top: 2rem;
  color: #03cea4;
  mix-blend-mode: screen;
`;

const Hero = () => (
  <HeroContainer>
    <Intro>M</Intro>
    <Next to="/homepage/">lets go</Next>
  </HeroContainer>
);

export default Hero;
