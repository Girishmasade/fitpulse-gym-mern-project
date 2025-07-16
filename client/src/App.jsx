import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Login from './pages/authantication/Login'
import Signup from './pages/authantication/Signup'
import { Toaster } from 'react-hot-toast';
import Dashboard from './pages/./commonPages/Dashboard';
import MainLayout from './layout/MainLayout';
import OwnerDashboard from './pages/owner/Dashboard';
import ProtectedRoutes from './protected Routes/ProtectedRoutes';

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
        <Route element={<MainLayout/>}>
          <Route path='/owner/dashboard' element={<OwnerDashboard/>} />
        </Route>

      </Routes>
    </Router>
  )
}

export default App
