import YoutubeGallery from '../components/YoutubeGallery'
import Carousel from '../components/Carousel'

export default function Products() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-6">
      <div className="mb-8">
        <h2 className="text-rafitoBlue font-bold text-2xl mb-4">Nuestros Productos</h2>
        <YoutubeGallery />
      </div>
      <div>
        <h3 className="text-rafito font-semibold text-xl mb-4">Galería de Imágenes</h3>
        <Carousel />
      </div>
    </section>
  )
}