/* eslint-disable no-unused-vars */
import React from 'react';
import {CategoryFilterI} from '../types/category.type';
import {Checkbox} from '@repo/ui/components/ui/checkbox';

const Categories: React.FC<{
  categoryFilter: CategoryFilterI[];
  selectedCategory: string;
  setSelectedCategory: (val: string) => void;
}> = ({categoryFilter, selectedCategory, setSelectedCategory}) => {
  const handleCategoryChange = (slug: string) => {
    setSelectedCategory(slug === selectedCategory ? 'default' : slug);
  };

  return (
    <aside
      className="bg-dark-yellow text-white p-4 rounded-lg shadow-md max-w-full md:max-w-md lg:max-w-lg xl:max-w-xl"
      style={{borderRadius: '10px'}}
    >
      <h3 className="text-lg sm:text-xl font-bold mb-4 text-center md:text-left">
        Filter by Category
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {categoryFilter.map((category) => (
          <div
            key={category.slug}
            className="flex items-center space-x-3 cursor-pointer"
          >
            <Checkbox
              id={category.slug}
              checked={selectedCategory === category.slug}
              onCheckedChange={() => handleCategoryChange(category.slug)}
            />
            <label htmlFor={category.slug} className="text-sm font-medium">
              {category.name}
            </label>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Categories;
