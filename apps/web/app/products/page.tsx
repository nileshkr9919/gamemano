'use client';

import React, {useEffect, useState} from 'react';
import {fetchAllCategories, fetchAllProducts} from '../services/productService';
import {Category, CategoryFilterI, filterI, Product} from '../types';
import ProductCard from '../components/ProductCard';
import Categories from '../components/Categories';
import '../styles/style.css';

const page = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [filter, setFilter] = useState<filterI>({
    categoryFilter: [{name: '', slug: '', change: false}],
    sorting: {},
  });

  const [error, setError] = useState('');

  useEffect(() => {
    const getCategories = async () => {
      try {
        const data = await fetchAllCategories();
        setCategories(data.data);
      } catch (err) {
        setError('Failed to fetch products');
      }
    };

    const getProducts = async () => {
      try {
        const data = await fetchAllProducts();
        setProducts(data.products);
      } catch (err) {
        setError('Failed to fetch products');
      }
    };

    getProducts();
    getCategories();
  }, []);

  useEffect(() => {
    let temp: CategoryFilterI[] = [];
    categories.length !== 0 &&
      categories.forEach((category: Category) => {
        temp.push({name: category?.name, slug: category.slug, change: false});
      });

    setFilter({...filter, categoryFilter: temp});
  }, [categories]);

  return (
    <div className="flex gap-6 p-6">
      {filter.categoryFilter.length > 0 && (
        <Categories categoryFilter={filter.categoryFilter} />
      )}
      <div className="grid grid-cols-3 gap-4">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>{error || 'No products available'}</p>
        )}
      </div>
    </div>
  );
};

export default page;
