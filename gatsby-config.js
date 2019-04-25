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
  url: 'mattysmith.co',
  pathPrefix: '',
  googleVerification: process.env.GOOGLE_VERIFICATION,
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
  googleAnalyticsID: process.env.GOOGLE_ANALYTICS_ID,
  backgroundColor: 'white',
  themeColor: 'blue',
  fontDisplay: 'auto',
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
        background_color: siteMetadata.backgroundColor,
        theme_color: siteMetadata.themeColor,
        font_display: siteMetadata.fontDisplay,
        display: `minimal-ui`,
        icon: siteMetadata.faviconPng,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: [
            'Montserrat',
            'sans-serif',
            'Georgia',
            'serif',
            'Roboto',
            'sans-serif',
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
        head: true,
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@comp': path.resolve(__dirname, 'src/components'),
          '@style': path.resolve(__dirname, 'src/styled'),
          '@page': path.resolve(__dirname, 'src/pages'),
          '@images': path.resolve(__dirname, 'src/images'),
          '@data': path.resolve(__dirname, 'src/dataConfig'),
          '@fonts': path.resolve(__dirname, 'src/fonts'),
        },
        extensions: ['js', 'css'],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'Github',
        fieldName: 'github',
        url: 'https://api.github.com/graphql',
        headers: {
          Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
        },
        fetchOptions: {},
      },
    },
     {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: siteMetadata.faviconPng,
        appName: siteMetadata.siteTitle,
        appDescription: siteMetadata.siteDescription,
        developerName: siteMetadata.developerName,
        developerURL: siteMetadata.developerUrl,
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
        dir: 'auto',
        lang: siteMetadata.siteLanguage,
        background_color: siteMetadata.backgroundColor,
        theme_color: siteMetadata.themeColor,
        display: 'standalone',
        orientation: 'any',
        start_url: `/`,
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
    `gatsby-transformer-remark`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-modal-routing`,
    `gatsby-plugin-netlify`,
  ],
};
