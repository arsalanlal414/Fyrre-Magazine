import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Magzine from './pages/Magzine'
import Podcast from './pages/Podcast'
import Authors from './pages/Authors'
import Author from './pages/Author'
import Podcasts from './pages/Podcasts'
import MagzinePost from './pages/MagzinePost'

const AppRoute = () => {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        document.title = 'Fyrre Magazine - Home';
        break;
      case '/magazine':
        document.title = 'Fyrre Magazine - Magazine';
        break;
      case '/podcast':
        document.title = 'Fyrre Magazine - Podcast';
        break;
      case '/authors':
        document.title = 'Fyrre Magazine - Authors';
        break;
      case '/magazine/:post':
        document.title = 'Fyrre Magazine - Magazine Post';
        break;
      default:
        document.title = 'Fyrre Magazine';
    }
  }, [location]);

  return (
    
      <div className="flex flex-col items-center">
        <div className="w-full flex flex-col min-h-screen screen-container px-4 lg:px-8 xl:px-12">
          <header className="w-full">
            <Header />
          </header>
          <main className="flex-grow flex justify-center w-full z-50">
            <div className="w-full mx-auto">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/magazine" element={<Magzine />} />
                <Route path="/magazine/:post" element={<MagzinePost />} />
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
  )
}

export default AppRoute
