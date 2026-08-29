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
import LoginPoojaPopup from "./components/modals/LoginPoojaPopup";
import PanchangamWidget from "./components/features/PanchangamWidget";
import VirtualDarshanModal from "./components/features/VirtualDarshanModal";
import EHundiModal from "./components/features/EHundiModal";
import TravelGuideModal from "./components/features/TravelGuideModal";
import VolunteerRegistrationModal from "./components/features/VolunteerRegistrationModal";

export default function App() {
  // Auth state — check localStorage on mount
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => localStorage.getItem("temple_user_logged_in") === "true"
  );
  const [userName, setUserName] = useState(
    () => localStorage.getItem("temple_user_name") || ""
  );

  const [activeAboutSection, setActiveAboutSection] = useState(null);
  const [showLoginPoojaPopup, setShowLoginPoojaPopup] = useState(false);
  const [activeFeatureModal, setActiveFeatureModal] = useState(null); // null | 'panchangam' | 'darshan' | 'hundi' | 'travel'
  const [selectedVolunteerPass, setSelectedVolunteerPass] = useState(null);

  // Always start at home on refresh/page load
  const [currentView, setCurrentView] = useState("home");

  // LOGIN handler — called by LoginPage on successful sign in
  const handleLogin = (name) => {
    setIsLoggedIn(true);
    setUserName(name || "");
    // Trigger the Pooja Calendar Popup on login
    setShowLoginPoojaPopup(true);
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

  const goHome = () => {
    setCurrentView("home");
    setActiveAboutSection(null);
    setActiveFeatureModal(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
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
            window.scrollTo({ top: 0, behavior: "smooth" });
          } else {
            setActiveAboutSection(section);
            setCurrentView(section === null ? "home" : "about");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }} 
        onViewCart={() => {
          setCurrentView("cart");
          setActiveAboutSection(null);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        cartCount={cart.length}
        onLogout={handleLogout}
        userName={userName}
        onOpenFeature={(feature) => setActiveFeatureModal(feature)}
      />
      
      {currentView === "cart" ? (
        <CartPage 
          cart={cart}
          bookings={bookings}
          onRemoveItem={handleRemoveFromCart}
          onCheckout={handleCheckout}
          onClose={goHome}
          onViewReceipt={(receipt) => {
            setLastReceipt(receipt);
            setCurrentView("receipt");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          onOpenVolunteer={(pass) => {
            setSelectedVolunteerPass(pass && typeof pass === "object" ? pass : null);
            setActiveFeatureModal("volunteer");
          }}
        />
      ) : currentView === "phonepe" ? (
        <PhonePeGateway 
          paymentInfo={activePayment}
          onPaymentSuccess={handlePaymentSuccess}
          onPaymentCancel={() => { setCurrentView("cart"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
        />
      ) : currentView === "receipt" ? (
        <ReceiptPage 
          receipt={lastReceipt}
          onClose={goHome}
        />
      ) : currentView === "calendar" ? (
        <PoojaCalendar 
          onClose={goHome}
          onBookPooja={(pooja) => setBookingModalItem({ item: pooja, type: "seva" })}
          onDonatePooja={handleAddDonationToCart}
          onOpenVolunteer={(poojaName) => setActiveFeatureModal("volunteer")}
        />
      ) : activeAboutSection === null ? (
        <>
          <Ticker />
          <DeityCarousel />
          <QuickLinks onOpenFeature={(feature) => setActiveFeatureModal(feature)} />
          <About />
          <Sevas onBook={(seva) => setBookingModalItem({ item: seva, type: "seva" })} />
          <Accommodation onBook={(room) => setBookingModalItem({ item: room, type: "stay" })} />
          <Gallery />
        </>
      ) : (
        <TempleInfoPage
          sectionId={activeAboutSection}
          onClose={goHome}
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

      {/* Special Pooja Calendar Login Popup */}
      {showLoginPoojaPopup && (
        <LoginPoojaPopup
          onClose={() => setShowLoginPoojaPopup(false)}
          onBookPooja={(pooja) => setBookingModalItem({ item: pooja, type: "seva" })}
          onDonatePooja={handleAddDonationToCart}
          onViewCalendar={() => {
            setActiveAboutSection(null);
            setCurrentView("calendar");
            window.scrollTo(0, 0);
          }}
        />
      )}

      {/* Feature Modals */}
      {activeFeatureModal === "panchangam" && (
        <PanchangamWidget
          onClose={() => {
            setActiveFeatureModal(null);
            goHome();
          }}
          onOpenFeature={(feat) => setActiveFeatureModal(feat)}
          onBookSeva={() => {
            setActiveFeatureModal(null);
            setCurrentView("home");
            setTimeout(() => {
              const el = document.getElementById("sevas");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }, 200);
          }}
        />
      )}

      {activeFeatureModal === "darshan" && (
        <VirtualDarshanModal
          onClose={() => setActiveFeatureModal(null)}
          onBookSeva={() => {
            setActiveFeatureModal(null);
            setCurrentView("home");
            setTimeout(() => {
              const el = document.getElementById("sevas");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }, 200);
          }}
        />
      )}

      {activeFeatureModal === "hundi" && (
        <EHundiModal
          onClose={() => setActiveFeatureModal(null)}
          onAddToCart={handleAddToCart}
        />
      )}

      {activeFeatureModal === "travel" && (
        <TravelGuideModal onClose={() => setActiveFeatureModal(null)} />
      )}

      {activeFeatureModal === "volunteer" && (
        <VolunteerRegistrationModal
          onClose={() => {
            setActiveFeatureModal(null);
            setSelectedVolunteerPass(null);
          }}
          initialPass={selectedVolunteerPass}
        />
      )}
    </div>
  );
}
