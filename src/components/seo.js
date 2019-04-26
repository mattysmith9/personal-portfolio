import React from 'react';
import Helmet from 'react-helmet';
import ogImage from '@images/og.png';
import {
  url,
  siteDescription,
  siteTitle,
  socialLinks,
  address,
  contact,
  name,
  lastUpdated,
  googleVerification,
  siteKeywords,
  bodyColor,
} from '@data';

const SEO = ({
  title = siteTitle,
  description = siteDescription,
  location = '',
}) => {
  const structuredDataOrganization = `{ 
		"@context": "http://schema.org",
		"@type": "Individual",
		"legalName": "${name}",
		"url": "${url}",
		"lastUpdated": "${lastUpdated}",
		"founders": [{
			"@type": "Person",
			"name": "${name}"
		}],
		"contactPoint": [{
			"@type": "ContactPoint",
			"email": "${contact.email}",
			"telephone": "${contact.phone}",
			"contactType": "personal line"
		}],
		"address": [{
			"@type": "PostalAddress",
			"addressLocality": "${address.city}",
			"addressRegion": "${address.region}",
			"addressCountry": "${address.country}",
			"postalCode": "${address.zipCode}"
		}],
    "sameAs": [
			"${socialLinks.linkedin}",
			"${socialLinks.instagram}",
			"${socialLinks.github}",
      "${socialLinks.facebook}",
		]
  }`;
  return (
    <Helmet>
      <html lang="en" prefix="og: http://ogp.me/ns#" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        property="og:url"
        content={`${url}${location}/?ref=mattysmith.co`}
      />
      <meta name="keywords" content={siteKeywords} />
      <meta name="google-site-verification" content={googleVerification} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={`${url}${ogImage}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/png" />
      <meta property="fb:app_id" content={socialLinks.facebook} />
      <meta property="og:description" content={description} />
      <meta itemProp="image" content={`${url}${ogImage}`} />
      <meta name="theme-color" content={bodyColor} />
      <script type="application/ld+json">{structuredDataOrganization}</script>
      <link
        as="fetch"
        rel="publisher"
        crossorigin="anonymous"
        href="https://www.github.com/mattysmith9/"
      />
      <link
        as="fetch"
        rel="publisher"
        crossorigin="anonymous"
        href="https://github.com/mattysmith9/"
      />
      <link
        as="fetch"
        rel="publisher"
        crossorigin="anonymous"
        href="https://github.com/"
      />
    </Helmet>
  );
};

export default SEO;
