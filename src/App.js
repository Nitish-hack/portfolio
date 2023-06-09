
import './App.css';
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience.jsx"
function App() {
  return (
    <div className="app">
    
   <Navbar />
   <Hero />
   <About />
   <Experience />
   </div>
  );
}

export default App;
