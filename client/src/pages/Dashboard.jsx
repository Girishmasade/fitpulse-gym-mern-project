import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import StatsSection from '../components/StatsSection'
import Features from '../components/Features'

const Dashboard = () => {
  return (
    <div className='bg-black min-h-screen text-white'>
      <Navbar />
      <HeroSection/>
       <StatsSection />
       <Features/>
    </div>
  )
}

export default Dashboard
