import { useState } from "react";
import Loader from "./components/Loader";
import Cursor from "./components/Cursor";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Log from "./components/Log";
import Footer from "./components/Footer";
import useSmoothScroll from "./lib/useSmoothScroll";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  useSmoothScroll();

  return (
    <div className="noise relative">
      {!loaded && <Loader onDone={() => setLoaded(true)} />}
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Projects />
        <About />
        <Skills />
        <Log />
      </main>
      <Footer />
    </div>
  );
}
