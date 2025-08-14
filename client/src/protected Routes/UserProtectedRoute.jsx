import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom';

const UserProtectedRoute = () => {
  const role = useSelector((state) => state.auth.role) || localStorage.getItem("roles");
  const Navigate = useNavigate()

  if(role === "member"){
    console.warn("Unauthorized access: Member role required");
    return <Navigate to="/login"/>

  }
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default UserProtectedRoute
