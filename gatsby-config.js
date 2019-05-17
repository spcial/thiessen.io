module.exports = {
  siteMetadata: {
    title: "Dennis Thiessen - IT Software Development",
    author: "Dennis Thiessen",
    description: "Portfolio of Dennis Thiessen - IT Software Development Freelancer"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'Dennis Thiessen',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon-dt.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
