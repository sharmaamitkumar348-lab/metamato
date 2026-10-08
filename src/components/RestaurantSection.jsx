const restaurants = [
  {
    name: 'Kebab House',
    cuisine: 'North Indian · Kebabs',
    rating: 4.8,
    reviews: '3.2k',
    time: '25-30 min',
    fee: 'Free delivery',
    price: '$$',
    discount: '40% OFF',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Fire Bowl',
    cuisine: 'Chinese · Noodles',
    rating: 4.7,
    reviews: '2.4k',
    time: '30-35 min',
    fee: '$1.99 delivery',
    price: '$$$',
    discount: '30% OFF',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Green Bowl',
    cuisine: 'Healthy · Vegan',
    rating: 4.9,
    reviews: '5.1k',
    time: '20-25 min',
    fee: 'Free delivery',
    price: '$$',
    discount: '50% OFF',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Mamma Mia',
    cuisine: 'Italian · Pizza',
    rating: 4.6,
    reviews: '4.7k',
    time: '35-40 min',
    fee: '$2.49 delivery',
    price: '$$$',
    discount: '20% OFF',
    image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=900&q=80',
  },
];

export default function RestaurantSection({ cartItems, updateCart, total, delivery, tax, grandTotal }) {
  return (
    <section className="container mt-12">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">Today's picks</p>
          <h3 className="mt-2 text-3xl font-black text-slate-900">Popular restaurants near you</h3>
        </div>
        <button className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
          Explore all
        </button>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.45fr_0.55fr]">
        <div className="grid gap-5 md:grid-cols-2">
          {restaurants.map((restaurant) => (
            <article key={restaurant.name} className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="relative">
                <img src={restaurant.image} alt={restaurant.name} className="h-52 w-full object-cover" />
                <div className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-xs font-bold text-slate-800 backdrop-blur-sm">
                  <span>⭐</span>
                  {restaurant.rating}
                </div>
                <div className="absolute right-4 top-4 rounded-full bg-orange-500 px-2.5 py-1 text-xs font-bold text-white">
                  {restaurant.discount}
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-xl font-extrabold text-slate-900">{restaurant.name}</h4>
                    <p className="mt-1 text-sm text-slate-500">{restaurant.cuisine}</p>
                  </div>
                  <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-bold text-emerald-700">
                    {restaurant.price}
                  </span>
                </div>

                <div className="mt-4 flex items-center justify-between text-sm text-slate-600">
                  <span className="font-semibold text-slate-800">{restaurant.time}</span>
                  <span>{restaurant.fee}</span>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-orange-100 px-2 py-1 text-xs font-bold text-orange-700">{restaurant.reviews} reviews</span>
                  </div>
                  <button className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">
                    Order
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <aside className="rounded-[30px] border border-slate-200 bg-slate-900 p-5 text-white shadow-soft">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">Your cart</p>
              <h4 className="mt-2 text-2xl font-black">{cartItems.length} items</h4>
            </div>
            <span className="rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-orange-100">12 min</span>
          </div>

          <div className="mt-6 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between rounded-2xl bg-white/5 p-3 ring-1 ring-white/10">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500 text-2xl">
                    {item.emoji}
                  </div>
                  <div>
                    <p className="font-bold">{item.name}</p>
                    <p className="text-sm text-slate-300">x{item.quantity} · ${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateCart(item.id, item.quantity - 1)}
                    className="text-sm text-orange-200 hover:text-orange-100"
                  >
                    −
                  </button>
                  <span className="text-sm font-bold text-slate-300">{item.quantity}</span>
                  <button
                    onClick={() => updateCart(item.id, item.quantity + 1)}
                    className="text-sm text-orange-200 hover:text-orange-100"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
            <div className="flex items-center justify-between text-sm text-slate-300">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="mt-2 flex items-center justify-between text-sm text-slate-300">
              <span>Delivery</span>
              <span>${delivery.toFixed(2)}</span>
            </div>
            <div className="mt-2 flex items-center justify-between text-sm text-slate-300">
              <span>Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4 text-lg font-black">
              <span>Total</span>
              <span>${grandTotal.toFixed(2)}</span>
            </div>
          </div>

          <button className="mt-6 w-full rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/30">
            Proceed to checkout
          </button>
        </aside>
      </div>
    </section>
  );
}
