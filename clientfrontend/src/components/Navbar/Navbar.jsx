import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const quantity = useSelector(state=> state.cart.quantity);
  console.log(quantity)
  return (
    <nav className="navbar">
      <div className="navbar-left">
      <i className="bi bi-instagram" style={{padding: "10px"}}></i>
      <i className="bi bi-twitter" style={{padding: "10px"}}></i>
      <i className="bi bi-facebook" style={{padding: "10px"}}></i>
      </div>
      <div className="navbar-middle">
        <h1 className="navbar-logo">Your Name</h1>
      </div>
      <div className="navbar-right">
        <div className="profile-pic">
          <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400" alt=""/>
        </div>
        <button className="login-btn">
          <i className="bi bi-box-arrow-right" style={{fontSize: "22px"}}/>
        </button>
        <div className="shopping-cart-icon">
          <Link to="/cart">

          <i className="bi bi-cart" style={{fontSize: "22px", textDecoration: "none",color:"white"}}></i>
          </Link>

          <div className="notification">{quantity}</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;