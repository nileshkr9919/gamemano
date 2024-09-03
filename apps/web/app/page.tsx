"use client";

import React, { useEffect, useState } from "react";
import { fetchAllProducts } from "./services/productService";
import ProductCard from "./components/ProductCard";
import { Product } from "./types";
import './styles/style.css';
import Carousel from "@repo/ui/components/custom-carousel";

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState("");

  const slides = [
    "https://res.cloudinary.com/epiphanystudios/image/upload/v1474325161/Billboard_-_AnalyticsBanner_s0vsiv.jpg",
    "https://res.cloudinary.com/epiphanystudios/image/upload/v1474389520/Billboard_-_HipsterBanner_rzyv5r.jpg",
    "https://res.cloudinary.com/epiphanystudios/image/upload/v1474389522/Billboard_-_ProductsBanner_kfucs3.jpg",
  ];

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchAllProducts();
        setProducts(data.products);
      } catch (err) {
        setError("Failed to fetch products");
      }
    };

    getProducts();
  }, []);

  return (
    <div className="p-4" style={{ backgroundColor: 'radial-gradient(circle, rgba(53,41,22,1) 43%, rgba(53,41,22,1) 95%)' }}>
      <Carousel
        slides={slides}
        interval={3000}
        containerClassName="relative w-full"
        slideClassName="w-full h-full object-cover rounded-lg shadow-lg"
      />


      <div className="grid grid-cols-3 gap-4">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>{error || "No products available"}</p>
        )}
      </div>
      {/* <Notification /> */}
    </div>
  );
}
