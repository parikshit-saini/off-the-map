"use client";

export default function PrivacyPolicy() {
    return (
        <main className="container my-5">
            <div className="row">
                <div className="col">
                    <h1 className="display-6 fw-bold">Privacy Policy</h1>
                    <p className="text-muted">Last updated: November 24, 2025</p>
                    <p>
                        Off the Map (“we”, “us”, “our”) is committed to protecting your privacy.
                        This Privacy Policy explains how we collect, use, disclose andprotect
                        your personal information when you use our website <a className="link" href="https://www.offthemap.co.in">offthemap.co.in</a>.
                    </p>

                    <hr />

                    <section id="info-we-collect" className="mb-4">
                        <h2 className="h5">1. Information we collect</h2>
                        <ul>
                            <li><strong>Personal Information:</strong> name, email, phone, postal address, travel preferences andpayment information when you register or book.</li>
                            <li><strong>Automatically Collected Data:</strong> IP address, device/browser information, pages visited, timestamps, referring pages.</li>
                            <li><strong>Third-Party Data:</strong> data from social login or analytics providers (with your permission where required).</li>
                        </ul>
                    </section>

                    <section id="how-we-use" className="mb-4">
                        <h2 className="h5">2. How we use your information</h2>
                        <p>We use your data to provide and improve our services, process bookings, communicate (confirmations, updates, marketing), personalize content and analyze usage for product improvements.</p>
                    </section>

                    <section id="sharing" className="mb-4">
                        <h2 className="h5">3. Data sharing & disclosure</h2>
                        <p>We may share personal data with:</p>
                        <ul>
                            <li>Service providers (payment processors, travel partners, vendors).</li>
                            <li>Legal or regulatory authorities where required by law.</li>
                            <li>In connection with business transfers (merger, acquisition).</li>
                            <li>Aggregated or anonymized reports that don’t identify you.</li>
                        </ul>
                    </section>

                    <section id="security-retention" className="mb-4">
                        <h2 className="h5">4. Security & retention</h2>
                        <p>We use reasonable technical and organizational measures to protect your data. We retain personal information only as long as necessary for the purposes collected or as required by law andthen securely delete or anonymize it.</p>
                    </section>

                    <section id="your-rights" className="mb-4">
                        <h2 className="h5">5. Your rights</h2>
                        <p>Depending on your jurisdiction, you may have rights to access, correct, delete, or restrict processing of your personal data. To exercise these rights, contact <a className="link" href="mailto:travel@offthemap.co.in">travel@offthemap.co.in</a>.</p>
                    </section>

                    <section id="children" className="mb-4">
                        <h2 className="h5">6. Children</h2>
                        <p>Our services are intended for users 18+. We do not knowingly collect personal data from children under 18.</p>
                    </section>

                    <section id="changes" className="mb-4">
                        <h2 className="h5">7. Changes to this policy</h2>
                        <p>We may update this policy. When we do, we will update the “Last updated” date and notify users for material changes.</p>
                    </section>

                    <hr />

                    <p className="small text-muted">Contact us: <a className="link" href="mailto:travel@offthemap.co.in">travel@offthemap.co.in</a></p>
                </div>
            </div>
        </main>
    );
}
