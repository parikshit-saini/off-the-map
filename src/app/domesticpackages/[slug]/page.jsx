import { BASE_PATH, withBase } from "@/lib/basePath";
import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import domesticData from '../../../data/DomesticPackages.json';
import EnquiryForm from '../../../components/Enquiryform';

// ---- Helpers ----
function normalizeTours(data) {
    const list = Array.isArray(data) ? data : Object.values(data || {});
    return list.map((pkg) => ({
        slug: pkg?.path, // package detail slug
        data: pkg,
    }));
}

function getPackagesByDestination(slug, list) {
    const s = (slug || '').toLowerCase();
    return list.filter((t) => (t.data?.destination || '').toLowerCase() === s);
}

function getUniqueDestinationSlugs(list) {
    const set = new Set(
        list
            .map((t) => (t.data?.destination || '').toLowerCase())
            .filter(Boolean)
    );
    return Array.from(set);
}

const tours = normalizeTours(domesticData);

// ---- Metadata (single export) ----
export function generateMetadata({ params }) {
    const { slug } = params;

    // Package detail page?
    const tour = tours.find((t) => t.slug === slug);

    if (tour) {
        const { title, seo = {}, image } = tour.data || {};

        const metaTitle =
            seo.metaTitle || title || 'Tour Package';

        const metaDescription =
            seo.metaDescription ||
            `${title || 'Tour Package'} – plan your holiday with detailed itinerary, inclusions and food guide.`;

        const metaKeywords =
            Array.isArray(seo.metaKeywords) && seo.metaKeywords.length > 0
                ? seo.metaKeywords.join(', ')
                : undefined;

        const canonicalUrl =
            seo.canonicalUrl || `/domesticpackages/${slug}/`;

        const ogTitle =
            seo.ogTitle || metaTitle;

        const ogDescription =
            seo.ogDescription || metaDescription;

        const ogImage =
            seo.ogImage || withBase(`/images/domestic/${image || 'bali'}.webp`);

        return {
            title: metaTitle,
            description: metaDescription,
            keywords: metaKeywords,
            alternates: {
                canonical: canonicalUrl,
            },
            openGraph: {
                title: ogTitle,
                description: ogDescription,
                url: canonicalUrl,
                images: [ogImage],
            },
        };
    }

    // Destination landing page?
    const destinationPackages = getPackagesByDestination(slug, tours);
    if (destinationPackages.length > 0) {
        const destName = slug.charAt(0).toUpperCase() + slug.slice(1);
        const firstImg = destinationPackages[0]?.data?.image || 'bali';

        const desc = `Explore ${destName} tour packages with detailed itineraries, pricing, inclusions and best travel seasons.`;

        return {
            title: `${destName} Tour Packages`,
            description: desc,
            keywords: `${destName} tour packages, ${destName} holiday packages, ${destName} travel itinerary`,
            alternates: {
                canonical: `/domesticpackages/${slug}/`,
            },
            openGraph: {
                title: `${destName} Tour Packages`,
                description: desc,
                url: `/domesticpackages/${slug}/`,
                images: [withBase(`/images/domestic/${firstImg}.webp`)],
            },
        };
    }

    // Fallback
    return {
        title: 'Tour Not Found',
        description: 'The requested tour package could not be found.',
    };
}



// ---- Static params for SSG: include both package paths & destination slugs ----
export function generateStaticParams() {
    const pathSlugs = tours.filter((t) => !!t.slug).map((t) => ({ slug: t.slug }));
    const destinationSlugs = getUniqueDestinationSlugs(tours).map((d) => ({ slug: d }));

    const seen = new Set();
    return [...pathSlugs, ...destinationSlugs].filter(({ slug }) => {
        if (seen.has(slug)) return false;
        seen.add(slug);
        return true;
    });
}

