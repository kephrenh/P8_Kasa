import React from 'react'
import '../App.css'
import HomeMain from '../components/HomeMain.jsx'
import HomeHeader from '../components/HomeHeader.jsx'

function Home() {
  return (
    <>
        <HomeHeader bannerImage="banner-home.png" bannerText="Chez vous, partout et ailleurs" />
        <HomeMain />
    </>
  )
}

export default Home