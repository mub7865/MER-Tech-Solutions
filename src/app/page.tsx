import AboutUs from '@/components/About'
import ContactSection from '@/components/Contact'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HeroSec from '@/components/HeroSec'
import OurWork from '@/components/OurWork'
import OurServices from '@/components/Services'
import Team from '@/components/Team'
import Testimonials from '@/components/Testimonial'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Header/>
      <HeroSec/>
      <AboutUs/>
      <OurServices/>
      <OurWork/>
      <Team/>
      <Testimonials/>
      <ContactSection/>
      <Footer/>
    </div>
  )
}

export default Home
