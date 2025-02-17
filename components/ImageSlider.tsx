import Image from 'next/image';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { urlFor } from '@/sanity/lib/image';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

type ImageSliderProps = {
  itemsWrapperClassName: string;
  images: SanityImageSource[];
};

const ImageSlider = ({ itemsWrapperClassName, images }: ImageSliderProps) => {
  // Precompute the URLs for each image.
  const imageUrls = images.map((image) => urlFor(image).url());

  // Duplicate the images array (useful for continuous scrolling animations).
  const duplicatedImageUrls = [...imageUrls, ...imageUrls];

  return (
    <div className="relative flex parallax-mask overflow-x-hidden">
      <div className={twMerge("flex flex-none space-x-4 lg:space-x-12", itemsWrapperClassName)}>
        {duplicatedImageUrls.map((imageUrl, index) => (
          <div
            key={index}
            className="h-[200px] w-[300px] lg:h-[350px] lg:w-[550px] group bg-[#D9D9D9] p-1 lg:p-4 
            transition-colors duration-300 hover:bg-gray-800 dark:hover:bg-gray-400"
          >
            <div className='relative w-full h-full'>
              <Image
                src={imageUrl}
                fill
                loading="lazy"
                alt={`Experiment ${index + 1}`}
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
