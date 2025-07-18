import React from 'react'
import UserManagementHeader from '../../components/owner/users/UserManagementHeader'
import TabsOfRoleAndStatus from '../../components/owner/Plans/TabsOfRoleAndStatus'

const Plans = () => {
  return (
    <div className='flex flex-col gap-7'>
      <UserManagementHeader title={"Membership Management"} subtitle={"Manage plans, renewals, and member subscriptions"}/>
      <TabsOfRoleAndStatus/>
    </div>
  )
}

export default Plans
