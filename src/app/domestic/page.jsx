"use client";

import tripsDataRaw from "../../data/DomesticPackages.json";

export default function Domestic() {
    // Convert object to array & filter domestic packages
    const tripsData = Object.values(tripsDataRaw).filter(
        (trip) => trip.type === "domestic"
    );

    return (
        <div className="container my-5">
            <div className="row align-items-center mb-3">
                <div className="col">
                    <h3 className="fw_600">Domestic Trips</h3>
                </div>
            </div>

            <div className="row g-4">
                {tripsData.map((trip) => (
                    <div className="col-12 col-sm-6 col-lg-3" key={trip.id}>
                        <a href={`/domesticpackages/${trip.path}`}>
                            <div
                                className="card text-white"
                                style={{
                                    backgroundImage: `url(/images/domestic/${trip.image}.webp)`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    minHeight: "250px",
                                    position: "relative",
                                    borderRadius: "40px",
                                    overflow: "hidden",
                                }}
                            >
                                <div className="allcard card-body d-flex flex-column justify-content-end bg-dark bg-opacity-50 rounded">
                                    <h4 className="card-title fw_600 mb-0">{trip.title}</h4>
                                    <p className="card-text">{trip.duration}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
