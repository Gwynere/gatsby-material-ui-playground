import React from 'react'
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  makeStyles,
  Typography,
  Container
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
    padding: '4rem',
    textAlign: 'right',
    background: 'rgba(0,0,0, .05)',
    position: 'sticky',
    top: '0'
  },
  right: {
    textAlign: 'right'
  }
}))

export default function Navigation() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Header />
      <Divider />
      <List style={{
            padding: '2rem'
        }}>
        <ListItem className={classes.right} button component={Link} to={`/`}>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem className={classes.right} button component={Link} to={`/works`}>
          <ListItemText primary="Works" />
        </ListItem>
        <ListItem className={classes.right} button component={Link} to={`/contact`}>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
      <Footer />
    </div>
  )
}
