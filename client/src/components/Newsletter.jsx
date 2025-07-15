import { ChevronRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Newsletter = () => {
  return (
    <div className="bg-[#111818] w-full flex justify-center items-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-5xl rounded-md shadow-[0_0_20px_3px_var(--color-cyan-400)] flex flex-col items-center justify-center gap-6 px-4 sm:px-10 py-12 sm:py-16 bg-[#0f1417]">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center leading-tight">
          Ready to{' '}
          <span className="bg-gradient-to-r from-[#39FF14] to-cyan-400 text-transparent bg-clip-text">
            Transform
          </span>{' '}
          Your Gym?
        </h1>

        <p className="text-base sm:text-lg text-center text-gray-300 max-w-3xl">
          Join thousands of successful gym owners who are already using our platform to grow their business and achieve unprecedented success.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
          <Link to="/signup" className="w-full sm:w-auto">
            <button className="w-full bg-[#39FF14] hover:bg-[#37ff14ce] ring-[#00FF80] shadow-[0_0_20px_3px_rgba(0,255,100,0.4)] cursor-pointer text-black font-semibold px-6 py-3 rounded-xl transition duration-300 text-base sm:text-lg flex items-center justify-center gap-2">
              Start a free trial <ChevronRight />
            </button>
          </Link>

          <Link to="/login" className="w-full sm:w-auto">
            <button className="w-full border border-cyan-400 hover:bg-cyan-400 hover:text-black text-cyan-400 font-semibold px-6 py-3 rounded-xl transition duration-300 text-base sm:text-lg shadow-md">
              Contact Sales
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
