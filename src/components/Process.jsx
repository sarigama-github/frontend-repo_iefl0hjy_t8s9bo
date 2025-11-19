function Step({ number, title, desc }) {
  return (
    <div className="p-6 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent">
      <div className="w-9 h-9 rounded-lg bg-white text-slate-900 font-semibold flex items-center justify-center mb-4 shadow">{number}</div>
      <h3 className="text-white font-medium">{title}</h3>
      <p className="text-slate-300/90 mt-2 text-sm leading-relaxed">{desc}</p>
    </div>
  )
}

function Process() {
  return (
    <section id="proceso" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,rgba(168,85,247,0.08),transparent_60%)]"></div>
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Un proceso claro y orientado a impacto</h2>
          <p className="mt-3 text-slate-300/90">De idea a valor en semanas, no meses.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <Step number="1" title="Descubrimiento" desc="Diagnóstico rápido, definición de objetivos y mapa de oportunidades." />
          <Step number="2" title="Diseño" desc="Arquitectura, UX y elección de modelos/tecnologías enfocadas en ROI." />
          <Step number="3" title="Entrega" desc="Implementación ágil, medición y mejoras continuas con datos reales." />
        </div>
      </div>
    </section>
  )
}

export default Process
