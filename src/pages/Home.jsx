import React from 'react'
import '../App.css'
import Gallery from '../components/Gallery.jsx'
import Banner from '../components/Banner.jsx'

function Home() {
  return (
    <>
        <Banner
          bannerImage="banner-home.png"
          bannerText="Chez vous, partout et ailleurs"
        />
        <Gallery />
    </>
  )
}

export default Home