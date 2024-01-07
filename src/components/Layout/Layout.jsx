import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { Outlet } from 'react-router-dom'

// Fonction pour afficher la barre de navigation et footer sur toutes les pages
function Layout() {
   return (
      <>
         <Header />
         <Outlet />   
         <Footer />
      </>
   )
}

export default Layout