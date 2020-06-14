import React from 'react'
import Marquee from './Marquee'

export default ({ isDragging, onMouseDown, x, y }) => {
    return (
        <g
            onMouseDown={onMouseDown}
        >
            <image 
                xlinkHref="https://avatars2.githubusercontent.com/u/37266080?v=4"
                width="125"
                height="125"
                transform={`translate(${ x }, ${ y })`}
            />
            <Marquee x={x} y={y}/>
        </g>
    )
}
