import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects";
function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="maincontainer">
        <Hero />
        <About />
        <Experience />
        <Projects />
      </div>
    </div>
  );
}

export default App;
