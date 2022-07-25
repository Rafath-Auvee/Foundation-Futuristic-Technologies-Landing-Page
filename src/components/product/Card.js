import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Card = (props) => {
  const { _id, name, description, price, url } = props.laptop;

  const navigate = useNavigate();
  const { id } = useParams();

  const goProduct = async (id) => {
    const baseURL = `http://localhost:3000/products/${_id}`;
    console.log(name);
    await navigate(`/products/${_id}`, { state: props.laptop });
    console.log("Product clicked");
  };

  return (
    <div>
      <div className="flex m-20 py-6 justify-center items-center">
        <div className="w-72 bg-white drop-shadow-md rounded-lg flex flex-col">
          <img
            src={url}
            className="object-cover h-48 rounded-tl-lg rounded-tr-lg"
            alt={description}
          />
          <div className="px-5 py-3 space-y-2">
            <h3 className="text-lg text-black">{name}</h3>
            <div className="space-x-2">
              <span className="px-3 py-0.5 border border-blue-500 text-[11px] text-blue-500">
                Free Ship
              </span>
              <span className="px-3 py-0.5 border border-blue-500 text-[11px] text-blue-500">
                7 Day Return
              </span>
            </div>
            <p className="space-x-2">
              <span className="text-2xl font-semibold text-black">
                ${price}
              </span>
              <span className="text-sm line-through text-gray-500">$1000</span>
              <span className="text-sm text-red-700">40% off</span>
            </p>
            <div className="flex justify-between items-center pt-3 pb-2">
              <div>
                <button
                  className="px-4 py-2 bg-red-600 hover:bg-amber-600 text-center text-sm text-white rounded duration-300"
                  // onClick={() => setModalShow(true)}
                  onClick={() => goProduct(_id)}
                  product={props.laptop}
                  key={_id}
                >
                  Details
                </button>
                <button
                  className="px-4 py-2 bg-red-600 hover:bg-amber-600 text-center text-sm text-white rounded duration-300"
                  // onClick={() => setModalShow(true)}
                  onClick={() => goProduct(_id)}
                  product={props.laptop}
                  key={_id}
                >
                  Details
                </button>
              </div>
              <a
                href="#"
                title="Add to Favorites"
                className="text-2xl text-gray-300 hover:text-red-500 duration-300"
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
