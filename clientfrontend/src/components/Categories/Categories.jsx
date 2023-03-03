import React from 'react';
import "./Categories.css";
import { categories } from '../../data';
import Category from '../Category/Category';

const Categories = () => {
  return (
    <div className='categories'>
        {categories.map((item)=> (
            <Category item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default Categories