import { withBase } from "@/lib/basePath";
/* ================= SEO METADATA ================= */
export const metadata = {
    title: "Our Services | Off The Map – Travel Experiences Crafted for You",
    description:
        "Explore Off The Map’s travel services including adventure tourism, domestic & international travel packages, spiritual tours, customized itineraries and 24×7 travel support.",
    keywords: [
        "travel services India",
        "Off The Map services",
        "adventure tourism India",
        "custom travel packages",
        "international tour packages",
        "domestic tour packages India",
        "religious tour packages",
        "customised travel planning",
        "travel agency services",
        "holiday planning experts India"
    ],
    alternates: {
        canonical: "https://offthemap.co.in/services",
    },
    openGraph: {
        title: "Our Travel Services | Off The Map",
        description:
            "From adventure tourism to luxury international holidays, explore travel services designed to match your style, comfort and dreams.",
        url: "https://offthemap.co.in/services",
        siteName: "Off The Map",
        images: [
            {
                url: "https://offthemap.co.in/images/services/adventure.jpg",
                width: 1200,
                height: 630,
                alt: "Off The Map Travel Services",
            },
        ],
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Travel Services by Off The Map",
        description:
            "Adventure, spiritual journeys, domestic & international travel – explore services crafted by Off The Map travel experts.",
        images: ["https://offthemap.co.in/images/services/adventure.jpg"],
    },
};
/* ================================================= */

