import React from 'react';
import PropTypes from 'prop-types';
import { Projects } from '@comp/Projects';
import { Footer } from '@comp/Footer';
import { Header } from '@comp/Nav';
import { Layout } from '@style';
import { About } from '@comp/About';
import { Skills } from '@comp/Skills';
import { Hello } from '@comp/Hello';
import useSiteMetadata from '@comp/SiteMetadata';
import SEO from '@comp/seo';

const Homepage = ({ data }) => {
  const { siteDescription, siteTitle } = useSiteMetadata();
  return (
    <Layout>
      <SEO
        title={siteTitle}
        description={siteDescription}
        keywords={[`portfolio`, `gatsby`, `javascript`, `react`, `graphql`]}
      />
      <Header />
      <Hello />
      <Skills />
      <About />
      <Projects />
      <Footer />
    </Layout>
  );
};

Homepage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Homepage;
