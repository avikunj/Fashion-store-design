import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "./home.scss"
const List = () => {
  return (
    <div>
<div className="list">
    <h2>Discover</h2>
      <div className="Container py-4 px-4 justify-content-center ">
        <Swiper
          freeMode={true}
          grabCursor={true}
          modules={[FreeMode]}
          className="mySwiper"
          slidesPerView={4}
          spaceBetween={14}
        >
          <div className='swipercontainer'>
            <SwiperSlide className="productname">
              <h4>All</h4>
            </SwiperSlide>

            <SwiperSlide className="productname">
              <h4>Women</h4>
            </SwiperSlide>
            <SwiperSlide className="productname">
              <h4>Winter</h4>
            </SwiperSlide>
            <SwiperSlide className="productname">
              <h4>Summer</h4>
            </SwiperSlide>
            <SwiperSlide className="productname">
              <h4>Party</h4>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>

    </div>
  )
}

export default List