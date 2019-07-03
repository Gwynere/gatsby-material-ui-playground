import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import WorkSection from "../components/WorkSection"
import AboutSection from '../components/AboutSection'
import SkillSection from '../components/SkillSection'

import { Grid } from "@material-ui/core"

const IndexPage = () => (
  <Layout>
    <SEO title="Homepage" />
    <Grid container spacing={10}>
      <AboutSection />
      <SkillSection />
      <Grid item xs={12}>
        <WorkSection />
      </Grid>
    </Grid>
  </Layout>
)

export default IndexPage