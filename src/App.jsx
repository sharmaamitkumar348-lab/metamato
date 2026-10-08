import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import RestaurantSection from './components/RestaurantSection';
import CategoriesSection from './components/CategoriesSection';
import DealsSection from './components/DealsSection';
import PopularDishes from './components/PopularDishes';
import AppPromo from './components/AppPromo';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';

export default function App() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Crispy Burger', price: 12, quantity: 1, emoji: '🍔' },
    { id: 2, name: 'Loaded Fries', price: 5, quantity: 2, emoji: '🍟' },
    { id: 3, name: 'Coke Zero', price: 4, quantity: 1, emoji: '🥤' },
  ]);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const delivery = 2.49;
  const tax = parseFloat((total * 0.09).toFixed(2));
  const grandTotal = parseFloat((total + delivery + tax).toFixed(2));

  const updateCart = (id, quantity) => {
    if (quantity <= 0) {
      setCartItems(cartItems.filter(item => item.id !== id));
    } else {
      setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity } : item));
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800">
      <Header />
      <main className="pb-20">
        <Hero />
        <RestaurantSection cartItems={cartItems} updateCart={updateCart} total={total} delivery={delivery} tax={tax} grandTotal={grandTotal} />
        <CategoriesSection />
        <DealsSection />
        <PopularDishes />
        <AppPromo />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
}
