"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function HeroSlider() {
    const slides = [
        {
            bg: "/images/heroslider/slider_1.webp",
            title: "Unforgettable Journeys",
            subtitle: "Crafted Just for You",
            text: "From Dubai’s skyline to Mahakal’s blessings, discover curated travel experiences with expert support.",
        },
        {
            bg: "/images/heroslider/slider_2.webp",
            title: "Explore The World",
            subtitle: "With Trusted Travel Experts",
            text: "Handpicked destinations, seamless planning, and unforgettable memories.",
        },
        {
            bg: "/images/heroslider/slider_3.webp",
            title: "Travel Beyond Boundaries",
            subtitle: "Experiences That Stay Forever",
            text: "International & domestic tours designed for comfort and adventure.",
        },
    ];

    return (
        <section className="hero">
            <Swiper
                modules={[Autoplay, Pagination, EffectFade]}
                effect="fade"
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                loop={true}
                className="heroSlider"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="heroImage"
                            style={{ backgroundImage: `url(${slide.bg})` }}
                        >
                            <div className="content">
                                <h1>{slide.title}</h1>
                                <h2>{slide.subtitle}</h2>
                                <p>{slide.text}</p>

                                <div className="btnGroup">
                                    <a href="#packages">
                                        <button className="btn btn-theme">
                                            Explore Packages
                                        </button>
                                    </a>
                                    {/* <button className="btn btn-theme_outline">
                                        About Us
                                    </button> */}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
