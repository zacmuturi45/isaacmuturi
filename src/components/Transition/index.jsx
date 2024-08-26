"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { c, hero } from '../../../public/images/exports'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import gsap from 'gsap'
import Sidenav from '../sidenav'

export default function Transition({ children }) {
    const [isActive, setIsActive] = useState({ el1: false, el2: false, el3: false });
    const [burgerActive, setBurgerActive] = useState(false);
    const burgerRef = useRef(null);
    const ov = useRef(null);
    const [tp, setTp] = useState(0);
    const [showBurger, setShowBurger] = useState(false);
    const [showName, setShowName] = useState(false);

    const pathname = usePathname();

    useEffect(() => {
        setTimeout(() => {
            if (pathname !== "/") {
                setShowName(true)
            }
        }, 650);
    }, [pathname])

    useEffect(() => {
        const xTo = gsap.quickTo(burgerRef.current, "x", { duration: 1.2, ease: "elastic.out(1, 0.3)" })
        const yTo = gsap.quickTo(burgerRef.current, "y", { duration: 1.2, ease: "elastic.out(1, 0.3)" })

        const mouseMove = (e) => {
            const { clientX, clientY } = e;
            const { width, height, left, top } = burgerRef.current.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);
            xTo(x)
            yTo(y)
        }

        const mouseLeft = (e) => {
            xTo(0)
            yTo(0)
        }

        burgerRef.current.addEventListener("mousemove", mouseMove)
        burgerRef.current.addEventListener("mouseleave", mouseLeft)

        return () => {
            if (burgerRef.current) {
                burgerRef.current.removeEventListener("mousemove", mouseMove)
                burgerRef.current.removeEventListener("mouseleave", mouseLeft)
            }
        }
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            const { height, top } = document.documentElement.getBoundingClientRect();
            setTp(top)
            if (-tp >= window.innerHeight / 2) {
                setShowBurger(true)
            } else { setShowBurger(false) }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }

    }, [tp])


    const mouseEnter = (e) => {
        gsap.to(ov.current, { top: "-25%", width: "150%", duration: 0.4 })
    }

    const mouseLeave = (e) => {
        gsap.to(ov.current, { top: "-150%", width: "125%", duration: 0.4 })
        gsap.to(ov.current, { top: "100%", width: "100%", duration: 0, delay: 0.5 })
    }

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

    // <motion.div className={pathname === "/" ? "header home-header" : (pathname === "/contact" ? "header contact-header" : "header about-header")}>


    return (
        <div className='inner'>
            <motion.div {...anim(slide)} className='slide' />
            <motion.div {...anim(perspective)}>
                <motion.div className="header">
                    <div>
                        {
                            showName && (
                                <Link href="/" className='header-1'>
                                    <div className='c'>
                                        <Image src={c} width={17} height={17} alt='copyright-svg' className='copyright' />
                                    </div>
                                    <div className='nav-links-one'>
                                        <p className={pathname === "/" || pathname === "/contact" ? "code" : "code path"}>Code by Isaac</p>
                                        <p className={pathname === "/" || pathname === "/contact" ? "isaac" : "isaac path"}>Tesha</p>
                                    </div>
                                </Link>
                            )
                        }
                    </div>
                    <div className='header-2'>
                        <Link href="/"><Image src={hero} width={35} height={35} alt='hero-image' className='profile-pic' /></Link>
                        {/* About */}
                        <Link href="/about">
                            <div className='button' onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={() => handleMouseEnter(1)}>
                                <motion.div
                                    className='slider'>
                                    <div className='el' style={pathname === "/about" ? { borderBottom: "1px solid gray" } : { border: "none" }}>
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
                                    className='slider'>
                                    <div className='el' style={pathname === "/work" ? { borderBottom: "1px solid gray" } : { border: "none" }}>
                                        <PerspectiveText label={"Work"} />
                                    </div>
                                    <div className='el'>
                                        <PerspectiveText label={"Work"} />
                                    </div>
                                </motion.div>
                            </div>
                        </Link>

                        {/* Blog */}

                        <Link href="/contact">
                            <div className='button' onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={() => handleMouseEnter(3)}>
                                <motion.div
                                    className='slider'>
                                    <div className='el' style={pathname === "/contact" ? { borderBottom: "1px solid gray" } : { border: "none" }}>
                                        <PerspectiveText label={"Contact"} />
                                    </div>
                                    <div className='el'>
                                        <PerspectiveText label={"Contact"} />
                                    </div>
                                </motion.div>
                            </div>
                        </Link>
                    </div>


                    <div ref={burgerRef} onClick={() => setBurgerActive(!burgerActive)} className={showBurger ? "burger-container showbg" : "burger-container hidebg"} onMouseEnter={(e) => mouseEnter(e)} onMouseLeave={(e) => mouseLeave(e)}>
                        <div className={burgerActive ? "burger burger-active" : "burger"}></div>
                        <div className='ov' ref={ov}></div>
                    </div>

                    <AnimatePresence mode='wait'>
                        {burgerActive && <Sidenav />}
                    </AnimatePresence>


                </motion.div>
                {children}
            </motion.div>
        </div>
    )
}

function PerspectiveText({ label }) {
    const pathname = usePathname();
    return (
        <div className='perspectiveText'>
            <p className={pathname === "/" || pathname === "/contact" ? "" : "path"}>{label}</p>
            <p className={pathname === "/" || pathname === "/contact" ? "" : "path"}>{label}</p>
        </div>
    )
}