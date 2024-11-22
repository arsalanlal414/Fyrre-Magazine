import React from 'react'
import { FaInstagram, FaRss, FaTwitter, FaYoutube } from 'react-icons/fa'

const SocialLinks = () => {
  return (
    <div className="icons flex gap-4 text-lg">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110">
        <FaInstagram />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110">
        <FaTwitter />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110">
        <FaYoutube />
        </a>
        <a href="https://rss.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110">
        <FaRss />
        </a>
    </div>
  )
}

export default SocialLinks