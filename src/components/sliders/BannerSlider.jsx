"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";

export default function BannerSlider() {
    const banners = [
        {
            desktop: "/images/banners/banner1-desktop.webp",
            mobile: "/images/banners/banner1-mobile.webp",
            alt: "Travel Banner 1",
            link: "/packages"
        },
        {
            desktop: "/images/banners/banner2-desktop.webp",
            mobile: "/images/banners/banner2-mobile.webp",
            alt: "Travel Banner 2",
            link: "/domestic"
        },
        {
            desktop: "/images/banners/banner3-desktop.webp",
            mobile: "/images/banners/banner3-mobile.webp",
            alt: "Travel Banner 3",
            link: "/international"
        }
    ];

    return (
        <section className="bannerSlider">
            <Swiper
                modules={[Autoplay]}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
            >
                {banners.map((banner, index) => (
                    <SwiperSlide key={index}>
                        <a href={banner.link} className="bannerLink">
                            {/* Desktop Banner */}
                            <img
                                src={banner.desktop}
                                alt={banner.alt}
                                className="bannerImage desktopOnly"
                            />

                            {/* Mobile Banner */}
                            <img
                                src={banner.mobile}
                                alt={banner.alt}
                                className="bannerImage mobileOnly"
                            />
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
