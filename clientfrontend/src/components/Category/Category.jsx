import React from "react";
import "./Category.css";

const Category = ({item, key}) => {
  return (
    <div className="card">
      <div className="cardContainer">
        <img
          src={item.img}
          alt={item.id}
        />
        <h2 className="title">{item.title}</h2>
        <button className="shopNowButton">Shop Now</button>
      </div>
    </div>
  );
};

export default Category;