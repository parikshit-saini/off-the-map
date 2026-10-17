"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef } from "react";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default function Review() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const reviews = [
        {
            name: "Amit Sharma",
            review:
                "The trip was perfectly planned. Hotels, travel andlocal support were excellent. Highly recommended!",
            rating: 5,
        },
        {
            name: "Neha Verma",
            review:
                "Very smooth experience from booking to return. Everything was well-organized and hassle-free.",
            rating: 4,
        },
        {
            name: "Rohit Mehta",
            review:
                "One of the best travel experiences I’ve had. Great coordination and friendly support team.",
            rating: 5,
        },
        {
            name: "Pooja Singh",
            review:
                "Loved the itinerary and hotel selection. Special thanks for handling everything so professionally.",
            rating: 4,
        },
        {
            name: "Karan Malhotra",
            review:
                "Amazing experience! Value for money and excellent service throughout the journey.",
            rating: 5,
        },
        {
            name: "Sneha Kapoor",
            review:
                "Our family trip was memorable and stress-free. Will definitely book again.",
            rating: 5,
        },
        {
            name: "Vikas Jain",
            review:
                "Well-planned trip with great attention to detail. Truly enjoyed every moment.",
            rating: 4,
        },
    ];

    return (
        <div className="container my-5 reviewsSection">
            {/* Heading */}
            <div className="row align-items-center mb-4">
                <div className="col-sm-6">
                    <h3 className="fw_600 mb-1">Reviews</h3>
                    <p className="text-muted mb-0">
                        What our travellers say about their journey with us
                    </p>
                </div>
                <div className="col-sm-6 text-end">
                    <button
                        ref={prevRef}
                        className="custom-prev navsBtns btn btn-outline-secondary me-2"
                    >
                        <i className="fa-solid fa-angle-left"></i>
                    </button>
                    <button
                        ref={nextRef}
                        className="custom-next navsBtns btn btn-outline-secondary"
                    >
                        <i className="fa-solid fa-angle-right"></i>
                    </button>
                </div>
            </div>

            {/* Slider */}
            <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                loop={true}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                }}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    1024: { slidesPerView: 2 },
                    1280: { slidesPerView: 3 },
                }}
            >
                {reviews.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="reviewCard p-4 h-100">
                            {/* Stars */}
                            <div className="mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <i
                                        key={i}
                                        className={`fa-star ${i < item.rating
                                            ? "fa-solid text-warning"
                                            : "fa-regular text-muted"
                                            }`}
                                    ></i>
                                ))}
                            </div>

                            {/* Quote */}
                            <div className="mb-3">
                                <i className="fa-solid fa-quote-left text-muted"></i>
                            </div>

                            {/* Review */}
                            <p className="reviewText mb-4">
                                {item.review}
                            </p>

                            {/* Name */}
                            <h6 className="fw_600 mb-0">{item.name}</h6>
                            <small className="text-muted">Traveller</small>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
