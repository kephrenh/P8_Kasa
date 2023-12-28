import './App.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import { Navbar } from './components/Navbar.jsx'
import { Footer } from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import { Housing } from './pages/Housing.jsx'


const Layout = () => {
  return (
    <>
        <Navbar />
        <Outlet />
        <Footer />
    </>
    )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/housing',
        element: <Housing />
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
