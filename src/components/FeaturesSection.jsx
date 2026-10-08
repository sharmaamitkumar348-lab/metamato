const features = [
  { title: 'Live order tracking', text: 'See your rider move in real time and get updates on delivery status.', icon: '📍' },
  { title: '1000+ restaurants', text: 'Explore top-rated local favorites, hidden gems, and premium spots.', icon: '🍽️' },
  { title: 'Secure checkout', text: 'Pay easily with cards, wallets, or cash on delivery for convenience.', icon: '💳' },
  { title: 'Curated deals', text: 'Unlock limited-time discounts and bundles for every craving.', icon: '🎁' },
];

export default function FeaturesSection() {
  return (
    <section className="container mt-16">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">Why choose us</p>
          <h3 className="mt-2 text-3xl font-black text-slate-900">Everything you need for food discovery</h3>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {features.map((item) => (
          <div key={item.title} className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-2xl shadow-inner">
              {item.icon}
            </div>
            <h4 className="mt-5 text-xl font-extrabold text-slate-900">{item.title}</h4>
            <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
