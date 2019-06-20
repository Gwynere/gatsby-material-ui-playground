import React from 'react'
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  makeStyles,
  Typography
} from '@material-ui/core'
import { Link } from "gatsby"

import Header from './Header'
import Footer from './Footer'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height: '100vh',
    flexDirection: 'column',
    justifyContent: 'center',
    border: '1px solid red',
    padding: '4rem',
    textAlign: 'right'
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
      <List>
        {['Skills', 'Works', 'Contact'].map((text, index) => (
          <ListItem className={classes.right} button key={text} component={Link} to={`/${text.toLowerCase()}/`}>
            <ListItemText primary={text}/>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Footer />
    </div>
  )
}
