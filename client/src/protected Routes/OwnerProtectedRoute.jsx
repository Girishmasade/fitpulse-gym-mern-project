// import { useSelector } from "react-redux";
// import { Outlet } from "react-router-dom";

// const OwnerProtectedRoute = () => {
//     const role = useSelector((state) => state.auth.role) || localStorage.getItem("roles");

//     if (role !== "owner") {
//         console.log("Unauthorized access: Owner role required");
//         return <div className="text-white p-4">Unauthorized Access</div>
//     }

//   return <Outlet/>
   
// }

// export default OwnerProtectedRoute

import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const OwnerProtectedRoute = () => {
  const role =
    useSelector((state) => state.auth.role) || localStorage.getItem("roles");

  if (role === "owner") {
    console.warn("nauthorized access: Member role required");
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default OwnerProtectedRoute;
