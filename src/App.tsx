import React from 'react';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { OvenCraftSection } from './components/OvenCraftSection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { CustomItemModal } from './components/CustomItemModal';
import { CheckoutModal } from './components/CheckoutModal';
import { ReservationModal } from './components/ReservationModal';

export const App: React.FC = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-pizza-dark text-slate-100 flex flex-col font-sans selection:bg-pizza-red selection:text-white">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <MenuSection />
          <OvenCraftSection />
          <ReviewsSection />
          <LocationSection />
        </main>
        <Footer />

        {/* Global Drawers & Modals */}
        <CartDrawer />
        <CustomItemModal />
        <CheckoutModal />
        <ReservationModal />
      </div>
    </CartProvider>
  );
};

export default App;

