import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Card.css"
const Card = (props) => {
  const {
    _id,
    name,
    description,
    price,
    url,
    MPN,
    Model,
    Processor,
    RAM,
    Display,
  } = props.laptop;

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
      <div className="custom-height flex items-center">
        <div className="container mx-auto p-9 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
          <img className="rounded-xl w-full h-48 object-cover" src={url} alt="" />
          <div className="flex justify-between items-center text-black">
            <div>
              <h1 className="mt-5 text-2xl font-semibold">{name.slice(0, 15)}</h1>
              <p className="mt-2">${price}</p>
            </div>
            <div>
              <button
                className="text-white text-md font-semibold bg-green-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 "
                onClick={() => goProduct(_id)}
                product={props.laptop}
                key={_id}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

// onClick={() => goProduct(_id)}
// product={props.laptop}
// key={_id}
