import React, { Fragment } from 'react';
import { twMerge } from 'tailwind-merge';

type ScrollSliderProps = {// Define the structure of selectedExperiments here
  children: React.ReactNode;
  itemsWrapperClassName: string;
};

const ScrollSlider = ({ children, itemsWrapperClassName }: ScrollSliderProps) => {
  return (
    <div className="relative flex parallax-mask overflow-x-hidden">
      <div className={twMerge(`flex flex-none space-x-4 lg:space-x-12`, itemsWrapperClassName)}>
        {[...new Array(2)].fill(0).map((_, idx) => (
          <Fragment key={idx}>
            {children}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default ScrollSlider;
