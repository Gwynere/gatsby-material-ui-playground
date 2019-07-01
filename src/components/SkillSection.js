import React from "react"
import { Grid, Typography, makeStyles } from "@material-ui/core"
import Skills from "../components/Skills"

const useStyles = makeStyles(() => ({
  root: {
    marginTop: '0'
  }
}))

const SkillSection = () => {
  const classes = useStyles()
  return (
    <Grid container item xs={12} className={classes.root} spacing={3}>
      <Grid item sm={12} md={12} lg={4}>
        <Typography variant="h6" component="h2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </Typography>
        <Typography variant="body1" component="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          fugit consectetur repudiandae magnam labore eius voluptate repellendus
          quo laudantium? Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Esse, vero facilis! Laboriosam cum ullam adipisci a iste. Earum,
          consequatur fugiat.
        </Typography>
      </Grid>
      <Grid item sm={12} md={12} lg={8} className={classes.root}>
        <Skills />
      </Grid>
    </Grid>
  )
}

export default SkillSection
