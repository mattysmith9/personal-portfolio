import React from 'react';
import { Link } from 'gatsby-plugin-modal-routing';
import SkillList from './SkillList';
import styled from 'styled-components';
import { helpers, theme, Section } from '@style';

const { colors } = theme;

const AboutWrapper = styled(Section)`
  position: relative;
  h2 {
    color: ${colors.blue};
  }
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const DetailsWrapper = styled.div`
  width: 60%;
  max-width: 480px;
  color: ${colors.grey};
`;

const SkillsWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  overflow: hidden;
  margin-top: 20px;
`;

const Skill = styled.li`
  position: relative;
  margin-bottom: 10px;
  padding-left: 20px;
  font-family: ${theme.fontFamilyBtn};
  font-size: 0.8rem;
  color: ${colors.blue};
  list-style: none;
  &:before {
    content: '》';
    position: absolute;
    left: 0;
    color: ${colors.orange};
    font-size: 1rem;
    line-height: 24px;
  }
`;

const Button = styled(Link)`
  ${helpers.largeButton};
`;

export const Skills = () => (
  <AboutWrapper id="skills">
    <h2>About Me</h2>
    <FlexWrapper>
      <DetailsWrapper>
        Hi! I'm Matty, I am an aspiring Software Engineer from Burlington,
        Vermont. About six months ago I decided that my previous career as a
        Mortgage Broker wasn't what I was looking for so I enrolled in a
        bootcamp and took the plunge into the world of Software.
        <br />
        <br />
        Here are a few of the technologies I am working with.
        <SkillsWrapper>
          {SkillList.map(({ id, name }) => (
            <Skill key={id}>{name}</Skill>
          ))}
        </SkillsWrapper>
      </DetailsWrapper>
      <Button to="/projectDescription/" asModal>
        more info
      </Button>
    </FlexWrapper>
  </AboutWrapper>
);
