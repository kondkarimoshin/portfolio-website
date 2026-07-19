import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import BackToTop from "./components/ui/BackToTop";

import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";

import useHashScroll from "./hooks/useHashScroll";

function AppContent() {
  useHashScroll();

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>

      <BackToTop />
      <Footer />
      <Analytics />
      <SpeedInsights />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;