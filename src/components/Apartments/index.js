import React, { Component } from 'react';
import { theme, Container } from '@style';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const { colors } = theme;

const ProjectWrapper = styled(Container)`
  position: relative;
`;

const TechWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 220px));
  overflow: hidden;
  margin-top: 20px;
`;

const Tech = styled.li`
  position: relative;
  margin-bottom: 10px;
  padding-left: 7rem;
  font-size: 0.8rem;
  color: ${colors.grey};
  list-style: none;
  &:before {
    content: '》';
    position: absolute;
    padding-left: 6rem;
    margin-top: 4px;
    left: 0;
    color: ${colors.orange};
    font-size: 1rem;
    line-height: 22px;
  }
  @media (max-width: 700px) {
    font-size: 0.5rem;
  }
`;

class Apartments extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  };

  render() {
    const { data } = this.props;
    const { frontmatter, html } = data[0].node;
    const { title, tech } = frontmatter;

    return (
      <ProjectWrapper id="more">
        <h2>{title}</h2>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <TechWrapper>
          {tech && tech.map((tech, i) => <Tech key={i}>{tech}</Tech>)}
        </TechWrapper>
      </ProjectWrapper>
    );
  }
}

export default Apartments;
