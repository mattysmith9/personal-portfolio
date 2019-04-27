import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Link } from 'gatsby-plugin-modal-routing';
import { ConditionalLayout, Info } from '@comp';
import styled from 'styled-components';
import { theme } from '@style';
const { colors } = theme;

const ModalWrapper = styled.div`
  background: ${theme.gradient};
  box-shadow: ${theme.boxShadow};
  border-radius: ${theme.borderRadiusCard};
  display: flex;
  justify-content: space-between;
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  h2 {
    color: ${colors.yellow};
    text-align: center;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  max-width: 800px;
  margin: 0 auto;
  color: ${colors.items};
  line-height: 2;
`;

const ProjectDescription = ({ data }) => (
  <ConditionalLayout>
    <ModalWrapper>
      <ContentWrapper>
        <Info data={data.info.edges} />
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
  }
`;
