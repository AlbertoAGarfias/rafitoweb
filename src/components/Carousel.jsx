import { useState } from 'react'
import ImageModal from './ImageModal'
import products from '../assets/products/products.json'

export default function Carousel() {
  const [active, setActive] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div>
      <div className="flex justify-center gap-2 mb-2">
        {products.map((img, idx) => (
          <button
            key={img.src}
            onClick={() => setActive(idx)}
            className={`h-16 w-16 overflow-hidden rounded-lg border-2 ${active === idx ? 'border-rafito' : 'border-white'} transition`}
          >
            <img src={img.src} alt={img.alt} className="object-cover h-full w-full" />
          </button>
        ))}
      </div>
      <div className="flex flex-col items-center">
        <img
          src={products[active].src}
          alt={products[active].alt}
          className="rounded-xl shadow-lg w-80 h-80 object-cover cursor-pointer"
          onClick={() => setModalOpen(true)}
        />
        <p className="mt-2 text-center text-sm">{products[active].desc}</p>
      </div>
      {modalOpen && (
        <ImageModal
          src={products[active].src}
          alt={products[active].alt}
          desc={products[active].desc}
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  )
}