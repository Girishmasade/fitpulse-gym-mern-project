import React from 'react'
import Header from '../../components/members/Header'
import Card from '../../components/members/Card'
import DashboardData from '../../components/members/DashboardActionsData/DashboardData'

const Dashboard = () => {
  return (
    <div>
      <Header/>
      <Card/>
      <DashboardData/>
    </div>
  )
}

export default Dashboard
