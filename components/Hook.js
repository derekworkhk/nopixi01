import React, {useState} from 'react'

const useMove = () => {
    const [state, setState] = useState({x: 0, y: 0})

    const handleMouseMove = e => {
        e.persist()
        setState(state => ({...state, x: e.clientX, y: e.clientY}))
    }
    return {
        x: state.x,
        y: state.y,
        handleMouseMove,
    }
}
const customHookStyle={
    "position": "absolute",
    "height": "100%",
    "width": "100%"
}

const Hook = () => {
    const {x, y, handleMouseMove} = useMove()
    return (
        <div style={customHookStyle} onMouseMove={handleMouseMove}>
            Hook
            <div className="mouseInfo">
                The current mouse position is ({x}, {y})
            </div>
        </div>
    )
}

export default Hook
