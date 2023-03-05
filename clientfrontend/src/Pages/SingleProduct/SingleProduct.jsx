import React, { useEffect, useState } from "react";
import "./SingleProduct.css";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../../requestMethods";
import { addProduct } from "../../Redux/cartSlice";
import { useDispatch } from "react-redux";

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const SingleProduct = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setproduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setproduct(res.data);
      } catch (error) {}
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };
  // console.log({ color, size });

  const updateCart = () => {
    dispatch(addProduct({ ...product, quantity, size, color, size }));
  };

  return (
    <div className="SingleProduct">
      <div className="imagecontainer">
        <img
          src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=600"
          className=""
          alt=""
        />
      </div>
      <div className="detailscontainer">
        <div className="Title">{product.title}</div>
        <div className="desc">{product.desc}</div>
        <div className="price">
          <span style={{ marginRight: "10px" }}>Price:</span>${product.price}
        </div>
        <div className="size">
          <label>size</label>
          <select
            className="sizeselect"
            onChange={(e) => setSize(e.target.value)}
          >
            {product.size?.map((s) => (
              <option key={s} className="sizeoptions">
                {s}
              </option>
            ))}
          </select>
        </div>
        <div className="colorBox">
          <Filter>
            <FilterTitle>Color</FilterTitle>
            {product.color?.map((c) => (
              <FilterColor color={c} key={c} onClick={() => setColor(c)} />
            ))}
          </Filter>
        </div>
        <div className="addToCart">
          <div className="productQuantity">
            <i
              className="bi bi-plus-lg"
              onClick={() => handleQuantity("inc")}
            ></i>
            <span className="quantity">{quantity}</span>
            <i
              className="bi bi-dash-lg"
              onClick={() => handleQuantity("dec")}
            ></i>
          </div>
          <button className="addTocart" onClick={updateCart}>
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
