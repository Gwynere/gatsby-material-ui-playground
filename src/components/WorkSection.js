import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import { Link } from 'gatsby'

import { 
    Grid
} from '@material-ui/core'

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
})

export default function WorkSection() {
  const classes = useStyles()
  return (
    <Grid container spacing={3}>
      <Grid item md={6} lg={4}>
        <Card className={classes.card}>
          <CardActionArea component="a" href="https://material.io/tools/icons/?icon=check_circle&style=twotone">
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image="https://images.pexels.com/photos/2542012/pexels-photo-2542012.jpeg?cs=srgb&dl=cold-weather-landscape-mountains-2542012.jpg&fm=jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="inherit">
              Source Code on Github
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item md={6} lg={4}>
        <Card className={classes.card}>
          <CardActionArea component="a" href="https://material.io/tools/icons/?icon=check_circle&style=twotone">
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image="https://images.pexels.com/photos/2542012/pexels-photo-2542012.jpeg?cs=srgb&dl=cold-weather-landscape-mountains-2542012.jpg&fm=jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="inherit">
              Source Code on Github
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item  md={6}  lg={4}>
        <Card className={classes.card}>
          <CardActionArea component="a" href="https://material.io/tools/icons/?icon=check_circle&style=twotone">
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image="https://images.pexels.com/photos/2542012/pexels-photo-2542012.jpeg?cs=srgb&dl=cold-weather-landscape-mountains-2542012.jpg&fm=jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="inherit">
              Source Code on Github
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item  md={6} lg={4}>
        <Card className={classes.card}>
          <CardActionArea component="a" href="https://material.io/tools/icons/?icon=check_circle&style=twotone">
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image="https://images.pexels.com/photos/2542012/pexels-photo-2542012.jpeg?cs=srgb&dl=cold-weather-landscape-mountains-2542012.jpg&fm=jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="inherit">
              Source Code on Github
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item  md={6}  lg={4}>
        <Card className={classes.card}>
          <CardActionArea component="a" href="https://material.io/tools/icons/?icon=check_circle&style=twotone">
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image="https://images.pexels.com/photos/2542012/pexels-photo-2542012.jpeg?cs=srgb&dl=cold-weather-landscape-mountains-2542012.jpg&fm=jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="inherit">
              Source Code on Github
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item  md={6}  lg={4}>
        <Card className={classes.card}>
          <CardActionArea component="a" href="https://material.io/tools/icons/?icon=check_circle&style=twotone">
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image="https://images.pexels.com/photos/2542012/pexels-photo-2542012.jpeg?cs=srgb&dl=cold-weather-landscape-mountains-2542012.jpg&fm=jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="inherit">
              Source Code on Github
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  )
}
