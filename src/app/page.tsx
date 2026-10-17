// import Image from "next/image";
// import styles from "./page.module.css";
import YoutubeVideos from "../components/sliders/YoutubeVideos"
import UpcomingTrips from "../components/sliders/UpcomingTrips"
import InternationalPackages from "../components/sliders/InternationalPackages"
import DomesticPackages from "../components/sliders/DomesticPackages"
import Review from "../components/sliders/Review"
import BannerSlider from "../components/sliders/BannerSlider"
import HeroSlider from "../components/sliders/HeroSlider"
import Faq from "../components/Faq"
import Gallery from "../components/Gallery"

export default function Home() {
  return (
    <div>
      {/* Hero Section  */}
      {/* <section className="hero">
        <div className="heroImage" style={{ backgroundImage: `url(/images/herobg.jpg)` }}>
          <div className="content">
            <h1>Unforgettable Journeys</h1>
            <h2>Crafted Just for You</h2>
            <p>From Dubai’s skyline to Mahakal’s blessings, discover curated travel experiences with expert support.</p>
            <div className="btnGroup">
              <a href="#packages"><button className="btn btn-theme">Explore Packages</button></a>
              <button className="btn btn-theme_outline">Upcoming Trips</button>
            </div>
          </div>
        </div>
      </section> */}
      <HeroSlider />
      {/* Youtube video section  */}
      {/* <YoutubeVideos /> */}

      {/* Upcomming trip  */}
      {/* <UpcomingTrips /> */}

      {/* Explore Packages  */}

      <section className="explorePackage mt-5" id="packages">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="fw-bold text-center">Explore Packages</h1>
              <p className="text-center">From Dubai’s skyline to Mahakal’s blessings, discover curated travel experiences with expert support.</p>
            </div>
          </div>
        </div>
      </section>
      <InternationalPackages />
      <DomesticPackages />
      <BannerSlider />
      <Review />
      <Faq />
      <Gallery />
    </div>
  );
}

