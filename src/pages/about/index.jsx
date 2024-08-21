"use client"

import React, { useEffect, useRef } from 'react'
import Transition from '@/components/Transition'
import { motion, useScroll, useTransform } from 'framer-motion'
import { arrowblack, arrowdown, hero, sass, slideUp } from '../../../public/images/exports'
import gsap from 'gsap'
import Image from 'next/image'
import Footer from '@/components/footer'

export default function About() {
    const finalRef = useRef(null);
    const lineREf = useRef(null);

    useEffect(() => {
        gsap.set(lineREf.current, {
            width: 0
        });

        gsap.to(lineREf.current, {
            width: "100%",
            duration: 1.3,
            ease: "sine.inOut"
        })
    }, [])

    const { scrollYProgress } = useScroll({
        target: finalRef,
        offset: ["start end", "end start"]
      })
    
      const height = useTransform(scrollYProgress, [0, 1], [60, 0])

    const description = "Full Stack Developer with a strong foundation in building dynamic and responsive web applications."
    return (
        <Transition>
            <div className='main-about'>
                <div className='cover'></div>
                <div className='about-container'>
                    <div className='text-div'>
                        <p className='about-p'>
                            {
                                description.split(" ").map((word, index) => {
                                    return <span className='mask'><motion.span custom={index} key={index} variants={slideUp} initial="initial" animate="open">{word}</motion.span></span>
                                })
                            }
                        </p>
                        <div className='about-line' ref={lineREf}></div>
                    </div>

                    <div className='about-content'>
                        <Image src={arrowblack} height={35} width={45} alt='arrowdown' className='about-arrow' />

                        <div className='about-content-text'>
                            <p>
                                I help companies from all over the world with tailor-made solutions. With each project, I push my work to new horizons, always putting quality first.
                            </p>

                            <p>Always exploring...</p>
                        </div>

                        <div className='about-content-image'>
                            <Image src={hero} width={100} height={100} alt='hero-image' className='about-img' />
                        </div>
                    </div>

                    <div className='about-content-details'>
                        <div className='details1'>
                            <h2>I can help you with ...</h2>
                        </div>

                        <div className='details-container'>
                            <div>
                                <div className='details-span'><span>01</span></div>
                                <div className='details-h3'>
                                    <h3>Design</h3>
                                    <p>With a solid track record in designing websites, I deliver strong and user-friendly digital designs. (Since 2024 only in combination with development)</p>
                                </div>
                            </div>

                            <div>
                                <div className='details-span'><span>02</span></div>
                                <div className='details-h3'>
                                    <h3>Development</h3>
                                    <p>With a solid track record in designing websites, I deliver strong and user-friendly digital designs. (Since 2024 only in combination with development)</p>
                                </div>
                            </div>

                            <div>
                                <div className='details-span'><span>03</span></div>
                                <div className='details-h3'>
                                    <h3>The full package</h3>
                                    <p>With a solid track record in designing websites, I deliver strong and user-friendly digital designs. (Since 2024 only in combination with development)</p>
                                </div>
                            </div>
                        </div>



                    </div>

                </div>


                <div className='final-white' ref={finalRef}>
                    <div className='about-final'>
                        <div className='final-img'>
                            <Image src={hero} width={100} height={100} alt='hero-image' className='about-last-img' />
                        </div>

                        <div className='sass-div'>
                            <h2>Awwwards <br /> judge '19-24</h2>
                            <p>I am a proud member of the Awwwards International Jury, where I judge the best websites in the world using my expertise as a designer and developer. Micro animations and transitions have my full attention and get me thrilled with every move.</p>
                        </div>
                    </div>

                    <motion.div style={{ height: height }} className="curve-div">
                        <div className="curve"></div>
                    </motion.div>
                </div>

                <Footer />


            </div>
        </Transition>
    )
}
