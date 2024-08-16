"use client"

import React from 'react'
import Transition from '@/components/Transition'

export default function About() {
    return (
        <Transition>
            <div className='main-about'>
                <h1>About</h1>
                <div className='about'>This is the about page.</div>
            </div>
        </Transition>
    )
}
