import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import StatsSection from '../components/StatsSection'

const Dashboard = () => {
  return (
    <div className='bg-black min-h-screen text-white'>
      <Navbar />
      <HeroSection/>
       <StatsSection />
    </div>
  )
}

export default Dashboard
