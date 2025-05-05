import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";

// Components
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import NewArrivalsPage from "./components/NewArrivalsPage";
import SingleProduct from "./components/SingleProduct";
import OurStoryPage from "./components/OurStoryPage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Checkout from "./components/CheckoutPage";
import Contact from "./components/Contact";
import AllProductsPage from "./components/AllProductsPage";
import ShopCategoryPage from "./components/ShopCategoryPage";
import ProfilePage from "./components/ProfilePage";
import PrivacyPolicyPage from "./components/PrivacyPolicyPage";
import TermsPage from "./components/TermsPage";
import ShippingPolicyPage from "./components/ShippingPolicyPage";
import ReturnPolicyPage from "./components/ReturnPolicyPage";

// ✅ ScrollToTop component inside same file
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}

function AppWrapper() {
  const location = useLocation();
  const hideHeaderFooter =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      <ScrollToTop />
      {!hideHeaderFooter && <Header />}

      <Routes>
        {/* 30/04/2025 - Header & Footer also */}
        <Route path="/" element={<HomePage />} />
        {/* 01/05/2025 */}
        <Route path="/newarrivals" element={<NewArrivalsPage />} />
        <Route path="/singleproduct" element={<SingleProduct />} />
        <Route path="/ourstory" element={<OurStoryPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* 02/05/2025 */}
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<Contact />} />
        {/* 05/05/2025 */}
        <Route path="/allproducts" element={<AllProductsPage />} />
        <Route path="/shop/:category" element={<ShopCategoryPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/privacypolicy" element={<PrivacyPolicyPage />} />
        <Route path="/termsandconditions" element={<TermsPage />} />
        <Route path="/shippingpolicy" element={<ShippingPolicyPage />} />
        <Route path="/returnpolicy" element={<ReturnPolicyPage />} />
      </Routes>

      {!hideHeaderFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
