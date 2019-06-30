import React from "react"
import {
    Grid,
    Typography,
    Avatar,
    Button,
    Hidden,
    makeStyles
} from '@material-ui/core'
import Photo from "../images/photo.jpg"

const useStyles = makeStyles(() => ({
  root: {
    marginTop: '2rem'
  }
}))

const AboutSection = () => {
  const classes = useStyles()
  return (
    <Grid container item xs={12} className={classes.root}>
      <Grid container item xs={12} lg={7}>
        <Grid item xs={12} sm={12}>
          <Typography variant="h6" component="h2" gutterBottom>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
            cumque neque dolorem accusantium deserunt.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1" component="p" gutterBottom>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Recusandae fugit consectetur
            repudiandae magnam labore eius voluptate repellendus quo laudantium?
            Accusantium pariatur fuga eos facere fugit. Enim mollitia magni
            quasi ipsa veritatis laborum facere rerum nesciunt incidunt fuga.
            Odio rerum neque, ad, voluptatibus a doloribus iusto sunt aut quo
            sit dolores.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1" component="p" gutterBottom>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium?
            Accusantium pariatur fuga eos facere fugit. Enim mollitia magni
            quasi ipsa veritatis laborum facere rerum nesciunt incidunt fuga.
            Odio rerum neque, ad, voluptatibus a doloribus iusto sunt aut quo
            sit dolores.
          </Typography>
          <Button
            variant="outlined"
            size="large"
            style={{
              marginTop: "1rem",
            }}
          >
            View Resume
          </Button>
        </Grid>
      </Grid>
      <Grid item md={5} >
        <Hidden mdDown>
        <Avatar
          style={{
            width: "100%",
            minHeight: "100%",
            borderRadius: "0",
            objectFit: "contain",
          }}
          alt=""
          src={Photo}
        />
        </Hidden>
      </Grid>
    </Grid>
  )
}

export default AboutSection
