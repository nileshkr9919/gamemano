'use client';

import React, {useEffect, useState} from 'react';
import {fetchAllProducts} from './services/productService';
import {Product} from './types';
import './styles/style.css';
import Banner from './components/Banner';
import TrendingProducts from './components/TrendingProducts';

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState('');

  const slides = [
    'https://res.cloudinary.com/epiphanystudios/image/upload/v1474325161/Billboard_-_AnalyticsBanner_s0vsiv.jpg',
    'https://res.cloudinary.com/epiphanystudios/image/upload/v1474389520/Billboard_-_HipsterBanner_rzyv5r.jpg',
    'https://res.cloudinary.com/epiphanystudios/image/upload/v1474389522/Billboard_-_ProductsBanner_kfucs3.jpg',
  ];

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchAllProducts();
        setProducts(data.products);
      } catch (err) {
        setError('Failed to fetch products');
      }
    };

    getProducts();
  }, []);

  return (
    <div className="p-4 flex flex-col gap-8">
      <Banner slides={slides} />

      <TrendingProducts products={products} />
      {/* <Advertisment /> */}
      {/* <div className="grid grid-cols-3 gap-4">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>{error || "No products available"}</p>
        )}
      </div> */}
      {/* <Notification /> */}
    </div>
  );
}
