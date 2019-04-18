const path = require(`path`);

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const siteMetadata = {
  siteTitle: 'Matty Smith | Software Engineer',
  siteTitleShort: 'MS Portfolio',
  siteTitleAlt: 'Matty Smith Portfolio Page',
  siteDescription:
    'Matty Smith is a Software Engineer based in Burlington, Vermont.',
  siteKeywords:
    'Matty Smith, Matty, Matt, Smith, Matthew, @mattysmith9, software engineer, front-end engineer, back-end engineer, full stack developer, full stack engineer, web developer, javascript, react, node, kotlin',
  author: 'Matty Smith',
  siteUrl: 'https://mattysmith.co',
  googleVerification: '',
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
  googleAnalyticsID: 'UA-137382831-1',
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
        background_color: siteMetadata.whiteColor,
        theme_color: siteMetadata.blueColor,
        display: `minimal-ui`,
        icon: siteMetadata.faviconPng,
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@src': path.resolve(__dirname, 'src'),
          '@comp': path.resolve(__dirname, 'src/components'),
          '@style': 'src/styled',
          '@page': path.resolve(__dirname, 'src/pages'),
          '@image': path.resolve(__dirname, 'src/images'),
        },
        extensions: ['js'],
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: path.join(__dirname, `src`, `content`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
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
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-modal-routing`,
  ],
};
