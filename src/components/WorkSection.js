import React from "react"
import { makeStyles } from "@material-ui/core"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Work from "../images/work.jpg"
import Chip from "@material-ui/core/Chip"
import CardMedia from "@material-ui/core/CardMedia"
import { Link } from 'gatsby'

import { Grid } from "@material-ui/core"

const useStyles = makeStyles({
  card: {},
  cardArea: {},
  cardContent: {},
  chip: {
    marginRight: ".3rem",
    fontSize: "1rem",
  },
})

export default function WorkSection() {
  const classes = useStyles()

  return (
    <Grid container spacing={3}>
      <Grid item sm={12} md={6} lg={4}>
        <Card className={classes.card}>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="300"
            image={Work}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Nexter
            </Typography>
            <Typography component="div" gutterBottom>
              <Chip label="html5" className={classes.chip} />
              <Chip label="Css3" className={classes.chip} />
              <Chip label="Css Grid" className={classes.chip} />
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="medium"
              color="primary"
              variant="outlined"
              component="a"
              href="https://gwynere.github.io/nexter/"
              target="_blank"
            >
              Demo
            </Button>
            <Button
              size="medium"
              variant="outlined"
              color="primary"
              component="a"
              href="https://github.com/Gwynere/nexter"
              target="_blank"
            >
              Source Code
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item sm={12} md={6} lg={4}>
        <Card className={classes.card}>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="300"
            image={Work}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Nexter
            </Typography>
            <Typography component="div" gutterBottom>
              <Chip label="html5" className={classes.chip} />
              <Chip label="Css3" className={classes.chip} />
              <Chip label="Css Grid" className={classes.chip} />
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="medium"
              color="primary"
              variant="outlined"
              component="a"
              href="https://gwynere.github.io/nexter/"
              target="_blank"
            >
              Demo
            </Button>
            <Button
              size="medium"
              variant="outlined"
              color="primary"
              component="a"
              href="https://github.com/Gwynere/nexter"
              target="_blank"
            >
              Source Code
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item sm={12} md={6} lg={4}>
        <Card className={classes.card}>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="300"
            image={Work}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Nexter
            </Typography>
            <Typography component="div" gutterBottom>
              <Chip label="html5" className={classes.chip} />
              <Chip label="Css3" className={classes.chip} />
              <Chip label="Css Grid" className={classes.chip} />
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="medium"
              color="primary"
              variant="outlined"
              component="a"
              href="https://gwynere.github.io/nexter/"
              target="_blank"
            >
              Demo
            </Button>
            <Button
              size="medium"
              variant="outlined"
              color="primary"
              component="a"
              href="https://github.com/Gwynere/nexter"
              target="_blank"
            >
              Source Code
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item>
        <Button variant="outlined" color="primary" size="large" component={Link} to="/works">
          See more works
        </Button>
      </Grid>
    </Grid>
  )
}
