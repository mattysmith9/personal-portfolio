import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Link } from 'gatsby-plugin-modal-routing';
import { ConditionalLayout, Info, Startup, Apartments } from '@comp';
import styled from 'styled-components';
import { theme } from '@style';

const { colors } = theme;

const ModalWrapper = styled.div`
  background: ${colors.white};
  box-shadow: ${theme.boxShadow};
  border-radius: ${theme.borderRadiusCard};
  display: flex;
  justify-content: space-between;
  position: relative;
  max-width: 1000px;
  margin: 0 auto;

  h2 {
    color: ${colors.green};
    text-align: center;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  max-width: 800px;
  margin: 0 auto;
  color: ${colors.modal};
  line-height: 2;
`;

const ProjectDescription = ({ data }) => (
  <ConditionalLayout>
    <ModalWrapper>
      <ContentWrapper>
        <Info data={data.info.edges} />
        <Startup data={data.startup.edges} />
        <Apartments data={data.apartments.edges} />
      </ContentWrapper>
      <Link to="/#about/" />
    </ModalWrapper>
  </ConditionalLayout>
);

ProjectDescription.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ProjectDescription;

export const query = graphql`
  query InfoQuery {
    info: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/src/content/info/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            tech
          }
          html
        }
      }
    }
    startup: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/src/content/startup/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            tech
          }
          html
        }
      }
    }
    apartments: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/src/content/apartments/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            tech
          }
          html
        }
      }
    }
  }
`;
