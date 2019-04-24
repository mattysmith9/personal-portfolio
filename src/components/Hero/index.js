import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import resume from '@images/Mresume.pdf';
import { theme, Container, helpers } from '@style';

const { colors } = theme;

const HeroContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-items: flex-start;
  min-height: 70vh;
`;

const Hola = styled.h1`
  color: ${colors.grey};
  margin: 0 0 10px 2.3rem;
  font-size: 1.4rem;
  font-weight: normal;
  font-family: ${theme.fontFamily};
  text-rendering: optimizeLegibility;
`;

const FullName = styled.h2`
  font-size: 100px;
  line-height: 1.2;
  margin: 0 0 10px 1.8rem;
  color: ${colors.blue};
  word-spacing: -0.8rem;
  text-rendering: optimizeLegibility;
`;

const Subtitle = styled.h3`
  font-size: 35px;
  line-height: 1.1;
  color: ${colors.green};
  margin: 0 0 10px 2rem;
  text-rendering: optimizeLegibility;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 0 0 5px 2rem;
  padding-top: 1.5rem;
`;

const Button = styled.a`
  ${helpers.largeButton};
`;

class Hero extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  };

  render() {
    const { data } = this.props;
    const { frontmatter } = data[0].node;

    return (
      <HeroContainer>
        <Hola>{frontmatter.title}</Hola>
        <FullName>{frontmatter.name}</FullName>
        <Subtitle>{frontmatter.subtitle}</Subtitle>
        <ButtonWrapper>
          <Button
            href={resume}
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            resume
          </Button>
        </ButtonWrapper>
      </HeroContainer>
    );
  }
}

export default Hero;
