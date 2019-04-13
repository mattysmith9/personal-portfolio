import React from 'react';
import { Projects } from '../components/Projects';
import { Footer } from '../components/Footer';
import { Header } from '../components/Nav';
import { Layout } from '../styled/Layout';
import useSiteMetadata from '../components/SiteMetadata';
import SEO from '../components/seo';

const Homepage = () => {
  const { siteDescription, siteTitle } = useSiteMetadata();
  return (
    <Layout>
      <SEO
        title={siteTitle}
        description={siteDescription}
        keywords={[`portfolio`, `gatsby`, `javascript`, `react`, `graphql`]}
      />
      <Header />
      <Projects />
      <Footer />
    </Layout>
  );
};

export default Homepage;
