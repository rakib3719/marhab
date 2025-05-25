import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ProductsSlider() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://shotdeck-backend.vercel.app/api/shot/services');
        setData(res?.data?.data);
      } catch (err) {
        console.error('Error loading services:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="px-4 py-8 relative">
      <div className='text-center mb-8 max-w-3xl mx-auto'>
        <h1 className='text-3xl font-bold text-gray-800'>Featured Products</h1>
        <p className='text-gray-600 mt-3'>
          Explore our featured products, hand-picked to ensure you have a stress-free travel experience.
        </p>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {loading ? (
          <div className="flex justify-center gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 p-2">
                <div className="bg-gray-200 rounded-lg h-64 animate-pulse"></div>
              </div>
            ))}
          </div>
        ) : (
          <>
            {/* Custom Navigation Buttons (no background, only colored icon) */}
            <div className="swiper-button-prev-custom absolute left-0 top-1/2 z-10 -translate-y-1/2 -translate-x-12 cursor-pointer">
              <div className="w-10 h-10 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#e60053]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </div>
            </div>
            
            <div className="swiper-button-next-custom absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-12 cursor-pointer">
              <div className="w-10 h-10 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#e60053]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            <Swiper
              navigation={{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
              }}
              pagination={{
                clickable: true,
                el: '.swiper-pagination-custom',
                type: 'bullets',
                bulletClass: 'swiper-pagination-bullet-custom',
                bulletActiveClass: 'swiper-pagination-bullet-active-custom'
              }}
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
              }}
              className="mySwiper"
            >
              {data.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className='rounded-xl bg-[#f6f6f6] h-full flex flex-col'>
                    <div className="aspect-w-16 aspect-h-9">
                      <img 
                        src={data[0].frontImg} 
                        alt={item.name} 
                        className='w-full h-48 object-cover rounded-t-xl'
                        loading="lazy"
                      />
                    </div>
                    <section className='p-4'>
                      <div className="flex-grow">
                    <Link to={`/services/${item._id}`}>
                    

                        <h2 className='text-xl text-[16px] cursor-pointer hover:underline text-gray-800'>{item.name}</h2>
                    
                    </Link>
                      </div>
                      <div className="mt-8">
                        <span className='text-gray-800 text-[14px]'>From</span>
                        <h6 className='text-2xl font-[24px] text-gray-700'>USD {item?.serviceType[0].amount}</h6>
                      </div>
                    </section>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Pagination with rounded dots */}
            <div className="swiper-pagination-custom flex justify-center mt-6 space-x-2"></div>
          </>
        )}
      </div>

      {/* Custom Styles for Swiper */}
      <style jsx>{`
        .swiper-pagination-bullet-custom {
          width: 10px;
          height: 10px;
          background: #ddd;
          opacity: 1;
          border-radius: 50%;
          margin: 0 6px;
          transition: all 0.3s;
        }
        .swiper-pagination-bullet-active-custom {
          background: #e60053;
          width: 12px;
          height: 12px;
        }
      `}</style>
    </div>
  );
}