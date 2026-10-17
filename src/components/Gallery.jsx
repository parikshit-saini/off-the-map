import fs from "fs";
import path from "path";

export default function Gallery() {
    const galleryDir = path.join(
        process.cwd(),
        "public/images/Gallery"
    );

    const images = fs
        .readdirSync(galleryDir)
        .filter((file) =>
            /\.(png|jpe?g|webp)$/i.test(file)
        );

    return (
        <section className="container my-5 gallerySection">
            {/* Heading */}
            <div className="text-center mb-4">
                <h3 className="fw_600 mb-2">Travel Gallery</h3>
                <p className="text-muted">
                    Moments captured from our beautiful journeys
                </p>
            </div>

            {/* Gallery */}
            <div className="galleryGrid">
                {images.map((img, index) => (
                    <div className="galleryItem" key={index}>
                        <img src={`/images/Gallery/${img}`} />
                    </div>
                ))}
            </div>
        </section>
    );
}
