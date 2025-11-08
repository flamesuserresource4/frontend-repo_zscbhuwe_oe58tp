import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] pt-16 overflow-hidden bg-gradient-to-b from-purple-100 via-indigo-100 to-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div className="py-16">
          <p className="uppercase tracking-[0.3em] text-xs text-gray-700/80">purestones.art</p>
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-tight text-gray-900">
            The Fragrance of Creativity
          </h1>
          <p className="mt-6 text-base md:text-lg text-gray-700 max-w-xl">
            A minimalist celebration of form and scent. Two glass silhouettes float in a gentle dance—an ode to beauty, balance, and modern craftsmanship.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#collections" className="inline-flex items-center rounded-full bg-gray-900 text-white px-5 py-3 text-sm font-medium hover:bg-gray-800 transition-colors">Explore Collection</a>
            <a href="#story" className="inline-flex items-center rounded-full bg-white/70 backdrop-blur px-5 py-3 text-sm font-medium text-gray-900 border border-white/60 hover:bg-white/90 transition-colors">Our Story</a>
          </div>
        </div>
        <div className="hidden lg:block" />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-white" />
    </section>
  );
}
