import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <Header/>
    {/*  Outlate ko kaam :yedi hamile rote banaune belama jun layout hunxa tyo layout bhita hamile jati pani aru router haru lai rakhaxam tyo harek page haru ma header ra footer ma automataic rander gardinxa */}
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout