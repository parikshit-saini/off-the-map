"use client";

import { BASE_PATH, withBase } from "@/lib/basePath";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef } from "react";
import tripsDataRaw from "../../data/DomesticPackages.json"; // ✅ Import Domestic JSON

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function DomesticPackages() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    /* STEP 1: Only domestic trips */
    const domesticTrips = Object.values(tripsDataRaw).filter(
        (trip) => trip.type === "domestic"
    );

    /* STEP 2: Count packages per destination */
    const destinationCountMap = domesticTrips.reduce((acc, trip) => {
        const destination = trip.destination.toLowerCase();
        acc[destination] = (acc[destination] || 0) + 1;
        return acc;
    }, {});

    /* STEP 3: One card per destination */
    const tripsByDestination = Object.values(
        domesticTrips.reduce((acc, trip) => {
            const destination = trip.destination.toLowerCase();

            if (!acc[destination]) {
                acc[destination] = {
                    destination: trip.destination, // display
                    destinationSlug: destination,  // url
                    image: trip.image,
                    price: trip.price,
                    duration: trip.duration,
                    path: trip.path,               // detail page
                };
            }
            return acc;
        }, {})
    );
    return (
        <div className="container upcommingTrips my-5">
            <div className="row align-items-center mb-3">
                <div className="col-sm-6">
                    <h3 className="fw_600">Domestic Trips</h3>
                </div>
                <div className="col-sm-6 text-end">
                    <a href={withBase("/domestic")} className="btn btn-basic me-3">
                        See All
                    </a>
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
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 4 },
                }}
            >
                {tripsByDestination.map((trip) => {
                    const hasMultiplePackages =
                        destinationCountMap[trip.destinationSlug] > 1;

                    const redirectUrl = hasMultiplePackages
                        ? withBase(`/domestic/${trip.destinationSlug}`)
                        : withBase(`/domesticpackages/${trip.path}`);

                    return (
                        <SwiperSlide key={trip.destinationSlug}>
                            <a href={redirectUrl} className="sliderPackage">
                                <div className="package">
                                    <div
                                        className="packageCard text-white"
                                        style={{
                                            backgroundImage: `url(${BASE_PATH}/images/domestic/${trip.image}.webp)`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                            position: "relative",
                                            overflow: "hidden",
                                        }}
                                    />
                                    <div className="packageBody">
                                        <div className="detail">
                                            <h2 className="card-title fw_600 mb-0">
                                                {trip.destination}
                                            </h2>
                                            <p className="card-text">
                                                {trip.duration}
                                            </p>
                                        </div>
                                        <h2 className="card-text mb-0 mt-3">
                                            Price: {trip.price}
                                        </h2>
                                    </div>
                                </div>
                            </a>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}