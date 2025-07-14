import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Login from './pages/authantication/Login'
import Signup from './pages/authantication/Signup'
import { Toaster } from 'react-hot-toast';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <Router>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path='/' element={<Navigate to={"/dashboard"}/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </Router>
  )
}

export default App
