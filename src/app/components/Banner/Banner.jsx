// import React from 'react';

// const Banner = () => {
//   return (
//     <div className='max-h-screen'>
//       Banner
//     </div>
//   );
// };

// export default Banner;
'use client'

import React from 'react'
import banner1 from '../../../../Public/images/banner1.jpg'
import banner2 from "../../../../Public/images/banner2.jpg"
// import banner1 from '@public/images/banner1.jpg'
// import banner2 from '@public/images/banner2.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

// Import Swiper styles
import 'swiper/css'
import Image from 'next/image'
// import 'swiper/css/navigation'
// import 'swiper/css/pagination'

const banners = [
  {
    id: 1,
    title: 'Summer Sale',
    description: 'Up to 50% off on all summer items',
    image: banner1,
  },
  {
    id: 2,
    title: 'New Arrivals',
    description: 'Check out our latest collection',
    image: banner2,
  },
  {
    id: 3,
    title: 'Free Shipping',
    description: 'On orders over $100',
    image: banner1,
  },
]

export default function Banner() {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="w-full"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="relative h-[400px]">
              <Image src={banner?.image} alt={banner.title} className='object-cover' fill ></Image>
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white">
                <h2 className="text-4xl font-bold mb-4">{banner.title}</h2>
                <p className="text-xl">{banner.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-prev absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white">
        <FaChevronLeft size={24} />
      </div>
      <div className="swiper-button-next absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white">
        <FaChevronRight size={24} />
      </div>
    </div>
  )
}
