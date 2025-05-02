import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
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

function AppWrapper() {
  const location = useLocation();
  const hideHeaderFooter =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      {!hideHeaderFooter && <Header />}

      <Routes>
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
