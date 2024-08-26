"use client"

import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Transition from "@/components/Transition";
import { arrowdown, docker, flask, gamebug, github, graphq, greensock, hero, insta, js, linkedin, nextj, postgres, python, react, sass, slideUp, whatsapp } from "../../public/images/exports";
import { useEffect, useRef, useState } from "react";
import { color, inView, motion, useInView, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import GsapMagnetic from "@/components/gsapMagnetic";
import Modal from "@/components/modal";
import Footer from "@/components/footer";
import Link from "next/link";
import { useRouter } from "next/navigation";



const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const supporting = "A perfection seeking developer, who, while aware he won't get there, knows he will catch excellence on the way. Code is my creative outlet and current professional focus."
  const description = "Hello, my name's Isaac. While I love to work in Python and JavaScript, I have picked up a variety of tools that enable me to build webapps that are both robust and appeal to users."
  // const description = "Helping brands stand out in the digital era. Together we will set the new status quo. No nonsense. Always on the cutting edge."
  const textRef = useRef(null);
  const isInView = useInView(textRef)
  const containerRef = useRef(null);
  const circle = useRef(null)
  const [modal, setModal] = useState({ active: false, index: 0 })
  const scrollRef = useRef(null)
  const router = useRouter();


  const data = [
    {
      title: "Gamebug",
      src: gamebug,
      color: "lightgray"
    }
  ]

  const backend = [
    { skill: "Python", image: python },
    { skill: "Flask", image: python },
    { skill: "PostgreSQL", image: python },
    { skill: "GraphQL", image: python },
    { skill: "Docker", image: python }
  ]

  const frontend = [
    { skill: "JavaScript", image: js },
    { skill: "React", image: react },
    { skill: "NextJs", image: react },
    { skill: "Gsap", image: react },
    { skill: "Framer-Motion", image: react }
  ]

  useEffect(() => {
    gsap.to(".sp", {
      width: "100%",
      duration: 1,
      ease: "sine.inOut"
    })
  }, [])


  const mouseEnter = (e) => {
    gsap.to(circle.current, { top: "-25%", width: "150%", duration: 0.4 })
  }

  const mouseLeave = (e) => {
    gsap.to(circle.current, { top: "-150%", width: "125%", duration: 0.4 })
    gsap.to(circle.current, { top: "100%", width: "100%", duration: 0, delay: 0.5 })
  }

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150])
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const height = useTransform(scrollYProgress, [0, 1], [60, 0])


  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="Isaac Tesha" content="Isaac Tesha's landing page!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Transition>
        <div className={styles.body}>
          <div className="body-main">

          <div className="body-isaac">
            <div className="isc"><h1>Isaac</h1><div className="isc-mask"><div className="sc"></div></div></div>
            <div className="tsh"><h1>Tesha</h1><div className="tsh-mask"></div><div className="sht"></div></div>
            <div className="sp"></div>
          </div>

            <div className="body-container">
              <div className="body-text">
                <div className="body-arrow"><Image src={arrowdown} width={40} height={40} alt="arrow" /></div>
                <div className="body-text-p">
                  <>
                  {
                    "Full Stack".split(" ").map((word, index) => {
                      return <p className="mask"><motion.span custom={index} key={index} variants={slideUp}
                      initial="initial" animate="open">{word}</motion.span></p>
                    })
                  }
                  </>
                  <div className="sp"></div>
                  <>
                  {
                    "Web".split(" ").map((word, index) => {
                      return <p className="mask"><motion.span custom={index} key={index} variants={slideUp}
                      initial="initial" animate="open">{word}</motion.span></p>
                    })
                  }
                  </>
                  <div className="sp"></div>
                  <>
                  {
                    "Developer".split(" ").map((word, index) => {
                      return <p className="mask"><motion.span custom={index} key={index} variants={slideUp}
                      initial="initial" animate="open">{word}</motion.span></p>
                    })
                  }
                  </>
                  <div className="sp"></div>
                  <p className="bd-span">{supporting}</p>
                  <p className="coffee"><span>© Copyright 2024 Edition</span></p>
                </div>
              </div>

            </div>
          </div>

          <div className="hero" ref={textRef}>
            <div className="description">
              <div className="description-body">
                <p>
                  {
                    description.split(" ").map((word, index) => {
                      return <span className="mask"><motion.span custom={index} key={index} variants={slideUp}
                        initial="initial" animate={isInView ? "open" : "closed"}
                      >{word}</motion.span></span>
                    })
                  }
                </p>

                {/* <motion.p
                  variants={inView}
                  initial="initial"
                  animate={isInView ? "open" : "closed"}
                  className="motion-p"
                >
                  The combination of my passion for design, code & interaction positions me in a unique place in the web design world.
                </motion.p> */}
              </div>

              <GsapMagnetic>
                <div className="about-me" onMouseEnter={(e) => mouseEnter(e)} onMouseLeave={(e) => mouseLeave(e)} ref={scrollRef} onClick={() => router.push("/about")}><p>Learn more</p><div ref={circle} className="circle"></div></div>
              </GsapMagnetic>

            </div>

            {
              data.map((project, index) => (
                <div className="work" onMouseEnter={() => { setModal({ active: true, index: index }) }} onMouseLeave={() => setModal({ active: false, index: index })} key={index}>
                  <p>main project</p>
                  <div className="main-work-project">
                    <h2>{project.title}</h2>
                    <p>Full Stack</p>
                  </div>
                  <Link href="/work" style={{textDecoration: "none"}}><button className="game-button">View</button></Link>
                </div>
              ))
            }
            <Modal modal={modal} images={data} />

          </div>

            <div className="tch"><p>My Tech stack</p></div>
            <div className="mobile-stack">
              <div className="mdiv1">
                <h2>Frontend</h2>
                <div><Image src={js} width={25} height={25}/><p>JavaScript</p></div>
                <div><Image src={react} width={25} height={25}/><p>React.js</p></div>
                <div><Image src={nextj} width={25} height={25}/><p>Next.js</p></div>
                <div><Image src={sass} width={25} height={25}/><p>Sass</p></div>
                <div><Image src={greensock} width={25} height={25}/><p>Gsap</p></div>
              </div>

              <div className="mdiv2">
                <h2>Backend</h2>
                <div><Image src={python} width={25} height={25}/><p>Python</p></div>
                <div><Image src={flask} width={25} height={25}/><p>Flask</p></div>
                <div><Image src={graphq} width={25} height={25}/><p>GraphQL</p></div>
                <div><Image src={docker} width={25} height={25}/><p>Docker</p></div>
                <div><Image src={postgres} width={25} height={25}/><p>Postgres</p></div>
              </div>
            </div>
          <div className="sliders" ref={containerRef}>

            <motion.div className="slider-div" style={{x: x1}}>
              {
                backend.map((item, index) => (
                  <div key={`sl1${index}`} className="slider-container">
                    {/* <Image src={item.image} width={35} height={35} alt="image" className="slider-image" /> */}
                    <p>{item.skill}</p>
                  </div>
                ))
              }
            </motion.div>


            <motion.div className="slider-div" style={{x: x2}}>
              {
                frontend.map((item, index) => (
                  <div key={`sl2${index}`} className="slider-container">
                    {/* <Image src={item.image} width={35} height={35} alt="image" className="slider-image" /> */}
                    <p style={{ color: "red"}}>{item.skill}</p>
                  </div>
                ))
              }
            </motion.div>

            <motion.div style={{height: height}} className="curve-div">
              <div className="curve"></div>
            </motion.div>
            
          </div>
          <Footer />




          <div className="socials">
            <GsapMagnetic><Image src={github} width={27} height={27} alt="instagram" /></GsapMagnetic>
            <GsapMagnetic><Image src={insta} width={27} height={27} alt="instagram" /></GsapMagnetic>
            <GsapMagnetic><Image src={whatsapp} width={25} height={25} alt="whatsapp" /></GsapMagnetic>
            <GsapMagnetic><Image src={linkedin} width={25} height={25} alt="linkedin" /></GsapMagnetic>
          </div>


        </div>
      </Transition>
    </>
  );
}
