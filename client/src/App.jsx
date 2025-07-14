import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Login from './pages/authantication/Login'
import Signup from './pages/authantication/Signup'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to={"/login"}/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </Router>
  )
}

export default App
