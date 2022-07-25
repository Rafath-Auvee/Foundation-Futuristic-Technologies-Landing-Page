import React from 'react'

import MainSlider from "./../shared/MainSlider";
import Navbar from "./../shared/Navbar";
import Card from "./../product/Card";

import Laptops from "./../Laptops";

const Home = () => {


  return (
    <div>
      <MainSlider/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
        {Laptops.slice(0,3).map((laptop, index) => <Card key={laptop.id} laptop={laptop} /> )}
      </div>
    </div>
  )
}

export default Home