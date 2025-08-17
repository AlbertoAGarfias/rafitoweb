import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-6">
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-rafitoBlue font-bold text-2xl mb-4">Contacto</h2>
        <p className="mb-2">Dirección: Isabel la Católica no. 2-C, C.P. 52160, San Bartolomé Tlaltelulco, Metepec, Estado de México.</p>
        <p className="mb-2">Teléfono: <a href="https://wa.me/527292943761" target="_blank" rel="noopener noreferrer" className="text-rafito font-bold">+52 729 294 3761</a></p>
        <p className="mb-2">Correo: <a href="mailto:juguetes.creativos.rafito@gmail.com" className="text-rafito font-bold">juguetes.creativos.rafito@gmail.com</a></p>
        <div className="mb-2">
          <span>Facebook: </span>
          <a href="https://www.facebook.com/quietbooksmagicosrafito" target="_blank" rel="noopener noreferrer" className="text-rafito font-bold">
            quietbooksmagicosrafito
          </a>
        </div>
        <div className="my-3">
          <iframe
            src="https://maps.google.com/maps?q=Isabel%20la%20Cat%C3%B3lica%202-C%2C%20San%20Bartolom%C3%A9%20Tlaltelulco%2C%20Metepec%2C%20Estado%20de%20M%C3%A9xico&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="220"
            style={{border:0}}
            allowFullScreen=""
            loading="lazy"
            title="Ubicación Juguetes Creativos Rafito"
            className="rounded-lg"
          />
        </div>
      </div>
      <ContactForm />
    </section>
  )
}