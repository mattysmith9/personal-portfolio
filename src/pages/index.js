import React from 'react';
import Layout from '@comp/Layout';
import Hero from '@comp/Hero';
import SEO from '@comp/seo';
import useSiteMetadata from '@comp/SiteMetadata';

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
