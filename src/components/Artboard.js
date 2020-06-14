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
    const svg = useRef()

    const getCTM = () => {
        const ctm = svg.current ? svg.current.getScreenCTM() : {}
        return {
            a: ctm.a,
            b: ctm.b,
            c: ctm.c,
            d: ctm.d,
            e: ctm.e,
            f: ctm.f
        }
    }

    const getArtboard = () => {
        return svg.current
    }
    
    return (
        <svg
            ref={svg}
            xmlns="http://www.w3.org/2000/svg"
            className={classes.artboard}
        >
            <rect
                x="0"
                y="0"
                width="100%"
                height="100%" 
                fill="#fff"
            />
            <Layer getArtboard={getArtboard} getCTM={getCTM}/>
        </svg>
    )
}