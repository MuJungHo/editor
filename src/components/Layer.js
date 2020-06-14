import React, { useState, useEffect, useCallback } from 'react'
import MediaLayer from './MediaLayer'

export default ({ getArtboard, getCTM }) => {
    const [state, setState] = useState({
        isDragging: false,
        x: 10,
        y: 10,
        dragOffsetX: null,
        dragOffsetY: null
    })

    const getMousePosition = useCallback(
        event => {
            const CTM = getCTM()
            return {
                x: (event.clientX - CTM.e) / CTM.a,
                y: (event.clientY - CTM.f) / CTM.d
            }
        }, 
        [getCTM]
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

    useEffect(() => {
        getArtboard().addEventListener("mousemove", handleMouseMove)
        getArtboard().addEventListener("mouseup", handleMouseUp)

        return () => {
            getArtboard().removeEventListener("mousemove", handleMouseMove)
            getArtboard().removeEventListener("mouseup", handleMouseUp)
        }
    }, [handleMouseMove, handleMouseUp, getArtboard])
    
    return (
        <MediaLayer
            isDragging={state.isDragging}
            onMouseDown={handleMouseDown}
            x={state.x}
            y={state.y}
        />  
    )
}