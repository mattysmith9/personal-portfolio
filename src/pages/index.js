import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Hero, SEO, About, Contact, Footer, Projects, Layout } from '@comp';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO />
    <Hero data={data.hero.edges} />
    <About data={data.about.edges} />
    <Projects />
    <Contact />
    <Footer />
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
