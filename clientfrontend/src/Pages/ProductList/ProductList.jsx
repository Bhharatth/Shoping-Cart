import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Navbar from "../../components/Navbar/Navbar";
import "./ProductList.css";

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort]= useState("newest")

  const handleFilters = (e) => {
    const value = e.target.value;

    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <div className="productListpage">
      <Navbar />

      <div className="productlist">
        <span className="header">Category</span>
        <div className="filterAndSort">
          <div className="filterProducts">
            <label className="label">Filter Products:</label>
            <div className="color">
              <label className="label">color</label>
              <select
                name="color"
                className="colorSelect"
                onChange={handleFilters}
              >
                <option className="colorOptions">red</option>
                <option className="colorOptions">blue</option>
                <option className="colorOptions">green</option>
                <option className="colorOptions">yellow</option>
              </select>
            </div>

            <div className="size">
              <label className="label">Size</label>
              <select
                name="size"
                className="sizeSelect"
                onChange={handleFilters}
              >
                <option className="sizeOptions">S</option>
                <option className="sizeOptions">M</option>
                <option className="sizeOptions">L</option>
                <option className="sizeOptions">XL</option>
              </select>
            </div>
          </div>

          <div className="sortProducts">
            <label className="label">Sort Products:</label>
            <select className="catSelect" onChange={e=> setSort(e.target.value)}>
              <option>NEWEST</option>
              <option value="asc">ASC</option>
              <option value="dsc">DSC</option>
            </select>
          </div>
        </div>
        <div>
          <FeaturedProducts cat={cat} filters={filters} sort={sort}/>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
