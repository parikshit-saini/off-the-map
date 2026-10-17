import { withBase } from "@/lib/basePath";
import Faq from "./Faq";

export default function Footer() {
    const logo = withBase("/logo_light.svg");

    return (
        <>
            <Faq />



            {/* ================= CTA SECTION ================= */}
            <section className="ctaSection">
                <div className="container">
                    <div className="ctaBox">
                        <div className="ctaContent">
                            <h2 className="fw_600">
                                Ready to Plan Your Next Journey?
                            </h2>
                            <p>
                                Speak with our travel experts and get a
                                personalized itinerary crafted just for you.
                            </p>
                        </div>
                        <div className="ctaAction">
                            <a href="tel:+917328808726" className="ctaBtn">
                                📞 Call Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* ================= WHATSAPP FLOATING BUTTON ================= */}
            <a
                href="https://wa.me/917328808726"
                className="whatsappFloat"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fa-brands fa-whatsapp"></i>
            </a>

            {/* ================= FOOTER ================= */}
            <footer>
                <div className="container">
                    <div className="row gy-4">


                        {/* Logo (Desktop) */}
                        <div className="col-lg-3  mt-0">
                            <div className="logoBox text-center">
                                <div className="logo mb-3">
                                    <img src={logo} alt="Off The Map" />
                                </div>
                            </div>
                            <div className="social">
                                <a href="https://www.instagram.com/off.the.map_official/" target="_blank"><div className="icon"><i className="fa-brands fa-instagram"></i></div></a>
                                <a href="https://www.facebook.com/people/Off-The-Map/61572884773828/" target="_blank"><div className="icon"><i className="fa-brands fa-facebook"></i></div></a>
                                <a href="https://www.youtube.com/@OffTheMap_24_otm" target="_blank"><div className="icon"><i className="fa-brands fa-youtube"></i></div></a>

                            </div>
                        </div>

                        {/* Links */}
                        <div className="col-lg-4">
                            <div className="row">
                                <div className="col-md-6">
                                    <ul>
                                        <li><a href={withBase("/about")}>About</a></li>
                                        <li><a href={withBase("/services")}>Services</a></li>
                                        <li><a href={withBase("/gallery")}>Gallery</a></li>
                                        <li><a href={withBase("/faq")}>FAQ</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <ul>
                                        <li><a href={withBase("/privacy-policy")}>Privacy Policy</a></li>
                                        <li><a href={withBase("/cookies-policy")}>Cookies Policy</a></li>
                                        <li><a href={withBase("/disclaimer")}>Disclaimer</a></li>
                                        <li><a href={withBase("/terms-and-conditions")}>Terms & Conditions</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Packages & Contact */}
                        <div className="col-lg-4">
                            <div className="row">
                                <div className="col-md-4">
                                    <ul>
                                        <li><b>Packages</b></li>
                                        <li><a href={withBase("/domestic")}>Domestic</a></li>
                                        <li><a href={withBase("/international")}>International</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-8">
                                    <ul>
                                        <li><b>Contact</b></li>
                                        <li>travel@offthemap.co.in</li>
                                        <li>+91 7328808726</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom */}
                    <div className="row">
                        <div className="col-12">
                            <div className="line"></div>
                        </div>
                        <div className="col-12 text-center">
                            <p className="text-light mt-4">
                                © 2025 Off The Map India Pvt Ltd. All rights reserved
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
