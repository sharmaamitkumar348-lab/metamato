const deals = [
  { title: 'Weekend Delight', text: 'Up to 60% off on family combos', tag: 'For 2' },
  { title: 'Late Night Cravings', text: 'Popular restaurants open until 2AM', tag: 'Open now' },
  { title: 'Fresh & Healthy', text: 'Salads, wraps, and smoothie bundles', tag: 'New' },
];

export default function DealsSection() {
  return (
    <section className="container mt-16">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">Special deals</p>
          <h3 className="mt-2 text-3xl font-black text-slate-900">Offers you can't miss</h3>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {deals.map((deal) => (
          <div key={deal.title} className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg cursor-pointer">
            <div className="mb-5 flex items-center justify-between">
              <span className="rounded-full bg-orange-100 px-2.5 py-1 text-xs font-bold text-orange-700">{deal.tag}</span>
              <span className="text-2xl">🔥</span>
            </div>
            <h4 className="text-2xl font-black text-slate-900">{deal.title}</h4>
            <p className="mt-3 text-sm leading-6 text-slate-600">{deal.text}</p>
            <button className="mt-6 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">
              Claim deal
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
