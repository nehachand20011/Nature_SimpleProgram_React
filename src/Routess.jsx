import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ProductCart from './components/ProductCart'
import Cart from './pages/Cart'
import Fetch from './components/Fetch'
import Register from './pages/Register'
import Show from './contex/Show'

const Routess = () => {
  return (
    <>

      <Router>
        <Routes>

          <Route path='' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Register />} />
            <Route path='/fetch/:id' element={<ProductCart />} />
            <Route path='cart' element={<Cart />} />
            <Route path='fetch' element={<Fetch />} />
          </Route>
          <Route path='context/api' element={<Show/>}/>



        </Routes>
      </Router>

    </>
  )
}

export default Routess