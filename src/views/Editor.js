import React from 'react'
import {  makeStyles } from '@material-ui/core/styles'
import PermMedia from '@material-ui/icons/PermMedia'
import IconButton from '@material-ui/core/IconButton'
import WorkSpace from '../components/WorkSpace'

export default () => {
    const useStyles = makeStyles(theme => ({
      editor: {
        position: 'relative',
        width: '100%',
        height: '100vh',
        backgroundColor: '#bebebe'
      },
      topBar: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: 64,
        padding: '0 24px',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        boxSizing: 'border-box',
        '& > *:not(:first-child)': {
          marginLeft: 12
        }
      },
      main: {
        width: '100%',
        height: '100%',
        boxSizing: 'border-box',
        paddingTop: 64
      }
    }))
    const classes = useStyles()
    const topBar = (
      <div className={classes.topBar}>
        <IconButton>
          <PermMedia/>
        </IconButton>
      </div>
    )
    return (
      <div className={classes.editor}>
        {topBar}
        <div className={classes.main}>
          <WorkSpace/>
        </div>
      </div>
    )
}
