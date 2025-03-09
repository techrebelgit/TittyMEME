export default function VideoBackground() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden flex justify-center items-center">
      <video autoPlay loop muted className="h-full w-auto object-cover">
        <source
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/background-video-6sDquG6CvIXye0pP2GSOObGmy8RItj.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

