import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function Carousel({
    items,
}: {
    items: Array<{ key: string; content: React.ReactNode }>;
}) {
    return (
        <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={18}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
        >
            {items.map((it) => (
                <SwiperSlide key={it.key}>{it.content}</SwiperSlide>
            ))}
        </Swiper>
    );
}
