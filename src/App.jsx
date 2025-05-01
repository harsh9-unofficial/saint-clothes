import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import NewArrivalsPage from "./components/NewArrivalsPage";
import SingleProduct from "./components/SingleProduct";
import OurStoryPage from "./components/OurStoryPage";

function App() {
  return (
    <Router>
      {/* Routes for each page */}
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* 01/05/2025 */}
        <Route path="/newarrivals" element={<NewArrivalsPage />} />
        <Route path="/singleproduct" element={<SingleProduct />} />
        <Route path="/ourstory" element={<OurStoryPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
