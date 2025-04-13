"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Category {
    id: string;
    name: string;
}

interface BreadcrumbItem {
    name: string;
    href?: string;
}

interface Product {
    id: string;
    name: string;
    image: string;
    href: string;
    categoryId: string;
    description?: string;
}

interface ProductListingProps {
    categories: Category[];
    products: Product[];
    breadcrumbs: BreadcrumbItem[];
    heading: string;
}

const ProductListing = ({ categories, products, breadcrumbs, heading }: ProductListingProps) => {
    const [selectedCategory, setSelectedCategory] = useState<string>("all-pumps");
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;

    // Filter products based on selected category
    const filteredProducts = selectedCategory === "all-pumps"
        ? products
        : products.filter(product => product.categoryId === selectedCategory);

    // Calculate pagination
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    // Reset to first page when category changes
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedCategory]);

    return (
        <div className="min-h-screen bg-white">
            {/* Breadcrumbs */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 border-b">
                <nav className="flex" aria-label="Breadcrumb">
                    <ol className="flex items-center space-x-2">
                        {breadcrumbs.map((item, index) => (
                            <React.Fragment key={index}>
                                {index > 0 && <li className="text-gray-400">/</li>}
                                <li>
                                    {item.href ? (
                                        <Link
                                            href={item.href}
                                            className="text-gray-600 hover:text-gray-900"
                                        >
                                            {item.name}
                                        </Link>
                                    ) : (
                                        <span className="text-gray-800">{item.name}</span>
                                    )}
                                </li>
                            </React.Fragment>
                        ))}
                    </ol>
                </nav>
            </div>

            {/* Heading */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <h1 className="text-3xl font-bold text-blue-500">
                    {heading}
                </h1>
            </div>

            {/* Main content area */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Sidebar with categories */}
                    <aside className="w-full md:w-64 shrink-0">
                        <h2 className="text-xl font-bold text-gray-900 mb-4">Products</h2>
                        <div className="space-y-1">
                            {categories.map((category) => (
                                <div key={category.id} className="py-1">
                                    <label className="flex items-center cursor-pointer">
                                        <input
                                            type="radio"
                                            name="product-category"
                                            className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                                            checked={selectedCategory === category.id}
                                            onChange={() => setSelectedCategory(category.id)}
                                        />
                                        <span className="ml-2 text-gray-800">{category.name}</span>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </aside>

                    {/* Products Grid */}
                    <div className="flex-1">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {currentProducts.map((product) => (
                                <Link
                                    href={product.href}
                                    key={product.id}
                                    className="group block"
                                >
                                    <div className="h-72 bg-gray-50 rounded-lg overflow-hidden border border-gray-200 hover:border-blue-500 transition-colors">
                                        {/* Simple product image */}
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                fill
                                                className="object-contain p-4"
                                            />
                                        </div>
                                    </div>
                                    <h3 className="text-base font-semibold text-gray-900 mt-3">
                                        {product.name}
                                    </h3>
                                </Link>
                            ))}
                        </div>

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="flex justify-center mt-12">
                                <nav className="inline-flex rounded-md shadow">
                                    <button
                                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                        disabled={currentPage === 1}
                                        className={`relative inline-flex items-center px-4 py-2 rounded-l-md border ${currentPage === 1
                                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                            : 'bg-white text-gray-700 hover:bg-gray-50'
                                            } text-sm font-medium focus:z-10 focus:outline-none`}
                                    >
                                        Previous
                                    </button>

                                    {Array.from({ length: totalPages }).map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentPage(index + 1)}
                                            className={`relative inline-flex items-center px-4 py-2 border ${currentPage === index + 1
                                                ? 'bg-blue-500 text-white'
                                                : 'bg-white text-gray-700 hover:bg-gray-50'
                                                } text-sm font-medium focus:z-10 focus:outline-none`}
                                        >
                                            {index + 1}
                                        </button>
                                    ))}

                                    <button
                                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                        disabled={currentPage === totalPages}
                                        className={`relative inline-flex items-center px-4 py-2 rounded-r-md border ${currentPage === totalPages
                                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                            : 'bg-white text-gray-700 hover:bg-gray-50'
                                            } text-sm font-medium focus:z-10 focus:outline-none`}
                                    >
                                        Next
                                    </button>
                                </nav>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductListing;