import React from 'react'
import './Products.css'
import ProductCard from './ProductCard'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay,  Navigation } from 'swiper/modules';

const Products:React.FC = () => {
  return (
    <>
       <h1 className='py-5 text-center'>Featured Collection</h1>
<div className="container">
<Swiper 
        slidesPerView={4}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        spaceBetween={40}
        breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        className="mySwiper"
      >
 <div className="cards d-flex">
 <SwiperSlide> <ProductCard imgProps="/images/products/product1.jpeg" /> </SwiperSlide>
 <SwiperSlide> <ProductCard imgProps="/images/products/product2.jpeg" /> </SwiperSlide>
 <SwiperSlide> <ProductCard imgProps="/images/products/product3.jpeg" /> </SwiperSlide>
 <SwiperSlide> <ProductCard imgProps="/images/products/product4.jpeg" /> </SwiperSlide>
 <SwiperSlide> <ProductCard imgProps="/images/products/product1.jpeg" /> </SwiperSlide>
 <SwiperSlide> <ProductCard imgProps="/images/products/product2.jpeg" /> </SwiperSlide>
 <SwiperSlide> <ProductCard imgProps="/images/products/product3.jpeg" /> </SwiperSlide>
 <SwiperSlide> <ProductCard imgProps="/images/products/product4.jpeg" /> </SwiperSlide>

   
 </div>
 </Swiper>
</div>
    </>
  
  )
}

export default Products