// ---- Page ----
export default function DomesticPackage({ params }) {
    const { slug } = params;

    // Try package detail first
    const tour = tours.find((t) => t.slug === slug);

    // If not a package, maybe it's a destination landing
    const destinationPackages = getPackagesByDestination(slug, tours);

    // If neither matches, 404
    if (!tour && destinationPackages.length === 0) notFound();

    const foodplate = "../../../images/food_plate.png";

    // ===== Destination landing (cards only) =====
    if (!tour && destinationPackages.length > 0) {
        const destTitle = slug.charAt(0).toUpperCase() + slug.slice(1);
        const heroImg = destinationPackages[0]?.data?.image || 'bali';

        return (
            <main className="package">
                {/* Banner */}
                <section className="pageIdentity">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div
                                    className="banner"
                                    style={{ backgroundImage: `url(${BASE_PATH}/images/domestic/${heroImg}.webp)` }}
                                >
                                    <div className="pageName text-center">
                                        <h1>{destTitle} Packages</h1>
                                        <h2 className="light">{destinationPackages.length} options</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Cards grid */}
                <section className="container my-5">
                    <div className="row g-4">
                        {destinationPackages.map(({ data }) => (
                            <div className="col-12 col-md-6 col-xl-4" key={data.id}>
                                <Link href={`/domesticpackages/${data.path}`} className="text-decoration-none">

                                    <div className="card h-100 shadow-sm">
                                        <div
                                            className="card-img-top"
                                            style={{
                                                backgroundImage: `url(${BASE_PATH}/images/${data.image || 'bali'}.webp)`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                height: '200px',
                                            }}
                                        />
                                        <div className="card-body d-flex flex-column">
                                            <h5 className="fw-bold mb-2">{data.title}</h5>
                                            {data.price && <p className="mb-2 text-muted">{data.price}</p>}
                                            <p className="mb-0 small text-theme">{data.path}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        );
    }

    // ===== Package detail page (your existing UI) =====
    const {
        title,
        duration,
        price,
        image,
        link,
        destinationsCovered = [],
        travelStyle = [],
        idealFor = [],
        bestSeason,
        itinerary = [],
        foodGuide = [],
        nightlifeGuide = [],
        inclusions = [],
        exclusions = [],
        termsAndConditions = [],
    } = tour.data || {};

    return (
        <main className="package">
            {/* Banner */}
            <section className="pageIdentity">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div
                                className="banner"
                                style={{ backgroundImage: `url(${BASE_PATH}/images/domestic/${image || 'bali'}.webp)` }}
                            >
                                <div className="pageName text-center">
                                    <h1>{title}</h1>
                                    {duration && <h2 className="light">{duration}</h2>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="Itinerary mt-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            {/* Itinerary */}
                            <div className="itineraryDetail" id="Itinerary" style={{ scrollMarginTop: '100px' }}>
                                <h2 className="fw-bold">Itinerary Detail</h2>
                                <div className="accordion" id="accordionExample">
                                    {itinerary.map((item, index) => {
                                        const collapseId = `collapse${index}`;
                                        const headingId = `heading${index}`;
                                        const isFirst = index === 0;

                                        return (
                                            <div className="accordion-item" key={index}>
                                                <h2 className="accordion-header" id={headingId}>
                                                    <button
                                                        className={`accordion-button ps-0 ${!isFirst ? 'collapsed' : ''}`}
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target={`#${collapseId}`}
                                                        aria-expanded={isFirst ? 'true' : 'false'}
                                                        aria-controls={collapseId}
                                                    >
                                                        <span className="fw-bold me-2">Day {item?.day}</span> {item?.title}
                                                    </button>
                                                </h2>
                                                <div
                                                    id={collapseId}
                                                    className={`accordion-collapse collapse ${isFirst ? 'show' : ''}`}
                                                    aria-labelledby={headingId}
                                                    data-bs-parent="#accordionExample"
                                                >
                                                    <div className="accordion-body">
                                                        {(item?.sections || []).map((section, i) => (
                                                            <div key={i} className="mb-3">
                                                                {section?.heading && <h5>{section.heading}</h5>}
                                                                <ul>
                                                                    {(section?.items || []).map((point, j) => (
                                                                        <li key={j}>{point}</li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        ))}
                                                        {item?.overnight && (
                                                            <p>
                                                                <strong>Overnight:</strong> {item.overnight}
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <EnquiryForm />
                        </div>
                    </div>
                </div>
            </section>

            <section className="details bg_light py-5 mt-5">
                <div className="container">
                    {/* Trip at a Glance */}
                    <div className="row">
                        <h3 className="fw-bold mb-3">Trip at a Glance</h3>
                        <div className="col-md-3">
                            {destinationsCovered?.length > 0 && (
                                <div className="">
                                    <h5 className="fw_500">Destinations Covered</h5>
                                    <div className="d-flex flex-wrap gap-3 my-3">
                                        {destinationsCovered.map((d, i) => (
                                            <span key={i} className="bg_white shadow_dim text-theme px-3 py-2 rounded border_theme">
                                                {d}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="col-md-3">
                            {travelStyle?.length > 0 && (
                                <div className="">
                                    <h5 className="fw_500">Travel Style</h5>
                                    <div className="d-flex flex-wrap gap-3 my-3">
                                        {travelStyle.map((t, i) => (
                                            <span key={i} className="bg_white shadow_dim text-theme px-3 py-2 rounded border_theme">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="col-md-3">
                            {idealFor?.length > 0 && (
                                <div className="">
                                    <h5 className="fw_500">Ideal For</h5>
                                    <div className="d-flex flex-wrap gap-3 my-3">
                                        {idealFor.map((p, i) => (
                                            <span key={i} className="bg_white shadow_dim text-theme px-3 py-2 rounded border_theme">
                                                {p}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="col-md-3">
                            {bestSeason && (
                                <div className="mb-3">
                                    <h5 className="fw_600">Best Season</h5>
                                    <p>{bestSeason}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <section className="food">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {foodGuide?.length > 0 && (
                                <div className="detailsSection mt-5">
                                    <h2 className="fw-bold mb-4">Food Guide</h2>

                                    <div className="row g-4">
                                        {foodGuide.map((food, i) => (
                                            <div
                                                key={i}
                                                className="col-12 col-sm-6 col-lg-3"
                                            >
                                                <div className="card h-100 shadow-sm border-0 food-card">

                                                    {/* Image */}
                                                    <img
                                                        src={
                                                            food?.image
                                                                ? withBase(`/images/domestic/foodImages/${food.image}.jpg`)
                                                                : withBase(`/images/domestic/foodImages/food-placeholder.jpg`)
                                                        }
                                                        alt={food?.dish}
                                                        className="card-img-top object-fit-cover"
                                                        style={{ height: "180px" }}
                                                    />

                                                    <div className="card-body">
                                                        {/* Name */}
                                                        <h5 className="card-title fw-bold mb-2">
                                                            {food?.dish}
                                                        </h5>

                                                        {/* Place */}
                                                        <p className="mb-1">
                                                            <strong>Place:</strong> {food?.place}
                                                        </p>

                                                        {/* Location */}
                                                        <p className="mb-1 text-muted">
                                                            <strong>Location:</strong> {food?.location}
                                                        </p>

                                                        {/* Special */}
                                                        <p className="mb-0 small text-success">
                                                            <strong>Special:</strong> {food?.special}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* nightlifeGuide */}
            {/* {nightlifeGuide?.length > 0 && (
                <section className="food">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="detailsSection mt-5">
                                    <h2 className="fw-bold mb-4">Nightlife Guide</h2>
                                    <div className="tableBox">
                                        <img src={foodplate} alt="food-plate" className="food-plate d-none d-xxl-block" />
                                        <div className="table-responsive">
                                            <table className="table align-middle">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">city</th>
                                                        <th scope="col">spot</th>
                                                        <th scope="col">vibe</th>
                                                        <th scope="col">notes</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {nightlifeGuide.map((night, i) => (
                                                        <tr key={i}>
                                                            <td><strong>{night?.city}</strong></td>
                                                            <td>{night?.spot}</td>
                                                            <td>{night?.vibe}</td>
                                                            <td className="text-muted">{night?.notes}</td>
                                                            <td className="text-muted"></td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )} */}

            {/* Inclusions & Exclusions */}
            <section className="include-exclude py-5 mt-5">
                <div className="container">
                    <div className="row">
                        {inclusions?.length > 0 && (
                            <div className="col-lg-6 mb-4">
                                <div className="detailsSection">
                                    <h2 className="fw-bold mb-3">Inclusions</h2>
                                    <ul className="list-unstyled d-grid gap-2">
                                        {inclusions.map((inc, i) => (
                                            <li key={i} className="d-flex align-items-start">
                                                <span className="me-2">✔️</span>
                                                <span>{inc}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}
                        {exclusions?.length > 0 && (
                            <div className="col-lg-6 mb-4">
                                <div className="detailsSection">
                                    <h2 className="fw-bold mb-3">Exclusions</h2>
                                    <ul className="list-unstyled d-grid gap-2">
                                        {exclusions.map((exc, i) => (
                                            <li key={i} className="d-flex align-items-start">
                                                <span className="me-2">❌</span>
                                                <span>{exc}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <section className="terms py-5 mt-3">
                <div className="container">
                    {termsAndConditions?.length > 0 && (
                        <div className="detailsSection">
                            <h2 className="fw-bold mb-3">Terms & Conditions</h2>
                            <ul className="list-unstyled d-grid gap-2">
                                {termsAndConditions.map((t, i) => (
                                    <li key={i} className="d-flex align-items-start">
                                        <span className="me-2">•</span>
                                        <span>{t}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}
