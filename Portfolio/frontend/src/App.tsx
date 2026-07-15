import Navbar from "./layouts/Navbar";
import Hero from "./features/hero/Hero";
import About from "./features/about/About";

function App() {
  return (
    <>
      <Navbar />

      <main className=" bg-slate-950 pt-20">
        <Hero />
        <About />
      </main>
    </>
  );
}

export default App;