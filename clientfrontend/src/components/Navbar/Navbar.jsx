import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
      <i class="bi bi-instagram" style={{padding: "10px"}}></i>
      <i class="bi bi-twitter" style={{padding: "10px"}}></i>
      <i class="bi bi-facebook" style={{padding: "10px"}}></i>
      </div>
      <div className="navbar-middle">
        <h1 className="navbar-logo">Your Name</h1>
      </div>
      <div className="navbar-right">
        <div className="profile-pic">
          <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400" alt=""/>
        </div>
        <button className="login-btn">
          <i class="bi bi-box-arrow-right" style={{fontSize: "22px"}}/>
        </button>
        <div className="shopping-cart-icon">
          <i class="bi bi-cart" style={{fontSize: "22px"}}></i>
          <div className="notification">3</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;