"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import TrackVisibility from 'react-on-screen';
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

interface FormDetails {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
}

const World = dynamic(() => import("../sub/Globe").then((m) => m.World), {
    ssr: false,
});

const Contact = () => {
    const globeConfig = {
        pointSize: 4,
        globeColor: "rgba(6, 32, 86, 0.2)",
        showAtmosphere: true,
        atmosphereColor: "#FFFFFF",
        atmosphereAltitude: 0.1,
        emissive: "#062056",
        emissiveIntensity: 0.1,
        shininess: 0.9,
        polygonColor: "rgba(255,255,255,0.7)",
        ambientLight: "#38bdf8",
        directionalLeftLight: "#ffffff",
        directionalTopLight: "#ffffff",
        pointLight: "#ffffff",
        arcTime: 1000,
        arcLength: 0.9,
        rings: 1,
        maxRings: 3,
        initialPosition: { lat: 22.3193, lng: 114.1694 },
        autoRotate: true,
        autoRotateSpeed: 0.5,
    };
    const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
    const sampleArcs = [
        {
            order: 1,
            startLat: -19.885592,
            startLng: -43.951191,
            endLat: -22.9068,
            endLng: -43.1729,
            arcAlt: 0.1,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 1,
            startLat: 28.6139,
            startLng: 77.209,
            endLat: 3.139,
            endLng: 101.6869,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 1,
            startLat: -19.885592,
            startLng: -43.951191,
            endLat: -1.303396,
            endLng: 36.852443,
            arcAlt: 0.5,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 2,
            startLat: 1.3521,
            startLng: 103.8198,
            endLat: 35.6762,
            endLng: 139.6503,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 2,
            startLat: 51.5072,
            startLng: -0.1276,
            endLat: 3.139,
            endLng: 101.6869,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 2,
            startLat: -15.785493,
            startLng: -47.909029,
            endLat: 36.162809,
            endLng: -115.119411,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 3,
            startLat: -33.8688,
            startLng: 151.2093,
            endLat: 22.3193,
            endLng: 114.1694,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 3,
            startLat: 21.3099,
            startLng: -157.8581,
            endLat: 40.7128,
            endLng: -74.006,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 3,
            startLat: -6.2088,
            startLng: 106.8456,
            endLat: 51.5072,
            endLng: -0.1276,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 4,
            startLat: 11.986597,
            startLng: 8.571831,
            endLat: -15.595412,
            endLng: -56.05918,
            arcAlt: 0.5,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 4,
            startLat: -34.6037,
            startLng: -58.3816,
            endLat: 22.3193,
            endLng: 114.1694,
            arcAlt: 0.7,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 4,
            startLat: 51.5072,
            startLng: -0.1276,
            endLat: 48.8566,
            endLng: -2.3522,
            arcAlt: 0.1,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 5,
            startLat: 14.5995,
            startLng: 120.9842,
            endLat: 51.5072,
            endLng: -0.1276,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 5,
            startLat: 1.3521,
            startLng: 103.8198,
            endLat: -33.8688,
            endLng: 151.2093,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 5,
            startLat: 34.0522,
            startLng: -118.2437,
            endLat: 48.8566,
            endLng: -2.3522,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 6,
            startLat: -15.432563,
            startLng: 28.315853,
            endLat: 1.094136,
            endLng: -63.34546,
            arcAlt: 0.7,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 6,
            startLat: 37.5665,
            startLng: 126.978,
            endLat: 35.6762,
            endLng: 139.6503,
            arcAlt: 0.1,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 6,
            startLat: 22.3193,
            startLng: 114.1694,
            endLat: 51.5072,
            endLng: -0.1276,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 7,
            startLat: -19.885592,
            startLng: -43.951191,
            endLat: -15.595412,
            endLng: -56.05918,
            arcAlt: 0.1,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 7,
            startLat: 48.8566,
            startLng: -2.3522,
            endLat: 52.52,
            endLng: 13.405,
            arcAlt: 0.1,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 7,
            startLat: 52.52,
            startLng: 13.405,
            endLat: 34.0522,
            endLng: -118.2437,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 8,
            startLat: -8.833221,
            startLng: 13.264837,
            endLat: -33.936138,
            endLng: 18.436529,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 8,
            startLat: 49.2827,
            startLng: -123.1207,
            endLat: 52.3676,
            endLng: 4.9041,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 8,
            startLat: 1.3521,
            startLng: 103.8198,
            endLat: 40.7128,
            endLng: -74.006,
            arcAlt: 0.5,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 9,
            startLat: 51.5072,
            startLng: -0.1276,
            endLat: 34.0522,
            endLng: -118.2437,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 9,
            startLat: 22.3193,
            startLng: 114.1694,
            endLat: -22.9068,
            endLng: -43.1729,
            arcAlt: 0.7,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 9,
            startLat: 1.3521,
            startLng: 103.8198,
            endLat: -34.6037,
            endLng: -58.3816,
            arcAlt: 0.5,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 10,
            startLat: -22.9068,
            startLng: -43.1729,
            endLat: 28.6139,
            endLng: 77.209,
            arcAlt: 0.7,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 10,
            startLat: 34.0522,
            startLng: -118.2437,
            endLat: 31.2304,
            endLng: 121.4737,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 10,
            startLat: -6.2088,
            startLng: 106.8456,
            endLat: 52.3676,
            endLng: 4.9041,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 11,
            startLat: 41.9028,
            startLng: 12.4964,
            endLat: 34.0522,
            endLng: -118.2437,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 11,
            startLat: -6.2088,
            startLng: 106.8456,
            endLat: 31.2304,
            endLng: 121.4737,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 11,
            startLat: 22.3193,
            startLng: 114.1694,
            endLat: 1.3521,
            endLng: 103.8198,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 12,
            startLat: 34.0522,
            startLng: -118.2437,
            endLat: 37.7749,
            endLng: -122.4194,
            arcAlt: 0.1,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 12,
            startLat: 35.6762,
            startLng: 139.6503,
            endLat: 22.3193,
            endLng: 114.1694,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 12,
            startLat: 22.3193,
            startLng: 114.1694,
            endLat: 34.0522,
            endLng: -118.2437,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 13,
            startLat: 52.52,
            startLng: 13.405,
            endLat: 22.3193,
            endLng: 114.1694,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 13,
            startLat: 11.986597,
            startLng: 8.571831,
            endLat: 35.6762,
            endLng: 139.6503,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 13,
            startLat: -22.9068,
            startLng: -43.1729,
            endLat: -34.6037,
            endLng: -58.3816,
            arcAlt: 0.1,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 14,
            startLat: -33.936138,
            startLng: 18.436529,
            endLat: 21.395643,
            endLng: 39.883798,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
    ];
    const formInitialDetails: FormDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    };

    const [formDetails, setFormDetails] = useState<FormDetails>(formInitialDetails);
    const [buttonText, setButtonText] = useState<string>('Send');

    const onFormUpdate = (category: keyof FormDetails, value: string) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setButtonText("Sending...");
        setTimeout(() => {
            setButtonText("Send");
        }, 2000);
    };

    return (
        <section className="py-2 text-white" id="contact">
            <div className="container mx-auto flex flex-col items-center">
                <h2 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">Get In Touch</h2>
                <div className="flex flex-row items-center justify-center px-20 w-full z-[20]">
                    <div className="w-full md:w-1/2 flex justify-center">

                        <div className="md:top-40 w-full h-full">
                            <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-96 px-4">
                                <div className="absolute w-full bottom-0 inset-x-0 h-40 pointer-events-none select-none z-40" />
                                <div className="absolute w-full h-72 md:h-full z-10">
                                    <World data={sampleArcs} globeConfig={globeConfig} />
                                </div>
                            </div>
                        </div>
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
                                                className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] bg-transparent border-3 border-transparent transition-all duration-300"
                                            >
                                                {/* Gradient border */}
                                                <span
                                                    className="absolute inset-0 rounded-lg border-2 border-transparent"
                                                    style={{
                                                        borderImage: 'conic-gradient(from 90deg at 50% 50%, #E2CBFF 0%, #393BB2 50%, #E2CBFF 100%)',
                                                        borderImageSlice: 1,
                                                        borderWidth: '2px',
                                                        borderStyle: 'solid',
                                                        borderRadius: 'inherit',
                                                    }}
                                                />

                                                {/* Button text with additional styles */}
                                                <span
                                                    className="relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg text-lg font-medium text-white"
                                                    style={{
                                                        background: 'transparent',
                                                    }}
                                                >
                                                    {buttonText}
                                                </span>

                                                <style jsx>{`
                                               button:hover {
                                               background: linear-gradient(
                                               180deg,
                                              rgba(60, 8, 126, 0) 0%,
                                              rgba(60, 8, 126, 0.42) 100%
                                                ),
                                              rgba(113, 47, 255, 0.24);
                                                }
                                              `}</style>
                                            </button>
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
