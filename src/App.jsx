import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// modules
import { Route,Routes } from 'react-router-dom'


// components
import { NavbarComponent } from './Components/Navbar/Navbar'
import { FooterComponent } from './Components/Footer/Footer'

// pages
import { Login } from './Pages/Login/Login'
import { Signup } from './Pages/Signup/Signup'
import { Home } from './Pages/Home/Home'
import { Profile } from './Pages/Profile/Profile'
import { Centres } from './Pages/Centres/Centres'
import { Book } from './Pages/Book/Book'
import { Admin } from './Pages/Admin/Admin'

// context
import { useAuth } from './Context/UserContext'
import { AuthProvider } from './Context/UserContext'
import { NotFound } from './Pages/NotFound/Notfound'

import { ProtectedRoute } from './Context/ProtectedRoute'
import { AdminRoute } from './Context/AdminRoute'
import { BookingDetails } from './Pages/BookingDetails/BookingDetails'

function App() {

  const { currentUser } = useAuth()

  
  

  return (
    <>
      <AuthProvider>
      <NavbarComponent/>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/profile" element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
        <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
        <Route path="/book" element={<ProtectedRoute><Book/></ProtectedRoute>}/>
        <Route path="/centres" element={<ProtectedRoute><Centres/></ProtectedRoute>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/admin" element={<AdminRoute><Admin/></AdminRoute>}/>
        <Route path="/bookingdetails" element={<AdminRoute><BookingDetails/></AdminRoute>}/>
      </Routes>
      <FooterComponent/> 
      </AuthProvider>
    </>
  )
}

export default App
