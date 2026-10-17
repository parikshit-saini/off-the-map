"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const videos = [
    {
        id: 1,
        title: "Video 1",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
        id: 2,
        title: "Video 2",
        url: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
    },
    {
        id: 3,
        title: "Video 3",
        url: "https://www.youtube.com/embed/aqz-KE-bpKQ",
    },
    {
        id: 4,
        title: "Video 4",
        url: "https://www.youtube.com/embed/aqz-KE-bpKQ",
    },
    {
        id: 5,
        title: "Video 5",
        url: "https://www.youtube.com/embed/aqz-KE-bpKQ",
    },
    {
        id: 6,
        title: "Video 6",
        url: "https://www.youtube.com/embed/aqz-KE-bpKQ",
    },
];

export default function YoutubeVideos() {
    return (
        <div className="container my-4">
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                navigation
                pagination={{ clickable: true }}
                loop={true}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    1024: { slidesPerView: 2 },
                    1280: { slidesPerView: 4 },
                }}
                onSlideChange={(swiper) => {
                    // Pause videos when slide changes
                    const iframes = swiper.slides
                        .map((slide) => slide.querySelector("iframe"))
                        .filter(Boolean);

                    iframes.forEach((iframe) => {
                        const src = iframe.getAttribute("src");
                        iframe.setAttribute("src", src); // Reset src to stop playback
                    });
                }}
                className="rounded shadow p-2"
            >
                {videos.map((video) => (
                    <SwiperSlide key={video.id}>
                        <div className="ratio ratio-16x9">
                            <iframe
                                className="rounded"
                                src={video.url}
                                title={video.title}
                                style={{ border: 0 }}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
