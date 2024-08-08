"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import Image from 'next/image';
import TrackVisibility from 'react-on-screen';

interface FormDetails {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
}

interface Status {
    success?: boolean;
    message: string;
}

const Contact = () => {
    const formInitialDetails: FormDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    };

    const [formDetails, setFormDetails] = useState<FormDetails>(formInitialDetails);
    const [buttonText, setButtonText] = useState<string>('Send');
    const [status, setStatus] = useState<Status>({ message: '' });

    const onFormUpdate = (category: keyof FormDetails, value: string) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setButtonText("Sending...");
        try {
            const response = await fetch("/api/contact", {  // Updated URL for Next.js API route
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                body: JSON.stringify(formDetails),
            });

            const result = await response.json();
            setButtonText("Send");
            setFormDetails(formInitialDetails);

            if (result.code === 200) {
                setStatus({ success: true, message: 'Message sent successfully' });
            } else {
                setStatus({ success: false, message: 'Something went wrong, please try again later.' });
            }
        } catch (error) {
            setButtonText("Send");
            setStatus({ success: false, message: 'An error occurred. Please try again.' });
        }
    };

    return (
        <section className="py-20 text-white" id="contact">
            <div className="container mx-auto flex flex-col items-center">
                <h2 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">Get In Touch</h2>
                <div className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]">
                    <div className="w-full md:w-1/2 flex justify-center">
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                    <Image
                                        src="/mainIconsdark.svg"
                                        alt="Contact Us"
                                        width={500}
                                        height={500}
                                        className="object-contain"
                                    />
                                </div>
                            )}
                        </TrackVisibility>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center">
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md">
                                        <div className="flex flex-col sm:flex-row gap-4">
                                            <input
                                                type="text"
                                                value={formDetails.firstName}
                                                placeholder="First Name"
                                                onChange={(e: ChangeEvent<HTMLInputElement>) => onFormUpdate('firstName', e.target.value)}
                                                className="w-full px-4 py-2 text-white placeholder-gray-400 border border-transparent rounded-lg transition-all duration-300 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                                                style={{
                                                    background: 'transparent',
                                                    borderImage: 'linear-gradient(to right, #8b5cf6, #06b6d4) 1',
                                                }}
                                            />
                                            <input
                                                type="text"
                                                value={formDetails.lastName}
                                                placeholder="Last Name"
                                                onChange={(e: ChangeEvent<HTMLInputElement>) => onFormUpdate('lastName', e.target.value)}
                                                className="w-full px-4 py-2 text-white placeholder-gray-400 border border-transparent rounded-lg transition-all duration-300 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                                                style={{
                                                    background: 'transparent',
                                                    borderImage: 'linear-gradient(to right, #8b5cf6, #06b6d4) 1',
                                                }}
                                            />
                                        </div>
                                        <input
                                            type="email"
                                            value={formDetails.email}
                                            placeholder="Email Address"
                                            onChange={(e: ChangeEvent<HTMLInputElement>) => onFormUpdate('email', e.target.value)}
                                            className="w-full px-4 py-2 text-white placeholder-gray-400 border border-transparent rounded-lg transition-all duration-300 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                                            style={{
                                                background: 'transparent',
                                                borderImage: 'linear-gradient(to right, #8b5cf6, #06b6d4) 1',
                                            }}
                                        />
                                        <input
                                            type="tel"
                                            value={formDetails.phone}
                                            placeholder="Phone No."
                                            onChange={(e: ChangeEvent<HTMLInputElement>) => onFormUpdate('phone', e.target.value)}
                                            className="w-full px-4 py-2 text-white placeholder-gray-400 border border-transparent rounded-lg transition-all duration-300 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                                            style={{
                                                background: 'transparent',
                                                borderImage: 'linear-gradient(to right, #8b5cf6, #06b6d4) 1',
                                            }}
                                        />
                                        <textarea
                                            rows={6}
                                            value={formDetails.message}
                                            placeholder="Message"
                                            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => onFormUpdate('message', e.target.value)}
                                            className="w-full px-4 py-2 text-white placeholder-gray-400 border border-transparent rounded-lg transition-all duration-300 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                                            style={{
                                                background: 'transparent',
                                                borderImage: 'linear-gradient(to right, #8b5cf6, #06b6d4) 1',
                                            }}
                                        />
                                        <button
                                            type="submit"
                                            className="py-2 px-6 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                                        >
                                            {buttonText}
                                        </button>
                                        {status.message && (
                                            <p className={status.success === false ? "text-red-500" : "text-green-500"}>{status.message}</p>
                                        )}
                                    </form>
                                </div>
                            )}
                        </TrackVisibility>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
