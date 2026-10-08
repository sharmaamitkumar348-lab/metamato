const dishes = [
  { name: 'Paneer Tikka', price: '$18', image: '🥘' },
  { name: 'Truffle Pasta', price: '$24', image: '🍝' },
  { name: 'Crispy Chicken', price: '$16', image: '🍗' },
  { name: 'Chocolate Lava', price: '$11', image: '🍫' },
  { name: 'Berry Bowl', price: '$14', image: '🥣' },
];

export default function PopularDishes() {
  return (
    <section className="container mt-16">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">Top rated</p>
          <h3 className="mt-2 text-3xl font-black text-slate-900">Popular dishes loved by everyone</h3>
        </div>
      </div>

      <div className="scrollbar-hide flex gap-4 overflow-x-auto pb-3">
        {dishes.map((dish) => (
          <div key={dish.name} className="min-w-[220px] rounded-[28px] border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg cursor-pointer">
            <div className="flex h-32 items-center justify-center rounded-[22px] bg-gradient-to-br from-orange-100 via-amber-50 to-red-100 text-6xl">
              {dish.image}
            </div>
            <div className="mt-4 flex items-center justify-between gap-3">
              <div>
                <h4 className="text-lg font-extrabold text-slate-900">{dish.name}</h4>
                <p className="mt-1 text-sm text-slate-500">Chef cooked</p>
              </div>
              <div className="rounded-full bg-slate-900 px-3 py-1.5 text-sm font-bold text-white">{dish.price}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
