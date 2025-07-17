import { Bell } from 'lucide-react'

const Header = () => {
  return (
    <div className='flex justify-between p-4 text-white w-full'>
      <div className="flex flex-col gap-2">
        <h1 className='text-3xl font-bold bg-gradient-neon-green'>Admin Dashboard</h1>
        <p className='text-gray-400'>Monitor your gym's performance and manage operations</p>
      </div>

      <div className="flex gap-4">
        <p className='relative left-14 -top-3 bg-[#39FF14] w-5 h-5 text-center rounded-full text-black'>4</p>
        <Bell />
      </div>
    </div>
  )
}

export default Header
