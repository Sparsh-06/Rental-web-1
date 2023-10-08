import './App.css'
import './Components/Styles/cover.css'
import Cover from './Components/Pages/Cover';
import { IconButton } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import Navbar from './Components/Pages/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './Components/Backend Components/Signup';
import Login from './Components/Backend Components/Login';
import axios from 'axios';
import Oprofile from './Components/ownerProfile/Oprofile';





export default function App() {


  return (
    <div className='fullpage'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Cover />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<Oprofile />} />

        </Routes>
      </Router>
    </div>
  )
}

