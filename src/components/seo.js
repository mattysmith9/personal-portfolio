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
  googleAnalytics = googleAnalyticsID,
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
      <meta
        property="og:url"
        content={`${url}${location}/?ref=mattysmith.co`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <script type="application/ld+json">{structuredDataOrganization}</script>
      <link rel="publisher" href={socialLinks.github} />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link
        rel="preload"
        as="font"
        crossorigin="crossorigin"
        type="font/woff2"
        name="montserrat"
        href="https://fonts.gstatic.com/s/montserrat/v13/JTUSjIg1_i6t8kCHKm459WRhyyTh89ZNpQ.woff2"
      />
      <title>{title}</title>
      <html lang="en" dir="ltr" />
    </Helmet>
  );
};

export default SEO;
