import React from 'react';
import { SEO, Skills } from '@comp';
import useSiteMetadata from '../components/SiteMetaData';
import { Layout } from '@style';

const Homepage = () => {
  const { siteDescription, siteTitle } = useSiteMetadata();
  return (
    <Layout>
      <SEO
        title={siteTitle}
        description={siteDescription}
        keywords={[`portfolio`, `gatsby`, `javascript`, `react`, `graphql`]}
      />
      <Skills />
    </Layout>
  );
};

export default Homepage;
