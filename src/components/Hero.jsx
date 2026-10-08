const quickFilters = ['Fast delivery', 'Pure veg', 'Top rated', 'Offers', 'Family', 'Casual dining'];

export default function Hero() {
  return (
    <section className="hero-pattern pt-8 md:pt-12">
      <div className="container">
        <div className="overflow-hidden rounded-[32px] bg-gradient-to-br from-slate-900 via-slate-900 to-orange-950 p-6 shadow-soft md:p-10">
          <div className="grid items-center gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-orange-100 ring-1 ring-white/15">
                <span>⚡</span>
                30 min delivery guarantee
              </div>
              <h2 className="max-w-xl text-3xl font-black leading-tight text-white md:text-5xl">
                Cravings solved at the speed of a tap.
              </h2>
              <p className="mt-4 max-w-lg text-base text-slate-300 md:text-lg">
                Discover the best food, cocktails, desserts, and local favorites near you with Metamato.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {quickFilters.map((filter) => (
                  <button
                    key={filter}
                    className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10"
                  >
                    {filter}
                  </button>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-4">
                <button className="rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/30 transition hover:scale-[1.02]">
                  Order now
                </button>
                <button className="rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10">
                  View menu
                </button>
              </div>
            </div>

            <div className="rounded-[28px] bg-white/10 p-4 backdrop-blur-xl ring-1 ring-white/10">
              <div className="rounded-[22px] bg-white p-4 shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">Café</p>
                    <h3 className="mt-1 text-xl font-extrabold text-slate-900">Sunset Bites</h3>
                  </div>
                  <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-bold text-emerald-700">Open</span>
                </div>

                <div className="mt-4 rounded-2xl bg-gradient-to-br from-orange-200 via-amber-100 to-yellow-50 p-4">
                  <img
                    src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80"
                    alt="Featured food"
                    className="h-52 w-full rounded-2xl object-cover"
                  />
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">Chef special</p>
                    <p className="text-lg font-bold text-slate-900">Paneer Butter Masala</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-black text-slate-900">$18</p>
                    <p className="text-xs text-slate-500">4.9 ★</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
