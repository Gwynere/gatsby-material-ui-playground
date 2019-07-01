import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import ExpansionPanel from "@material-ui/core/ExpansionPanel"
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary"
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails"
import Typography from "@material-ui/core/Typography"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core"

import { CheckCircleTwoTone } from "@material-ui/icons"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
    fontWeight: "bold",
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
    fontWeight: "bold",
  },
}))

export default function Skills() {
  const classes = useStyles()

  return (
    <Grid container className={classes.root}>
      <Grid item md={4}>
        <Typography className={classes.heading}>
          FrontEnd Development
        </Typography>
        <List dense>
          <ListItem alignItems="flex-start">
            <ListItemIcon>
              <CheckCircleTwoTone />
            </ListItemIcon>
            <ListItemText>HTML5</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleTwoTone />
            </ListItemIcon>
            <ListItemText>CSS3</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleTwoTone />
            </ListItemIcon>
            <ListItemText>Javascript</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleTwoTone />
            </ListItemIcon>
            <ListItemText>Responsive Web Design</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleTwoTone />
            </ListItemIcon>
            <ListItemText>React</ListItemText>
          </ListItem>
        </List>
      </Grid>

      <Grid item md={4}>
        <Typography className={classes.heading}>
          Tools & Version Control
        </Typography>
        <List dense>
          <ListItem alignItems="flex-start">
            <ListItemIcon>
              <CheckCircleTwoTone />
            </ListItemIcon>
            <ListItemText>Visual Studio Code</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleTwoTone />
            </ListItemIcon>
            <ListItemText>Git & GitHub</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleTwoTone />
            </ListItemIcon>
            <ListItemText>Photoshop</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleTwoTone />
            </ListItemIcon>
            <ListItemText>Adobe XD</ListItemText>
          </ListItem>
        </List>
      </Grid>

      <Grid item md={4}>
        <Typography className={classes.heading}>Actually Learning</Typography>
        <List dense>
          <ListItem alignItems="flex-start">
            <ListItemIcon>
              <CheckCircleTwoTone />
            </ListItemIcon>
            <ListItemText>React Redux</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleTwoTone />
            </ListItemIcon>
            <ListItemText>Testing with Jest</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleTwoTone />
            </ListItemIcon>
            <ListItemText>GatsbyJs</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleTwoTone />
            </ListItemIcon>
            <ListItemText>Material UI</ListItemText>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  )
}
