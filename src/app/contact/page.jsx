import Enquiryform from "@/components/Enquiryform";

export const metadata = {
    title: "Contact Us | Off The Map – Travel Experts in India",
    description:
        "Contact Off The Map for customized travel packages, expert holiday planning and complete travel assistance across India and international destinations.",
    keywords: [
        "contact Off The Map",
        "Off The Map contact",
        "travel agency contact India",
        "custom tour packages India",
        "holiday planning experts",
        "international travel assistance",
        "domestic tour planning",
        "travel consultation India"
    ],
    alternates: {
        canonical: "https://offthemap.co.in/contact",
    },
    openGraph: {
        title: "Contact Off The Map – Let’s Plan Your Next Journey",
        description:
            "Get in touch with Off The Map travel experts for personalized itineraries, best deals and end-to-end travel support.",
        url: "https://offthemap.co.in/contact",
        siteName: "Off The Map",
        images: [
            {
                url: "https://offthemap.co.in/images/Traveling-cuate.svg",
                width: 1200,
                height: 630,
                alt: "Contact Off The Map Travel Company",
            },
        ],
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Off The Map – Travel Experts",
        description:
            "Planning a trip? Contact Off The Map for customized travel itineraries and expert guidance.",
        images: ["https://offthemap.co.in/images/Traveling-cuate.svg"],
    },
};

export default function ContactPage() {
    return (
        <main className="contactPage">
            {/* ================= HERO ================= */}
            <section className="contactHero">
                <div className="container text-center">
                    <h1 className="fw_600">Contact Us</h1>
                    <p>
                        Let’s plan something unforgettable together.
                        Our travel experts are just a call away.
                    </p>
                </div>
            </section>

            {/* ================= CONTACT INFO ================= */}
            <section className="contactInfoSection">
                <div className="container">
                    <div className="row g-4 justify-content-center">
                        <div className="col-md-4">
                            <a href="mailto:travel@offthemap.co.in">  <div className="contactCard">
                                <span className="icon"><i className="fa-regular fa-envelope"></i></span>
                                <h5>Email Us</h5>
                                <p>travel@offthemap.co.in</p>
                            </div></a>
                        </div>

                        <div className="col-md-4">
                            <a href="tel:+91 7328808726">
                                <div className="contactCard">
                                    <span className="icon"><i className="fa-solid fa-mobile-screen"></i></span>
                                    <h5>Call Us</h5>
                                    <p>+91 7328808726</p>
                                </div></a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= FORM SECTION ================= */}
            <section className="contactFormSection">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-5">
                            <div className="formContent">
                                <h2 className="fw_600">
                                    Tell Us About Your Trip
                                </h2>
                                <p>
                                    Share your travel plans and preferences.
                                    We’ll get back with a customized itinerary
                                    tailored just for you.
                                </p>

                                <ul className="highlights">
                                    <li>✔ Custom travel planning</li>
                                    <li>✔ Best price guarantee</li>
                                    <li>✔ End-to-end support</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-7">
                            {/* 🔽 Your existing enquiry form */}
                            <Enquiryform autoFillDestination={false} />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
