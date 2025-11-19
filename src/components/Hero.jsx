import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/80 text-xs backdrop-blur">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            Agencia de IA y Automatización
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl leading-tight font-semibold tracking-tight text-white">
            Impulsa tu crecimiento con soluciones de IA a medida
          </h1>
          <p className="mt-5 text-lg text-slate-200/90 max-w-xl">
            Diseñamos, entrenamos e integramos agentes y automatizaciones que convierten procesos complejos en experiencias fluidas, rápidas y rentables.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contacto" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white text-slate-900 font-medium shadow-lg hover:shadow-xl transition">
              Empezar proyecto
            </a>
            <a href="#servicios" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white/10 border border-white/15 text-white backdrop-blur hover:bg-white/15 transition">
              Ver servicios
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-white/80">
            <div className="text-3xl font-semibold">+200%</div>
            <div className="text-sm max-w-xs">de mejora media en eficiencia operativa tras 8 semanas</div>
          </div>
        </div>
        <div className="lg:col-span-6"></div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.15),transparent_45%)]"></div>
    </section>
  )
}

export default Hero
