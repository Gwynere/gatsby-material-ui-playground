import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Container from '@material-ui/core'
import Typography from '@material-ui/core'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to my portfolio</h1>
    <p>Here's what it is</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/skills/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
