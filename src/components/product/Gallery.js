import React from "react";
import Laptops from "./../Laptops";
import "./Gallery.css";

const colors = [
  "https://i.ibb.co/n7yvNcC/no-1.jpg",
  "https://i.ibb.co/VCL041T/no-2.jpg",
  "https://i.ibb.co/cQJBNBh/no-4.jpg",
  "https://i.ibb.co/mHzMLJX/no-6.jpg",
  "https://i.ibb.co/r68Ch94/no-12.jpg",
  "https://i.ibb.co/cv3DXkN/no-10.jpg",
  "https://i.ibb.co/YDdx79f/no-7.jpg",
  "https://i.ibb.co/ZJBgLTW/no-9.jpg",
  "https://i.ibb.co/Pr7k2jY/no-8.jpg",
];
const delay = 2500;

const Gallery = () => {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <h2 className="font-bold text-black mb-5 text-3xl md:text-4xl lg:text-5xl text-center mb-5 pb-5">Our Best Laptop Collection</h2>
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((backgroundColor, index) => (
          <img
            className="slide"
            key={index}
            alt="title"
            src={backgroundColor}
          ></img>
        ))}
      </div>

      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
