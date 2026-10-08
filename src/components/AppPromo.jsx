export default function AppPromo() {
  return (
    <section className="container mt-16">
      <div className="overflow-hidden rounded-[32px] bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 p-8 shadow-soft md:p-10">
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-100">Metamato app</p>
            <h3 className="mt-3 text-3xl font-black text-white md:text-5xl">Download the app. Eat better, faster.</h3>
            <p className="mt-4 max-w-lg text-base text-orange-50/90">
              Find food nearby, connect with top restaurants, and track every order from kitchen to doorstep.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <button className="rounded-full bg-slate-900 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-slate-900/20 hover:bg-slate-800">
                App Store
              </button>
              <button className="rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur-sm hover:bg-white/20">
                Google Play
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-[40px] bg-slate-900/10 blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1526512340740-9217d0159da9?auto=format&fit=crop&w=900&q=80"
                alt="Metamato app mockup"
                className="relative h-[420px] w-[260px] rounded-[38px] object-cover shadow-2xl ring-8 ring-white/15"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
