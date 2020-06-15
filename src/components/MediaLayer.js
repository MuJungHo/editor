import React from 'react'
import Marquee from './Marquee'

export default (props) => {
    const {
        onMouseDown, 
        x, 
        y,
        width = 125,
        height = 125,
        board,
        resize
    } = props
    return (
        <g
            onMouseDown={onMouseDown}
        >
            <image 
                xlinkHref="https://avatars2.githubusercontent.com/u/37266080?v=4"
                width={width}
                height={height}
                transform={`translate(${ x }, ${ y })`}
            />
            <Marquee 
                x={x} 
                y={y}
                width={width}
                height={height} 
                board={board}
                resize={resize}/>
        </g>
    )
}
