import React from "react";


const Card = (props) => {
  const { name, description, price, url } = props.laptop;
  return (
    <div>
      <div class="flex py-6 justify-center items-center">
        <div class="w-72 bg-white drop-shadow-md rounded-lg h-fit">
          <img src={url} class="object-cover h-48 rounded-tl-lg rounded-tr-lg" alt={description}/>
          <div class="px-5 py-3 space-y-2">
            <h3 class="text-lg text-black">{name}</h3>
            <div class="space-x-2">
              <span class="px-3 py-0.5 border border-blue-500 text-[11px] text-blue-500">
                Free Ship
              </span>
              <span class="px-3 py-0.5 border border-blue-500 text-[11px] text-blue-500">
                7 Day Return
              </span>
            </div>
            <p class="space-x-2">
              <span class="text-2xl font-semibold text-black">${price}</span>
              <span class="text-sm line-through text-gray-500">$1000</span>
              <span class="text-sm text-red-700">40% off</span>
            </p>
            <div class="flex justify-between items-center pt-3 pb-2">
              <a
                href="#"
                class="px-4 py-2 bg-red-600 hover:bg-amber-600 text-center text-sm text-white rounded duration-300"
              >
                Details
              </a>

              <a
                href="#"
                title="Add to Favorites"
                class="text-2xl text-gray-300 hover:text-red-500 duration-300"
              >
                &hearts;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
