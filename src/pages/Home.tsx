function Home() {
  return (
    <main className="min-h-screen bg-surface flex flex-col items-center justify-center gap-8 p-8">
      {/* Token verification — se elimina en Fase 2 */}
      <h1 className="font-headline text-6xl font-black text-primary tracking-tighter">
        ATLAS <span className="text-on-surface">Tecnologías</span>
      </h1>
      <p className="font-body text-on-surface-variant text-xl max-w-md text-center leading-relaxed">
        Ingeniería y <span className="gradient-text italic font-bold">Automatización</span> que Transforma
      </p>
      <div className="flex gap-4">
        <div className="px-6 py-3 bg-primary-container text-on-primary-container font-bold rounded">
          bg-primary-container ✓
        </div>
        <div className="px-6 py-3 bg-surface-container border border-outline-variant text-on-surface font-body rounded">
          bg-surface-container ✓
        </div>
      </div>
      <div className="glass-panel px-8 py-4 border border-outline-variant/20 rounded-lg">
        <span className="text-on-surface font-label text-sm tracking-widest uppercase">glass-panel ✓</span>
      </div>
      <div className="w-32 h-16 micro-grid border border-outline-variant/20 rounded flex items-center justify-center">
        <span className="text-on-surface-variant text-xs">micro-grid ✓</span>
      </div>
    </main>
  )
}

export default Home
