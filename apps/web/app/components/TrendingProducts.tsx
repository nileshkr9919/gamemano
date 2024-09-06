/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Product } from '../types';
import ProductCard from './ProductCard';
import { Carousel, CarouselContent, CarouselItem } from '@repo/ui/components/ui/carousel';
import { Card, CardContent } from '@repo/ui/components/ui/card';
import Autoplay from 'embla-carousel-autoplay'

interface TrendingProductsI {
    products: Product[]
}

const TrendingProducts = (props: TrendingProductsI) => {
    const { products } = props;

    return (
        <div>
            {/* <Carousel
                slides={products}
                slideStructure={slideStructure}
                interval={5000}
                containerClassName="relative w-full"
            // slideClassName="w-full h-full object-cover rounded-lg shadow-lg"
            /> */}

            {/* <Carousel className="w-screen" plugins={[
                Autoplay({
                    delay: 2000,
                }),
            ]}
            >
                <CarouselContent className="-ml-1">
                    {products.map((product, index) => (
                        <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <ProductCard key={product.id} product={product} />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent> */}
                {/* <CarouselPrevious />
      <CarouselNext /> */}
            {/* </Carousel> */}
        </div>
    )
}

export default TrendingProducts
