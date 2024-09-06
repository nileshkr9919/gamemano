/* eslint-disable @next/next/no-img-element */
import Carousel from '@repo/ui/components/ui/custom-carousel';
import React from 'react';

interface BannerI {
  slides: string[];
}

const Banner = (bannerProps: BannerI) => {
  const {slides} = bannerProps;

  const slideStructure = (slide: any, index: number) => {
    return (
      <img
        src={slide}
        alt={`Slide ${index}`}
        className={` w-full h-full object-cover rounded-lg shadow-lg h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[30rem]`}
      />
    );
  };
  return (
    <div>
      <Carousel
        slides={slides}
        slideStructure={slideStructure}
        interval={5000}
        containerClassName="relative w-full"
      />
    </div>
  );
};

export default Banner;
