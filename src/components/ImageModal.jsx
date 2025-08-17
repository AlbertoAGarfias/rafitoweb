export default function ImageModal({ src, alt, desc, onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
      <div className="relative bg-white rounded-xl p-4 max-w-lg w-full">
        <button
          className="absolute top-2 right-2 text-rafitoBlue font-bold text-xl"
          onClick={onClose}
        >×</button>
        <img src={src} alt={alt} className="w-full h-auto rounded-lg mb-2" />
        <p className="text-center">{desc}</p>
      </div>
    </div>
  )
}