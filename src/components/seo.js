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
      <link
        rel="publisher"
        crossorigin="crossorigin"
        href={socialLinks.github}
      />
      <link
        rel="preload"
        href="https://www.google-analytics.com"
        crossorigin="crossorigin"
      />
      <title>{title}</title>
      <html lang="en" dir="ltr" />
    </Helmet>
  );
};

export default SEO;
