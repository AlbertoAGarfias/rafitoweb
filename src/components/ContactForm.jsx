import { useState } from 'react'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const whatsappText = encodeURIComponent(
      `Hola, soy ${name} (${email}).\n${message}\nMe gustaría recibir más información sobre los productos.`
    )
    window.open(`https://wa.me/527292943761?text=${whatsappText}`, '_blank')
  }

  return (
    <form onSubmit={handleSubmit} className="bg-rafitoPink rounded-xl p-6 shadow-lg space-y-4">
      <h3 className="text-rafitoBlue font-bold text-lg">Formulario de contacto</h3>
      <div>
        <label className="block mb-1">Nombre</label>
        <input
          type="text"
          required
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full border rounded px-2 py-1"
        />
      </div>
      <div>
        <label className="block mb-1">Correo electrónico</label>
        <input
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full border rounded px-2 py-1"
        />
      </div>
      <div>
        <label className="block mb-1">Mensaje</label>
        <textarea
          required
          value={message}
          onChange={e => setMessage(e.target.value)}
          className="w-full border rounded px-2 py-1"
          rows={3}
        />
      </div>
      <button
        type="submit"
        className="bg-rafitoBlue text-white font-semibold px-4 py-2 rounded hover:bg-rafito transition"
      >
        Enviar por WhatsApp
      </button>
    </form>
  )
}