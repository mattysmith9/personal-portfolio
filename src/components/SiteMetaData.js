import { graphql, useStaticQuery } from 'gatsby';

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            siteTitle
            siteDescription
            siteUrl
            pages
            siteLanguage
            lastBuildDate
            firstName
            lastName
          }
        }
      }
    `
  );
  return site.siteMetadata;
};

export default useSiteMetadata;
