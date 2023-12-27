import React from 'react'
import '../App.css'
import { Navbar } from '../components/Navbar.jsx'
import { Footer } from '../components/Footer.jsx'
import HomeMain from '../components/HomeMain.jsx'
import HomeHeader from '../components/HomeHeader.jsx'

function Home() {
  return (
    <>
        <Navbar />
        <HomeHeader bannerImage="banner-home.png" bannerText="Chez vous, partout et ailleurs" />
        <HomeMain />
        <Footer />
    </>
  )
}

export default Home