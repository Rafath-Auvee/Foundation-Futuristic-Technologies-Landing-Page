import React from 'react'
import laptops from "./../laptops";
import MainSlider from "./../shared/MainSlider";
import Navbar from "./../shared/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar/>
      All Laptops
      <MainSlider/>
      {laptops.map((laptop) => (
         <h1 key={laptop.id}>{laptop.name}</h1>
      ))}
    </div>
  )
}

export default Home