import React from 'react'
import Card from "./Card";
import Laptops from "./../Laptops";

const Product = () => {
  return (
    <div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
        {Laptops.map((laptop, index) => <Card key={laptop.id} laptop={laptop} /> )}
      </div>
    </div>
  )
}

export default Product