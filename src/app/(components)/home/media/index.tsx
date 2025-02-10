import React from 'react';
import Link from 'next/link';

const MediaSection = () => {
    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Header with Explore More button */}
                <div className="flex justify-between items-center mb-8">
                    <div className="space-y-2">
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
                                IMAGES
                            </span>
                        </div>
                        <h2 className="text-4xl font-semibold text-gray-900">
                            Media
                        </h2>
                    </div>
                    
                    <Link 
                        href="/media"
                        className="flex items-center gap-2 bg-[#003366] text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors"
                    >
                        Explore More
                        <svg 
                            className="w-4 h-4" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </Link>
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-3 gap-4">
                    {/* First row - 2 large images */}
                    <div className="col-span-3 md:col-span-2">
                        <div className="bg-[#1f2937] rounded-lg aspect-[16/9] flex items-center justify-center">
                            <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                    </div>
                    <div className="col-span-3 md:col-span-1">
                        <div className="bg-[#1f2937] rounded-lg aspect-[16/9] flex items-center justify-center">
                            <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                    </div>

                    {/* Second row - 3 equal sized images */}
                    <div className="col-span-1">
                        <div className="bg-[#1f2937] rounded-lg aspect-square flex items-center justify-center">
                            <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="bg-[#1f2937] rounded-lg aspect-square flex items-center justify-center">
                            <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="bg-[#1f2937] rounded-lg aspect-square flex items-center justify-center">
                            <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MediaSection;