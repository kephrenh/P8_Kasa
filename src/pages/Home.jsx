import React from 'react'
import '../App.css'
import Gallery from '../components/Gallery.jsx'
import Banner from '../components/Banner.jsx'

function Home() {
  return (
    <>
        <Banner
          bannerImage="src/assets/banner-home.png "
          bannerTextLine1="Chez vous, "
          bannerTextLine2="partout et ailleurs"
        />
        <Gallery />
    </>
  )
}

export default Home