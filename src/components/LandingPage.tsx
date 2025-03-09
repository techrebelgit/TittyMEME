"use client"

import { useState, useEffect } from "react"
import VideoBackground from "./VideoBackground"
import Logo from "./Logo"
import AudioPlayer from "./AudioPlayer"
import ContentSections from "./ContentSections"
// Switch back to standard import
import { ChevronDown } from 'lucide-react'

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight - 80,
      behavior: "smooth",
    })
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#121212]">
      {/* Fixed header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 transition-all duration-300 ${
          scrolled ? "bg-black/80 backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <div className="flex items-center">
          <span className="text-2xl monoton-text text-pink-500">TITTYLABS</span>
        </div>
        <AudioPlayer />
      </header>

      {/* Hero section with video background */}
      <div className="relative h-screen">
        <VideoBackground />

        <div className="relative h-full flex flex-col items-center justify-center">
          <div className="flex-grow flex items-center justify-center">
            <Logo />
          </div>

          <button
            onClick={scrollToContent}
            className="mb-12 text-gray-300 hover:text-pink-500 transition-colors animate-bounce"
            aria-label="Scroll down to content"
          >
            <ChevronDown className="h-10 w-10" />
          </button>
        </div>
      </div>

      {/* Content sections */}
      <div className="relative z-10 bg-[#121212]">
        <ContentSections />
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-black/50 text-gray-400 text-center p-6 border-t border-gray-800">
        <p className="space-mono-text tracking-wider">© {new Date().getFullYear()} TittyLabs. All rights reserved.</p>
      </footer>
    </div>
  )
}
