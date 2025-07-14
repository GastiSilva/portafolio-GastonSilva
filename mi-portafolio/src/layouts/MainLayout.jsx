import Navbar from "../components/NavBar"

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      {/* <footer className="text-center text-gray-500 text-sm py-4 border-t mt-8">
        © {new Date().getFullYear()} Gastón Silva Gallaratto. Todos los derechos reservados.
      </footer> */}
    </div>
  )
}
