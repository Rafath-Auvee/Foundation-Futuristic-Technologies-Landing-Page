import React from "react";
import Slider from "react-slick";
import SliderWrapper from "./_SlickSliderStyle";
import image1 from "../../image/slider/no (11).jpg"
import image2 from "../../image/slider/no (3).jpg"
import image3 from "../../image/slider/no (5).jpg"
import "./MainSlider.css"

const MainSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    speed: 500,
    arrows: false,
    adaptiveHeight: true,
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => (
      <div className="ft-slick__dots--custom">
        <div className="loading" />
      </div>
    ),
  };
  return (
    <div>
      <SliderWrapper>
        <Slider {...settings}>
          <div className="slider_portion">
            <img src="https://i.ibb.co/3Fr43sV/no-3.jpg" alt="" srcset="" />
          </div>
          <div className="slider_portion">
            <img src="https://i.ibb.co/8dqGr5c/no-5.jpg" alt="" srcset="" />
          </div>
          <div className="slider_portion">
            <img src="https://i.ibb.co/vJL5cCK/no-11.jpg" alt="" srcset="" />
          </div>
        </Slider>
      </SliderWrapper>
    </div>
  );
};

export default MainSlider;
