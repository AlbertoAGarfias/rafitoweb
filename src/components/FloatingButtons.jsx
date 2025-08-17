const buttons = [
  {
    href: 'https://wa.me/527292943761?text=Hola%20estoy%20interesado%20en%20los%20productos%20de%20Juguetes%20Creativos%20Rafito',
    icon: (
      <svg viewBox="0 0 32 32" fill="currentColor" className="w-7 h-7">
        <path d="M16 .6C7.6.6.6 7.6.6 16c0 2.8.7 5.5 2 7.9L.6 31.4l7.7-2c2.3 1.3 4.9 2 7.7 2 8.4 0 15.4-7 15.4-15.4S24.4.6 16 .6zm0 28.1c-2.5 0-4.9-.7-7-2.1l-.5-.3-4.6 1.2 1.2-4.5-.3-.5c-1.3-2.1-2-4.5-2-7C3.7 8.6 9.3 3 16 3c6.7 0 12.3 5.6 12.3 12.3 0 6.7-5.6 12.3-12.3 12.3zm7.1-8.4c-.4-.2-2.4-1.2-2.7-1.3-.4-.2-.6-.2-.9.2-.3.4-.9 1.3-1.2 1.5-.2.3-.5.3-.9.1-.4-.2-1.6-.6-3-1.8-1.1-1-2-2.2-2.2-2.7-.2-.4 0-.6.2-.8.2-.3.4-.7.6-.9.2-.2.3-.4.5-.6.2-.2.1-.4 0-.6-.1-.2-.9-2.2-1.2-3-.3-.8-.6-.7-.9-.7h-.7c-.2 0-.6.1-.9.5-.3.4-1.1 1.1-1.1 2.6s1.1 3 1.2 3.2c.1.2 2.2 3.2 5.2 4.4.7.3 1.3.5 1.7.7.7.2 1.3.2 1.8.1.6-.1 1.8-.7 2.1-1.3.3-.6.3-1.2.2-1.3z"/>
      </svg>
    ),
    color: 'bg-green-500',
    label: 'WhatsApp'
  },
  {
    href: 'https://www.facebook.com/quietbooksmagicosrafito',
    icon: (
      <svg viewBox="0 0 32 32" fill="currentColor" className="w-7 h-7">
        <path d="M29 0H3C1.3 0 0 1.3 0 3v26c0 1.7 1.3 3 3 3h13.5V20.5h-4v-5h4v-3.7c0-4 2.4-6.2 6-6.2 1.7 0 3.5.1 3.5.1v4h-2c-2 0-2.6 1.2-2.6 2.5V15.5h5l-.8 5h-4.2V32H29c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3z"/>
      </svg>
    ),
    color: 'bg-blue-600',
    label: 'Facebook'
  },
  {
    href: 'https://www.youtube.com/channel/UCtU1ab4Zc0hVnA2gJY0aU4w',
    icon: (
      <svg viewBox="0 0 32 32" fill="currentColor" className="w-7 h-7">
        <path d="M31.8 9.4c-.3-1.2-1.2-2.2-2.4-2.4C27.3 6.6 16 6.6 16 6.6s-11.3 0-13.4.4C1.4 7.2.5 8.2.2 9.4 0 11.5 0 16 0 16s0 4.5.2 6.6c.3 1.2 1.2 2.2 2.4 2.4C4.7 25.4 16 25.4 16 25.4s11.3 0 13.4-.4c1.2-.2 2.1-1.2 2.4-2.4.2-2.1.2-6.6.2-6.6s0-4.5-.2-6.6zM12.7 20.5v-9l8.2 4.5-8.2 4.5z"/>
      </svg>
    ),
    color: 'bg-red-600',
    label: 'YouTube'
  },
  {
    href: 'https://www.instagram.com/',
    icon: (
      <svg viewBox="0 0 32 32" fill="currentColor" className="w-7 h-7">
        <path d="M16 7.5c2.4 0 2.7 0 3.7.1 1 .1 1.6.2 2 .4.5.2.8.3 1.2.7.4.4.5.7.7 1.2.2.4.3 1 .4 2 .1 1 .1 1.3.1 3.7s0 2.7-.1 3.7c-.1 1-.2 1.6-.4 2-.2.5-.3.8-.7 1.2-.4.4-.7.5-1.2.7-.4.2-1 .3-2 .4-1 .1-1.3.1-3.7.1s-2.7 0-3.7-.1c-1-.1-1.6-.2-2-.4-.5-.2-.8-.3-1.2-.7-.4-.4-.5-.7-.7-1.2-.2-.4-.3-1-.4-2-.1-1-.1-1.3-.1-3.7s0-2.7.1-3.7c.1-1 .2-1.6.4-2 .2-.5.3-.8.7-1.2.4-.4.7-.5 1.2-.7.4-.2 1-.3 2-.4 1-.1 1.3-.1 3.7-.1m0-2.5c-2.5 0-2.8 0-3.8.1-1 .1-1.7.2-2.3.4-.6.2-1.1.5-1.6 1-.5.5-.8 1-1 1.6-.2.6-.3 1.3-.4 2.3-.1 1-.1 1.3-.1 3.8s0 2.8.1 3.8c.1 1 .2 1.7.4 2.3.2.6.5 1.1 1 1.6.5.5 1 .8 1.6 1 .6.2 1.3.3 2.3.4 1 .1 1.3.1 3.8.1s2.8 0 3.8-.1c1-.1 1.7-.2 2.3-.4.6-.2 1.1-.5 1.6-1 .5-.5.8-1 1-1.6.2-.6.3-1.3.4-2.3.1-1 .1-1.3.1-3.8s0-2.8-.1-3.8c-.1-1-.2-1.7-.4-2.3-.2-.6-.5-1.1-1-1.6-.5-.5-1-.8-1.6-1-.6-.2-1.3-.3-2.3-.4-1-.1-1.3-.1-3.8-.1z"/>
        <circle cx="16" cy="16" r="4.5"/>
        <circle cx="22.5" cy="9.5" r="1.5"/>
      </svg>
    ),
    color: 'bg-pink-500',
    label: 'Instagram'
  },
]

export default function FloatingButtons() {
  return (
    <div className="fixed flex flex-col gap-4 right-4 bottom-6 z-50">
      {buttons.map((b, idx) => (
        <a
          key={b.label}
          href={b.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${b.color} text-white rounded-full shadow-xl p-3 flex items-center justify-center hover:scale-110 hover:shadow-2xl transition-all duration-200 border-2 border-white`}
          title={b.label}
          style={{ boxShadow: '0 4px 20px rgba(0,0,0,.15)' }}
        >
          {b.icon}
        </a>
      ))}
    </div>
  )
}