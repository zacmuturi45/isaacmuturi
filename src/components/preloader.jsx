"use client"

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation';

export default function PreLoader() {
    const [index, setIndex] = useState(0);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const words = ["Karibu", "Welcome", "Wilkommen", "Niaje", "Hallo", "Hello", "Bonjour", "Mambo Vipi", "Ni hao", "Konichiwa"]
    const router = useRouter()

    useEffect(() => {
        router.push("/")
        setDimensions({ width: window.innerWidth, height: window.innerHeight });
    }, [])

    useEffect(() => {
        if (index == words.length - 1) return;

        setTimeout(() => {
            setIndex(index + 1)
        }, index == 0 || index == length - 1 ? 1000 : 180)
    }, [index])

    const preloading = {
        initial: {
            y: 0
        },
        closed: {
            y: "-100vh",
            transition: {duration: 0.8, ease: [0.85, 0, 0.15, 1], delay: 0.2}
        }
    }
    
    const opacity = {
        initial: {
            opacity: 0
        },
        enter: {
            opacity: 1,
            transition: {duration: 0.2, delay: 0.2}
        }
    }

    const initialPath = `M0 0 L${dimensions.width} 0 L${dimensions.width} ${dimensions.height} Q${dimensions.width / 2} ${dimensions.height + 300} 0 ${dimensions.height} L0 0`
    const targetPath = `M0 0 L${dimensions.width} 0 L${dimensions.width} ${dimensions.height} Q${dimensions.width / 2} ${dimensions.height} 0 ${dimensions.height} L0 0`

    const curve = {
        initial: {
            d: initialPath
        },
        exit: {
            d: targetPath,
            transition: { duration: 1.9, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
        }
    }


    return (

        <motion.div variants={preloading} initial={"initial"} exit={"closed"} className='preloader-container'>
            {
                dimensions.height > 0 && <>
                    <div className='preloader-center'>
                        <div className='preloader-abs'></div>
                        <motion.div variants={opacity} initial={"initial"} animate={"enter"} className='p'>{`${words[index]}`}</motion.div>
                    </div>
                    <svg className='preloader-svg'>
                        <motion.path variants={curve} initial={"initial"} exit={"exit"} d={initialPath}></motion.path>
                    </svg>
                </>
            }
        </motion.div>
    )
}
