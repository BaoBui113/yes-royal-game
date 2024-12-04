"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import Image from "next/image";
import { Pagination } from 'swiper/modules';
export default function SliderBanner() {

    return (
        <div className='relative max-w-[600px]'>
            <Swiper className="mySwiper" pagination={{
                clickable: true
            }} modules={[Pagination]} >
                <SwiperSlide>
                    <div className="relative w-[600px] h-[300px] flex justify-center">
                        <Image src={"/assets/image/banner/slide01.png"} alt="slider 1" fill />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative w-[600px] h-[300px]">
                        <Image src={"/assets/image/banner/slide01.png"} alt="slider 1" fill />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative w-[600px] h-[300px]">
                        <Image src={"/assets/image/banner/slide01.png"} alt="slider 1" fill />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>

    )
}
