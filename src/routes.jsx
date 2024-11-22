import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Magzine from './pages/Magzine'
import Podcast from './pages/Podcast'
import Authors from './pages/Authors'
import Author from './pages/Author'
import Podcasts from './pages/Podcasts'

const AppRoute = () => {
  return (
    <BrowserRouter>
        <div className="flex items-center flex-col ">
            <div className="w-full flex flex-col min-h-screen screen-container px-4">
                <header className="w-full">
                    <Header />
                </header>
                <main className="flex-grow flex justify-center w-full">
                    <div className="w-full">
                        <Routes>
                            <Route path="/" element={<Home/>} />
                            <Route path="/magazine" element={<Magzine />} />
                            <Route path="/podcast" element={<Podcasts />} />
                            <Route path="/podcast/:id" element={<Podcast />} />
                            <Route path="/authors" element={<Authors />} />
                            <Route path="/author/:id" element={<Author />} />
                        </Routes>
                    </div>
                </main>
            </div>
            <footer className="w-full">
                <Footer />
            </footer>
        </div>
    </BrowserRouter>
  )
}

export default AppRoute