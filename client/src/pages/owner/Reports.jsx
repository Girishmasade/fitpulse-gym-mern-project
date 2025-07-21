import React from 'react'
import UserManagementHeader from '../../components/owner/users/UserManagementHeader'
import Charts from '../../components/owner/reports/Charts'
import TrainerAndClients from '../../components/owner/reports/TrainerAndClients'

const Reports = () => {
  return (
    <div className='flex flex-col p-2'>
      <UserManagementHeader title={"Analytics & Reports"} subtitle={"Track performance and business insights"}/>
      <Charts/>
      <TrainerAndClients/>
    </div>
  )
}

export default Reports
