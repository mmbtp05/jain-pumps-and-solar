import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ProductLayout = ({ category, products, breadcrumbs }: any) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with category name */}
      <div className="bg-[#e6f0ff] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-center text-[#002145]">
            {category}
          </h1>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                Home
              </Link>
            </li>
            {breadcrumbs.map((item: any, index: number) => (
              <React.Fragment key={index}>
                <li className="text-gray-400">/</li>
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

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product: any, index: number) => (
            <Link 
              href={product.href} 
              key={index}
              className="group relative bg-[#002145] rounded-lg overflow-hidden aspect-square hover:opacity-90 transition-opacity"
            >
              <div className="w-full h-full relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-xl font-semibold text-white">
                    {product.name}
                  </h3>
                </div>
                {/* Arrow Icon */}
                <div className="absolute bottom-4 right-4 bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg 
                    className="w-4 h-4 text-[#002145]" 
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
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductLayout;