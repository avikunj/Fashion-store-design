import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import Dress from "../../../img/Dress.webp"
import Dress1 from "../../../img/Dress1.webp"
import Dress2 from "../../../img/Dress2.webp"
import Dress3 from "../../../img/Dress3.webp"
import Dress4 from "../../../img/Dress4.webp"
import "swiper/css";
import "swiper/css/free-mode";
import { Link } from 'react-router-dom';
const Dressswiper = () => {
  return (
    <div>
 <div className="Container py-4 px-4 justify-content-center ">
        <Swiper
          freeMode={true}
          grabCursor={true}
          modules={[FreeMode]}
          className="mySwiper"
          slidesPerView={3}
          spaceBetween={20}
        >
          <div className='swipercontainer'>

            <SwiperSlide className="productname">
            <Link to="/Dress">
              <img src={ Dress} height={100} width={100}/>
            </Link>
            </SwiperSlide>
            <SwiperSlide className="productname">
            <Link to="/Dress1">
              <img src={ Dress1} height={100} width={100}/>
            </Link>
            </SwiperSlide>
            <SwiperSlide className="productname">
            <Link to="/Dress2">
              <img src={ Dress2} height={100} width={100}/>
            </Link>
            </SwiperSlide>
            <SwiperSlide className="productname">
            <Link to="/Dress3">
              <img src={ Dress3} height={100} width={100}/>
            </Link>
            </SwiperSlide>
            
            <SwiperSlide className="productname">
            <Link to="/Dress4">
              <img src={ Dress4} height={100} width={100}/>
</Link>
            </SwiperSlide>
            
          </div>
        </Swiper>
      </div>

    </div>
  )
}

export default Dressswiper