function Feature({ title, desc }) {
  return (
    <div className="group p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition backdrop-blur-sm">
      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500 via-fuchsia-500 to-amber-400 mb-4 shadow-[0_0_25px_rgba(168,85,247,0.35)]"></div>
      <h3 className="text-white font-medium text-lg">{title}</h3>
      <p className="text-slate-300/90 mt-2 text-sm leading-relaxed">{desc}</p>
    </div>
  )
}

function Features() {
  return (
    <section id="servicios" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.08),transparent_60%)]"></div>
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Servicios que entregan resultados reales</h2>
          <p className="mt-3 text-slate-300/90">Estrategia, diseño e implementación con foco absoluto en negocio. Sin humo.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Feature title="Agentes de IA" desc="Diseño y despliegue de agentes conversacionales, copilotos y asistentes internos entrenados con tu conocimiento." />
          <Feature title="Automatización" desc="Orquestación de procesos end‑to‑end con APIs, RPA y flujos inteligentes para eliminar tareas repetitivas." />
          <Feature title="Integraciones" desc="Conectamos tus sistemas (CRM, ERP, Data Warehouse) para que la información fluya y decida por ti." />
          <Feature title="Data & Model Ops" desc="Pipelines, evaluación, monitoreo y ajuste fino para modelos robustos y mantenibles." />
          <Feature title="Productos a medida" desc="Construcción de herramientas y micro‑apps con estética SaaS lista para escalar." />
          <Feature title="Formación & Advisory" desc="Aceleramos a tu equipo con workshops prácticos y acompañamiento ejecutivo." />
        </div>
      </div>
    </section>
  )
}

export default Features
