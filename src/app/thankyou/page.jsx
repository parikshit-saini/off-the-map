
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default function about() {
    const thankyou = "/Mail-bro.svg";
    return (
        <>
            <main className="thankyou">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={thankyou} alt="thankyou image" className='w-75' />

                        </div>
                        <div className="col-md-6 d-flex align-items-center">
                            <div>
                                <h2 className='mb-3 fw-bold'>Thank You!</h2>
                                <p className='text-success fw-bold'>Your enquiry has been received successfully.</p>
                                <p>We appreciate your interest. Our team will get back to you shortly to assist you further.</p>

                                <a href="/"><button className="btn btn-basic">Back to Home</button></a>

                                <a href="tel:+91 7328808726" className="text-dark text-decoration-none"><h3 className='mt-4'>For any Inquiry Call <span className="fw-600">+91 7328808726</span></h3></a>
                            </div>

                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}