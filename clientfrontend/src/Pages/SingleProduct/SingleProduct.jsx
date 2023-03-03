import React from 'react';
import "./SingleProduct.css";
import styled from "styled-components";

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
  return (
    <div className='SingleProduct'>
        <div className="imagecontainer">
            <img src='https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=600' className='' alt=''/>
        </div>
        <div className="detailscontainer">
            <div className='Title'>Title</div>
            <div className='desc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam laudantium optio similique maxime nostrum impedit, praesentium fugiat repudiandae perferendis, incidunt ea, et suscipit eveniet mollitia adipisci atque minima distinctio nemo!</div>
            <div className='price'><span style={{marginRight: "10px"}}>Price:</span>$50</div>
            <div className="size">
                <label>size</label>
                <select className='sizeselect'>
                <option className='sizeoptions'>S</option>
                <option className='sizeoptions'>M</option>
                <option className='sizeoptions'>L</option>
                <option className='sizeoptions'>X</option>
                <option className='sizeoptions'>XL</option>
                </select>
            </div>
            <div className="colorBox">
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            </div>
            <div className="addToCart">
            <div className='productQuantity'>
            <i class="bi bi-plus-lg"></i>
                <span className='quantity'>1</span>
            <i class="bi bi-dash-lg"></i>

            </div>
            <button className='addTocart'>ADD TO CART</button>
            </div>
            
            
        </div>
    </div>
  )
}

export default SingleProduct