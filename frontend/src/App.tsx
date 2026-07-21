import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import BackToTop from "./components/ui/BackToTop";
import useHashScroll from "./hooks/useHashScroll";

const HomePage = lazy(() => import("./pages/HomePage"));

const ServicesPage = lazy(() => import("./pages/ServicesPage"));

const ConsultationPage = lazy(
  () => import("./features/consultation/ConsultationPage")
);


function AppContent() {
  useHashScroll();

  return (
    <div className="flex min-h-screen flex-col bg-slate-950">

      <Navbar />

      <main className="flex-1">

        <Suspense
          fallback={
            <div className="flex min-h-[60vh] items-center justify-center">
              <div className="text-cyan-400 text-lg">
                Loading...
              </div>
            </div>
          }
        >

          <Routes>

            <Route
              path="/"
              element={<HomePage />}
            />

            <Route
              path="/services"
              element={<ServicesPage />}
            />

            <Route
              path="/services/consultation"
              element={<ConsultationPage />}
            />

          </Routes>

        </Suspense>

      </main>

      <Footer />

      <BackToTop />

      <Analytics />
      <SpeedInsights />

    </div>
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