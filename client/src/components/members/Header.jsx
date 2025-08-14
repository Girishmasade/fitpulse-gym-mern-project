import { Bell } from 'lucide-react'
import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
    const name = useSelector((state) => state.auth.user) || localStorage.getItem("user");
    // console.log(name.username);
    let userName = name.username ? name.username: "User"
   userName = userName.charAt(0).toUpperCase() + userName.slice(1)
    // console.log(userName.charAt(0).toUpperCase() + userName.slice(1));
    
    
  return (
   <div className='flex justify-between p-4 text-white w-full'>
      <div className="flex flex-col gap-2">
        <h1 className='text-3xl font-bold bg-gradient-neon-green'>Welcome back, {userName}</h1>
        <p className='text-gray-400'>Ready for another great workout?</p>
      </div>

      <div className="flex gap-4">
        <p className='relative left-14 -top-3 bg-[#39FF14] w-5 h-5 text-center rounded-full text-black'>4</p>
        <Bell />
      </div>
    </div>
  )
}

export default Header
