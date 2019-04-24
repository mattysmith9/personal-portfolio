import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Layout } from '@style';
import { Hero, SEO, About, Contact, Header, Footer } from '@comp';
import Projects from '../components/Projects';
import dataConfig from '../dataConfig';
require('typeface-montserrat');


const IndexPage = ({ data }) => (
  <Layout id="content">
    <SEO
      title={dataConfig.siteTitle}
      description={dataConfig.siteDescription || 'de nada'}
      keywords={[`portfolio`, `gatsby`, `javascript`, `react`, `graphql`]}
    />
    <Header />
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
