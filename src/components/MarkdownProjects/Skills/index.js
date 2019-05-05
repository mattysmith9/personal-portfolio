import React, { Component } from 'react';
import { Link } from 'gatsby-plugin-modal-routing';
import PropTypes from 'prop-types';
import { theme, Section, mediaSizes, helpers } from '@style';
import styled from 'styled-components';

const { colors, fontSizes } = theme;

const SkillsWrapper = styled(Section)`
  position: relative;
  h2 {
    color: ${colors.orange};
  }
`;

const SkillsFlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  ${mediaSizes.tablet`display: block;`};
`;

const SkillsDetailWrapper = styled.div`
  width: 70%;
  max-width: 600px;
  font-family: ${theme.fontFamily};
  color: ${colors.modal};
  ${mediaSizes.tablet`width: 80%;`};
`;

const TechWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  overflow: hidden;
`;

const Tech = styled.li`
  position: relative;
  margin-bottom: 10px;
  padding-left: 20px;
  font-family: ${theme.fontFamily};
  font-size: 0.9rem;
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
  @media (max-width: 680px) {
    font-size: 0.5rem;
  }
`;

const Button = styled(Link)`
  ${helpers.largeButton};
  ${mediaSizes.tablet`font-size: ${fontSizes.medium};`};
`;

class Skills extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  };

  render() {
    const { data } = this.props;
    const { frontmatter, html } = data[0].node;
    const { title, tech } = frontmatter;

    return (
      <SkillsWrapper id="skills" aria-label="skills_and_interests">
        <h2>{title}</h2>
        <SkillsFlexWrapper>
          <SkillsDetailWrapper>
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <TechWrapper>
              {tech && tech.map((tech, i) => <Tech key={i}>{tech}</Tech>)}
            </TechWrapper>
          </SkillsDetailWrapper>
          <Button to="/modal-description/" asModal>
            more info
          </Button>
        </SkillsFlexWrapper>
      </SkillsWrapper>
    );
  }
}

export default Skills;
