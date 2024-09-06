// packages/ui/components/ProductCard.tsx
import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@repo/ui/components/ui/card';
import {Product} from '../types';
import Image from 'next/image';

const ProductCard: React.FC<{product: Product; customClass?: string}> = ({
  product,
  customClass,
}) => {
  return (
    <Card className={`${customClass} max-w-sm border rounded-md shadow-md`}>
      <CardHeader>
        <CardTitle>{product.title}</CardTitle>
        <CardDescription className="text-gray-500">
          ${product.price}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          width={100}
          height={100}
          src={product.thumbnail}
          alt={product.title}
          className="object-cover mb-2 rounded"
        ></Image>
        <p className="text-sm text-gray-700">{product.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <button className="bg-primary text-white px-3 py-1 rounded hover:bg-blue-600">
          Add to Cart
        </button>
        <button className="text-primary hover:underline">View Details</button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
