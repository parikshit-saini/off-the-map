"use client";

export default function Disclaimer() {
    return (
        <main className="container my-5">
            <div className="row">
                <div className="col">
                    <h1 className="display-6 fw-bold">Disclaimer</h1>
                    <p className="text-muted">Last updated: November 24, 2025</p>

                    <hr />

                    <section className="mb-4">
                        <p>
                            The information provided on <a className="link" href="https://www.offthemap.co.in">Off the Map</a> is for general informational purposes only.
                            While we strive to keep information accurate and up-to-date, we make no warranties or representations regarding accuracy, completeness, or suitability for any purpose.
                        </p>
                    </section>

                    <section className="mb-4">
                        <h2 className="h5">No warranty</h2>
                        <p>All content is provided “as is” without any implied or express warranties. We expressly disclaim liability for errors or omissions in the content.</p>
                    </section>

                    <section className="mb-4">
                        <h2 className="h5">Booking & travel risks</h2>
                        <p>Travel has inherent risks (weather, political events, force majeure). By booking through us or our partners, you acknowledge and accept those risks.</p>
                    </section>

                    <section className="mb-4">
                        <h2 className="h5">Third-party links</h2>
                        <p>Our site may link to external websites. We do not endorse and are not responsible for the content or practices of third-party sites.</p>
                    </section>

                    <section className="mb-4">
                        <h2 className="h5">Limitation of liability</h2>
                        <p>To the maximum extent permitted by law, Off the Map will not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of the site or participation in trips arranged through this site.</p>
                    </section>

                    <hr />
                    <p className="small text-muted">For legal questions, contact <a className="link" href="mailto:travel@offthemap.co.in">travel@offthemap.co.in</a></p>
                </div>
            </div>
        </main>
    );
}
