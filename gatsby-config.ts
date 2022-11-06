import dotenv from 'dotenv';
import path from 'path'

import {GatsbyConfig} from 'gatsby'

dotenv.config()

const config: GatsbyConfig = {
  jsxRuntime: "automatic",
  jsxImportSource: "@emotion/react",
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: '@snek-at/gatsby-theme-shopify',
      options: {
        productPageTemplate: path.resolve(
          'src/templates/ProductPageTemplate.tsx'
        ),
        collectionPageTemplate: path.resolve(
          'src/templates/CollectionPageTemplate.tsx'
        ),

        productsPageTemplate: path.resolve(
          'src/templates/ProductsPageTemplate.tsx'
        )
      }
    }
  ],
}

export default config
