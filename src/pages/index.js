import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Layout } from '@style';
import { Hero, SEO, About, Contact } from '@comp';
import config from '../config';

const IndexPage = ({ data }) => (
  <Layout id="content">
    <SEO
      title={config.siteTitle}
      description={config.siteDescription || 'de nada'}
      keywords={[`portfolio`, `gatsby`, `javascript`, `react`, `graphql`]}
    />
    <Hero data={data.hero.edges} />
    <About data={data.about.edges} />
    <Contact />
  </Layout>
);

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    hero: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/src/content/hero/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            name
            subtitle
          }
          html
        }
      }
    }
    about: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/src/content/about/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            skills
          }
          html
        }
      }
    }
  }
`;
