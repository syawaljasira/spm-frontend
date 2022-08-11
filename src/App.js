import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Products from "./pages/Products";
import Auclean from "./pages/product/Auclean";
import Huitong from "./pages/product/Huitong";
import Ochem from "./pages/product/Ochem";
import Primeblade from "./pages/product/Primeblade";
import Scitech from "./pages/product/Scitech";
import Plaloc from "./pages/product/Plaloc";
import ScrollToTop from "./components/ScrollToTop";
import NotFoundPage from "./pages/NotFoundPage";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />

        {/* Products Page */}
        <Route path="/product/auclean" element={<Auclean />} />
        <Route path="/product/huitong" element={<Huitong />} />
        <Route path="/product/ochem" element={<Ochem />} />
        <Route path="/product/primeblade" element={<Primeblade />} />
        <Route path="/product/scitech" element={<Scitech />} />
        <Route path="/product/plaloc" element={<Plaloc />} />

        {/* 404 Route Page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
