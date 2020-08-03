import {useState, useEffect} from 'react'
import {sinify, divideScale} from './utils'

export const useAnimatedScale = (scGap = 0.02, delay = 20) => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    return {
        scale, 
        start() {
            if (!animated) {
                setAnimated(true)
                let currScale = scale 
                const interval = setInterval(() => {
                    currScale += scGap 
                    setScale(currScale)
                    if (currScale > 1) {
                        setScale(0)
                        setAnimated(false)
                        clearInterval(interval)
                    }
                }, delay)
            }
        }
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
        return () => {
            window.onresize = () => {

            }
        }
    })
    return {
        w, 
        h, 
    }
}

export const useStyle = (w, h, scale) => {
    const sf = sinify(scale)
    const sf1 = divideScale(sf, 0, 2)
    const sf2 = divideScale(sf, 1, 2)
    const size = Math.min(w, h) / 8 
    const position = 'absolute'
    const background = 'indigo'
    return {
        getParentStyle() {
            const left = `${w / 2}px`
            const top = `${h / 2}px`
            const WebkitTransform = `rotate(${360 * sf2}deg)`
            return {
              position, 
              left, 
              top,
              WebkitTransform
            }
        },

        getLineStyle(i) {
            const top = `${ -size + i * 2 * size}px`
            const fx = w / 2 + size
            const ix = -size / 2
            const x = fx + (ix - fx) * sf1 
            const left = `${x * (1 - 2 * i)}px`
            const position = 'absolute'
            const width = `${size}px`
            const height = `${Math.min(w, h) / 60}px`
            return {position, left, top, width, height, background}
        },

        getButtonStyle() {
            const opacity = 1 - sf1 
            return {opacity}
        }
    }
}
