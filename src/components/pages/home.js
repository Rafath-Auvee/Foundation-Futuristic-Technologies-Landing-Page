import React from 'react'
import laptops from "./../laptops";

const home = () => {
  return (
    <div>
      {laptops.map((laptop) => (
         <h1 key={laptop.id}>{laptop.name}</h1>
      ))}
    </div>
  )
}

export default home