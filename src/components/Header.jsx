export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
      <div className="container flex items-center justify-between gap-4 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 text-xl font-black text-white shadow-soft">
            M
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-orange-500">metamato</p>
            <h1 className="text-xl font-extrabold text-slate-900">Food delivery</h1>
          </div>
        </div>

        <div className="hidden items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm md:flex">
          <span className="text-lg">📍</span>
          <span className="font-medium">Downtown, New York</span>
        </div>

        <div className="hidden flex-1 max-w-xl items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 shadow-sm md:flex">
          <span className="text-lg">🔍</span>
          <input
            type="text"
            placeholder="Search for cuisines, dishes, or restaurants"
            className="w-full border-0 bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-3">
          <button className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
            Log in
          </button>
          <button className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-200 transition hover:bg-slate-800">
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
}
