import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Work from "../images/work.jpg"
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';

import { Grid } from "@material-ui/core"

const useStyles = makeStyles({
  card: {
    maxWidth: "50vw",
    maxHeight: "100%",
    display: "flex",
    background: `url('${Work}')`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    color: "white",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  chip: {
    margin: '.3rem',
  }
})

export default function WorkSection() {
  const classes = useStyles()
  const [chipData, setChipData] = React.useState([
    { key: 0, label: "Html5" },
    { key: 1, label: "Css3" },
    { key: 2, label: "Css Grid" },
    { key: 3, label: "Sass" }
  ])

  return (
    <Grid container>
      <Grid item md={6} lg={12}>
        <Card className={classes.card}>
          <CardActionArea
            className={classes.cardArea}
            component="a"
            href="https://material.io/tools/icons/?icon=check_circle&style=twotone"
          >
            <CardActions className={classes.cardContent}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Nexter
                </Typography>
                <Typography variant="body2" component="p">
                    {chipData.map(data => {
                      return (
                        <Chip
                          key={data.key}
                          label={data.label}
                          className={classes.chip}
                        />
                      )
                    })}
                </Typography>
              </CardContent>
              <Button size="small" color="inherit">
                Source Code on Github
              </Button>
            </CardActions>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  )
}
