import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Process from './components/Process'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Features />
        <Process />
        <CTA />
      </main>
      <footer className="border-t border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/70 text-sm">© {new Date().getFullYear()} Arnanz AI · Todos los derechos reservados</p>
          <div className="text-sm text-white/60">Impulsado por IA · Calidad, velocidad y confianza</div>
        </div>
      </footer>
    </div>
  )
}

export default App
