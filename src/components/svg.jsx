import { motion } from 'framer-motion'
import React from 'react'

export default function Svg() {
    const initialPath = `M100 0 L100 ${window.innerHeight} Q-80 ${window.innerHeight/2} 100 0`
    const targetPath = `M100 0 L100 ${window.innerHeight} Q100 ${window.innerHeight} 100 0`

    const pathVariant = {
        initial: {
            d: initialPath
        },
        enter: {
            d: targetPath,
            transition: {duration: 1, ease: [0.87, 0, 0.13, 1]}
        },
        exit: {
            d: initialPath,
            transition: {duration: 0.5, ease: [0.85, 0, 0.15, 1]}
        }
    }
  return (
    <svg className='nav-svg'>
        <motion.path 
        variants={pathVariant}
        animate="enter"
        initial="initial"
        exit="exit"
        d={initialPath}>
        </motion.path>
    </svg>
  )
}
