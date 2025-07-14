import MainLayout from "../layouts/MainLayout"

export default function Home() {
  return (
    <MainLayout>
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Gastón Silva Gallaratto
      </h1>
      <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
        Analista en sistemas | Desarrollador Full Stack
      </h2>
      <p className="text-lg max-w-xl text-gray-500 mb-6">
        Me gusta crear soluciones funcionales y visualmente atractivas. Bienvenido a mi espacio personal donde comparto mis proyectos y habilidades.
      </p>
      <a
        href="/proyectos"
        className="text-white px-6 py-2 rounded-md hover:bg-[#67AE6E] transition"
      >
        Ver mis proyectos
      </a>
    </div>
     </MainLayout>
  )
}
