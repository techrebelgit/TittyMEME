"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
// Switch back to standard import
import { Play, Pause } from "lucide-react"

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div>
      <audio ref={audioRef} src="/Yarin Primak - Expensive.mp3" loop />
      <Button onClick={togglePlay} variant="ghost" size="icon" className="text-white hover:text-gray-300">
        {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
      </Button>
    </div>
  )
}

