"use client"

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { slide } from '../../public/images/exports'
import { usePathname } from 'next/navigation'

export default function NavLink({ data, key }) {
    const pathname = usePathname();

    return (
        <motion.div
            custom={data.index}
            variants={slide}
            animate="enter"
            exit="exit"
            initial="initial"
            className={pathname === data.href ? "slide-links lines" : "slide-links"}
            key={key}
        >
            <Link href={data.href}>
                {data.title}
            </Link>
        </motion.div>
    )
}
