import React from "react";
import { Link } from "react-router-dom";
import "../Styles/theme.css";
import "../Styles/NavBar.css";
import Logo from "../Image/Logo.png";

export default function NavBar() {
  function switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  }

  function showNav(params) {
    const navTab = document.getElementById("nav-tap");
    navTab.classList.toggle("hide-tab");
  }

  return (
    <nav>
      <ul className="nav-list">
        <li className="nav-link menu">
          <div onClick={showNav} className="hami">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </li>
        <li className="nav-link icon">
          <img className="logo" src={Logo} alt="N" />
        </li>
        <li className="nav-link theme">
          <div className="theme-switch-wrapper">
            <label htmlFor="checkbox" className="theme-switch">
              <label className="switch">
                <input type="checkbox" onChange={switchTheme} />
                <span className="slider round"></span>
              </label>
            </label>
          </div>
        </li>
      </ul>
      <div id="nav-tap" className="hide-tab">
        <ul className="tab-list">
          <Link to="/">
            <li onClick={showNav} className="tab-link">
              HOME
            </li>
          </Link>
          <Link to="/cards">
            <li onClick={showNav} className="tab-link">
              BLOGS
            </li>
          </Link>
          <Link to="/home/#contact-wrapper">
            <li onClick={showNav} className="tab-link"></li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
