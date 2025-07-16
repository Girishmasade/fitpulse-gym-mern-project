import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({allowedRoles, children}) => {

    const role = localStorage.getItem('role');

    if(!role){
        return Navigate('/login');
    }

    if(!allowedRoles.includes(role)){
        return <div className="text-white p-10">Unauthorized</div>
    }

    return children;
}

export default ProtectedRoutes
