import { selectedExperiments } from '@/constants/Data';
import { shuffleArray } from '@/utils/shuffleArray';
import Image from 'next/image';
import React, { Fragment, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

type ImageSliderProps = {
  itemsWrapperClassName: string;
};

const ImageSlider = ({itemsWrapperClassName}:ImageSliderProps) => {
    const shuffledExperiments = useMemo(() => shuffleArray(selectedExperiments), []);

  return (
    <div className="relative flex parallax-mask overflow-x-hidden">
      <div className={twMerge(`flex flex-none space-x-4 lg:space-x-12`, itemsWrapperClassName)}>
        {[...new Array(2)].fill(0).map((_, idx) => (
          <Fragment key={idx}>
            {shuffledExperiments.map((experiment, index) =>(
                <div key={index} className="group bg-[#D9D9D9] p-2 lg:p-8 transition-colors duration-300 
                    hover:bg-gray-800 dark:hover:bg-gray-400"
                >
                  <Image
                    src={experiment.image}
                    width={667.37}
                    height={427.45}
                    loading='lazy'
                    alt={`Experiment ${index + 1}`} 
                    layout="responsive"
                  />
                </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  )
}

export default ImageSlider