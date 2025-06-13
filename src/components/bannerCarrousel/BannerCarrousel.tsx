import React, {useRef } from "react";
import { bannerSlides } from "@/data/bannerSlides";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination } from "swiper/modules";
import 'swiper/css/pagination';
import style from './bannerCarrousel.module.css';

interface BannerSlide {
    imgSrc: string;
    title: string;
    description: string;
    categories: string[];
}

const BannerCarrousel: React.FC = () => {
    const swiperWrappedRef = useRef<HTMLElement | null>(null);

    return (
        <Swiper
            modules={[Pagination, Autoplay]}
            autoplay={{
                delay: 5000, // 20 segundos
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
            onSwiper={(swiper) => {
                swiperWrappedRef.current = swiper.wrapperEl;
            }}
        >
            {bannerSlides.map((slide: BannerSlide, index: number) => (
                <SwiperSlide className={style.swiper_slide} key={index}>
                    <img src={slide.imgSrc} alt={slide.title} />
                    <div className={style.title}>
                        <h1>{slide.title}</h1>
                    </div>
                    <div className={style.content}>
                        <div className={style.text_box}>
                            <p>{slide.description}</p>
                        </div>
                        <div className={style.footer}>
                            <div className={style.category}>
                                {slide.categories.map((category, idx) => (
                                    //Confie en mi yo se lo que hago
                                    <span key={idx}>
                                        {category}
                                    </span>
                                ))}
                            </div>
                            <button>
                                <span className={style.label}>More...</span>
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default BannerCarrousel;