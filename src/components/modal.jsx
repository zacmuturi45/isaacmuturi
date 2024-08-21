"use client"

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useRouter } from 'next/navigation';

const scaleAnimation = {
    initial: { scale: 0, x: "-50%", y: "-50%" },
    open: { scale: 1.2, x: "-50%", y: "-50%", transition: { duration: .4, ease: [0.76, 0, 0.24, 1] } },
    closed: { scale: 0, x: "-50%", y: "-50%", transition: { duration: .4, ease: [0.32, 0, 0.67, 0] } }
}


export default function Modal({ modal, images }) {
    const { active, index } = modal;
    const container = useRef(null);
    const cursor = useRef(null);
    const cursorLabel = useRef(null);
    const router = useRouter();

    useEffect(() => {
        const moveContainerX = gsap.quickTo(container.current, "left", { duration: 0.6, ease: "power3" })
        const moveContainerY = gsap.quickTo(container.current, "top", { duration: 0.6, ease: "power3" })

        const moveCursorX = gsap.quickTo(cursor.current, "left", { duration: 0.5, ease: "power3" })
        const moveCursorY = gsap.quickTo(cursor.current, "top", { duration: 0.5, ease: "power3" })

        const moveLabelX = gsap.quickTo(cursorLabel.current, "left", { duration: 0.45, ease: "power3" })
        const moveLabelY = gsap.quickTo(cursorLabel.current, "top", { duration: 0.45, ease: "power3" })

        window.addEventListener("mousemove", (e) => {
            const { clientX, clientY } = e;
            const containerWidth = 400;
            const containerHeight = 350;

            moveContainerX(clientX);
            moveContainerY(clientY);
            moveCursorX(clientX);
            moveCursorY(clientY);
            moveLabelX(clientX);
            moveLabelY(clientY);
        })

    }, [])

    return (
        <>
            <motion.div ref={container} variants={scaleAnimation} initial={"initial"} animate={active ? "open" : "closed"} className='modal-container'>
                <div style={{ top: `${index * -100}%` }} className="modal-slider">
                    {
                        images.map((project, index) => {
                            return <div key={index} style={{ backgroundColor: project.color }} className='modal'>
                                <Image
                                    src={project.src}
                                    width={300}
                                    height={0}
                                    alt='image'
                                    className='img'
                                />
                            </div>
                        })
                    }
                </div>
            </motion.div>
            <motion.div ref={cursor} variants={scaleAnimation} initial={"initial"} animate={active ? "open" : "closed"} className="cursor"></motion.div>
            <motion.div ref={cursorLabel} variants={scaleAnimation} initial={"initial"} animate={active ? "open" : "closed"} className="cursor-label" onClick={() => router.push("/work")}>View</motion.div>
        </>
    )
}


