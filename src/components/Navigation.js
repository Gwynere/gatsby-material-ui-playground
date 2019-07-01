import React from 'react'
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  makeStyles
} from '@material-ui/core'
import { Link } from "gatsby"

import Header from './Header'
import Footer from './Footer'

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    flex: '1',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '2rem',
    textAlign: 'right',
    background: 'rgba(0,0,0, .05)',
    position: 'sticky',
    top: '0'
  },
  right: {
    textAlign: 'right'
  }
}))

export default function Navigation(props) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Header siteTitle={props.siteTitle} />
      <Divider />
      <List>
        <ListItem className={classes.right} button component={Link} to={`/`}>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem className={classes.right} button component={Link} to={`/resume`}>
          <ListItemText primary="Resume" />
        </ListItem>
        <ListItem className={classes.right} button component={Link} to={`/works`}>
          <ListItemText primary="Works" />
        </ListItem>
      </List>
      <Footer />
    </div>
  )
}
