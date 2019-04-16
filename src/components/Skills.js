import React from 'react';
import styled from 'styled-components';
import { Container } from '../styled/Container';
import { Link } from 'gatsby-plugin-modal-routing';
import theme from '../styled/theme';
const { colors } = theme;

const Wrapper = styled.div`
  background-size: contain;
  background-position: left top;
  background-repeat: no-repeat;
  min-height: 70vh;
`;

const AboutWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 960px) {
    flex-direction: column;
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
    text-align: center;
  }
  p {
    margin-bottom: 2.5rem;
    font-family: ${theme.fontFamily};
    font-weight: normal;
    line-height: 1.3;
    color: ${colors.orange};
  }
`;

const Button = styled(Link)`
  cursor: pointer;
  font-family: ${theme.fontFamily};
  border-radius: ${theme.borderRadiusBtn};
  padding: 18px 23px;
  vertical-align: middle;
  line-height: 1;
  border: 2px solid ${colors.green};
  background-color: transparent;
  box-shadow: ${theme.boxShadow};
  &:hover {
    transform: ${theme.transform};
    transition: ${theme.transition};
    border: 2px solid ${colors.orange};
  }
  span {
    color: ${colors.blue};
    font-size: 1.2rem;
  }
`;

export const Skills = () => (
  <Wrapper id="skills">
    <AboutWrapper as={Container}>
      <Details>
        <h2>A little About myself</h2>
        <p>
          Hola, I'm Matty! I have a ginger kitty named Blue, I love golf, I live
          in Burlington, Vermont, I could read about sacred geometry for hours,
          Alan Watts is cool, I have been programming for four months and this
          is my first portfolio page.
          <br />
          <br />
          About four months ago I enrolled in a bootcamp to learn how to code. I
          can defintely say it was one of the best decisions I have made. I was
          looking for a change of pace and programming has certainly delivered.
          The amount of information intake that has been involved with this
          journey so far is mind boggling but I am enjoying the process.
        </p>
        <Button to="/projectDescription/" asModal>
          <span>more info</span>
        </Button>
      </Details>
    </AboutWrapper>
  </Wrapper>
);
