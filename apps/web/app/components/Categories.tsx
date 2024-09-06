import React from 'react';
import { CategoryFilterI } from '../types/category.type';
import { Checkbox } from '@repo/ui/components/ui/checkbox';

const Categories: React.FC<{ categoryFilter: CategoryFilterI[] }> = ({ categoryFilter }) => {
    console.log(categoryFilter, 'asda')
    return (
        <aside
            className={` h-auto text-white w-64 px-8 py-4 bg-dark-yellow`}
            style={{ borderRadius: "10px" }}
        >
            <div className='flex flex-col'>
                <h3>Categories</h3>
                <ul className='space-y-4 mt-6 pb-6'>
                    {
                        categoryFilter.map((category: CategoryFilterI, idx: number) => {
                            return (
                                    <li key={idx} className="flex items-center space-x-2">
                                        <Checkbox id={category?.slug} />
                                        <label
                                            htmlFor={category?.slug}
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            {category?.name}
                                        </label>
                                    </li>
                            )
                        })
                    }
                </ul>
            </div>
        </aside>
    )
}

export default Categories
