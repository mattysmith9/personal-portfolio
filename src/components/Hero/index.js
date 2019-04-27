import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import resume from '@images/Mresume.pdf';
import { theme, Container, helpers, mediaSizes } from '@style';

const { colors, fontSizes } = theme;

const HeroContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-items: flex-start;
  min-height: 70vh;
  ${mediaSizes.tablet`padding-top: 150px;`};
`;

const Hola = styled.h1`
  color: ${colors.grey};
  margin: 0 0 10px 2.3rem;
  font-size: 1.4rem;
  font-weight: normal;
  font-family: ${theme.fontFamily};
  text-rendering: optimizeLegibility;
  ${mediaSizes.tablet`font-size: ${fontSizes.medium};`};
  ${mediaSizes.tablet`margin: 0 0 5px 1.9rem;`};
`;

const FullName = styled.h2`
  font-size: 100px;
  line-height: 1.2;
  margin: 0 0 10px 1.8rem;
  color: ${colors.blue};
  word-spacing: -0.8rem;
  text-rendering: optimizeLegibility;
  ${mediaSizes.tablet`font-size: 40px;`};
  ${mediaSizes.iphonex`font-size: 30px;`};
  ${mediaSizes.phone`font-size: 30px;`};
  ${mediaSizes.phone`word-spaceing: 1rem;`};
  @media screen {
    word-spacing: 0rem;
  }
`;

const Subtitle = styled.h3`
  font-size: 35px;
  line-height: 1.1;
  color: ${colors.green};
  margin: 0 0 10px 2rem;
  text-rendering: optimizeLegibility;
  ${mediaSizes.tablet`font-size: 30px;`};
  ${mediaSizes.iphonex`font-size: 20px;`};
  ${mediaSizes.phone`font-size: 20px;`};
  @media screen {
    margin: 0 0 5px 1.9rem;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 0 0 5px 2rem;
  padding-top: 1.5rem;
  ${mediaSizes.tablet`margin: margin: 0 0 5px 1.8rem; ;`};
`;

const Button = styled.a`
  ${helpers.largeButton};
  ${mediaSizes.tablet`font-size: ${fontSizes.medium};`};
`;

class Hero extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  };

  render() {
    const { data } = this.props;
    const { frontmatter } = data[0].node;

    return (
      <HeroContainer id="hero" aria-label="hero-name">
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
