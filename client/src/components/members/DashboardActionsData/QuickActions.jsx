import React from 'react'
import { Link } from 'react-router-dom'

const QuickActions = () => {
  return (
    <div className='flex flex-col p-3 gap-4 w-full bg-base-200 rounded-md'>
      <div className="flex flex-col">
        <h1>Quick Actions</h1>
        <p>Jump into your fitness routine</p>
      </div>

      <div className="flex flex-col gap-3 ">
       <Link to="/user/bookings"> <button className="btn text-black rounded-lg commonColorBg w-full">Start Workout</button></Link>
       <Link to="/user/progress"> <button className="btn border border-cyan-300 hover:bg-cyan-300 text-cyan-300 hover:text-black rounded-lg w-full">Log Workout</button></Link>
       <Link to="/user/chat"> <button className="btn border border-zinc-300 hover:bg-zinc-300 text-zinc-300 hover:text-black rounded-lg w-full">Message Trainer</button></Link>
      </div>
    </div>
  )
} 

export default QuickActions
