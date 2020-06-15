import React, { useState, useEffect, useCallback } from 'react'
import MediaLayer from './MediaLayer'

export default ({ board }) => {
    const [state, setState] = useState({
        isDragging: false,
        x: 10,
        y: 10,
        height: 100,
        width: 100,
        dragOffsetX: null,
        dragOffsetY: null,
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
            }
        },
        [state.isDragging, getMousePosition]
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

    const resize = ({ x, y, width, height }) => {
        setState(prevState => ({
            ...prevState,
            x: x,
            y: y,
            width: width,
            height: height
        }))
    }

    useEffect(() => {
        var artboard = board.current
        artboard.addEventListener("mousemove", handleMouseMove)
        artboard.addEventListener("mouseup", handleMouseUp)
        return () => {
            artboard.removeEventListener("mousemove", handleMouseMove)
            artboard.removeEventListener("mouseup", handleMouseUp)
        }
    }, [handleMouseMove, handleMouseUp, board, resize])

    return (
        <MediaLayer
            isDragging={state.isDragging}
            onMouseDown={handleMouseDown}
            x={state.x}
            y={state.y}
            width={state.width}
            height={state.height}
            board={board}
            resize={resize}
        />  
    )
}