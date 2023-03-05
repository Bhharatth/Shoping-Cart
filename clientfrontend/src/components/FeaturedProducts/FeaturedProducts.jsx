import React, { useEffect, useState } from "react";
import { popularProducts } from "../../data";
import Product from "../Product/Product";
import "./FeaturedProducts.css";
import axios from "axios";
const FeaturedProducts = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : "http://localhost:5000/api/products"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);
  // console.log({cat, products})
  useEffect(() => {
    if (sort === "newest") {
      setFilteredProduct((prev) => [
        ...prev.sort((a, b) => a.createdAt - b.createdAt),
      ]);
    } else if (sort === "asc") {
      setFilteredProduct((prev) => [...prev.sort((a, b) => a.price - b.price)]);
    } else {
      setFilteredProduct((prev) => [...prev.sort((a, b) => b.price - a.price)]);
    }
  }, [sort]);

  useEffect(() => {
    cat &&
      setFilteredProduct(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  // console.log(products);
  console.log(filteredProduct);

  return (
    <div className="popularProducts">
      {cat
        ? filteredProduct.map((item) => <Product item={item} key={item.id} />)
        : products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item.id} />)}
    </div>
  );
};

export default FeaturedProducts;
