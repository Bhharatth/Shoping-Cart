import React from 'react';
import "./Cart.css";

const Cart = () => {
  return (
    <div className='cart'>
        <div className='cartNav'>
            <button className='navButton'>CONTINUE SHOPING</button>
            <button className='navButton'>CHECKOUT NOW</button>
        </div>
        
<div className='cartContainer'>
    <div>
    
    </div>
    <div className='cartContainer'>
    <div className='cartList'>
            <div className='productImg'>
                <img src='https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400' alt=''/>

            </div>
            <div className='productDetails'>
                <div className='title'>Product: <span>SHOES</span></div>
                <div className='id'>id: <span>65466154646564</span></div>
                <div>color</div>
                <div>size<span>M</span></div>
            </div>

            <div className='productQuantity'>
            <i class="bi bi-plus-lg"></i>
                <span className='quantity'>1</span>
            <i class="bi bi-dash-lg"></i>

            </div>
        </div>


        <div className='subTotal'>
            <title>ORDER SUMMARY</title>
            <div>Subtotal: <span>$80</span></div>
            <div>Estimated Shipping: <span>$5.9</span></div>
            <div>Shipping Discount: <span>$-5.9</span></div>
            <div>Total: <span>$80</span></div>
            <button>CHECKOUT NOW</button>
        </div>
    </div>
    
        
    </div>
    </div>
   
  )
}

export default Cart;