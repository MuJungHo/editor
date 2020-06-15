import React from 'react'
import MarqueeAnchor from './MarqueeAnchor'
export default ({ x, y, width, height, board, resize }) => {

    const moveAnchor = ({ mx, my, point }) => {
        switch (point) {
            case 'leftTop':
                break
            case 'rightTop':

                break
            case 'leftBottom':

                break
            case 'rightBottom':
                const movedWidth = Math.max(mx - x, 0)
                const movedHeight = Math.max(my - y, 0)
                resize({ width: movedWidth, height: movedHeight, x, y })
                break
        }
    }

    return (
        <g>
            <rect
                width={width}
                height={height}
                stroke="#1592E6"
                fill="transparent"
                x={x}
                y={y}
            />
            <MarqueeAnchor cx={x} cy={y} board={board} move={moveAnchor} point="leftTop"/>
            <MarqueeAnchor cx={width + x} cy={y} board={board} move={moveAnchor} point="rightTop"/>
            <MarqueeAnchor cx={x} cy={height + y} board={board} move={moveAnchor} point="leftBottom"/>
            <MarqueeAnchor cx={width + x} cy={height + y} board={board} move={moveAnchor} point="rightBottom"/>
        </g>
    )
}