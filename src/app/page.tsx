export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-[#fdfaf5] text-stone-900 flex flex-col items-center justify-center relative overflow-hidden font-[family-name:var(--font-geist-sans)]">
      {/* Warm radiant background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-amber-200/20 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-orange-100/15 blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-yellow-100/10 blur-2xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-xl mx-auto">
        {/* Sun/radiance symbol */}
        <div className="mb-8 text-5xl">
          <span className="inline-block animate-pulse opacity-70">&#x2729;</span>
        </div>

        <h1 className="text-5xl sm:text-6xl font-light tracking-tight mb-6 text-amber-900">
          Proamory
        </h1>

        <p className="text-lg text-amber-700/60 font-light leading-relaxed mb-4 italic">
          /pro-AM-uh-ree/
        </p>

        <p className="text-base text-stone-500 leading-relaxed mb-10 max-w-md mx-auto">
          The practice of nurturing love&apos;s flow &mdash; for oneself and others &mdash; out of inner abundance. When you are your own source, love becomes boundless.
        </p>

        {/* Concept pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {['Abundance', 'Inner Source', 'Flow'].map((label) => (
            <span
              key={label}
              className="px-4 py-1.5 rounded-full text-xs tracking-wide border border-amber-300/40 text-amber-800/70 bg-amber-50"
            >
              {label}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="w-12 h-px bg-amber-300/40 mx-auto mb-12" />

        <div className="inline-block px-8 py-3 rounded-full bg-amber-100/50 border border-amber-200/60 text-sm text-amber-800 tracking-wide">
          Coming Soon
        </div>
      </div>

      {/* Bottom */}
      <div className="absolute bottom-8 text-xs text-stone-400 tracking-widest uppercase">
        proamory.com
      </div>
    </div>
  )
}
