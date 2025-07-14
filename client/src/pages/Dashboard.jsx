import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'

const Dashboard = () => {
  return (
    <div className='bg-black min-h-screen text-white'>
      <Navbar />
      <HeroSection/>
    </div>
  )
}

export default Dashboard
