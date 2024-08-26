"use client"

import Transition from '@/components/Transition'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { c, flask, framer, gamebug, graphq, nextj, nextjs, postgres, sass, slideUp } from '../../../public/images/exports'
import next from 'next'
import Footer from '@/components/footer'
import { motion } from 'framer-motion'
import gsap from 'gsap'

export default function Work() {

  useEffect(() => {
    gsap.to(".work-line", {
      width: "100%",
      duration: 1, 
      ease: "sine.inOut"
    })
  }, [])
  return (
    <Transition>
      <div className='main-work'>
        <div className='cover'></div>
        <div className="main-work-container">
          <h1>{
            "Project Highlight: Gamebug".split(" ").map((word, index) => {
              return <span className='mask'><motion.span custom={index} key={index} variants={slideUp} initial="initial" animate="open" style={{marginRight: ".5rem"}}>{word}</motion.span></span>
            })
          }</h1>
          <div className='work-line' />
          <h4>Backstory</h4>
          <div className='content'>
            <div className='content-p'>
              <p>I originally started building Gamebug as a capstone project during my bootcamp. After shopping around for design inspiration, I was sold on the rawg.io website. The functionality, the smooth animations, the rich features and opportunities to implement my backend know-how, this was it, or so I sheepishly thought.</p>
              <p> After about a day into it, I quickly realized this was way beyond my paygrade. Pressed for time, I painfully opted for something simpler. Deep down, my ego was bruised and the impostor syndrome aptly reared it's head. Not one to turn down a challenge, I promised to redeem myself immediately after bootcamp. And so I did.</p>
              <p> The setting was, the designers over at rawg had just completed their new company design and had tasked me with developing it. I took the challenge ready to begin, the reality though, was I needed to learn a ton of new stuff, the knowledge I gained at bootcamp and my freelancing days, though nothing to laugh about, would barely cover the job. Luckily, I knew exactly what I needed to learn as most of the technologies were in line with what I had put in my bucket list of "additional skills to learn to be a complete developer after bootcamp". I did not make that up.</p>
              <p> SQLite take a backseat, come in Postgres, goodbye REST, come in GraphQL, out goes React in comes Next.js, CSS, do you nest? Didn't think so, come in SCSS, Gsap bunk with Framer-motion, Black, get the snakes in line, Github, get everyone on the Docker and let's ship out.</p>
              <p> I think, having just one project to focus on and knowing what technologies to focus on ensured I was not stuck in 'tutorial hell'. After 5 months of learning, coding, debugging, researching and a herniated disc(true story), I completed the project. Though it doesn't have 100% of the features at Rawg, as this would take probably the rest of the year, I packed it with enough to demonstrate everything I can do with what I have learned. Essentially a 'snapshot' of my skills at this time.</p>
              <p>In a nutshell, the application allows gamers to explore and share their experiences with different games. Users can browse games, search for games and interact with other gamers through reading their reviews, adding reviews, liking/unliking reviews, following and unfollowing users, adding games to their libraries or to a wishlist and finding highest rated games. I hosted the videos and images with a free cloudinary account and self host the backend with <span style={{ fontWeight: "bolder" }}>ngrok</span> due to resources but I provided detailed instructions at my Github repository on how to clone the webapp and run it locally if the videos or the application in general lags due to slow internet connectivity on my side. Feel free to contact me in case you encounter any problems or have questions pertaining to the app.</p>
            </div>
            <div className='content-img-div'>
              <div id='gmb'>
                <Image src={gamebug} width={100} height={100} quality={100} alt='gamebug-image' className='gamebug-image' />
              </div>
              <div className='content-grid'>
                <Image src={gamebug} width={100} height={100} alt='gamebug-image' className='gamebug-image' />
                <Image src={gamebug} width={100} height={100} alt='gamebug-image' className='gamebug-image' />
                <Image src={gamebug} width={100} height={100} alt='gamebug-image' className='gamebug-image' />
                <Image src={gamebug} width={100} height={100} alt='gamebug-image' className='gamebug-image' />
              </div>
              <div className='demo'>
                <div>Github repo</div>
                <div>Watch demo</div>
                <div>Live site</div>
              </div>
            </div>
          </div>
        </div>

        <div className='glance-div'>
          <div className='glance' id='gl'>
            <h1>Gamebug overview...</h1>
            <div className='glance-container'>
              <div className='glance-content'>
                <div><span></span><h4>Main Features</h4></div>
                <ul>
                  <div><Image src={flask} width={25} height={25} alt='next-svg' /><span>User Authentication</span></div>
                  <div><Image src={graphq} width={25} height={25} alt='next-svg' /><span>Search and Filter</span></div>
                  <div><Image src={postgres} width={25} height={25} alt='next-svg' /><span>Custom Game Library</span></div>
                  <div><Image src={c} width={25} height={25} alt='next-svg' /><span>Responsive Design</span></div>
                </ul>

              </div>

              <div className='glance-content'>
                <div><span></span><h4>Backend Technologies</h4></div>
                <ul>
                  <div><Image src={flask} width={25} height={25} alt='next-svg' /><span>Flask</span></div>
                  <div><Image src={graphq} width={25} height={25} alt='next-svg' /><span>GraphQL wih Graphene</span></div>
                  <div><Image src={postgres} width={25} height={25} alt='next-svg' /><span>Postgres</span></div>
                  <div><Image src={c} width={25} height={25} alt='next-svg' /><span>Alembic</span></div>
                  <div><Image src={nextj} width={25} height={25} alt='next-svg' /><span>Black</span></div>
                </ul>

              </div>

              <div className='glance-content'>
                <div><span></span><h4>Frontend Technologies</h4></div>
                <ul>
                  <div><Image src={nextj} width={25} height={25} alt='next-svg' /><span>Next.js</span></div>
                  <div><Image src={nextjs} width={25} height={25} alt='next-svg' /><span>Apollo Client</span></div>
                  <div><Image src={sass} width={25} height={25} alt='next-svg' /><span>SCSS</span></div>
                  <div><Image src={c} width={25} height={25} alt='next-svg' /><span>Cloudinary</span></div>
                  <div><Image src={framer} width={25} height={25} alt='next-svg' /><span>Formik</span></div>
                </ul>

              </div>
            </div>

            <div className='outcomes'>
              <h1>Challenges and learning outcomes</h1>
              <p>Building "GameBug" was both challenging and rewarding. The biggest challenge and what massively accelerated my growth was learning GraphQL from scratch, implementing a fully fledged GraphQL server, creating a GraphQL API to efficiently handle complex queries and mutations and finally integrating it with my Next.js frontend. This experience deepened my understanding of API design, data management, cross origin resource sharing (CORS) and an appreciation of the resulting efficiency that comes with GraphQL. The successful marriage between a fully functional and efficient backend with an engaging and appealing frontend was the biggest prize after completing the project. The whole experience was a series of lifelong lessons, some unrelated to coding but in general equipped me with the right mindset to forge my path in the industry.</p>
            </div>
          </div>
        </div>

        <Footer />

      </div>
    </Transition>
  )
}
