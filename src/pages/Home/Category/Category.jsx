import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import slice1 from '../../../assets/home/slide1.jpg';
import slice2 from '../../../assets/home/slide2.jpg';
import slice3 from '../../../assets/home/slide3.jpg';
import slice4 from '../../../assets/home/slide4.jpg';
import slice5 from '../../../assets/home/slide5.jpg';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {
  return (
    <section>
      <SectionTitle
        subHeading={"From 11:00am to 10:00pm"}
        heading={"ORDER ONLINE"}
      ></SectionTitle>

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <img src={slice1} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slice2} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">
            pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slice3} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slice4} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">
            desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slice5} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">
            Salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;