"use client"

import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { arrowdown, c, cwhite, hero, localTime } from '../../public/images/exports';
import NavSocialLinks from './navSocialLinks';
import Image from 'next/image';
import GsapMagnetic from './gsapMagnetic';
import gsap from 'gsap';
import { useRouter } from 'next/navigation';


export default function Footer() {
    const circle = useRef(null);
    const circle2 = useRef(null);
    const oval = useRef(null);
    const router = useRouter();
    const footerRef = useRef(null);
    const [time, setTime] = useState("");
    const { scrollYProgress } = useScroll({
        target: footerRef,
        offset: ["start end", "end end"]
    });

    useEffect(() => {
        setTime(localTime())
        updateTime()
    }, [time])

    const updateTime = () => {
        const now = new Date();
        const getSeconds = now.getSeconds()
        const secondsDifference = 1000*(60 - getSeconds)
        setInterval(() => {
            setTime(localTime())
        }, secondsDifference);
    }

    const x2 = useTransform(scrollYProgress, [0, 1], [0, 150])
    const y = useTransform(scrollYProgress, [0, 1], [-30, 0])

    const mouseEnter = (circ) => {
        gsap.to(circ.current, { top: "-25%", width: "150%", duration: 0.4 })
      }
    
      const mouseLeave = (circ) => {
        gsap.to(circ.current, { top: "-150%", width: "125%", duration: 0.4 })
        gsap.to(circ.current, { top: "100%", width: "100%", duration: 0, delay: 0.5 })
      }


    return (
        <motion.div ref={footerRef} style={{ y: y }} className='footer-main' id='fm'>
            <div className="footer-container">
                <div className='footer-container-one'>
                    <div className='foot'>
                        <div className="image-container">
                            <Image src={hero} alt='mario' className='image' />
                        </div>
                        <h1>Let&apos;s work</h1>
                    </div>
                    <h1 className='together'>together</h1>
                    <GsapMagnetic>
                    <motion.div className='get-in-touch' onMouseEnter={() => mouseEnter(oval)} onMouseLeave={() => mouseLeave(oval)} onClick={() => router.push("/contact")}><p>Get in touch</p><div className='circle' ref={oval}></div></motion.div>
                    </GsapMagnetic>
                    <Image src={arrowdown} alt='svg-arrow' height={40} width={30} className='arrow-image' />
                </div>

                <div className='contact-info'>
                    <div className='contact-info-one' id='one' onMouseEnter={() => mouseEnter(circle)} onMouseLeave={() => mouseLeave(circle)} ><a href="mailto:isaactesha45@gmail.com" style={{textDecoration: "none", color: "white", zIndex: 999}}><p>isaactesha45@gmail.com</p></a><div className='circle' ref={circle}></div></div>
                    <div className='contact-info-two' id='two' onMouseEnter={() => mouseEnter(circle2)} onMouseLeave={() => mouseLeave(circle2)} ><a href="callto:+255747010039" style={{textDecoration: "none", color: "white", zIndex: 999}}><p>+255747010039</p></a><div className='circle' ref={circle2}></div></div>
                </div>

                <div className='footer-links'>

                    <div className='footer-links-container' id='ft'>
                       <div className="project-description">
                       <p>This portfolio design was inspired by <span style={{color: "rgb(167, 167, 167)"}}><a href="https://dennissnellenberg.com/" target='_blank' rel='noopener noreferrer' style={{textDecoration: "none"}}>Dennis Snellenberg</a></span> and coded in <span style={{color: "rgb(167, 167, 167)"}}>Visual Studio Code</span>. I built it with <span style={{color: "rgb(167, 167, 167)"}}>Next.js, Gsap, Framer-motion, SCSS</span> and deployed with <span style={{color: "rgb(167, 167, 167)"}}>Vercel</span>. All text is set in the <span style={{color: "rgb(167, 167, 167)"}}>BDO Grotesk</span> typeface. All icons are from <span style={{color: "rgb(167, 167, 167)"}}>svg-repo.</span></p>
                       </div>

                       <div className='footy'>
                       <div className='footer-links-version'>
                            <p className='p1'>version</p>
                            <p className='p2'>2024<span><Image src={cwhite} width={15} height={15} alt='copyright' /></span>Edition</p>
                        </div>

                        <div className='footer-links-time'>
                            <p className='ptime'>local time</p>
                            <p className='ptime2'>{time}</p>
                        </div>
                       </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
