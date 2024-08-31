"use client"

import GsapMagnetic from '@/components/gsapMagnetic';
import Transition from '@/components/Transition'
import gsap from 'gsap';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'
import { arrowdown, chat, github, hero, insta, js, linkedin, localTime, whatsapp } from '../../../public/images/exports';
import Loader from '@/components/loader';

export default function Blog() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [organization, setOrganization] = useState("");
    const [hireMe, setHireMe] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState({ successful: false, info: "Thank you for your feedbac!" });
    const [loading, setLoading] = useState(false);
    const blue = useRef(null)
    const [time, setTime] = useState("")

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

    const mouseEnter = () => {
        gsap.to(blue.current, { top: "-25%", width: "150%", duration: 0.4 })
    }

    const mouseLeave = () => {
        gsap.to(blue.current, { top: "-150%", width: "125%", duration: 0.4 })
        gsap.to(blue.current, { top: "100%", width: "100%", duration: 0, delay: 0.5 })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch("/api/send-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, organization, hireMe, message })
        });

        const { success } = await res.json();
        if (success) {
            window.scroll(0, 0)
            setStatus(prevState => ({
                ...prevState,
                successful: true,
                info: "Thank you for your feedback!"
            }));
            setTimeout(() => {
                setName("")
                setEmail("")
                setOrganization("")
                setHireMe("")
                setMessage("")
                setLoading(false)
                setStatus(prevState => ({
                    ...prevState,
                    successful: false,
                    info: ""
                }));
            }, 2500);
        } else {
            setLoading(false)
            setStatus(prevState => ({
                ...prevState,
                successful: false,
                info: "Failed to send email"
            }));
            alert("Failed to send email!")
        }
    };



    return (
        <Transition>
            <div className='main-contact'>
                <div className='contact-cover'></div>



                {
                    status.successful ? (
                        <div className='feedback'>
                            <Image src={chat} width={50} height={50} className='chat-image' alt='chat-svg' />
                            <p>{status.info}</p>
                        </div>
                    ) : (
                        <div className='main-contact-container'>
                            <div className='contact-div1'>
                                <div className='hire-me'>
                                    <h1>Hire me/Feedback</h1>
                                    <p>Why does morning sunlight give you Vitamin D and noon sunlight, sunburn? Whether you&apos;re hiring or passing by, your feedback will go a long way in helping me on my nascent developer journey. Please take a few minutes to write your thoughts, tips or advice. Cheers!</p>
                                </div>

                                <div className='form-div'>

                                    <form onSubmit={handleSubmit}>
                                        <div>
                                            <label><span>01</span>What&apos;s your name?</label>
                                            <input
                                                name='name'
                                                type="text"
                                                placeholder='Sunny Vale *'
                                                id='nameinput'
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                        </div>

                                        <div>
                                            <label><span>02</span>What&apos;s your email?</label>
                                            <input
                                                name='email'
                                                type="text"
                                                placeholder='sunny@vale.com *'
                                                id='emailinput'
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>

                                        <div>
                                            <label><span>03</span>What&apos;s the name of your organization?</label>
                                            <input
                                                name='organization'
                                                type="text"
                                                placeholder='Sunny & Vale, California *'
                                                id='organizationinput'
                                                value={organization}
                                                onChange={(e) => setOrganization(e.target.value)}
                                            />
                                        </div>

                                        <div>
                                            <label><span>04</span>Would you like to hire me?</label>
                                            <input
                                                name='hireMe'
                                                type="text"
                                                placeholder='Yes *'
                                                id='hiremeinput'
                                                value={hireMe}
                                                onChange={(e) => setHireMe(e.target.value)}
                                            />
                                        </div>

                                        <div style={{ border: "none" }}>
                                            <label><span>05</span>Your message</label>
                                            <input
                                                name='message'
                                                type="text"
                                                placeholder='Hello Isaac, I live in the North Pole, we only have noon sunlight... *'
                                                id='messageinput'
                                                value={message}
                                                onChange={(e) => setMessage(e.target.value)}
                                            />
                                        </div>

                                        <div className='send-it' style={{ borderBottom: "none" }} onClick={() => setLoading(true)}>
                                            <GsapMagnetic><button className='send-circle' onMouseEnter={() => mouseEnter()} onMouseLeave={() => mouseLeave()} type='submit' >{!loading ? (<p>Send it</p>) : (<Loader />)}<div className='circle' ref={blue}></div></button></GsapMagnetic>
                                        </div>
                                    </form>

                                </div>
                            </div>

                            <div className='contact-details'>
                                <div>
                                    <Image src={hero} width={45} height={45} alt='hero-image' className='contact-image' />
                                </div>

                                <div className='arrowimg'><Image src={arrowdown} width={30} height={30} alt='arrow' /></div>

                                <div className='contact-deets'>
                                    <h4>Contact details</h4>
                                    <p>zacmuturi45@gmail.com</p>
                                    <p>+255 747 010 039</p>
                                </div>

                                <div className='contact-socials'>
                                    <h4>Socials</h4>
                                    <GsapMagnetic>
                                        <a href="https://www.instagram.com/muturizac/?hl=en" target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <Image src={insta} width={20} height={20} alt="instagram" />
                                                <p style={{ color: "white" }}>Instagram</p>
                                            </div>
                                        </a>

                                    </GsapMagnetic>

                                    <GsapMagnetic>
                                        <a href="https://github.com/zacmuturi45" target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <Image src={github} width={20} height={20} alt="instagram" />
                                                <p style={{ color: "white" }}>Github</p>
                                            </div>
                                        </a>

                                    </GsapMagnetic>

                                    <GsapMagnetic>
                                        <a href="https://wa.me/255747010039" target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <Image src={whatsapp} width={20} height={20} alt="instagram" />
                                                <p style={{ color: "white" }}>Whatsapp</p>
                                            </div>
                                        </a>

                                    </GsapMagnetic>

                                    <GsapMagnetic>
                                        <a href="https://www.linkedin.com/in/isaac-tesha-997a0514b/" target="_blank" rel="noopener noreferrer">
                                            <div>
                                                <Image src={linkedin} width={20} height={20} alt="instagram" />
                                                <p style={{ color: "white" }}>Linkedin</p>
                                            </div>
                                        </a>

                                    </GsapMagnetic>

                                </div>
                            </div>
                        </div>
                    )
                }

                <div className='contact-footer'>
                    <div style={{ display: "flex", alignItems: "center", gap: "2.5rem" }} className='edition'>
                        <div>
                            <h4>Version</h4>
                            <p>2024<span style={{ margin: "0 .2rem" }}>©</span>Edition</p>
                        </div>
                        <div>
                            <h4>Local Time</h4>
                            <p>{time}</p>
                        </div>
                    </div>

                    <div className='div-social'>
                        <h4>Socials</h4>
                        <div className='foot-social'>
                            <a href="https://www.instagram.com/muturizac/?hl=en" target="_blank" rel="noopener noreferrer"><GsapMagnetic><p>Instagram</p></GsapMagnetic></a>
                            <a href="https://github.com/zacmuturi45" target="_blank" rel="noopener noreferrer"><GsapMagnetic><p>Github</p></GsapMagnetic></a>
                            <a href="https://wa.me/255747010039" target="_blank" rel="noopener noreferrer"><GsapMagnetic><p>Whatsapp</p></GsapMagnetic></a>
                            <a href="https://www.linkedin.com/in/isaac-tesha-997a0514b/" target="_blank" rel="noopener noreferrer"><GsapMagnetic><p>Linkedin</p></GsapMagnetic></a>

                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    )
}
