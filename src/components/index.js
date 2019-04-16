import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from 'styled-components';

const BackgroundSection = ({ className, children }) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "lakehouse.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.placeholderImage.childImageSharp.fluid;
      return (
        <StyledWrapper>
          <StyledSymetryWrapper>
            <BackgroundImage
              Tag="section"
              className={className}
              fluid={imageData}
              backgroundColor={`#000B28`}
            >
              {children}
            </BackgroundImage>
          </StyledSymetryWrapper>
        </StyledWrapper>
      );
    }}
  />
);

const StyledSymetryWrapper = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
`;

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  height: auto;
  background-size: cover;
`;

const StyledWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
`;

export default StyledBackgroundSection;
