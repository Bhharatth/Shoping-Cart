import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { publicRequest } from "../../requestMethods";

import "./Product.css";

const Product = ({item}) => {
  
  
  return (
    <div className="card">
      
      <div className="cardContainer">
        <img
          src={item.img}
          alt={item.id}
        />
        <h2 className="title">{item.title}</h2>
        <Link to={`/singleproduct/${item._id}`}>
        <i class="bi bi-search" style={{color: "white", fontSize: "35px"}}></i>
        </Link>

      </div>
    </div>
  );
};

export default Product;