export default function Services() {
    const adventure = withBase("/images/services/adventure.jpg")
    const services = [
        {
            key: 'adventure',
            title: 'Adventure Tourism',
            subtitle: 'For the Thrill-Seekers and Nature Lovers',
            description:
                'Step out of the ordinary and dive into raw, breathtaking adventure. Our adventure tourism experiences are designed to challenge, excite andinspire.',
            sections: [
                {
                    heading: "What's included:",
                    items: [
                        'Mountain trekking & high-altitude expeditions',
                        'Jungle safaris & wildlife exploration',
                        'River rafting, kayaking & water sports',
                        'Rock climbing, rappelling & bouldering',
                        'Cave explorations & offbeat trails',
                        'Camping under the stars',
                        'Experienced local guides & safety support',
                    ],
                },
            ],
            footer:
                "Whether you’re a beginner or an experienced adventurer, we customise every journey to match your comfort and skill level.",
            image: 'adventure', // replace with adventureImg
        },
        {
            key: 'religious',
            title: 'Religious & Spiritual Tours',
            subtitle: 'Sacred Journeys, Guided with Care',
            description:
                'Reconnect with your spiritual roots through thoughtfully planned pilgrimage tours that offer comfort, guidance andmeaningful experiences.',
            sections: [
                {
                    heading: 'Popular experiences:',
                    items: [
                        'Char Dham Yatra',
                        'Amarnath Yatra',
                        'Kedarnath–Badrinath Darshan',
                        'Jagannath Puri Darshan',
                        'Vaishno Devi Yatra',
                        'Custom temple tours across India',
                    ],
                },
            ],
            footer:
                'We handle transportation, accommodation, guidance, special assistance andsafe arrangements—so you can focus fully on devotion and inner peace.',
            image: 'religious', // replace with religiousImg
        },
        {
            key: 'domestic',
            title: 'Domestic Travel Packages (India)',
            subtitle: 'Explore the Beauty of India, Your Way',
            description:
                'From snow-clad mountains to golden deserts, spiritual towns to tropical beaches — India has endless stories to unfold. We help you experience them all.',
            sections: [
                {
                    heading: 'We curate travel across:',
                    items: [
                        'Himachal & Uttarakhand',
                        'Rajasthan',
                        'Kerala & South India',
                        'Goa',
                        'North East India',
                        'Maharashtra, Odisha & Central India',
                    ],
                },
                {
                    heading: 'Perfect for:',
                    items: [
                        'Family trips',
                        'Group tours',
                        'Honeymoons',
                        'Weekend getaways',
                        'Off-beat experiential stays',
                    ],
                },
            ],
            footer:
                'Comfortable stays, curated activities andsmooth travel — all managed end-to-end.',
            image: 'domestic', // replace with domesticImg
        },
        {
            key: 'international',
            title: 'International Travel Packages',
            subtitle: 'Your Gateway to the World',
            description:
                'Travel beyond borders with thoughtfully designed international holidays. From luxury escapes to budget-friendly adventures, we cover it all.',
            sections: [
                {
                    heading: 'Popular destinations:',
                    items: [
                        'Dubai, Abu Dhabi',
                        'Thailand, Singapore, Malaysia',
                        'Bali',
                        'Europe',
                        'Maldives & Mauritius',
                    ],
                },
            ],
            footer:
                'Includes: flights, visa assistance, hotels, sightseeing, transfers & personalised itineraries. Travel confidently with our global partners and trusted network.',
            image: 'international', // you used `adventure` in your sample – replace with internationalImg if needed
        },
        {
            key: 'local-cultural',
            title: 'Local & Cultural Experience Tours',
            subtitle: 'Experience the Soul of Every Destination',
            description:
                'For travellers who seek more than sightseeing, our cultural immersion experiences offer a deep connection with local life.',
            sections: [
                {
                    heading: 'Activities include:',
                    items: [
                        'Homestays with local families',
                        'Traditional cooking & craft workshops',
                        'Village tours & cultural interactions',
                        'Heritage walks & storytelling experiences',
                        'Eco-tourism & community-based travel',
                        'Responsible travel opportunities',
                    ],
                },
            ],
            footer: 'These journeys let you live a place, not just visit it.',
            image: 'local', // replace with localImg
        },
        {
            key: 'customised',
            title: 'Customized Travel Planning',
            subtitle: 'Travel Designed Exactly the Way You Imagine',
            description:
                'From solo trips to group tours, from honeymoons to corporate retreats — we create fully personalised itineraries based on your preferences.',
            sections: [
                {
                    heading: 'We offer:',
                    items: [
                        'Tailor-made travel plans',
                        'Custom accommodation options',
                        'Flexible sightseeing schedules',
                        'Private transfers & guided tours',
                        'Budget-friendly to premium luxury options',
                        'Special arrangements for seniors & kids',
                    ],
                },
            ],
            footer: 'Tell us your dream trip — we’ll plan the perfect version of it.',
            image: 'custom', // replace with customImg
        },
        {
            key: 'accommodation',
            title: 'Accommodation Assistance',
            subtitle: 'Handpicked Stays for Every Type of Traveler',
            description:
                'We partner with hotels, resorts, boutique properties andAirbnb stays to offer comfortable, safe andmemorable accommodation options.',
            sections: [
                {
                    heading: 'Types of stays available:',
                    items: [
                        'Budget to luxury hotels',
                        'Resorts & villas',
                        'Heritage properties',
                        'Eco-stays',
                        'Homestays',
                        'Airbnb curated stays',
                    ],
                },
            ],
            footer:
                'Every stay is chosen for quality, cleanliness, safety andexperience.',
            image: 'stay', // replace with stayImg
        },
        {
            key: 'support',
            title: '24×7 Travel Support',
            subtitle: 'You Travel. We Handle Everything Else.',
            description:
                'Our team is available round-the-clock for any assistance you may need while traveling.',
            sections: [
                {
                    heading: 'Our team is available round-the-clock for:',
                    items: [
                        'On-trip assistance',
                        'Emergency support',
                        'Route guidance',
                        'Real-time coordination',
                        'Changes & updates in itinerary',
                    ],
                },
            ],
            footer:
                'Travel stress-free knowing a dedicated team is always there for you.',
            image: 'support', // replace with supportImg
        },
    ];
    return (
        <>
            <section>
                {/* <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1>Our Services</h1>
                            <h3>Discover Experiences That Go Beyond the Ordinary</h3>
                            <p className="mw_lg my-4">At Off The Map, we design travel experiences that are meaningful, memorable andcrafted with care.
                                Whether you seek adventure, peace, culture, or luxury — our services are built to help you explore the world in your own unique way.</p>
                            <p className="mw_lg my-4">Every journey we curate is powered by expert planning, reliable support anda deep passion for travel.</p>
                        </div>
                    </div>
                    <div className="row service">
                        <div className="col-md-6 center_center">
                            <div>
                                <h2>Adventure Tourism</h2>
                                <h4>For the Thrill-Seekers and Nature Lovers</h4>
                                <p>Step out of the ordinary and dive into raw, breathtaking adventure. Our adventure tourism experiences are designed to challenge, excite andinspire.</p>
                                <h5>What’s included:</h5>
                                <ul>
                                    <li> Mountain trekking & high-altitude expeditions</li>
                                    <li> Jungle safaris & wildlife exploration</li>
                                    <li> River rafting, kayaking & water sports</li>
                                    <li>  Rock climbing, rappelling & bouldering</li>
                                    <li>  Cave explorations & offbeat trails</li>
                                    <li>  Camping under the stars</li>
                                    <li>  Experienced local guides & safety support</li>
                                </ul>
                                <p>Whether you’re a beginner or an experienced adventurer, we customise every journey to match your comfort and skill level.</p>
                            </div>
                        </div>
                        <div className="col-md-6 center_center">
                            <img src={adventure} alt="" className="w-75" />
                        </div>
                    </div>

                    <div className="row service">
                        <div className="col-md-6 center_center">
                            <div>
                                <h2>Religious & Spiritual Tours</h2>
                                <h4>Sacred Journeys, Guided with Care</h4>
                                <p>Reconnect with your spiritual roots through thoughtfully planned pilgrimage tours that offer comfort, guidance andmeaningful experiences.</p>
                                <h5>Popular experiences:</h5>
                                <ul>
                                    <li>Char Dham Yatra</li>
                                    <li>Amarnath Yatra</li>
                                    <li>Kedarnath–Badrinath Darshan</li>
                                    <li>Jagannath Puri Darshan</li>
                                    <li>Vaishno Devi Yatra</li>
                                    <li>Custom temple tours across India</li>
                                </ul>
                                <p>We handle transportation, accommodation, guidance, special assistance andsafe arrangements so you can focus fully on devotion and inner peace.</p>
                            </div>
                        </div>
                        <div className="col-md-6 center_center">
                            <img src={adventure} alt="" className="w-75" />
                        </div>
                    </div>


                    <div className="row service">
                        <div className="col-md-6 center_center">
                            <div>
                                <h2>Domestic Travel Packages (India)</h2>
                                <h4>Explore the Beauty of India, Your Way</h4>
                                <p>From snow-clad mountains to golden deserts, spiritual towns to tropical beaches — India has endless stories to unfold. We help you experience them all.</p>
                                <h5>We curate travel across:</h5>
                                <ul>
                                    <li>Himachal & Uttarakhand</li>
                                    <li>Rajasthan</li>
                                    <li>Kerala & South India</li>
                                    <li>Goa</li>
                                    <li>North East India</li>
                                    <li>Maharashtra, Odisha & Central India</li>
                                </ul>
                                <h5>Perfect for:</h5>
                                <ul>
                                    <li>Family trips</li>
                                    <li>Group tours</li>
                                    <li>Honeymoons</li>
                                    <li>Weekend getaways</li>
                                    <li>Off-beat experiential stays</li>
                                </ul>
                                <p>Comfortable stays, curated activities andsmooth travel — all managed end-to-end.</p>
                            </div>
                        </div>
                        <div className="col-md-6 center_center">
                            <img src={adventure} alt="" className="w-75" />
                        </div>
                    </div>

                    <div className="row service">
                        <div className="col-md-6 center_center">
                            <div>
                                <h2>International Travel Packages</h2>
                                <h4>Your Gateway to the World</h4>
                                <p>Travel beyond borders with thoughtfully designed international holidays. From luxury escapes to budget-friendly adventures, we cover it all.</p>
                                <h5>Popular destinations:</h5>
                                <ul>
                                    <li>   Dubai, Abu Dhabi</li>
                                    <li>Thailand, Singapore, Malaysia</li>
                                    <li>Bali</li>
                                    <li>Europe</li>
                                    <li>Maldives & Mauritius</li>
                                </ul>
                                <p>Includes: flights, visa assistance, hotels, sightseeing, transfers & personalised itineraries.

                                    Travel confidently with our global partners and trusted network.</p>
                            </div>
                        </div>
                        <div className="col-md-6 center_center">
                            <img src={adventure} alt="" className="w-75" />
                        </div>
                    </div>

                </div> */}
                <div className="container">
                    {services.map((service) => (
                        <div className="row service" key={service.key}>
                            <div className="col-md-6 center_center">
                                <div>
                                    <h1>{service.title}</h1>
                                    <h4>{service.subtitle}</h4>
                                    <p>{service.description}</p>

                                    {service.sections.map((section) => (
                                        <div key={section.heading}>
                                            <h5>{section.heading}</h5>
                                            <ul>
                                                {section.items.map((item, idx) => (
                                                    <li key={idx}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}

                                    {service.footer && <p>{service.footer}</p>}
                                </div>
                            </div>

                            <div className="col-md-6 center_center">
                                {/* Replace `service.image` with actual imported variable (e.g. adventureImg) */}
                                <img src={withBase(`/images/services/${service.image}.png`)} alt={service.title} className="w-75" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}