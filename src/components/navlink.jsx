import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { slide } from '../../public/images/exports'

export default function NavLink({ data }) {
    return (
        <motion.div
            custom={data.index}
            variants={slide}
            animate="enter"
            exit="exit"
            initial="initial"
            className='slide-links'
        >
            <Link href={data.href}>
                {data.title}
            </Link>
        </motion.div>
    )
}
