import { FaBaby, FaPalette, FaBook, FaHandsHelping, FaHeart } from "react-icons/fa";

export default function Home() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-6">
      {/* Hero Banner */}
      <div className="relative mb-10 rounded-2xl overflow-hidden shadow-xl border border-rafitoPink">
        <img
          src="/product1.jpg"
          alt="Quiet Book"
          className="w-full h-64 object-cover opacity-80"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-gradient-to-b from-rafitoBlue/70 to-rafitoPink/80">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg font-montserrat tracking-wide">
            Juguetes Creativos Rafito
          </h1>
          <p className="text-lg md:text-2xl text-white mt-2 drop-shadow-lg font-montserrat">
            Educación, creatividad y amor para tu bebé
          </p>
        </div>
      </div>

      {/* Presentación Elena */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-7 border-l-4 border-rafitoBlue animate-fade-in">
        <h2 className="text-rafitoBlue font-bold text-2xl mb-3 font-montserrat">
          ¡Hola, soy Elena!
        </h2>
        <p className="mb-2 text-lg">
          Me encantaría ayudarte en la noble, hermosa y comprometida labor de ser mamá, y lo hago a través de juguetes creativos y didácticos que estimulan el aprendizaje y el desarrollo desde los primeros meses de tu bebé.
        </p>
        <blockquote className="border-l-4 border-rafitoBlue pl-4 italic mb-2 text-base font-light">
          “El niño es una persona de pleno derecho, con sus propios gustos, con libre albedrío y con una personalidad que se debe tener en cuenta y respetar, del mismo modo que la de un adulto”. <br /> <span className="font-bold text-rafitoBlue">María Montessori</span>
        </blockquote>
      </div>

      {/* Beneficios */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
        <div className="flex flex-col items-center bg-rafitoPink rounded-xl p-4 shadow hover:scale-105 transition cursor-pointer border border-rafitoBlue">
          <FaBaby className="text-rafitoBlue text-3xl mb-2" />
          <span className="font-montserrat font-semibold text-sm text-rafitoBlue">Autonomía</span>
        </div>
        <div className="flex flex-col items-center bg-rafitoPink rounded-xl p-4 shadow hover:scale-105 transition cursor-pointer border border-rafitoBlue">
          <FaPalette className="text-rafitoBlue text-3xl mb-2" />
          <span className="font-montserrat font-semibold text-sm text-rafitoBlue">Creatividad</span>
        </div>
        <div className="flex flex-col items-center bg-rafitoPink rounded-xl p-4 shadow hover:scale-105 transition cursor-pointer border border-rafitoBlue">
          <FaBook className="text-rafitoBlue text-3xl mb-2" />
          <span className="font-montserrat font-semibold text-sm text-rafitoBlue">Lectura</span>
        </div>
        <div className="flex flex-col items-center bg-rafitoPink rounded-xl p-4 shadow hover:scale-105 transition cursor-pointer border border-rafitoBlue">
          <FaHandsHelping className="text-rafitoBlue text-3xl mb-2" />
          <span className="font-montserrat font-semibold text-sm text-rafitoBlue">Valores</span>
        </div>
        <div className="flex flex-col items-center bg-rafitoPink rounded-xl p-4 shadow hover:scale-105 transition cursor-pointer border border-rafitoBlue">
          <FaHeart className="text-rafitoBlue text-3xl mb-2" />
          <span className="font-montserrat font-semibold text-sm text-rafitoBlue">Hecho con Amor</span>
        </div>
      </div>

      {/* Misión y Visión */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="bg-white rounded-xl shadow-lg p-6 border border-rafitoBlue animate-fade-in">
          <h3 className="text-rafito font-semibold text-xl mb-3 font-montserrat">Misión</h3>
          <p>
            Ofrecer juguetes artesanales que favorezcan el desarrollo integral de los niños, inspirados en la pedagogía Montessori, promoviendo el aprendizaje, la autonomía y el amor por la creatividad.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 border border-rafitoBlue animate-fade-in">
          <h3 className="text-rafito font-semibold text-xl mb-3 font-montserrat">Visión</h3>
          <p>
            Ser referentes en juguetes educativos artesanales, contribuyendo al crecimiento de niños felices, autónomos y creativos.
          </p>
        </div>
      </div>

      {/* Producto Estrella */}
      <div className="bg-gradient-to-br from-rafitoPink/60 to-rafitoBlue/30 rounded-xl shadow-2xl p-8 mb-10 border-l-4 border-rafito font-montserrat animate-fade-in">
        <h3 className="text-rafitoBlue font-bold text-2xl mb-4">Nuestro Producto Estrella: Quiet Book</h3>
        <img src="/product2.jpg" alt="Quiet Book actividades" className="rounded-xl w-full h-48 object-cover mb-4 shadow-lg border border-rafitoBlue" />
        <p className="mb-2">
          Inspirados en la fórmula Montessori “Ayúdame a hacerlo sólo”, los Quiet Books o Libros sensoriales son herramientas educativas que ofrecen múltiples beneficios:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-1 text-base font-montserrat">
          <li>Favorecen la autonomía</li>
          <li>Ayudan a la concentración y control de movimientos</li>
          <li>Agudizan los sentidos del tacto, oído y vista</li>
          <li>Enriquecen el vocabulario</li>
          <li>Estimulan la motricidad fina y la memoria</li>
          <li>Relacionan formas, colores, tamaños y ubicación</li>
          <li>Enseñan hábitos, valores y conciencia</li>
          <li>Inculcan el hábito de la lectura</li>
          <li>¡Son hermosos y divertidos!</li>
        </ul>
        <p className="mt-2 font-medium text-rafito">¡Descubre nuestros Quiet Books y otros juguetes!</p>
      </div>
    </section>
  );
}