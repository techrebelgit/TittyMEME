export default function VideoBackground() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden flex justify-center items-center">
      <video autoPlay loop muted className="h-full w-auto object-cover">
        <source src="/background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}
