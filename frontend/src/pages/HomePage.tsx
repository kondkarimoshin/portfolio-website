import Hero from "../features/hero/Hero";
import About from "../features/about/About";
import Experience from "../features/experience/Experience";
import Skills from "../features/skills/Skills";
import Contact from "../features/contact/Contact";

const HomePage = () => {
  return (
    <main className="bg-slate-950 pt-20">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
};

export default HomePage;