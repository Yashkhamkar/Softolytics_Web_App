import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const [state, setState] = useState(false);

  const expand = () => {
    if (!state) {
      document.getElementById("items").style.transform = "scaleX(1)";
      document.getElementById("toggle1").innerHTML = "close";
      setState(true);
    } else {
      document.getElementById("items").style.transform = "scaleX(0)";
      document.getElementById("toggle1").innerHTML = "menu";
      setState(false);
    }
  };

  const smoothScroll = (e, target) => {
    e.preventDefault();
    const element = document.querySelector(target);
    const topOffset = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: topOffset,
      behavior: "smooth",
    });
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <Link to="/">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      <div className="menu">
        <div className="toggle" id="toggle" onClick={expand}>
          <button
            id="toggle0"
            className="btn-menu"
            style={{ transform: "scale(0.8)" }}
          >
            MENU
          </button>
          <i
            className="material-icons"
            id="toggle1"
            style={{ transform: "scale(0.8)" }}
          >
            menu
          </i>
        </div>
        <div className="items" id="items" style={{ textAlign: "center" }}>
          <a href="#main" onClick={(e) => smoothScroll(e, "#main")}>
            HOME
          </a>
          <a href="#about" onClick={(e) => smoothScroll(e, "#about")}>
            ABOUT
          </a>
          <a href="#ser" onClick={(e) => smoothScroll(e, "#ser")}>
            SERVICES
          </a>
          <Link to="/contact" style={{ listStyle: "none", color: "white" }}>
            CONTACT
            {/* <a onClick={(e) => smoothScroll(e, "#contact")}>CONTACT</a> */}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
