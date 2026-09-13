import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Log from "./components/Log";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="noise relative">
      <Nav />
      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Log />
      </main>
      <Footer />
    </div>
  );
}
