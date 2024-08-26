"use client"

import GsapMagnetic from '@/components/gsapMagnetic';
import Transition from '@/components/Transition'
import gsap from 'gsap';
import Image from 'next/image';
import React, { useRef, useState } from 'react'
import { arrowdown, github, hero, insta, js, linkedin, whatsapp } from '../../../public/images/exports';

export default function Blog() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [organization, setOrganization] = useState("");
    const [services, setServices] = useState("");
    const [message, setMessage] = useState("");
    const blue = useRef(null)

    const mouseEnter = () => {
        gsap.to(blue.current, { top: "-25%", width: "150%", duration: 0.4 })
    }

    const mouseLeave = () => {
        gsap.to(blue.current, { top: "-150%", width: "125%", duration: 0.4 })
        gsap.to(blue.current, { top: "100%", width: "100%", duration: 0, delay: 0.5 })
    }



    return (
        <Transition>
            <div className='main-contact'>
                <div className='contact-cover'></div>
                <div className='main-contact-container'>
                    <div className='contact-div1'>
                        <div className='hire-me'>
                            <h1>Hire me/Feedback</h1>
                            <p>Why does morning sunlight give you Vitamin D and noon sunlight, sunburn? Whether you're hiring or passing by, your feedback will go a long way in helping me on my nascent developer journey. Please take a few minutes to write your thoughts, tips or advice. Cheers!</p>
                        </div>

                        <div className='form-div'>

                            <form>
                                <div>
                                    <label><span>01</span>What's your name?</label>
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
                                    <label><span>02</span>What's your email?</label>
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
                                    <label><span>03</span>What's the name of your ogranization?</label>
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
                                        name='services'
                                        type="text"
                                        placeholder='Yes *'
                                        id='nameinput'
                                        value={services}
                                        onChange={(e) => setServices(e.target.value)}
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
                            </form>

                            <div className='send-it'>
                                <GsapMagnetic>
                                    <div className='send-circle' onMouseEnter={() => mouseEnter()} onMouseLeave={() => mouseLeave()} ><p>Send it</p><div className='circle' ref={blue}></div></div>
                                </GsapMagnetic>
                            </div>

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
                                <div>
                                    <Image src={insta} width={20} height={20} alt="instagram" />
                                    <p>Instagram</p>
                                </div>
                            </GsapMagnetic>

                            <GsapMagnetic>
                                <div>
                                    <Image src={whatsapp} width={20} height={20} alt="instagram" />
                                    <p>Whatsapp</p>
                                </div>
                            </GsapMagnetic>

                            <GsapMagnetic>
                                <div>
                                    <Image src={linkedin} width={20} height={20} alt="instagram" />
                                    <p>Linkedin</p>
                                </div>
                            </GsapMagnetic>

                            <GsapMagnetic>
                                <div>
                                    <Image src={github} width={20} height={20} alt="instagram" />
                                    <p>Github</p>
                                </div>
                            </GsapMagnetic>

                        </div>
                    </div>
                </div>

                <div className='contact-footer'>
                    <div style={{display: "flex", alignItems: "center", gap: "2.5rem"}} className='edition'>
                        <div>
                            <h4>Version</h4>
                            <p>2024<span style={{margin: "0 .2rem"}}>©</span>Edition</p>
                        </div>
                        <div>
                            <h4>Local Time</h4>
                            <p>11:45 AM GMT+2</p>
                        </div>
                    </div>

                    <div className='div-social'>
                        <h4>Socials</h4>
                        <div className='foot-social'>
                            <GsapMagnetic><p>Instagram</p></GsapMagnetic>
                            <GsapMagnetic><p>Whatsapp</p></GsapMagnetic>
                            <GsapMagnetic><p>Linkedin</p></GsapMagnetic>
                            <GsapMagnetic><p>Github</p></GsapMagnetic>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    )
}
