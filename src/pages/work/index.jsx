import Transition from '@/components/Transition'
import Image from 'next/image'
import React from 'react'
import { c, flask, framer, gamebug, graphq, nextj, nextjs, postgres, sass } from '../../../public/images/exports'
import next from 'next'
import Footer from '@/components/footer'

export default function Work() {
  return (
    <Transition>
      <div className='main-work'>
        <div className='cover'></div>
        <div className="main-work-container">
          <h1>Project Highlight: GameBug</h1>
          <h4>Backstory</h4>
          <div className='content'>
            <div className='content-p'>
              <p>I originally started building Gamebug as a capstone project during my bootcamp. After shopping around for design inspiration, I was sold on the rawg.io website, the functionality, the smooth animations, the rich features and opportunities to implement my backend know-how, this was it, or so sheepishly thought.</p>
              <p> After about a day into it, I quickly realized this was way beyond my paygrade. Pressed for time, I painfully opted for something simpler. Deep down, my ego was bruised, the impostor syndrome aptly reared it's head. Not one to turn down a challenge, I promised to redeem myself immediately after bootcamp. And so I did.</p>
              <p> The setting was, the designers over at rawg had just completed their spanking new company design and had tasked me with developing it. I took the challenge with both hands. The reality though, was I needed to learn a ton of new stuff, the knowledge I gained at bootcamp and my freelancing days, though nothing to laugh about, would barely cover the job. Luckily, I knew exactly what I needed to learn as most of the technologies were in line with what I had put in my bucket list of "additional skills to learn to be a complete developer after bootcamp". I did not make that up.</p>
              <p> SQLite take a backseat, come in Postgres, goodbye REST, come in GraphQL, I love you React, but I got the hots for this strapping new Next.js fad, CSS, do you nest bro? Didn't think so, come in SCSS, Gsap bunk with Framer-motion, black, get the snakes in line, Github, get everyone on the Docker and let's ship out.</p>
              <p> I think, having just one project to focus on and knowing what technologies to focus on ensured I was not stuck in 'tutorial hell'. 4 months and a herniated disc later(true story), I completed the project, though it doesn't have 100% of the features at Rawg, I packed it with enough to demonstrate everything I can do with what I have learned, essentially a 'snapshot' of my skills at this time.</p>
            </div>
            <div className='content-img-div'>
              <div id='gmb'>
                <Image src={gamebug} width={100} height={100} alt='gamebug-image' className='gamebug-image' />
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
              <p>Building "GameGo" was both challenging and rewarding. One of the biggest challenges was implementing the GraphQL API to efficiently handle complex queries and mutations. However, this experience deepened my understanding of API design and data management. I also learned the importance of writing scalable and maintainable code, which has been a valuable lesson as I continue to develop my skills.</p>
            </div>
          </div>
        </div>

        <Footer />

      </div>
    </Transition>
  )
}
