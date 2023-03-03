import React from "react";
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
      </div>
    </div>
  );
};

export default Product;