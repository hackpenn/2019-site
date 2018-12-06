const path = require('path')

module.exports = {
  siteMetadata: {
    name: 'hackpenn',
    siteUrl: 'https://hackpenn.com'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        components: path.join(__dirname, 'src/components'),
        pages: path.join(__dirname, 'src/pages'),
        theme: path.join(__dirname, 'src/theme'),
        track: path.join(__dirname, 'src/track'),
        data: path.join(__dirname, 'src/data.json')
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'hackpenn',
        short_name: 'hackpenn',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#2b34b6',
        display: 'minimal-ui'
      }
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-netlify',
    'gatsby-plugin-no-sourcemaps'
  ]
}
