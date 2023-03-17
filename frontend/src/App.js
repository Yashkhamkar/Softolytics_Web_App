import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ScrollDownButton from "./components/ScrollDownButton";
import Services from "./components/Services";
import Slider from "./components/Slider";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <About />
      <Services />
      <Contact />
      <Footer />
      <ScrollDownButton />
    </div>
  );
}

export default App;
