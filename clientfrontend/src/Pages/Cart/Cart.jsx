import React from 'react';
import { useSelector } from 'react-redux';
import "./Cart.css";
import styled from "styled-components";

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const Cart = () => {
    const cart = useSelector(state=> state.cart)
    console.log(cart)
  return (
    <div className='cart'>
        <div className='cartNav'>
            <button className='navButton'>CONTINUE SHOPING</button>
            <button className='navButton'>CHECKOUT NOW</button>
        </div>
        
<div className='cartContainer'>
    <div>
    
    </div>
        {cart.products.map((products)=> (

    <div className='cartContainer'>
    <div className='cartList'>
            <div className='productImg'>
                <img src={products.img} alt=''/>

            </div>
            <div className='productDetails'>
                <div className='title'>Product: <span>{products.title}</span></div>
                <div className='id'>id: <span>{products._id}</span></div>
                <div>color:<FilterColor color={products.color}/></div>
                <div>size<span>{cart.size}</span></div>
            </div>

            <div className='productQuantity'>
            <i class="bi bi-plus-lg"></i>
                <span className='quantity'>1</span>
            <i class="bi bi-dash-lg"></i>

            </div>
        </div>


       
    </div>
    
    ))}
        
    </div>
    <div className='subTotal'>
            <title>ORDER SUMMARY</title>
            <div>Subtotal: <span>$</span></div>
            <div>Estimated Shipping: <span>$5.9</span></div>
            <div>Shipping Discount: <span>$-5.9</span></div>
            <div>Total: <span>${cart.total}</span></div>
            <button>CHECKOUT NOW</button>
        </div>
    </div>
   
  )
}

export default Cart;