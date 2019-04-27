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
  margin: 0 0 8px 3.5rem;
  font-family: ${theme.fontFamily};
  color: ${colors.modal};
  font-size: 1.6rem;
  ${mediaSizes.tablet`font-size: ${fontSizes.medium};`};
`;

const FullName = styled.h2`
  font-size: 85px;
  line-height: 1;
  padding-left: 3rem;
  margin: 0;
  color: ${colors.blue};
  ${mediaSizes.tablet`font-size: 40px;`};
  ${mediaSizes.iphonex`font-size: 30px;`};
  ${mediaSizes.phone`font-size: 30px;`};
  ${mediaSizes.phone`word-spaceing: 1rem;`};
`;

const Subtitle = styled.p`
  font-family: ${theme.fontFamilyBtn};
  font-size: 35px;
  line-height: 1.2;
  padding-left: 3.3rem;
  margin-top: 0.7rem;
  color: ${colors.green};
  ${mediaSizes.tablet`font-size: 30px;`};
  ${mediaSizes.iphonex`font-size: 20px;`};
  ${mediaSizes.phone`font-size: 20px;`};
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  margin-left: 3.4rem;
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
