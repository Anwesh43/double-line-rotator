import React from 'react'
import {useAnimatedScale, useDimension} from './hooks'
import DoubleLineRotator from './DoubleLineRotator'

const DLRComponent = (props) => {
    const {scale, start} = useAnimatedScale(0.01, 20)
    const {w, h} = useDimension()
    return <DoubleLineRotator w = {w} h = {h} onClick = {start} scale = {scale}>
    </DoubleLineRotator>
}

export default DLRComponent