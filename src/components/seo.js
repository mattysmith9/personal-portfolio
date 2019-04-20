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
  googleAnalyticsID,
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
      <meta name="description" content={description} />
      <meta name="google-analyitics-id" content={googleAnalyticsID} />
      <meta
        property="og:url"
        content={`${url}${location}/?ref=mattysmith.co`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <script type="application/ld+json">{structuredDataOrganization}</script>
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat"
        rel="stylesheet"
      />
      <link rel="publisher" href={socialLinks.github} />
      <title>{title}</title>
      <html lang="en" dir="ltr" />
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-137382831-1"
      />
    </Helmet>
  );
};

export default SEO;
