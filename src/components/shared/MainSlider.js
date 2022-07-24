import React from "react";
import Slider from "react-slick";
import SliderWrapper from "./_SlickSliderStyle";

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
          <div className="testimoni--wrapper">
            <p>Testimoni One</p>
          </div>
          <div className="testimoni--wrapper">
            <p>Testimoni Two</p>
          </div>
          <div className="testimoni--wrapper">
            <p>Testimoni Three</p>
          </div>
        </Slider>
      </SliderWrapper>
    </div>
  );
};

export default MainSlider;
