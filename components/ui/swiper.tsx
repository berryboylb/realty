"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const ImageSlider = ({ images }) => {
  return (
    <div className="w-full h-[250px] lg:h-full   overflow-hidden">
      <Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation, Pagination, Autoplay]}
        className="h-full w-full"
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="h-full w-[250px]">
              <Image
                src={image}
                alt={`Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-[30px]"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
