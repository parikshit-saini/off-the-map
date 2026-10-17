"use client";

import { BASE_PATH, withBase } from "@/lib/basePath";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useRef } from "react";
import tripsData from "../../data/upcomingTrips.json"; // ✅ Import JSON

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function UpcomingTrips() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div className="container upcommingTrips my-5 border-bottom pb-5">
            <div className="row align-items-center mb-3">
                <div className="col-sm-6">
                    <h3 className="fw_600">Upcoming Trips</h3>
                </div>
                <div className="col-sm-6 text-end">
                    {/* Custom navigation buttons */}
                    <a href={withBase("/upcomming")} className="btn btn-basic me-3">See All</a>

                    <button ref={prevRef} className="custom-prev navsBtns btn btn-outline-secondary me-2">
                        <i className="fa-solid fa-angle-left"></i>
                    </button>
                    <button ref={nextRef} className="custom-next navsBtns btn btn-outline-secondary">
                        <i className="fa-solid fa-angle-right"></i>
                    </button>
                </div>
            </div>

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
                    1280: { slidesPerView: 4 },
                }}

            >
                {tripsData.map((trip) => (
                    <SwiperSlide key={trip.id}>
                        <a href={trip.link}>
                            <div
                                className="card  h-100 text-white"
                                style={{
                                    backgroundImage: `url(${BASE_PATH}/images/${trip.image}.webp)`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    minHeight: "300px",
                                    position: "relative",
                                    borderRadius: "40px",

                                    overflow: "hidden"
                                }}
                            >
                                <div className="card-body d-flex flex-column justify-content-end bg-dark bg-opacity-50 rounded">
                                    <h4 className="card-title fw-bold mb-0">{trip.title}</h4>
                                    <p className="card-text">{trip.text}</p>

                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>


        </div>
    );
}
