"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

const EnquiryForm = ({ tourTitle = "", autoFillDestination = true }) => {
    const router = useRouter();
    const pathname = usePathname();

    const [formData, setFormData] = useState({
        name: "",
        destination: "",
        travelMonth: "",
        travelers: "",
        contactNumber: "",
        email: "",
        message: "",
    });

    /* 🔹 Auto-fill destination (only when enabled) */
    useEffect(() => {
        if (!autoFillDestination) return;

        let pageName = pathname
            .split("/")
            .filter(Boolean)
            .pop()
            ?.replace(/-/g, " ");

        if (tourTitle) {
            pageName = tourTitle;
        }

        setFormData((prev) => ({
            ...prev,
            destination: pageName || "",
        }));
    }, [pathname, tourTitle, autoFillDestination]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataObj = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            formDataObj.append(key, value);
        });

        try {
            const response = await fetch(
                "https://offthemap.co.in/contactForm.php",
                {
                    method: "POST",
                    body: formDataObj,
                }
            );

            if (response.ok) {
                router.push("/thankyou");
            } else {
                alert("Failed to send enquiry");
            }
        } catch (error) {
            console.error("Error sending email:", error);
            alert("Something went wrong");
        }
    };

    return (
        <div className="formsection">
            <form onSubmit={handleSubmit}>
                <div className="row">

                    {/* Name */}
                    <div className="col-12">
                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                max="50"
                            />
                        </div>
                    </div>

                    {/* Destination */}
                    <div className="col-12">
                        <div className="form-group">
                            <label>Where do you want to travel?</label>
                            <input
                                type="text"
                                name="destination"
                                className="form-control"
                                placeholder="Your destination"
                                value={formData.destination}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    {/* Travel Month */}
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Travel Month</label>
                            <input
                                type="month"
                                name="travelMonth"
                                className="form-control"
                                value={formData.travelMonth}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    {/* Travelers */}
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>No. of Travelers</label>
                            <input
                                type="number"
                                name="travelers"
                                className="form-control"
                                placeholder="No. of travelers"
                                value={formData.travelers}
                                onChange={handleChange}
                                min="1"
                                max="500"
                                required
                            />
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Contact Number</label>
                            <input
                                type="tel"
                                name="contactNumber"
                                className="form-control"
                                placeholder="Contact number"
                                value={formData.contactNumber}
                                onChange={handleChange}
                                required
                                maxLength="10"
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Email ID</label>
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="Enter email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    {/* Message */}
                    <div className="col-12">
                        <div className="form-group">
                            <label>Message</label>
                            <textarea
                                name="message"
                                className="form-control"
                                rows="3"
                                placeholder="Tell us more about your trip"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    {/* Submit */}
                    <div className="col-12">
                        <button type="submit" className="btn submit-btn">
                            Send Enquiry <i className="fa-solid fa-paper-plane"></i>
                        </button>
                    </div>

                </div>
            </form>
        </div>
    );
};

export default EnquiryForm;