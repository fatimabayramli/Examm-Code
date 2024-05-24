import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">
        <h1>Pulse</h1>
        <div className="navbarr">
          <nav>
            <ul>
              <li>
                <Link className="li" to="/">Home</Link>
              </li>
              <li>
                <Link className="li" to="/basket">Basket</Link>
              </li>
              <li>
                <Link className="li" to="/wishlist">Favorites</Link>
              </li>
              <li>
                <Link className="li" to="/add">Add</Link>
              </li>
              <li>
                <p className="li">About us</p>
              </li>
            </ul>
          </nav>
        </div>
        <div className="reserv">
          <p>
            <span>Reservations</span>
          </p>
          <FaPhoneAlt />
          <p>652-345 3222 11</p>
        </div>
    </div>
  );
};

export default Navbar;
