import React from 'react'
import {useAnimatedScale, useDimension} from './hooks'
import DoubleLineRotator from './DoubleLineRotator'

const DLRComponent = (props) => {
    const {scale, start} = useAnimatedScale(0.02, 20)
    const {w, h} = useDimension()
    return <DoubleLineRotator>
    </DoubleLineRotator>
}

export default DLRComponent