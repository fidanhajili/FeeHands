import React from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import './Mehsul.css'

const Mehsul:React.FC = () => {
  return (
    <>
 <div className="shop-slide">
 <h1 className='text-center py-5'>KNITS FOR BABIES</h1>
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
              spaceBetween: 30,
            },
          }}
        className="mySwiper pb-5"
      >
 <div className="cards d-flex">

 <SwiperSlide> 
  <img src="/images/shop/mehsul6.jpeg" alt="" className='shopimg'/>
   </SwiperSlide>
 <SwiperSlide> 
  <img src="/images/shop/mehsul7.jpeg" alt="" className='shopimg'/>
   </SwiperSlide>
 <SwiperSlide> 
  <img src="/images/shop/mehsul8.jpeg" alt="" className='shopimg'/>
   </SwiperSlide>
 <SwiperSlide> 
  <img src="/images/shop/mehsul9.jpeg" alt="" className='shopimg'/>
   </SwiperSlide>
 <SwiperSlide> 
  <img src="/images/shop/mehsul10.jpeg" alt="" className='shopimg'/>
   </SwiperSlide>
 


   
 </div>
 </Swiper>

 <h1 className='text-center py-5'>HOME DECOR PRODUCTS</h1>
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
              spaceBetween: 30,
            },
          }}
        className="mySwiper pb-5"
      >
 <div className="cards d-flex">

 <SwiperSlide> 
  <img src="/images/shop/mehsul1.jpeg" alt="" className='shopimg'/>
   </SwiperSlide>
 <SwiperSlide> 
  <img src="/images/shop/mehsul2.jpeg" alt="" className='shopimg'/>
   </SwiperSlide>
 <SwiperSlide> 
  <img src="/images/shop/mehsul3.jpeg" alt="" className='shopimg'/>
   </SwiperSlide>
 <SwiperSlide> 
  <img src="/images/shop/mehsul4.jpeg" alt="" className='shopimg'/>
   </SwiperSlide>
 <SwiperSlide> 
  <img src="/images/shop/mehsul5.jpeg" alt="" className='shopimg'/>
   </SwiperSlide>
 


   
 </div>
 </Swiper>

 <h1 className='text-center py-5'>ACSESSORIES</h1>
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
              spaceBetween: 30,
            },
          }}
        className="mySwiper pb-5"
      >
 <div className="cards d-flex">

 <SwiperSlide> 
  <img src="/images/shop/mehsul11.jpeg" alt="" className='shopimg'/>
   </SwiperSlide>
 <SwiperSlide> 
  <img src="/images/shop/mehsul12.jpeg" alt="" className='shopimg'/>
   </SwiperSlide>
 <SwiperSlide> 
  <img src="/images/shop/mehsul13.jpeg" alt="" className='shopimg'/>
   </SwiperSlide>
 <SwiperSlide> 
  <img src="/images/shop/mehsul14.jpeg" alt="" className='shopimg'/>
   </SwiperSlide>
 <SwiperSlide> 
  <img src="/images/shop/mehsul15.jpeg" alt="" className='shopimg'/>
   </SwiperSlide>
 


   
 </div>
 </Swiper>


 </div>
    </>
  )
}

export default Mehsul