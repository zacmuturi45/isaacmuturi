"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { c } from '../../../public/images/exports'
import { motion } from 'framer-motion'

export default function Transition({ children }) {
    const [isActive, setIsActive] = useState({ el1: false, el2: false, el3: false });

    const handleMouseEnter = (index) => {
        const activeIndex = isActive[`el${index}`]

        setIsActive(prevState => ({
            ...prevState,
            [`el${index}`]: !activeIndex
        }))
    }

    const anim = (variants) => {
        return {
            initial: "initial",
            animate: "enter",
            exit: "exit",
            variants
        }
    }

    const opacity = {
        initial: {
            opacity: 0
        },
        enter: {
            opacity: 1
        },
        exit: {
            opacity: 1
        }
    }

    const slide = {
        initial: {
            top: "100vh",
        },
        enter: {
            top: "100vh"
        },
        exit: {
            top: "0",
            transition: {
                duration: 0.8,
                delay: 0.2,
                ease: [0.76, 0, 0.24, 1]
            }
        }
    }

    const perspective = {
        initial: {
            y: 0,
            scale: 1,
            opacity: 1
        },
        enter: {
            y: 0,
            scale: 1,
            opacity: 1
        },
        exit: {
            y: -100,
            scale: 0.9,
            opacity: 0.5,
            transition: {
                duration: 1.2,
                ease: [0.76, 0, 0.24, 1]
            }
        }
    }

    return (
        <div className='inner'>
            <motion.div {...anim(slide)} className='slide' />
            <motion.div {...anim(perspective)}>
                <motion.div className='header'>
                    <div>
                        <Link href="/" className='header-1'>
                            <div className='c'>
                                <Image src={c} width={17} height={17} alt='copyright-svg' className='copyright' />
                            </div>
                            <div className='nav-links-one'>
                                <p className='code'>Code by Isaac</p>
                                <p className='isaac'>Tesha</p>
                            </div>
                        </Link>
                    </div>
                    <div className='header-2'>
                        {/* About */}
                        <Link href="/about">
                            <div className='button' onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={() => handleMouseEnter(1)}>
                                <motion.div
                                    // animate={{ top: isActive.el1 ? "-100%" : "0" }}
                                    // transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                                    className='slider'>
                                    <div className='el'>
                                        <PerspectiveText label={"About"} />
                                    </div>
                                    <div className='el'>
                                        <PerspectiveText label={"About"} />
                                    </div>
                                </motion.div>
                            </div>
                        </Link>

                        {/* Work */}
                        <Link href="/work">
                            <div className='button' onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={() => handleMouseEnter(2)}>
                                <motion.div
                                    // animate={{ top: isActive.el2 ? "-100%" : "0" }}
                                    // transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                                    className='slider'>
                                    <div className='el'>
                                        <PerspectiveText label={"Work"} />
                                    </div>
                                    <div className='el'>
                                        <PerspectiveText label={"Work"} />
                                    </div>
                                </motion.div>
                            </div>
                        </Link>

                        {/* Blog */}

                        <Link href="blog">
                            <div className='button' onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={() => handleMouseEnter(3)}>
                                <motion.div
                                    // animate={{ top: isActive.el3 ? "-100%" : "0" }}
                                    // transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                                    className='slider'>
                                    <div className='el'>
                                        <PerspectiveText label={"Blog"} />
                                    </div>
                                    <div className='el'>
                                        <PerspectiveText label={"Blog"} />
                                    </div>
                                </motion.div>
                            </div>
                        </Link>
                    </div>

                </motion.div>
                {children}
            </motion.div>
        </div>
    )
}

function PerspectiveText({ label }) {
    return (
        <div className='perspectiveText'>
            <p>{label}</p>
            <p>{label}</p>
        </div>
    )
}