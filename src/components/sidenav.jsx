import React from 'react'
import NavLink from './navlink'
import { motion } from 'framer-motion'
import Svg from './svg'
import { menuSlide } from '../../public/images/exports'
import NavSocialLinks from './navSocialLinks'

export default function Sidenav() {
    const navItems = [
        {
            title: "Home",
            href: "/"
        },
        {
            title: "Work",
            href: "/work"
        },
        {
            title: "About",
            href: "/about"
        },
        {
            title: "Contact",
            href: "/contact"
        }
    ]

    const navSocials = [
        {
            title: "Awwwards",
            href: "/awwwards"
        },
        {
            title: "Instagram",
            href: "/instagram"
        },
        {
            title: "Twitter",
            href: "/twitter"
        },
        {
            title: "LinkedIn",
            href: "/linkedin"
        }
    ]

    return (
        <motion.main className='sidenav-container'
            variants={menuSlide}
            animate="enter"
            initial="initial"
            exit="exit"
        >
            <div className='sidenav-body-container'>
                <div className='sidenav-body'>
                    <div className='sidenav-header'>
                        <p>Navigation</p>
                        <div className='underline'></div>
                        {
                            navItems.map((item, index) => {
                                return <NavLink data={{ ...item, index }} />
                            })
                        }
                    </div>
                    {/* <div className='navSocialLinks'>
                        <p>socials</p>

                        <div className="navSocials">
                            {
                                navSocials.map((item, index) => {
                                    return <NavSocialLinks data={{ ...item, index }} />
                                })
                            }
                        </div>
                    </div> */}
                </div>

                <Svg />
            </div>

        </motion.main>
    )
}
