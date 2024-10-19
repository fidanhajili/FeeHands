import React from 'react'
import './Products.css'
import ProductCard from './ProductCard'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay} from 'swiper/modules';

const Products:React.FC = () => {
  return (
    <> <div className="products1">
       <h1 className='py-5 text-center featured animate__animated animate__flip'>Featured Collection</h1>
<div className="container products py-3">
<Swiper 
        slidesPerView={4}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}

        modules={[Autoplay,]}
        spaceBetween={40}
        breakpoints={{
            320: {
              slidesPerView: 1,
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
 <SwiperSlide> <ProductCard imgProps="/images/products/product1.jpeg" mehsulAdi='Blue Dream Bear' Desc='The Blue Dream Bear adds a splash of joy to your life with its charm and warmth. It becomes a loving companion, brightening your every moment.' Price='35$'/> </SwiperSlide>
 <SwiperSlide> <ProductCard imgProps="/images/products/product2.jpeg" mehsulAdi='Rainbow Bunny' Desc='The Velvet Rainbow Bunny brings joy and color to your life, hopping into your heart with its soft fur and cheerful spirit. A perfect companion for adventures and dreams!' Price='30$'/> </SwiperSlide>
 <SwiperSlide> <ProductCard imgProps="/images/products/product3.jpeg" mehsulAdi='Pink Fluff Bunny' Desc='The Pink Fluff Bunny brings a touch of sweetness to your day, with its soft pink fur and playful charm. A delightful companion for cuddles and fun adventures!' Price='30$'/> </SwiperSlide>
 <SwiperSlide> <ProductCard imgProps="/images/products/product4.jpeg" mehsulAdi='Tiny Cuddle Bear' Desc='The Tiny Cuddle Bear is the perfect little friend, bringing warmth and love with its soft, plush fur. A sweet companion for every adventure, ready for cuddles and smiles!' Price='25$'/> </SwiperSlide>
 
 <SwiperSlide> <ProductCard imgProps="/images/products/product1.jpeg" mehsulAdi='Blue Dream Bear' Desc='The Blue Dream Bear adds a splash of joy to your life with its charm and warmth. It becomes a loving companion, brightening your every moment.' Price='35$'/> </SwiperSlide>
 <SwiperSlide> <ProductCard imgProps="/images/products/product2.jpeg" mehsulAdi='Rainbow Bunny' Desc='The Velvet Rainbow Bunny brings joy and color to your life, hopping into your heart with its soft fur and cheerful spirit. A perfect companion for adventures and dreams!' Price='30$'/> </SwiperSlide>
 <SwiperSlide> <ProductCard imgProps="/images/products/product3.jpeg" mehsulAdi='Pink Fluff Bunny' Desc='The Pink Fluff Bunny brings a touch of sweetness to your day, with its soft pink fur and playful charm. A delightful companion for cuddles and fun adventures!' Price='30$'/> </SwiperSlide>
 <SwiperSlide> <ProductCard imgProps="/images/products/product4.jpeg" mehsulAdi='Tiny Cuddle Bear' Desc='The Tiny Cuddle Bear is the perfect little friend, bringing warmth and love with its soft, plush fur. A sweet companion for every adventure, ready for cuddles and smiles!' Price='25$'/> </SwiperSlide>
 
   
 </div>
 </Swiper>
</div>
</div>
    </>
  
  )
}

export default Products