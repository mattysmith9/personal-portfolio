import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby-plugin-modal-routing';
import styled from 'styled-components';
import { helpers, theme, Section } from '@style';

const { colors } = theme;

const AboutWrapper = styled(Section)`
  position: relative;
  h2 {
    color: ${colors.orange};
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

class About extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  };

  render() {
    const { data } = this.props;
    const { frontmatter, html } = data[0].node;
    const { title, skills } = frontmatter;

    return (
      <AboutWrapper id="about">
        <h2>{title}</h2>
        <FlexWrapper>
          <DetailsWrapper>
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <SkillsWrapper>
              {skills &&
                skills.map((skill, i) => <Skill key={i}>{skill}</Skill>)}
            </SkillsWrapper>
          </DetailsWrapper>
          <Button to="/modal-description/" asModal>
            more info
          </Button>
        </FlexWrapper>
      </AboutWrapper>
    );
  }
}

export default About;
