import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Skills from '../components/Skills'
import Photo from '../images/photo.jpg'

import {
  Typography,
  Grid,
  Divider,
  Avatar,
  Button
} from '@material-ui/core'
console.log(Photo)


const IndexPage = () => (

  <Layout>
    <SEO title="Home" />
    <Grid container spacing={9}>
      <Grid item xs={6} justify="center" alignItems="center">
        <Avatar style={{
          width: '100%',
          height: '100%',
          borderRadius: '0'
        }} alt="" src={Photo} />
      </Grid>
      <Grid container item xs={12} spacing={3}>
        <Grid item xs={12} >
          <Typography variant="h5" component="h2">
            about_me
          </Typography>
          <Typography variant="subtitle" component="h3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore cumque neque dolorem accusantium deserunt.
          </Typography>
          <Typography variant="body2" component="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae fugit consectetur repudiandae magnam labore eius voluptate repellendus quo laudantium? Accusantium pariatur fuga eos facere fugit. Enim mollitia magni quasi ipsa veritatis laborum facere rerum nesciunt incidunt fuga. Odio rerum neque, ad, voluptatibus a doloribus iusto sunt aut quo sit dolores.
          </Typography>
          <Button variant="outlined">View Resume</Button>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" component="h2">
            my_skills
          </Typography>
          <Typography variant="subtitle" component="h3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </Typography>
          <Typography variant="body2" component="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae fugit consectetur repudiandae magnam labore eius voluptate repellendus quo laudantium?
        </Typography>
          <Skills />
        </Grid>
      </Grid>
    </Grid>

  </Layout>
)

export default IndexPage
