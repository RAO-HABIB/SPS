import Awards from '@/components/about/story/Awards'
import CareerCTA from '@/components/about/story/CareerCTA'
import HeroMission from '@/components/about/story/HeroMission'
import Process from '@/components/about/story/Implementation'
import Timeline from '@/components/about/story/Timeline'
import Training from '@/components/about/story/Training'
import WhoWeAre from '@/components/about/story/WhoWeAre'
import Footer from '@/components/Footer/footer'
import Navbar from '@/components/Navbar/navbar'
import React from 'react'

function StoryPage() {
  return (
   <>
   <Navbar/>
   <HeroMission/>
   <WhoWeAre/>
   <Timeline/>
   <Awards/>
   <Process/>
   <Training/>
   <CareerCTA/>
   <Footer/>
   </>
  )
}

export default StoryPage
