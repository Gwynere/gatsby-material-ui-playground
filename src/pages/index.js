import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Works from "../components/Works"
import AboutSection from '../components/AboutSection'
import SkillSection from '../components/SkillSection'

import { Grid } from "@material-ui/core"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Grid container spacing={3}>
      <AboutSection />
      <SkillSection />
      <Grid item xs={12}>
        <Works />
      </Grid>
    </Grid>
  </Layout>
)

export default IndexPage