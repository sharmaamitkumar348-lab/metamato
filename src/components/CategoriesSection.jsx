const categories = [
  { name: 'Pizza', emoji: '🍕', bg: 'bg-orange-100', badge: 'Best seller' },
  { name: 'Biryani', emoji: '🍛', bg: 'bg-amber-100', badge: 'Hot & fresh' },
  { name: 'Burger', emoji: '🍔', bg: 'bg-red-100', badge: 'Top rated' },
  { name: 'Sushi', emoji: '🍣', bg: 'bg-rose-100', badge: 'New' },
  { name: 'Desserts', emoji: '🍰', bg: 'bg-yellow-100', badge: 'Sweet' },
  { name: 'Healthy', emoji: '🥗', bg: 'bg-emerald-100', badge: 'Light bites' },
];

export default function CategoriesSection() {
  return (
    <section className="container mt-16">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">Browse by mood</p>
          <h3 className="mt-2 text-3xl font-black text-slate-900">Popular categories</h3>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {categories.map((category) => (
          <div key={category.name} className={`rounded-[28px] ${category.bg} p-4 shadow-sm cursor-pointer transition hover:-translate-y-1 hover:shadow-lg`}>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-3xl shadow-sm">
              {category.emoji}
            </div>
            <div className="mt-4">
              <h4 className="text-xl font-extrabold text-slate-900">{category.name}</h4>
              <p className="mt-2 text-sm font-medium text-slate-600">{category.badge}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
