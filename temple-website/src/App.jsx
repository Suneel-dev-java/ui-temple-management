import { useState } from "react";
import LoginPage from "./components/auth/LoginPage";
import Navbar from "./components/layout/Navbar";
import Ticker from "./components/layout/Ticker";
import DeityCarousel from "./components/sections/DeityCarousel";
import QuickLinks from "./components/sections/QuickLinks";
import About from "./components/sections/About";
import Sevas from "./components/sections/Sevas";
import Accommodation from "./components/sections/Accommodation";
import Gallery from "./components/sections/Gallery";
import Footer from "./components/layout/Footer";
import ChantPlayer from "./components/layout/ChantPlayer";
import TempleInfoPage from "./components/pages/TempleInfoPage";
import templeBg from "./assets/temple_bg.png";
import BookingModal from "./components/booking/BookingModal";
import CartPage from "./components/booking/CartPage";
import PhonePeGateway from "./components/booking/PhonePeGateway";
import ReceiptPage from "./components/booking/ReceiptPage";
import PoojaCalendar from "./components/sections/PoojaCalendar";

export default function App() {
  // Auth state — check localStorage on mount
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => localStorage.getItem("temple_user_logged_in") === "true"
  );
  const [userName, setUserName] = useState(
    () => localStorage.getItem("temple_user_name") || ""
  );

  const [activeAboutSection, setActiveAboutSection] = useState(null);

  // Always start at home on refresh/page load
  const [currentView, setCurrentView] = useState("home");

  // LOGIN handler — called by LoginPage on successful sign in
  const handleLogin = (name) => {
    setIsLoggedIn(true);
    setUserName(name || "");
    // Restore saved journey if available
    const savedView = localStorage.getItem("temple_journey_view");
    const savedSection = localStorage.getItem("temple_journey_section");
    if (savedView && savedView !== "phonepe" && savedView !== "receipt") {
      setCurrentView(savedView);
      if (savedSection) setActiveAboutSection(savedSection);
    } else {
      setCurrentView("home");
    }
    localStorage.removeItem("temple_journey_view");
    localStorage.removeItem("temple_journey_section");
  };

  // LOGOUT handler — saves journey, clears auth, returns to login
  const handleLogout = () => {
    // Save current page so next login restores it
    localStorage.setItem("temple_journey_view", currentView);
    if (activeAboutSection) {
      localStorage.setItem("temple_journey_section", activeAboutSection);
    }
    // Clear auth
    localStorage.removeItem("temple_user_logged_in");
    localStorage.removeItem("temple_user_name");
    setIsLoggedIn(false);
    setUserName("");
    setCurrentView("home");
    setActiveAboutSection(null);
  };

  // All hooks must be called before any early return (React rules of hooks)
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("temple_cart");
    return saved ? JSON.parse(saved) : [];
  });
  const [bookings, setBookings] = useState(() => {
    const saved = localStorage.getItem("temple_bookings");
    return saved ? JSON.parse(saved) : [];
  });
  const [bookingModalItem, setBookingModalItem] = useState(null);
  const [activePayment, setActivePayment] = useState(null);
  const [lastReceipt, setLastReceipt] = useState(null);

  // If not logged in, show only the LoginPage
  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  const handleAddToCart = (bookedItem) => {
    const newCart = [...cart, bookedItem];
    setCart(newCart);
    localStorage.setItem("temple_cart", JSON.stringify(newCart));
    setBookingModalItem(null);
    setCurrentView("cart");
  };

  const handleRemoveFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
    localStorage.setItem("temple_cart", JSON.stringify(newCart));
  };

  const handleAddDonationToCart = (pooja, amount, devoteeName) => {
    const donationItem = {
      id: "DON-" + Math.floor(100000 + Math.random() * 900000),
      name: `Yagam Contribution - ${pooja.yagamEn}`,
      price: `₹${amount.toLocaleString("en-IN")}`,
      date: pooja.month.split(" ")[0] + " Masam",
      type: "donation",
      devotee: devoteeName,
      gotram: "N/A",
      rashiStar: "N/A"
    };
    const newCart = [...cart, donationItem];
    setCart(newCart);
    localStorage.setItem("temple_cart", JSON.stringify(newCart));
    setCurrentView("cart");
  };


  const handleCheckout = (totalAmount) => {
    setActivePayment({
      amount: totalAmount,
      items: [...cart],
    });
    setCurrentView("phonepe");
  };

  const handlePaymentSuccess = () => {
    const txId = "TXN" + Date.now().toString().slice(-8) + Math.floor(100 + Math.random() * 900);
    const newReceipt = {
      transactionId: txId,
      amount: activePayment.amount,
      items: activePayment.items,
      paymentDate: new Date().toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }),
    };

    const newBookings = [newReceipt, ...bookings];
    setBookings(newBookings);
    localStorage.setItem("temple_bookings", JSON.stringify(newBookings));

    setCart([]);
    localStorage.removeItem("temple_cart");

    setLastReceipt(newReceipt);
    setCurrentView("receipt");
  };

  return (
    <div 
      className="min-h-screen font-body relative"
      style={{
        backgroundImage: `url(${templeBg})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Navbar 
        onSelectAboutSection={(section) => {
          if (section === "calendar") {
            setActiveAboutSection(null);
            setCurrentView("calendar");
            window.scrollTo(0, 0);
          } else {
            setActiveAboutSection(section);
            setCurrentView(section === null ? "home" : "about");
          }
        }} 
        onViewCart={() => {
          setCurrentView("cart");
          setActiveAboutSection(null);
        }}
        cartCount={cart.length}
        onLogout={handleLogout}
        userName={userName}
      />
      
      {currentView === "cart" ? (
        <CartPage 
          cart={cart}
          bookings={bookings}
          onRemoveItem={handleRemoveFromCart}
          onCheckout={handleCheckout}
          onClose={() => setCurrentView("home")}
        />
      ) : currentView === "phonepe" ? (
        <PhonePeGateway 
          paymentInfo={activePayment}
          onPaymentSuccess={handlePaymentSuccess}
          onPaymentCancel={() => setCurrentView("cart")}
        />
      ) : currentView === "receipt" ? (
        <ReceiptPage 
          receipt={lastReceipt}
          onClose={() => setCurrentView("home")}
        />
      ) : currentView === "calendar" ? (
        <PoojaCalendar 
          onClose={() => setCurrentView("home")}
          onBookPooja={(pooja) => setBookingModalItem({ item: pooja, type: "seva" })}
          onDonatePooja={handleAddDonationToCart}
        />
      ) : activeAboutSection === null ? (
        <>
          <Ticker />
          <DeityCarousel />
          <QuickLinks />
          <About />
          <Sevas onBook={(seva) => setBookingModalItem({ item: seva, type: "seva" })} />
          <Accommodation onBook={(room) => setBookingModalItem({ item: room, type: "stay" })} />
          <Gallery />
        </>
      ) : (
        <TempleInfoPage
          sectionId={activeAboutSection}
          onClose={() => { setActiveAboutSection(null); setCurrentView("home"); }}
        />
      )}

      <Footer onSelectSection={(section) => { setActiveAboutSection(section); setCurrentView("about"); window.scrollTo(0, 0); }} />
      <ChantPlayer />

      {/* Booking Modal Details Overlay */}
      {bookingModalItem && (
        <BookingModal
          item={bookingModalItem.item}
          type={bookingModalItem.type}
          onClose={() => setBookingModalItem(null)}
          onAddToCart={handleAddToCart}
        />
      )}
    </div>
  );
}
