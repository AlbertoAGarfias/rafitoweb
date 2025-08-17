const videos = [
  "https://www.youtube.com/embed/XXXXXXXXX",
  "https://www.youtube.com/embed/YYYYYYYYY",
  "https://www.youtube.com/embed/ZZZZZZZZZ"
]

export default function YoutubeGallery() {
  return (
    <div className="flex flex-wrap gap-4 justify-center mb-6">
      {videos.map((url, i) => (
        <div key={i} className="w-full sm:w-1/3 aspect-video rounded-lg overflow-hidden shadow-lg bg-white">
          <iframe
            src={url}
            title={`Video ${i+1}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      ))}
    </div>
  )
}