import React from "react";

import TestimonialImage from "../../image/no.jpg";

function Testimonials() {
  return (
    <div class="p-5 sm:px-10 md:px-20" id="companies">
      {/* <div
        className="px-5 sm:px-10 md:px-20 lg:px-10 xl:px-20 py-8 mt-10"
        id="features"
      > */}
        <div className="max-w-screen-xl mx-auto">
          <h3 className="leading-none font-black mb-5 text-3xl md:text-5xl lg:text-7xl text-center">Our Trusted Partners</h3>
        </div>
      {/* </div> */}
      <div class="max-w-screen-xl mx-auto">
        <img
          class="mx-auto"
          alt="testimonial"
          src="https://storage.googleapis.com/devitary-image-host.appspot.com/15846471026680582071-Strip-Payment-Logos.png"
        />
      </div>
    </div>
  );
}

export default Testimonials;
