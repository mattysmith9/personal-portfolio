const path = require(`path`);

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const siteMetadata = {
  siteTitle: 'Matty Smith | Software Engineer',
  siteTitleShort: 'MS Portfolio',
  siteTitleAlt: 'Matty Smith Portfolio Page',
  siteDescription:
    'Matty Smith is a Software Engineer based in Burlington, VT who is currently looking for his first job as an Engineeer',
  siteKeywords:
    'Matty Smith, Matty, Matt, Smith, Matthew, @mattysmith9, software engineer, front-end engineer, back-end engineer, full stack developer, full stack engineer, web developer, javascript, react, node, kotlin',
  author: 'Matty Smith',
  siteUrl: 'https://mattysmith.co',
  facebookAppID: '',
  pages: ['welcome', 'homepage'],
  siteLanguage: 'en_US',
  lastBuildDate: Date.now(),
  contact: [
    { name: 'Github', link: 'https://github.com/mattysmith9' },
    { name: 'Instagram', link: 'https://instagram.com/mattysmith9' },
    { name: 'Facebook', link: 'https://facebook.com/matty.smith.146' },
    { name: 'Linkedin', link: 'https://www.linkedin.com/in/mattysmith9/' },
  ],
  firstName: 'Matty',
  lastName: 'Smith',
  faviconPng: './src/images/favicon.png',
  developerName: 'Matty Smith',
  developerUrl: 'https://mattysmith.co',
  location: 'Burlington, VT',
  email: 'matthewcsmith18@gmail.com',
  phone: '1-802-598-9466',
  nav: [
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'Work',
      url: '#projects',
    },
    {
      name: 'Contact',
      url: '#contact',
    },
  ],
  googleAnalyticsID: 'UA-137382831-1',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  headerHeight: 100,
};

module.exports = {
  siteMetadata: siteMetadata,
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteMetadata.siteTitle,
        short_name: siteMetadata.siteTitleAlt,
        start_url: `/`,
        background_color: siteMetadata.darkNavyColor,
        theme_color: siteMetadata.navyColor,
        display: `minimal-ui`,
        icon: siteMetadata.faviconPng,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: path.join(__dirname, `src`, `components`, `projects`),
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GitHub',
        fieldName: 'github',
        url: 'https://api.github.com/graphql',
        headers: {
          Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
        },
        fetchOptions: {},
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: siteMetadata.googleAnalyticsID,
      },
    },
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: siteMetadata.faviconPng,
        appName: siteMetadata.title,
        appDescription: siteMetadata.siteDescription,
        developerName: siteMetadata.developerName,
        developerURL: siteMetadata.developerUrl,
        dir: 'auto',
        lang: siteMetadata.siteLanguage,
        background: siteMetadata.backgroundColor,
        theme_color: siteMetadata.themeColor,
        display: 'standalone',
        orientation: 'any',
        start_url: '/?homescreen=1',
        version: '1.0',
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          firefox: true,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.mattysmith.co',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
  ],
};
