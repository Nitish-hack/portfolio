import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience.jsx";
function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="maincontainer">
        <Hero />
        <About />
        <Experience />
      </div>
    </div>
  );
}

export default App;
