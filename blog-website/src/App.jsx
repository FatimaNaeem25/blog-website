import React from 'react'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import BlogDetail from './Pages/BlogDetail'
import Header from './Components/Header'
import Footer from './Components/Footer'
import ContactUs from './Pages/ContactUs'
import AboutUs from './Pages/AboutUs'

function App() {
  return (
    <>
    <div className='p-[20px]'>
    <Header />

    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/blog-detail/:id" element={<BlogDetail/>}></Route>
      <Route path="/contact-us" element={<ContactUs/>}></Route>
      <Route path="/about-us" element={<AboutUs />}></Route>
    </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App