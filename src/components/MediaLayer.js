import React, { useState } from 'react'
import Marquee from './Marquee'
import {  makeStyles } from '@material-ui/core/styles'

export default (props) => {
    const {
        onMouseDown, 
        x, 
        y,
        width,
        height,
        board,
        resize
    } = props

    const [state, setState] = useState({
        isFocus: false
    })
    const useStyles = makeStyles(theme => ({
        layer: {
            '&:focus': {
                outline : 'none'
            }
        }
    }))
    const classes = useStyles()
    return (
        <g
            onFocus={() => setState({ isFocus: true })}
            onBlur={() => setState({ isFocus: false })}
            onMouseDown={onMouseDown}
            tabIndex="0"
            className={classes.layer}
        >
            <image 
                xlinkHref="https://avatars2.githubusercontent.com/u/37266080?v=4"
                width={width}
                height={height}
                transform={`translate(${ x }, ${ y })`}
            />
            {
                state.isFocus
                ?
                <Marquee 
                    x={x} 
                    y={y}
                    width={width}
                    height={height} 
                    board={board}
                    resize={resize}
                />
                : null
            }
        </g>
    )
}
