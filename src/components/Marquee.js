import React from 'react'
import MarqueeAnchor from './MarqueeAnchor'
export default ({ x, y}) => {
    return (
        <g>
            <rect
                width="125"
                height="125"
                stroke="#1592E6"
                fill="transparent"
                x={x}
                y={y}
            />
            <MarqueeAnchor cx={x} cy={y} />
            <MarqueeAnchor cx={125 + x} cy={y} />
            <MarqueeAnchor cx={x} cy={125 + y} />
            <MarqueeAnchor cx={125 + x} cy={125 + y} />
        </g>
    )
}