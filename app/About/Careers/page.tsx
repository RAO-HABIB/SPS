
import Benefits from '@/components/about/careers/Benefits'
import Hero from '@/components/about/careers/Hero'
import OpenPositions from '@/components/about/careers/OpenPositions'
import OurValues from '@/components/about/careers/OurValue'
import Footer from '@/components/Footer/footer'

import Navbar from '@/components/Navbar/navbar'
import React from 'react'

function CareerPage() {
  return (
   <>
   <Navbar/>
   <Hero/>
   <OpenPositions/>
   <OurValues/>
   <Benefits/>
   <Footer/>
   </>
  )
}

export default CareerPage
