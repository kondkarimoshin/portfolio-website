import { Analytics } from "@vercel/analytics/react";
import Navbar from "./layouts/Navbar";
import Hero from "./features/hero/Hero";
import About from "./features/about/About";
import Experience from "./features/experience/Experience";
import Skills from "./features/skills/Skills";
import Contact from "./features/contact/Contact";
import Footer from "./layouts/Footer";
import BackToTop from "./components/ui/BackToTop";
import useHashScroll from "./hooks/useHashScroll";

function App() {
  useHashScroll();
  return (
    <>
      <Navbar />

      <main className=" bg-slate-950 pt-20">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <BackToTop />
      <Footer />
      <Analytics />
    </>
  );
}

export default App;