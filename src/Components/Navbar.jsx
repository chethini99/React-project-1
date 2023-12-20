import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../Components/Navbar.css";
function Navbar() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light
      "
      >
        <div className="container-fluid ">
          <Link to="/" className="navbar-brand me-auto ">
            <img className="gap-5" src={logo} alt=""/>
          </Link>
          <button
            className="navbar-toggler border-0 m-2   "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div
            className="collapse navbar-collapse  "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav m-auto  mb-2 mb-lg-0 gap-4 text-center ">
              <li className="nav-item  ">
                <Link to="/" className="nav-link active ">
                  Home
                </Link>
              </li>
              <li className="nav-item ">
                <Link to="/menu" className="nav-link">
                  Menu
                </Link>
              </li>
              <li className="nav-item ">
                <Link to="/about" className="nav-link ">
                  About
                </Link>
              </li>
              <li className="nav-item ">
                <Link to="/contact" className="nav-link ">
                  Contact
                </Link>
              </li>
            </ul>

            <form class="d-flex justify-content-center align-items-center ">
              <input
                class="search me-2  p-2   "
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-danger" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
