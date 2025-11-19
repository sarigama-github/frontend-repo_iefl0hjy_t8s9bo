import { useState, useEffect } from 'react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-slate-900/60 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="inline-flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 via-fuchsia-500 to-amber-400 shadow-[0_0_30px_rgba(168,85,247,0.35)]"></div>
          <span className="text-white font-semibold tracking-tight text-lg">Arnanz AI</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#servicios" className="text-slate-300 hover:text-white transition">Servicios</a>
          <a href="#proceso" className="text-slate-300 hover:text-white transition">Proceso</a>
          <a href="#contacto" className="text-slate-300 hover:text-white transition">Contacto</a>
        </nav>

        <a href="#contacto" className="ml-4 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-white text-slate-900 font-medium shadow hover:shadow-lg transition active:scale-[0.98]">
          Solicitar propuesta
        </a>
      </div>
    </header>
  )
}

export default Navbar
