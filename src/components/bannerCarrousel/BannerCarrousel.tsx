import React, {useRef } from "react";
import { bannerSlides } from "@/data/bannerSlides";
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination } from "swiper/modules";
import 'swiper/css/pagination';
import { BannerSlide } from "@/types/interfaces";


const BannerCarrousel: React.FC = () => {
    const swiperWrappedRef = useRef<HTMLElement | null>(null);

    return (
        <Swiper
            modules={[Pagination, Autoplay]}
            autoplay={{
                delay: 5000, // 5 segundos
                disableOnInteraction: false,
            }}
            grabCursor
            initialSlide={1}
            slidesPerView={1}
            speed={800}
            loop={true}
            slideToClickedSlide
            pagination={{ clickable: true }}
            breakpoints={{
                320: { spaceBetween: 40 },
                650: { spaceBetween: 30 },
                1000: { spaceBetween: 20 },
            }}
            onSwiper={(swiper: SwiperClass) => {
                swiperWrappedRef.current = swiper.wrapperEl;
            }}
        >
            {bannerSlides.map((slide: BannerSlide, index: number) => (
                <SwiperSlide 
                    className="relative w-screen max-w-full m-0 p-0 flex-shrink-0 h-auto rounded-none overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.3)]" 
                    key={index}
                >
                    <img 
                        src={slide.imgSrc} 
                        alt={slide.title} 
                        className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover brightness-[70%] transition-transform duration-300 ease-in-out hover:scale-105"
                    />
                    <div className="absolute top-4 left-5 md:top-5 md:left-7 lg:top-5 lg:left-7 text-white text-lg md:text-2xl lg:text-3xl font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
                        <h1>{slide.title}</h1>
                    </div>
                    <div className="absolute bottom-4 left-5 right-5 md:bottom-5 md:left-7 md:right-7 lg:bottom-5 lg:left-7 lg:right-7 text-white flex flex-col gap-3 md:gap-4">
                        <div className="text-box">
                            <p className="text-sm md:text-base m-0 text-gray-100 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">{slide.description}</p>
                        </div>
                        <div className="flex justify-between items-center flex-wrap gap-2 md:gap-3">
                            <div className="flex gap-2 md:gap-3 flex-wrap">
                                {slide.categories.map((category, idx) => (
                                    <span 
                                        key={idx}
                                        className="bg-white/20 px-2 py-1 md:px-3 md:py-1.5 rounded-full text-xs md:text-sm text-white backdrop-blur-md animate-[fadeIn_0.3s_ease_forwards]"
                                    >
                                        {category}
                                    </span>
                                ))}
                            </div>
                            <button className="bg-white border-none px-3 py-2 md:px-4 md:py-2.5 rounded-lg text-[#121212] font-semibold cursor-pointer transition-colors duration-300 hover:bg-gray-200">
                                <span className="text-xs md:text-sm">More...</span>
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default BannerCarrousel;