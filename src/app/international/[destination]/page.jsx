import { BASE_PATH } from "@/lib/basePath";
import tripsDataRaw from "@/data/InternationalPackages.json";
import Link from "next/link";
import EnquiryForm from '../../../components/Enquiryform';

/* ✅ REQUIRED FOR output: export */
export async function generateStaticParams() {
    const destinations = new Set();

    Object.values(tripsDataRaw).forEach((trip) => {
        if (trip.type === "international") {
            destinations.add(trip.destination.toLowerCase());
        }
    });

    return Array.from(destinations).map((destination) => ({
        destination,
    }));
}

export default function DestinationPage({ params }) {
    const { destination } = params;

    const destinationName = destination.replace(/-/g, " ").toLowerCase();

    const packages = Object.values(tripsDataRaw).filter(
        (trip) =>
            trip.type === "international" &&
            trip.destination.toLowerCase() === destinationName
    );

    if (!packages.length) {
        return (
            <div className="container my-5 text-center">
                <h2>No packages found for {destination}</h2>
            </div>
        );
    }

    return (
        <div className="container my-5">
            {/* Heading */}
            <div className="text-center mb-5">
                <h1 className="fw_600 text-capitalize">
                    {packages[0].destination} Tour Packages
                </h1>
                <p className="text-muted">
                    Explore all available packages for {packages[0].destination}
                </p>
            </div>

            {/* Packages Grid */}
            <div className="row g-4">
                <div className="col-md-8">
                    <div className="row">

                        {packages.map((trip) => (
                            <div className="col-md-6 mb-3" key={trip.path}>
                                <Link
                                    href={`/internationalpackages/${trip.path}`}
                                    className="sliderPackage"
                                >
                                    <div className="package h-100 mt-0">
                                        <div
                                            className="packageCard text-white"
                                            style={{
                                                backgroundImage: `url(${BASE_PATH}/images/international/${trip.image}.webp)`,
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                                position: "relative",
                                                overflow: "hidden",
                                                width: "auto"
                                            }}
                                        />
                                        <div className="packageBody">
                                            <div className="detail">
                                                <h2 className="card-title fw_600 mb-0">
                                                    {trip.title}
                                                </h2>
                                                <p className="card-text">
                                                    {trip.duration}
                                                </p>
                                            </div>
                                            <h2 className="card-text mb-0 mt-3">
                                                Price: {trip.price}
                                            </h2>
                                        </div>
                                        {/* <div className="packageBody p-3">
                                    <h5 className="fw_600 mb-1">
                                        {trip.title}
                                    </h5>
                                    <p className="mb-1">{trip.duration}</p>
                                    <p className="fw_600 mb-0">
                                        {trip.price}
                                    </p>
                                </div> */}
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-md-4">
                    <EnquiryForm />
                </div>
            </div>
        </div>
    );
}
