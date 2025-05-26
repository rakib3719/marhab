import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function ServiceDetails() {
    const [data, setData] = useState({});
    const [frontImage, setFrontImage] = useState(data?.frontImg);
    const [adult, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);
    const [selectedService, setSelectedService] = useState(null);
    const [selectedRadio, setSelectedRadio] = useState("arrival");

    const {id} = useParams();
    
    const getData = async () => {
        const res = await axios.get(`https://shotdeck-backend.vercel.app/api/shot/services/${id}`);
        const serviceData = res?.data?.data;

        setData(serviceData);

        if (serviceData?.frontImg) {
            setFrontImage(serviceData.frontImg);
        } else if (serviceData?.gallery?.length > 0) {
            setFrontImage(serviceData.gallery[0]);
        }
    };

    useEffect(()=>{
        getData();
    }, [])

    const handleServiceSelect = (service) => {
        if (selectedService && selectedService.name === service.name) {
            setSelectedService(null);
        } else {
            setSelectedService(service);
        }
    }

    return (
        <div className='bg-gray-50'>
            <div className='mx-auto max-w-[1450px] pt-28 '>
                <h4 className='text-4xl mx-8'>{data?.name}</h4>
                {/* image section */}
                <div className='flex'>
                    <div className='mx-8 mt-8 h-full'>
                        <img src={frontImage} alt="" className='h-[710px] rounded'/>
                    </div>
                    <div>
                        {data?.gallery?.map((img, idx)=>(
                            <img 
                                onClick={()=>setFrontImage(img)} 
                                key={idx} 
                                src={img} 
                                className={`h-96 w-96 duration-700 rounded mt-2 border-[#e60053] ${frontImage === img ? 'border' : ''} object-cover w-96`}
                            />
                        ))}
                    </div>
                </div>

                {/* form section */}
                <section className='bg-white mt-16 p-4 rounded-xl w-[60%] shadow'>
                    <h4>Service required for:</h4>

                <section className='flex items-center  gap-20 mt-4 '>
                      <div onClick={()=> setSelectedRadio('arrival')} className={`w-5 h-5 cursor-pointer rounded-full border flex items-center  mb-2 ${
                                       
                                               selectedRadio === 'arrival' ?   ' border-[#e60053] border-4' : 'border-gray-400'
                                            
                                        }`}> <span className='ml-6 '>Arrival </span></div>
                    <div onClick={()=> setSelectedRadio('transfer')}  className={`w-5 h-5 cursor-pointer rounded-full border flex items-center  mb-2 ${
                                       
                                                    selectedRadio === 'transfer' ?   ' border-[#e60053] border-4' : 'border-gray-400'
                                            
                                        }`}> <span className='ml-6 '>Transfer</span></div>
                    <div onClick={()=> setSelectedRadio('deputure')}  className={`w-5 h-5 cursor-pointer rounded-full border flex items-center  mb-2 ${
                                       
                                                 selectedRadio === 'deputure' ?   ' border-[#e60053] border-4' : 'border-gray-400'
                                            
                                        }`}> <span className='ml-6 '>Deputure </span></div>
                </section>
                    <div className='space-y-4 p-4'>
                        <div className='flex gap-4'>
                            <input type="text" name="" id="" placeholder='Depature airport' className='border border-gray-400 p-2 rounded w-full'/>
                            <input type="text" name="" id="" placeholder='Arrival  airport' className='border border-gray-400 p-2 rounded w-full'/>
                        </div>
                        <div className='flex gap-4'>
                            <input type="date" name="" id="" placeholder='Depature airport' className='border border-gray-400 p-2 rounded w-full'/>
                            <input type="text" name="" id="" placeholder='Arrival Flight Number' disabled className='border bg-gray-200 border-gray-400 p-2 rounded w-full'/>
                        </div>
                    </div>

                    {/* counter section */}
                    <div className='flex gap-8'>
                        {/* Adults */}
                        <div>
                            <h4 className='text-xl mt-4'>Adults</h4>
                            <div className='flex items-center gap-4 mt-[43px]'>
                                {adult < 1
                                    ? <span className='text-gray-500 text-2xl cursor-pointer'><MdOutlineKeyboardArrowLeft /></span>
                                    : <span onClick={() => setAdults(adult - 1)} className='text-[#e60053] text-2xl cursor-pointer'><MdOutlineKeyboardArrowLeft /></span>
                                }
                                {adult}
                                <span onClick={() => setAdults(adult + 1)} className='text-[#e60053] text-2xl cursor-pointer'><MdOutlineKeyboardArrowRight /></span>
                            </div>
                        </div>

                        {/* Children */}
                        <div>
                            <h4 className='text-xl mt-4'>Children</h4>
                            <p className='text-gray-500 text-xs mt-1'>(from 2 to 12 y.o.)</p>
                            <div className='flex items-center gap-4 mt-6'>
                                {children < 1
                                    ? <span className='text-gray-500 text-2xl cursor-pointer'><MdOutlineKeyboardArrowLeft /></span>
                                    : <span onClick={() => setChildren(children - 1)} className='text-[#e60053] text-2xl cursor-pointer'><MdOutlineKeyboardArrowLeft /></span>
                                }
                                {children}
                                <span onClick={() => setChildren(children + 1)} className='text-[#e60053] text-2xl cursor-pointer'><MdOutlineKeyboardArrowRight /></span>
                            </div>
                        </div>

                        {/* Infants */}
                        <div>
                            <h4 className='text-xl mt-4'>Infants</h4>
                            <p className='text-gray-500 text-xs mt-1'>(below 2 y.o.)</p>
                            <div className='flex items-center gap-4 mt-6'>
                                {infants < 1
                                    ? <span className='text-gray-500 text-2xl cursor-pointer'><MdOutlineKeyboardArrowLeft /></span>
                                    : <span onClick={() => setInfants(infants - 1)} className='text-[#e60053] text-2xl cursor-pointer'><MdOutlineKeyboardArrowLeft /></span>
                                }
                                {infants}
                                <span onClick={() => setInfants(infants + 1)} className='text-[#e60053] text-2xl cursor-pointer'><MdOutlineKeyboardArrowRight /></span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* choose your service */}
                <section className="mt-16 relative">
                    <div className='flex gap-6 items-center'>
                        <h4 className='text-2xl'>Choose your service</h4>
                        <p className='text-gray-400'>*price per person</p>
                    </div>

                    <div className="max-w-4xl mt-8 relative">
                        {/* Custom Navigation Buttons */}
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
                            modules={[Navigation]}
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
                            {data?.serviceType?.map((service, idx) => (
                                <SwiperSlide key={idx}>
                                    <div 
                                        onClick={() => handleServiceSelect(service)}
                                        className={`text-center bg-white max-w-[250px] h-56 py-4 px-8 rounded-xl border cursor-pointer  ${
                                            selectedService?.name === service.name 
                                                ? 'border-[#e60053]' 
                                                : 'border-gray-300'
                                        }`}
                                    >
                                        <div className={`w-5 h-5 rounded-full border mx-auto mb-2 ${
                                            selectedService?.name === service.name 
                                                ? ' border-[#e60053] border-4' 
                                                : 'border-gray-400'
                                        }`}></div>
                                        <h4 className={`text-xl ${
                                            selectedService?.name === service.name 
                                                ? 'text-[#e60053]' 
                                                : 'text-[#e60053]'
                                        }`}>{service?.name}</h4>
                                        <p className='text-gray-400 text-left mt-12'>From</p>
                                        <h4 className='text-2xl'> 
                                            <span> USD</span> {service.amount || service?.Amount} 
                                        </h4>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </section>

                {/* Key Service */}
                <section className='w-[44%] mt-16'>
                    <h4 className='text-[#e60053] text-4xl text-center '>Key Services</h4>
                    <p className='mt-4'>{data?.description}</p>

                    {/* details */}
                    <section className='flex gap-12'>
                        <div>
                            <h4 className='text-gray-400 text-2xl mt-8 '>Best For</h4>
                            <div className='mt-4'>
                                {data?.bestFor?.map((data, idx) => (
                                    <li key={idx} className='mt-3'>
                                        {data}
                                    </li>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h4 className='text-gray-400 text-2xl mt-8 '>Features</h4>
                            {data?.features?.map((data, idx) => (
                                <li key={idx} className='mt-3'>
                                    {data}
                                </li>
                            ))}
                        </div>
                    </section>
                </section>
            </div>
        </div>
    )
}