"use client";

const faqData = [
    {
        id: "one",
        question: "What services does your travel agency provide?",
        answer:
            "We offer complete travel solutions including flight bookings, hotel reservations, holiday packages, visa assistance, travel insurance, cruises, honeymoon packages, group tours, corporate travel, and customized itineraries.",
    },
    {
        id: "two",
        question: "How do I book a holiday package?",
        answer: (
            <>
                <p>You can book a holiday package by:</p>
                <ul className="mb-0">
                    <li>Filling out the enquiry form on our website</li>
                    <li>Calling or WhatsApping our travel experts</li>
                    <li>Emailing us your travel requirements</li>
                </ul>
                <p className="mt-2 mb-0">
                    Our team will then share a personalized quote with you.
                </p>
            </>
        ),
    },
    {
        id: "three",
        question: "Do you assist with visa processing?",
        answer:
            "Yes, we provide visa guidance and assistance for tourist visas, business visas, and group visas for multiple destinations. Final approval is subject to embassy or consulate rules.",
    },
    {
        id: "four",
        question: "What payment methods do you accept?",
        answer:
            "We accept bank transfers, credit/debit cards, UPI, and other online payment methods. Payment terms may vary depending on the package and destination.",
    },
];

export default function Faq() {
    return (
        <section className="container my-5 faqSection">
            {/* Heading */}
            <div className="text-center mb-4">
                <h3 className="fw_600 mb-2">Frequently Asked Questions</h3>
                <p className="text-muted">
                    Everything you need to know before planning your trip
                </p>
            </div>

            {/* Accordion */}
            <div className="accordion accordion-flush" id="faqAccordion">
                {faqData.map((item, index) => (
                    <div className="accordion-item" key={item.id}>
                        <h2
                            className="accordion-header"
                            id={`faqHeading-${item.id}`}
                        >
                            <button
                                className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#faqCollapse-${item.id}`}
                            >
                                {item.question}
                            </button>
                        </h2>

                        <div
                            id={`faqCollapse-${item.id}`}
                            className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body">
                                {item.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
