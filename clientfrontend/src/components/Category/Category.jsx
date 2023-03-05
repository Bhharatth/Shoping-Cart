import React from "react";
import "./Category.css";
import { Link } from "react-router-dom";

const Category = ({ item, key }) => {
  return (
    <div className="card">
      <Link to={`/products/${item.cat}`}>
        <div className="cardContainer">
          <img src={item.img} alt={item.id} />
          <h2 className="title">{item.title}</h2>
          <button className="shopNowButton">{item.cat}</button>
        </div>
      </Link>
    </div>
  );
};

export default Category;
