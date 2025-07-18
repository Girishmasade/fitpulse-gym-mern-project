import React from 'react'
import UserManagementHeader from '../../components/owner/users/UserManagementHeader'
import AllUsersData from '../../components/owner/users/AllUsersData'

const Users = () => {
  return (
     <div className="flex flex-col w-full">
      <UserManagementHeader title={"User Management"} subtitle={" Manage members, trainers, and administrators"}/>
      <AllUsersData/>
    </div>
  )
}

export default Users
