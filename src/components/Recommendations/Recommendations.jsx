import React from "react";
import "./Recommendations.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


const sliderStyle = {
    width: "303px",
    height: "323px",
    background: "#fff"
}

function Recommendations() {
  return (
    <div className="recommendations">
      <div className="block-header">
        <div className="header-title">Recommendations</div>
        <div className="header-subtitle">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </div>
      </div>
      <div className="recommendations-slider">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide style={sliderStyle}>
            <div className="slide-title">Title</div>
            <div className="slide-comment">Comment</div>
            <div className="slide-client">
                <div className="client-avatar">Avatar</div>
                <div className="client-data">
                    <div className="client-name">Name</div>
                    <div className="client-position">Position</div>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={sliderStyle}>Slide 2</SwiperSlide>
          <SwiperSlide style={sliderStyle}>Slide 3</SwiperSlide>
          <SwiperSlide style={sliderStyle}>Slide 4</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Recommendations;
