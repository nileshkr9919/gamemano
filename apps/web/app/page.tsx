"use client";

import { useEffect, useState } from "react";
import { fetchAllProducts } from "./services/productService";
import ProductCard from "./components/ProductCard";
import { Product } from "./types";

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState("");

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
    <div className="p-4">
      {/* <Carousel /> */}
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
