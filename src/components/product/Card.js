import React from "react";
import { useNavigate, useParams } from "react-router-dom";

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
      <div
        className="flex items-center bg-indigo-100 w-screen min-h-screen">
        <div className="container ml-auto mr-auto flex flex-wrap items-start">
          
          <div className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 lg:pl-2 lg:pr-2">
            <div className="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
              <figure className="mb-2">
                <img
                  src={url}
                  alt=""
                  className="h-64 ml-auto mr-auto"
                />
              </figure>
              <div className="rounded-lg p-4 bg-purple-700 flex flex-col">
                <div>
                  <h5 className="text-white text-2xl font-bold leading-none">
                    {name.slice(0, 20)}
                  </h5>
                  <span className="text-xs text-gray-400 leading-none">
                    {/* {description.slice(0, 20)} */}
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="text-lg text-white font-light">${price}</div>
                  <button
                    onClick={() => goProduct(_id)}
                    product={props.laptop}
                    key={_id}
                    className="rounded-full bg-purple-900 text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-10 h-10 flex ml-auto transition duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="stroke-current m-auto"
                    >
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </button>
                </div>
              </div>
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