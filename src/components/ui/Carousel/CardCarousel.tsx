import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./cardCarousel.module.css";

export function CardCarousel({
    items,
    className,
}: {
    items: Array<{ key: string; content: React.ReactNode }>;
    className?: string;
}) {
    return (
        <div className={`${styles.wrap} ${className || ""}`}>
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={18}
                navigation
                pagination={{ clickable: true }}
                // Responsive: 1 card mobile, 2 tablette, 3 desktop, 4 large
                breakpoints={{
                    0: { slidesPerView: 1.1 },
                    480: { slidesPerView: 1.6 },
                    768: { slidesPerView: 2.2 },
                    996: { slidesPerView: 3 },
                    1280: { slidesPerView: 4 },
                }}
            >
                {items.map((it) => (
                    <SwiperSlide key={it.key} className={styles.slide}>
                        {it.content}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
