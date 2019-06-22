/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Navigation from "./Navigation"

import {
  Grid,
  CssBaseline
} from '@material-ui/core'


const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (

      <Grid container>
        <CssBaseline />
        <Grid item xs={12} sm={12} md={4}>
          <Navigation siteTitle={data.site.siteMetadata.title} />
        </Grid>
        <Grid item xs={12} sm={12} md={8}>
          <main style={{
            padding: '4rem'
          }}>
            {children}
          </main>
        </Grid>
      </Grid>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
