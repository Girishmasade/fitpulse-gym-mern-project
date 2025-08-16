import { Target } from 'lucide-react'
import React from 'react'

const GoalProgress = () => {
  return (
    <div className='flex flex-col p-4 px-6 gap-5 bg-base-200 rounded-md'>
       <div className="flex flex-col">
        <h2 className='text-2xl font-semibold flex gap-2 items-center'><Target className='colour'/>Goals Progress</h2>
        <p>Track your fitness milestones</p>
      </div>
    </div>
  )
}

export default GoalProgress
