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
      <h3 className="text-bold text-lg">
      Me gusta programar y conocer nuevas tecnologias, constantemente es muy interesante y desafiante para mi aprender y mejorar mis habilidades.
      </h3>
      <a href="/proyectos" className="text-white px-6 py-2 mt-8 rounded-md hover:bg-[#67AE6E] transition">
        Ver mis proyectos
      </a>
    </div>
     </MainLayout>
  )
}
