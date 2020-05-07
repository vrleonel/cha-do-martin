module.exports = {
  siteMetadata: {
    title: `Chá do Martin`,
    description: `Chá de bebê on-line do Martin. Mande seu carinho virtual. =D`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#FF5733`,
        theme_color: `#FF5733`,
        display: `minimal-ui`,
        icon: `src/images/raposinha.png`, // This path is relative to the root of the site.
      },
    },
    
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Indie Flower', 'Sacramento', 'Droid Sans', 'Droid Serif']
        }
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
