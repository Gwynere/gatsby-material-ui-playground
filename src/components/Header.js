import React from 'react'
import {
    Typography
} from '@material-ui/core';

export default function Header(props) {
    return (
        <header style={{
            padding: '2rem 0'
        }}>
            <Typography variant="h5" component="h2">
                {props.siteTitle}
            </Typography>
            <Typography variant="body2" component="p">
                Laborum adipisicing laborum ex irure cillum consequat Lorem elit Lorem. Magna dolore nisi eu qui laborum. In veniam mollit anim culpa minim adipisicing excepteur.
            </Typography>
        </header>
    )
}