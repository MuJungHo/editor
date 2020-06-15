import React, { useState, useCallback, useEffect } from 'react'

export default ({ cx, cy, board, move, point }) => {
    const [state, setState] = useState({
        isDragging: false,
        x: cx,
        y: cy,
        dragOffsetX: null,
        dragOffsetY: null
    })

    const getMousePosition = useCallback(
        event => {
            const CTM = board.current.getScreenCTM()
            return {
                x: (event.clientX - CTM.e) / CTM.a,
                y: (event.clientY - CTM.f) / CTM.d
            }
        }, 
        [board]
    )

    // mouse move
    const handleMouseMove = useCallback(
        event => {
            if (state.isDragging) {
                const coord = getMousePosition(event)
                setState(prevState => ({
                    ...prevState,
                    x : coord.x - prevState.dragOffsetX,
                    y : coord.y - prevState.dragOffsetY
                }))
                move({ mx: state.x, my: state.y, point })
            }
        },
        [state.isDragging, getMousePosition, state.x, state.y]
    )

    // mouse left click release
    const handleMouseUp = useCallback(() => {
        if (state.isDragging) {
            setState(prevState => ({
                ...prevState,
                isDragging: false
            }))
        }
    }, [state.isDragging])

    // mouse left click hold
    const handleMouseDown = useCallback(
        event => {
            event.stopPropagation()
            const offset = getMousePosition(event)
            setState(prevState => ({
                ...prevState,
                isDragging: true,
                dragOffsetX : offset.x - prevState.x,
                dragOffsetY : offset.y - prevState.y
            }))
        },
        [getMousePosition]
    )

    useEffect(() => {
        var artboard = board.current
        artboard.addEventListener("mousemove", handleMouseMove)
        artboard.addEventListener("mouseup", handleMouseUp)
        move({ mx: state.x, my: state.y, point })
        return () => {
            artboard.removeEventListener("mousemove", handleMouseMove)
            artboard.removeEventListener("mouseup", handleMouseUp)
        }
    }, [handleMouseMove, handleMouseUp, board, state.x, state.y])
    return (
        <circle 
            r="4"
            stroke="#1592E6"
            fill="#FFFFFF"
            cx={cx}
            cy={cy}
            onMouseDown={handleMouseDown}
        />
    )
}