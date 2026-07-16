import Navbar from "./layouts/Navbar";
import Hero from "./features/hero/Hero";
import About from "./features/about/About";
import Experience from "./features/experience/Experience";
import Skills from "./features/skills/Skills";

function App() {
  return (
    <>
      <Navbar />

      <main className=" bg-slate-950 pt-20">
        <Hero />
        <About />
        <Experience />
        <Skills />
      </main>
    </>
  );
}

export default App;