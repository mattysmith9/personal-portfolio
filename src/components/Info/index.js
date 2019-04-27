import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme, Container } from '@style';
const { colors } = theme;

const ProjectWrapper = styled(Container)`
  position: relative;
`;

const TechWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  overflow: hidden;
  margin-top: 20px;
`;

const Tech = styled.li`
  position: relative;
  margin-bottom: 10px;
  padding-left: 1rem;
  font-family: ${theme.fontFamily};
  font-size: 1rem;
  color: ${colors.footer};
  list-style: none;

  &:before {
    content: '》';
    position: absolute;
    margin-top: 8px;
    left: 0;
    color: ${colors.footer};
    font-size: 1rem;
    line-height: 22px;
  }
  @media (max-width: 680px) {
    font-size: 0.5rem;
  }
`;

class Info extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  };

  render() {
    const { data } = this.props;
    const { frontmatter, html } = data[0].node;
    const { title, tech } = frontmatter;

    return (
      <ProjectWrapper id="info">
        <h2>{title}</h2>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <TechWrapper>
          {tech && tech.map((tech, i) => <Tech key={i}>{tech}</Tech>)}
        </TechWrapper>
      </ProjectWrapper>
    );
  }
}

export default Info;
