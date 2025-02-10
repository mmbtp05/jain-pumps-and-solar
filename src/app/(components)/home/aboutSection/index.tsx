'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import aboutLogo from '../../../../../public/assets/home-about.png';

const MotionImage = motion(Image);

export default function AboutSection() {
    return (
        <section className="relative bg-white">
            {/* Bottom blue strip with shadow */}
            <div className="absolute bottom-0 w-full h-20 bg-[#e3eeff]" />

            <div className="container mx-auto px-4 lg:px-8 relative">
                <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-16">
                    {/* Left Content */}
                    <div className="w-full lg:w-1/2 space-y-6 pt-12 pb-28">
                        <div className="flex items-center gap-2">
                            <svg
                                className="w-5 h-5 text-blue-600"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12 3L20 18H4L12 3Z"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <span className="text-blue-600 font-medium tracking-wide text-sm">
                                ABOUT US
                            </span>
                        </div>

                        <h1 className="text-4xl lg:text-5xl font-semibold text-gray-900 tracking-tight">
                            Jain Pumps Pvt Limited
                        </h1>

                        <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                            <p>
                                Jain Pumps Pvt. Ltd., we are more than just a manufacturer of pipes and solar pumps; we are pioneers in transforming agricultural practices and water management solutions. Since our inception in 2000, we have been at the forefront of innovation, providing high-quality, cost-effective, and eco-friendly products that empower farmers and industries across India.
                            </p>

                            <p>
                                With a mission to revolutionize irrigation and water systems, we focus on delivering solutions that enhance productivity, reduce costs, and support sustainability. By harnessing the power of renewable energy and advanced manufacturing techniques, we aim to make a positive impact on the environment, farmers' livelihoods, and communities at large.
                            </p>
                        </div>

                        <Link
                            href="/about"
                            className="inline-flex items-center gap-2 bg-[#003366] text-white px-6 py-2.5 rounded-lg transition-colors hover:bg-blue-900"
                        >
                            Know More
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                            </svg>
                        </Link>
                    </div>

                    {/* Right Badge */}
                    <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end">
                        <motion.div 
                            className="relative w-[90%] lg:w-full h-[400px] lg:h-[700px] -mb-8"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ 
                                opacity: 1, 
                                scale: 1,
                                transition: {
                                    type: "spring",
                                    duration: 1.2,
                                    bounce: 0.3
                                }
                            }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <MotionImage
                                src={aboutLogo}
                                alt="20 Years of Pumping Trust"
                                fill
                                className="object-contain"
                                priority
                                animate={{ 
                                    y: [0, -20, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    ease: "easeInOut",
                                    repeat: Infinity,
                                }}
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}