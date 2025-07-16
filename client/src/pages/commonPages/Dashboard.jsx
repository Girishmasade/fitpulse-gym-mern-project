import React from 'react'
import Navbar from '../../components/Navbar'
import HeroSection from '../../components/HeroSection'
import StatsSection from '../../components/StatsSection'
import Features from '../../components/Features'
import Testimonials from '../../components/Testimonials'
import Newsletter from '../../components/Newsletter'
import Footer from '../../components/Footer'

const Dashboard = () => {
  return (
    <div className='bg-black min-h-screen text-white'>
      <Navbar />
      <HeroSection/>
       <StatsSection />
       <Features/>
       <Testimonials/>
       <Newsletter/>
       <Footer/>
    </div>
  )
}

export default Dashboard
