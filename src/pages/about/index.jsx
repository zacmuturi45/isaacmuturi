"use client"

import React, { useEffect, useRef } from 'react'
import Transition from '@/components/Transition'
import { motion, useScroll, useTransform } from 'framer-motion'
import { arrowblack, arrowdown, hero, sass, slideUp } from '../../../public/images/exports'
import gsap from 'gsap'
import Image from 'next/image'
import Footer from '@/components/footer'
import { useRouter } from 'next/navigation'

export default function About() {
    const finalRef = useRef(null);
    const lineREf = useRef(null);
    const router = useRouter();
    const arrowRef = useRef(null);


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

    const { scrollYProgress: arrowScroll } = useScroll({
        target: arrowRef,
        offset: ["start end", "end start"]
    })

    const degrees = useTransform(arrowScroll, [0, 1], [90, 0])

    const height = useTransform(scrollYProgress, [0, 1], [60, 0])

    const description = "A brief overview of my developer journey from 2019 to date."
    // const description = "Full Stack Developer with a strong foundation in building dynamic and responsive web applications."
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
                        <div className='about-arrow' style={{ left: degrees }}>
                            <Image src={arrowblack} height={35} width={45} alt='arrowdown' />
                        </div>

                        <div className='about-content-text' >
                            <p>
                                My interest in technology was born in my primary school library when I held in my hands the book <span style={{ fontWeight: "bold" }}>'The way things work'</span>. A voracious appetite for reading all things tech would ensue and of particular interest to me was how the relatively humble computer was the heartbeat of every new technology. I remember reading the nuclear power section and, on seeing a mushroom cloud image, would get puzzled as to how such a gargantuan fire could come out of a few kilos of metal, how anything could birth matter magnitudes larger than itself in microseconds. Yet at the heart of all this, all the tech of the 21st century, from staplers to jet engines, the tiny microchip was behind it all. From inception to design to manufacturing, you couldn't create anything without the microchip's processing power. My interest would pique when I got my hands on my cousin's home desktop to play with a few years later. I quickly learned my way around the basics before getting tired of hunting and pecking for letters every time I wanted to type in a query. I would remember <span style={{ fontWeight: "bolder" }}>Billy Bob Thornton</span> in <span style={{ fontWeight: "bolder" }}>Armageddon</span> whispering 'kill the uplink' to one of his NASA engineers who would go on to rapidly hack away at their computer and freeze a potential nuclear explosion.
                            </p>

                            <p ref={arrowRef}>
                                I taught myself to touch type as a result and after finding out the magic that is typing without looking at the keyboard, opening folders using the <span style={{ fontWeight: "bolder" }}>terminal</span>, hiding them using the humble dot, and a certain Billy constantly whispering in my ear, my path was set. However with little resources and no proximity to internet at the time, I would have to wait till 2022 to get my first laptop and consequently, a taste of <span style={{ fontWeight: "bolder" }}>HTML</span> and <span style={{ fontWeight: "bolder" }}>CSS</span>. I would make a few websites and host to <span style={{ fontWeight: "bolder" }}>Github</span> for free, nothing complex but I was building something for the first time. However I knew I would need much more than <span style={{ fontWeight: "bolder" }}>HTML</span> and <span style={{ fontWeight: "bolder" }}>CSS</span> if I wanted to, at the very least remotely stop a nuclear timer 384,000 miles away. My current internet connection would do me no favors either. I needed real coding skills.
                            </p>

                            <p>After nights of research, I settled on <span style={{ fontWeight: "bolder" }}>Moringa School</span>, a tech startup in Kenya that had a strong coding bootcamp program with a curriculum provided by <span style={{ fontWeight: "bolder" }}>Flatiron, New York</span>. I would only have to interview for a spot and cough up <span style={{ fontWeight: "bolder" }}>$1740</span>. While a smaller rate compared to most bootcamps in America, it was still a fortune in my world. I needed money! For the next 20 months, I would work as a <span style={{ fontWeight: "bolder" }}>bartender</span>, <span style={{ fontWeight: "bolder" }}>Food</span> and <span style={{ fontWeight: "bolder" }}>Beverage Supervisor</span>  and <span style={{ fontWeight: "bolder" }}>kitchen manager</span> respectively at a busy <span style={{ fontWeight: "bolder" }}>Casino</span> in <span style={{ fontWeight: "bolder" }}>Dar es Salaam</span>, <span style={{ fontWeight: "bolder" }}>Tanzania</span> to fund what would be the start of my new career. Even after all this I would still be short a cool <span style={{ fontWeight: "bolder" }}>$1500</span>, because, well, LIFE. Luckily the school was now offering a 30% to 70% scholarships to potential students. The caveat; your scholarship amount would depend on how well you performed on a rigorous logic test. So I sat the test on one less busy night shift in July at my former restaurant job, submitted it after an hour and went back to work.</p>

                            <p>About a week later, I received the much awaited email that I got the full <span style={{ fontWeight: "bolder" }}>70% scholarship</span> and consequently passed the requirements to enroll. I explained the situation to my HR manager at the time who was a great help throughout the resignation process, worked on through <span style={{ fontWeight: "bolder" }}>August</span> as per the rules then finally started my bootcamp in September 2023. The bootcamp was an invaluable learning experience with a well-structured curriculum that was both easy to follow and covered technical topics comprehensively. Though I graduated in February 2024 after 6 months of rigorous study, I knew I was still not ready for the dream job I envisioned, the skills I had gained were a springboard of sorts, the feet so I could have actual feet to get wet. I would spend the next 5 months adding to my resume the skills I know I needed to both be a complete developer and code the dream project that had given me a reality check a week before my bootcamp's capstone project proposal. <span style={{ textDecoration: "none", color: "blue", cursor: "pointer" }} onClick={() => router.push("/work")}>More of that here.</span></p>

                            <p> While I have grown immensely and gained significant knowledge and skills, to proceed and grow further, it is imperative that I immerse in a professional environment where my code can be assessed, critiqued and I can learn from much better developers. I know I'm a bit late to the party, but I&apos;m working to perfect my craft every single day, looking forward to gaining professional experience in web development related companies and actively contributing to the industry as a bonafide professional.
                                I&apos;m a firm believer in the growth mindset concept, and that “life is not about finding yourself, but about creating yourself”.</p>


                        </div>

                        <div className='about-content-image'>
                            <Image src={hero} width={100} height={100} alt='hero-image' className='about-img' />
                        </div>
                    </div>

                    <div className='about-content-details'>
                        <div className='details1'>
                            <h2>What I bring on board</h2>
                            <div className='ld'>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>

                        <div className='details-container'>
                            <div className='deetsc'>
                                <div className='details-span'><span>01</span></div>
                                <div className='details-h3'>
                                    <h3>Frontend Skills</h3>
                                    <p>
                                        I am currently proficient in HTML5, CSS3, vanilla JavaScript, React.js, Next.js and SCSS. I use Apollo Client in Next.js and React to handle GraphQL queries, formik for input forms and Gsap/Framer-motion interchangeably for animations.
                                    </p>
                                </div>
                            </div>

                            <div className='deetsc'>
                                <div className='details-span'><span>02</span></div>
                                <div className='details-h3'>
                                    <h3>Backend Skills</h3>
                                    <p>Flask is my current python framework for backend applications. I use PostgreSQL as my database, Graphene to build my GraphQL server, Alembic to handle migrations, JWT tokens for user authentication, black to format my python code and Git/Github for version control.</p>
                                </div>
                            </div>

                            <div className='deetsc'>
                                <div className='details-span'><span>03</span></div>
                                <div className='details-h3'>
                                    <h3>The full package</h3>
                                    <p>With a solid grasp of my frontend and backend tech stack, I excel in both frontend and backend development, always dedicated to refining my current knowledge and gaining new techniques. However, my primary skill is the ability to quickly learn new technologies while adapting and growing into the technical challenges that come with it</p>
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
                            <h2>Career goals</h2>
                            <p>
                                My developer journey has been one of relentless learning and growth. The key milestone was the creation of my capstone project 'GameBug'. A project that took 5 months to complete. With it, I gained a comprehensive understanding of software development through countless hours of researching, coding, debugging, refining and implementing complex features, I developed a deep appreciation for problem-solving and creating intuitive user experiences.
                            </p>

                            <p>
                                As I look to the future, my goal is to continue refining my skills and expanding my knowledge in software development. I am excited about the prospect of joining a dynamic team where I can contribute my skills, align myself with what the best in the field are doing and collaborate on innovative projects that make a real impact.

                            </p>
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
