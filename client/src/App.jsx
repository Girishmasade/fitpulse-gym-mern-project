import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Login from './pages/authantication/Login'
import Signup from './pages/authantication/Signup'
import { Toaster } from 'react-hot-toast';
import Dashboard from './pages/./commonPages/Dashboard';
import MainLayout from './layout/MainLayout';
import OwnerDashboard from './pages/owner/Dashboard';
import OwnerProtectedRoute from './protected Routes/OwnerProtectedRoute';
import Users from './pages/owner/Users';
import Plans from './pages/owner/Plans';
import Reports from './pages/owner/Reports';
import Setting from './pages/owner/Setting';
import Profile from './pages/owner/Profile';
import UserProtectedRoute from './protected Routes/UserProtectedRoute';
import MemberDashboard from './pages/member/Dashboard'
import Bookings from './pages/member/Bookings';
import Progress from './pages/member/Progress';
import Chat from './pages/member/Chat';

const App = () => {
  return (
    <Router>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path='/' element={<Navigate to={"/dashboard"}/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>

        {/* Add more routes as needed */}
        <Route element={<OwnerProtectedRoute />}>
          <Route element={<MainLayout />}>
            <Route path="/owner/dashboard" element={<OwnerDashboard />} />
            <Route path="/owner/users" element={<Users />} />
             <Route path="/owner/plans" element={<Plans />} />
            <Route path="/owner/reports" element={<Reports />} /> 
            <Route path="/owner/settings" element={<Setting />} />
            <Route path="/owner/profile" element={<Profile />} />
          </Route>
        </Route>

        <Route element={<UserProtectedRoute/>}>
        <Route element={<MainLayout/>}>
        <Route path='/user/dashboard' element={<MemberDashboard/>}/>
        <Route path='/user/bookings' element={<Bookings/>}/>
        <Route path='/user/progress' element={<Progress/>}/>
        <Route path='/user/chat' element={<Chat/>}/>
        </Route>
        </Route>

      </Routes>
    </Router>
  )
}

export default App
