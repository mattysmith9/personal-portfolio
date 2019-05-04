import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby-plugin-modal-routing';
import styled from 'styled-components';
import { helpers, theme, Section, mediaSizes } from '@style';

const { colors, fontSizes } = theme;

const AboutWrapper = styled(Section)`
  position: relative;
  h2 {
    color: ${colors.orange};
  }
`;

const AboutFlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  ${mediaSizes.tablet`display: block;`};
`;

const AboutDetailsWrapper = styled.div`
  width: 60%;
  max-width: 480px;
  font-family: ${theme.fontFamily};
  color: ${colors.modal};
  ${mediaSizes.tablet`width: 80%;`};
`;

const InterestsWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  overflow: hidden;
  margin-top: 20px;
`;

const Interest = styled.li`
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

class About extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  };

  render() {
    const { data } = this.props;
    const { frontmatter, html } = data[0].node;
    const { title, interests } = frontmatter;

    return (
      <AboutWrapper id="about" aria-label="about me">
        <h2>{title}</h2>
        <AboutFlexWrapper>
          <AboutDetailsWrapper>
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <InterestsWrapper>
              {interests &&
                interests.map((interest, i) => (
                  <Interest key={i}>{interest}</Interest>
                ))}
            </InterestsWrapper>
          </AboutDetailsWrapper>
          <Button to="/modal-description/" asModal>
            more info
          </Button>
        </AboutFlexWrapper>
      </AboutWrapper>
    );
  }
}

export default About;
