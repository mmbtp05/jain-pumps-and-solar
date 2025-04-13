"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { ProductImage } from './types';
import { ProductFeature } from './types';
import { ProductTable as ProductTableType } from './types';
import { Product } from './types';

interface ProductImagesProps {
    images: ProductImage[];
}

const ProductImages: React.FC<ProductImagesProps> = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(0);

    return (
        <div className="flex flex-row space-x-4">
            {/* Vertical thumbnails on the left */}
            <div className="flex flex-col space-y-2 w-1/5">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`border rounded-md overflow-hidden cursor-pointer ${selectedImage === index ? 'border-blue-500 border-2' : 'border-gray-200'}`}
                        onClick={() => setSelectedImage(index)}
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            width={80}
                            height={80}
                            className="w-full h-auto object-contain"
                        />
                    </div>
                ))}
            </div>

            {/* Main image on the right */}
            <div className="border rounded-md p-4 bg-white w-4/5">
                <Image
                    src={images[selectedImage].src}
                    alt={images[selectedImage].alt}
                    width={400}
                    height={500}
                    className="w-full h-auto object-contain"
                />
            </div>
        </div>
    );
};


interface ProductFeaturesProps {
    name: string;
    features: ProductFeature[];
}

const ProductFeatures: React.FC<ProductFeaturesProps> = ({ name, features }) => {
    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-6">{name}</h1>
            <ul className="space-y-3">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>{feature.text}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};


interface ProductTableProps {
    table: ProductTableType;
}

const ProductTable: React.FC<ProductTableProps> = ({ table }) => {
    return (
        <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{table.title}</h2>
            <div className="overflow-x-auto">
                {/* Added black border around the table with p-[2px] for spacing */}
                <div className="border-[0.5px] border-gray-200 rounded-lg">
                    <table className="min-w-full rounded-lg overflow-hidden">
                        <thead>
                            <tr className="bg-blue-50">
                                {table.columns.map((column, index) => (
                                    <th
                                        key={index}
                                        className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b border-r border-gray-200 last:border-r-0"
                                    >
                                        {column.header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {table.rows.map((row, rowIndex) => (
                                <tr
                                    key={rowIndex}
                                    className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                                >
                                    {table.columns.map((column, colIndex) => (
                                        <td
                                            key={`${rowIndex}-${colIndex}`}
                                            className={`px-4 py-3 text-sm text-gray-700 border-r border-gray-200 last:border-r-0 ${rowIndex === table.rows.length - 1 ? '' : 'border-b'
                                                }`}
                                        >
                                            {row[column.key]}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};


interface ProductLayoutProps {
    product: Product;
}

const ProductLayout: React.FC<ProductLayoutProps> = ({ product }) => {
    return (
        <div className="w-3/5 mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <ProductImages images={product.images} />
                <ProductFeatures name={product.name} features={product.features} />
            </div>

            <div className="space-y-8">
                {product.tables.map((table, index) => (
                    <ProductTable key={index} table={table} />
                ))}
            </div>
        </div>
    );
};

export default ProductLayout;