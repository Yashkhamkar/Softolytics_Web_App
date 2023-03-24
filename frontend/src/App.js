import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ScrollDownButton from "./components/ScrollDownButton";
import Services from "./components/Services";
import Slider from "./components/Slider";
import Social from "./components/Social";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Navbar />
              <Slider />
              <Services />
              <ScrollDownButton />
              {/* <Home /> */}
              <About />
              {/* <Social /> */}
            </div>
          }
        />
        <Route
          path="/contact"
          element={
            <div>
              <Navbar />
              <Contact />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
