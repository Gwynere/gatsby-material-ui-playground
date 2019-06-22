import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Skills from '../components/Skills'
import Photo from '../images/photo.jpg'
import TextField from '../components/TextField'

import {
  Typography,
  Grid,
  Paper,
  Avatar,
  Button,
  makeStyles,
  Divider
} from '@material-ui/core'
console.log(Photo)



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Grid container spacing={3}>

      <Grid container item xs={12} spacing={3}>
        <Grid item xs={4}>
          <Avatar style={{
            width: '100%',
            minHeight: '100%',
            borderRadius: '0',
            objectFit: 'contain'
          }} alt="" src={Photo} />
        </Grid>
        <Grid item xs={8} >
          <Grid container spacing={0}>
            <Paper style={{
              padding: '2rem'
            }}>
              <Grid item xs={12}>
                <Typography variant="h6" component="h2">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore cumque neque dolorem accusantium deserunt.
                </Typography>
                <Typography variant="body1" component="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae fugit consectetur repudiandae magnam labore eius voluptate repellendus quo laudantium? Accusantium pariatur fuga eos facere fugit. Enim mollitia magni quasi ipsa veritatis laborum facere rerum nesciunt incidunt fuga. Odio rerum neque, ad, voluptatibus a doloribus iusto sunt aut quo sit dolores.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" component="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae fugit consectetur repudiandae magnam labore eius voluptate repellendus quo laudantium? Accusantium pariatur fuga eos facere fugit. Enim mollitia magni quasi ipsa veritatis laborum facere rerum nesciunt incidunt fuga. Odio rerum neque, ad, voluptatibus a doloribus iusto sunt aut quo sit dolores.
                </Typography>
                <Button variant="outlined" size="large" style={{
                  marginTop: '1rem'
                }}>View Resume</Button>
              </Grid>

            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid container item xs={12} spacing={3}>
        <Grid item xs={12} >
          <Typography variant="h6" component="h2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </Typography>
          <Typography variant="body1" component="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae fugit consectetur repudiandae magnam labore eius voluptate repellendus quo laudantium?
              </Typography>
        </Grid>
        <Grid item xs={12}>
          <Skills />
        </Grid>
      </Grid>
    </Grid>

  </Layout>
)

export default IndexPage
