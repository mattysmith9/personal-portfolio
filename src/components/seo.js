import React from 'react';
import Helmet from 'react-helmet';
import {
  siteUrl,
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
  location = address,
}) => {
  const structuredDataOrganization = `{ 
		"@context": "http://schema.org",
		"@type": "Individual",
		"legalName": "${name}",
		"url": "${siteUrl}",
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
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "${address.city}",
			"addressRegion": "${address.region}",
			"addressCountry": "${address.country}",
			"postalCode": "${address.zipCode}"
		},
		"sameAs": [
			"${socialLinks.github}",
			"${socialLinks.linkedin}",
			"${socialLinks.instagram}",
		]
  	}`;

  return (
    <Helmet>
      <meta name="description" content={siteDescription} />
      <meta
        property="og:url"
        content={`${siteUrl}${location}/?ref=mattysmith.co`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <script type="application/ld+json">{structuredDataOrganization}</script>
      <link rel="publisher" href={socialLinks.github} />
      <title>{siteTitle}</title>
      <html lang="en" dir="ltr" />
    </Helmet>
  );
};

export default SEO;
