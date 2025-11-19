function CTA() {
  return (
    <section id="contacto" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_60%)]"></div>
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Listos para construir tu ventaja competitiva</h2>
        <p className="mt-3 text-slate-300/90">Cuéntanos tu reto y diseñaremos una propuesta en 48h.</p>

        <form className="mt-10 grid md:grid-cols-3 gap-3">
          <input type="text" placeholder="Nombre" className="md:col-span-1 col-span-3 w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/20" />
          <input type="email" placeholder="Email" className="md:col-span-1 col-span-3 w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/20" />
          <input type="text" placeholder="Empresa" className="md:col-span-1 col-span-3 w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/20" />
          <textarea placeholder="Cuéntanos brevemente tu proyecto" rows="4" className="md:col-span-3 w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"></textarea>
          <button type="button" className="md:col-span-3 inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-slate-900 font-medium shadow-lg hover:shadow-xl transition">
            Solicitar propuesta
          </button>
        </form>

        <p className="mt-6 text-xs text-white/60">Al enviar aceptas nuestra política de privacidad.</p>
      </div>
    </section>
  )
}

export default CTA
