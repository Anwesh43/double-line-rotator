import React from 'react'
import {useStyle} from './hooks'

const Line = ({style}) => {
    return <div style = {style}>
    </div>
}

const DoubleLineRotator = ({scale, w, h, onClick}) => {
    const {getParentStyle, getLineStyle, getButtonStyle} = useStyle(w, h, scale)
    return <div style = {getParentStyle()}>
        {[0, 1].map(i => <Line key = {`line_${i}`} style = {getLineStyle(i)}/>)}
        <button onClick = {onClick} style = {getButtonStyle()}>Start</button>
    </div>
}

export default DoubleLineRotator