import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Social.css";

const Social = () => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        zIndex: "999",
      }}
    >
      <a
        href="https://www.instagram.com"
        style={{ color: "#C13584", margin: "0 10px" }}
      >
        <FaInstagram size={30} />
      </a>
      <a
        href="https://www.linkedin.com"
        style={{ color: "#0077B5", margin: "0 10px" }}
      >
        <FaLinkedin size={30} />
      </a>
      <a
        href="https://www.facebook.com"
        style={{ color: "#3B5998", margin: "0 10px" }}
      >
        <FaFacebook size={30} />
      </a>
    </div>
  );
};

export default Social;
