'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import ProductLayout from '@/app/(components)/products/detail/layout';
import { productDetail } from '@/app/(constants)/productDetails/submersiblePumps';

const ProductDetailPage = () => {
  const params = useParams();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a short loading time
    const timer = setTimeout(() => {
      const productId = params?.id;
      const foundProduct = productDetail.find((item: any) => item.id === productId);
      setProduct(foundProduct || null);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [params]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">Product Not Found</h2>
          <p>We couldn't find the product you're looking for.</p>
        </div>
      </div>
    );
  }

  // Simply pass the found product to your existing layout
  return <ProductLayout product={product} />;
};

export default ProductDetailPage;