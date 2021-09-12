import React, { useState, useEffect } from "react";
import "./Nav.css";
function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className={"nav__logo"}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
        alt="Neflix logo"
      />
      <h1 style={{ color: "white", marginLeft: "200px" }}>
        Made by <span style={{ fontSize: "10px" }}>chiku</span>
      </h1>
      <img
        className={"nav__avatar"}
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Netflix logo"
      />
    </div>
  );
}

export default Nav;
