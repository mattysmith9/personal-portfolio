import React from 'react';
import Helmet from 'react-helmet';
import {
  url,
  siteDescription,
  siteTitle,
  socialLinks,
  address,
  contact,
  name,
  foundingDate,
  AccessControlAllowOrigin,
} from '../dataConfig';

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
		"foundingDate": "${foundingDate}",
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
      <meta name="description" content={description} />
      <meta
        property="og:url"
        content={`${url}${location}/?ref=mattysmith.co`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="fb:app_id" content={socialLinks.facebook} />
      <meta property="og:description" content={description} />
      <script type="application/ld+json">{structuredDataOrganization}</script>
      <script type="access-control-allow-origin">
        {AccessControlAllowOrigin}
      </script>
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
        type="script"
        rel="preload"
        href="https://www.google-analytics.com/analytics.js"
      />
      <link
        as="fetch"
        rel="preload"
        type="script"
        href="https://www.google-analytics.com"
      />
      <link
        as="stylesheet"
        type="font"
        rel="preload"
        href="https://fonts.googleapis.com/css?family=Montserrat:400"
        crossorigin="anonymous"
      />
      <link
        as="stylesheet"
        type="font"
        rel="preload"
        href="https://fonts.googleapis.com"
        crossorigin="anonymous"
      />

      <title>{title}</title>
      <html lang="en" dir="ltr" />
    </Helmet>
  );
};

export default SEO;
