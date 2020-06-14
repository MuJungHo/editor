import React from 'react'
import {  makeStyles } from '@material-ui/core/styles'
import Artboard from './Artboard'

export default () => {
    const useStyles = makeStyles(theme => ({
        workspace: {
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }
    }))
    const classes = useStyles()
    return (
        <div className={classes.workspace}>
            <Artboard/>
        </div>
    )
}