import { withBase } from "@/lib/basePath";
export const metadata = {
    title: "About Us | Off The Map – Crafting Meaningful Travel Experiences",
    description:
        "Learn about Off The Map – a trusted travel company in India creating personalized, safe and unforgettable domestic and international travel experiences.",
    keywords: [
        "Off The Map",
        "Off The Map travel company",
        "about Off The Map",
        "travel agency India",
        "custom travel packages India",
        "international tour packages",
        "domestic tour packages",
        "personalized travel experiences",
        "trusted travel planners",
        "holiday planning company"
    ],
    alternates: {
        canonical: "https://offthemap.co.in/about",
    },
    openGraph: {
        title: "About Off The Map – Travel Beyond Boundaries",
        description:
            "Off The Map is a passionate travel company offering curated, personalized and unforgettable journeys across India and the world.",
        url: "https://offthemap.co.in/about",
        siteName: "Off The Map",
        images: [
            {
                url: "https://offthemap.co.in/images/Traveling-cuate.svg",
                width: 1200,
                height: 630,
                alt: "Off The Map Travel Company",
            },
        ],
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "About Off The Map – Travel Beyond Boundaries",
        description:
            "Discover the story behind Off The Map, a trusted Indian travel company creating meaningful travel experiences.",
        images: ["https://offthemap.co.in/images/Traveling-cuate.svg"],
    },
};

export default function About() {
    const travel = withBase("/images/Traveling-cuate.svg")
    const travel2 = withBase("/images/Traveling-rafiki.svg")
    const Trippana = withBase("/images/Trip-pana.svg")

    const items = [
        {
            text: 'A trusted team available 24×7',
            icon: 'fa-regular fa-clock',
        },
        {
            text: 'Carefully researched destinations',
            icon: 'fa-solid fa-magnifying-glass-location',
        },
        {
            text: 'Reliable transportation & handpicked stays',
            icon: 'fa-solid fa-route',
        },
        {
            text: 'Transparent communication',
            icon: 'fa-regular fa-comments',
        },
        {
            text: 'Experienced guides & local coordinators',
            icon: 'fa-solid fa-user-tie',
        },
        {
            text: 'Safe and comfortable arrangements',
            icon: 'fa-solid fa-shield-heart',
        },
        {
            text: 'Exclusive monthly offers and curated itineraries',
            icon: 'fa-solid fa-gift',
        },
        {
            text: 'Personalised itineraries tailored to you',
            icon: 'fa-solid fa-wand-magic-sparkles',
        },
    ];

    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center mt-5">
                            <h1>About Us</h1>
                            <h3>Crafting Journeys That Turn Into Timeless Tales</h3>
                            <p className="mw_lg my-4">At Off The Map, we believe that every journey has the power to change you. Whether it’s the stillness of the mountains, the thrill of a jungle trail, the serenity of a pilgrimage, or the joy of discovering a new culture — travel has a way of staying with you forever.</p>
                            <p className="mw_lg my-4">We are a passionate travel company from India, committed to creating experiences that go far beyond typical itineraries. Every trip we design is crafted thoughtfully, personally andwith a deep understanding of what truly matters to today’s traveler.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 center_center">
                            <div>
                                <h1>Who We Are</h1>
                                <p>Off The Map is a dedicated team of explorers, travel planners andadventure enthusiasts who live and breathe travel.</p>
                                <p>From the vibrant landscapes of India to unforgettable international getaways, our team brings years of on-ground expertise, local connections andinsider knowledge to curate journeys that feel authentic, safe andseamless.</p>
                                <p>What began as a simple idea — to help people travel differently — has now grown into one of Odisha’s trusted travel partners, known for quality service, transparent communication andunforgettable experiences.</p>
                            </div>

                        </div>
                        <div className="col-md-6 center_center">
                            <img src={travel} alt="" className="w-75" />
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-12 text-center">
                            <h1>Our Philosophy</h1>
                            <h2>Travel Beyond Boundaries.</h2>
                            <p className="mb-4">We don’t just plan trips — we help you immerse in the soul of a destination.</p>
                        </div>
                    </div>
                    <div className="row philosophy">
                        <div className="col-md-4">
                            <div className="content">
                                <h4>Authenticity</h4>
                                <p>Connect with the culture, people andstories that make a place unique.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="content">
                                <h4>Safety & Comfort</h4>
                                <p>Your peace of mind always comes first.</p>

                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="content">
                                <h4>Personalisation</h4>
                                <p>No two travelers are the same — and neither are our itineraries.</p>
                            </div>
                        </div>
                        <div className="col-12 text-center my-4">
                            <p>From quiet escapes to adrenaline-filled adventures, we tailor every detail to match your interests, comfort level anddreams.</p>
                        </div>
                    </div>
                    <div className="row py-5">
                        <div className="col-md-8 center_center">
                            <div>

                                <h1>Why We Exist</h1>
                                <p className="fw_600">Because travel is not a checklist — it’s a story waiting to unfold.</p>
                                <p>We started Off The Map to help people experience travel the right way:
                                    Deeply. Respectfully. Joyfully.</p>

                                <h3>Our mission is simple:</h3>

                                <p className="fw_600">to offer meaningful travel experiences that leave you with memories richer than souvenirs.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div>
                                <img src={travel2} alt="" className="w-100" />

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1>Our Commitment</h1>
                            <p>When you travel with <span className="fw_600">Off The Map</span> , you get more than just a trip:</p>
                        </div>
                    </div>
                    <div className="row Commitment my-5">
                        {items.map((item, idx) => (
                            <div className="col-md-3 col-sm-6 my-5" key={idx}>
                                <div className="content shadow">
                                    <div className="icon shadow">
                                        <i className={item.icon} />
                                    </div>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="row py-5">
                        <div className="col-md-6 center_center">
                            <div>
                                <h1>The Journey Ahead</h1>
                                <p>As we continue to grow across India and beyond, our vision remains constant:</p>
                                <p><i>to become one of the most loved and trusted travel companions for explorers across the world.</i></p>
                                <p>At Off The Map, we don’t just show you the world </p>
                                <p className="fw_600">we help you experience it in ways you’ll never forget.</p>

                            </div>
                        </div>
                        <div className="col-md-6 center_center">
                            <img src={Trippana} alt="" className="w-75" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}