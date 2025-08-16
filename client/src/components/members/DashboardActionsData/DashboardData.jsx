import React from 'react'
import QuickActions from './QuickActions'
import NutritionToday from './Nutrition Today/NutritionToday'
import GoalProgress from './GoalProgress/GoalProgress'

const DashboardData = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 p-4 rounded-md'>
      <QuickActions/>
      <NutritionToday/>
      <GoalProgress/>
    </div>
  )
}

export default DashboardData
