import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import SEO from '../components/seo';
import useSiteMetadata from '../components/SiteMetadata';

const IndexPage = () => {
  const { siteDescription, siteTitle } = useSiteMetadata();
  return (
    <Layout>
      <SEO
        title={siteTitle}
        description={siteDescription || 'de nada'}
        keywords={[`portfolio`, `gatsby`, `javascript`, `react`, `graphql`]}
      />
      <Hero />
    </Layout>
  );
};

export default IndexPage;
