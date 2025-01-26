"use client"

import VideoBackground from "./VideoBackground"
import Logo from "./Logo"
import AudioPlayer from "./AudioPlayer"

export default function LandingPage() {
  return (
    <div className="relative w-screen h-screen overflow-hidden  ">
      <VideoBackground />
      <div className="absolute inset-0 flex flex-col">
        <header className="z-10 flex justify-end items-center p-4 bg-black bg-opacity-100">
          <AudioPlayer />
        </header>
        <main className="flex-grow flex items-center justify-center">
          <Logo />
        </main>
      </div>
    </div>
  )
}



