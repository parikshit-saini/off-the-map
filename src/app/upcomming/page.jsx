"use client";

import tripsData from "../../data/upcomingTrips.json";

export default function UpcomingTripsGrid() {
    return (
        <div className="container upcommingTrips my-5">
            <div className="row align-items-center mb-3">
                <div className="col">
                    <h3 className="fw_600">Upcoming Trips</h3>
                </div>
                <div className="col text-end">
                    <a href="" className="btn btn-basic">See All</a>
                </div>
            </div>

            <div className="row g-4">
                {tripsData.map((trip) => (
                    <div className="col-12 col-sm-6 col-lg-3" key={trip.id}>
                        <a href={trip.link}>
                            <div
                                className="card h-100 text-white"
                                style={{
                                    backgroundImage: `url(/images/${trip.image}.webp)`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    minHeight: "400px",
                                    position: "relative",
                                    borderRadius: "40px",
                                    overflow: "hidden",
                                }}
                            >
                                <div className="card-body d-flex flex-column justify-content-end bg-dark bg-opacity-50 rounded">
                                    <h4 className="card-title fw-bold mb-0">{trip.title}</h4>
                                    <p className="card-text">{trip.text}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
