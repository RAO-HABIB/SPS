import Footer from '@/components/Footer/footer'
import Hero from '@/components/Hero/hero'
import HowItWorks from '@/components/HowItWorks/HowItWorks'
import Navbar from '@/components/Navbar/navbar'
import NewsInsights from '@/components/NewsInsights/newsinsights'
import Partners from '@/components/Partners/partners'
import Products from '@/components/Products/products'
import Services from '@/components/Services/services'
import Startups from '@/components/Startups/startups'
import Verticals from '@/components/Verticals/verticals'


export default function page() {
  return (
    <>
     <Navbar />
    <Hero/>
     <Services/>
     <Startups/>
     <Products/>
     <HowItWorks/> 
     <Partners/>
     <NewsInsights/>
     <Verticals/>
    <Footer/>
    </>
  )
}

