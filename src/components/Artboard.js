import React, { useRef } from 'react'
import {  makeStyles } from '@material-ui/core/styles'
import Layer from './Layer'

export default () => {
    const useStyles = makeStyles(theme => ({
        artboard: {
            border: '1px solid black'
        }
    }))
    const classes = useStyles()
    const board = useRef()
    
    return (
        <svg
            ref={board}
            xmlns="http://www.w3.org/2000/svg"
            className={classes.artboard}
            width="800"
            height="500" 
        >
            <rect
                x="0"
                y="0"
                width="100%"
                height="100%" 
                fill="#fff"
            />
            <Layer board={board}/>
        </svg>
    )
}