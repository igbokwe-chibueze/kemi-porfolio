"use client"

import { AccordionData } from "@/constants/Data";
import { ArrowDownIcon } from "@/constants/Icons";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface AccordionProps {
    data: AccordionData[];
}

const Accordion = ({ data }: AccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="border-b border-gray-300">
      {data.map((section, index) => (
        <div
          key={index}
          className="border-t border-gray-300 rounded-sm overflow-hidden"
        >
          {/* Accordion Header */}
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full py-2 lg:py-6 flex justify-between items-center rounded-sm
              font-gT-WalsheimPro text-4xl md:text-5xl lg:text-[140px] font-normal lg:uppercase 
              tracking-wide lg:leading-none text-gray-900 dark:text-white
            hover:bg-gray-300 dark:hover:bg-gray-700 "
          >
            <span>{section.title}</span>
            
            <div className="mr-8 group px-5 py-2 bg-[#D9D9D9] hover:bg-[#FAB041] 
              rounded-full lg:ml-auto">
              <ArrowDownIcon
                className={`text-black w-6 h-6 lg:w-56 lg:h-40 transform 
                ${openIndex === index ? "transition-transform duration-300 -rotate-90" : "transition-transform duration-300 group-hover:-rotate-90"}`}
              />
            </div>
          </button>

          {/* Accordion Content */}
          {openIndex === index && (
            <div className=" py-4 lg:px-6 lg:pt-4 lg:pb-12">
              <div className="grid gap-10 lg:gap-6 lg:grid-cols-2">
                {section.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex flex-col space-y-4 lg:space-y-6 rounded-lg p-4 lg:p-0 
                    border lg:border-0 dark:border-gray-600"
                  >
                    {/* Heading */}
                    <div className={`flex items-center justify-center w-fit px-2 
                      lg:px-4 py-2 lg:py-3 bg-[var(--headingBg)] rounded-[40px]`}
                      style={{ '--headingBg': item.headingBg } as React.CSSProperties}
                    >
                      <h3 className={`font-monument-grotesk text-lg lg:text-2xl font-normal text-[var(--headingTextColor)]`}
                        style={{ '--headingTextColor': item.headingTextColor } as React.CSSProperties}
                      >
                        {item.heading}
                      </h3>
                    </div>

                    {/* Image */}
                    <Image
                      src={item.image}
                      alt={item.heading}
                      width={781.88}
                      height={556}
                      className="rounded-lg shadow-md border"
                    />

                    {/* Bottom */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-2">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 lg:gap-4 w-full lg:w-[446px] mb-4 lg:mb-0">
                        {item.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-[#2E2E2E] dark:bg-[#FEF6E7] rounded-full 
                            text-xs text-[#FFD27F] dark:text-[#865503]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex gap-4 justify-start lg:justify-between w-full">
                        {/* Live Link */}
                        <a
                          href={item.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-blue-500 text-gray-900 dark:text-white rounded-md 
                            lg:bg-transparent lg:px-0 lg:py-0 hover:text-amber-700 dark:hover:text-[#C7FC56] lg:text-xl font-medium
                            hover:underline hover:underline-offset-[6px] transition-all duration-700"
                        >
                          Live link here
                        </a>

                        {/* Case Study Button */}
                        <Link
                          href={`/caseStudy/${item.slug}`} target="_blank"
                          className="relative group px-5 py-2 bg-[#D9D9D9] hover:bg-[#FAB041] 
                          rounded-full lg:ml-auto"
                        >
                          {/* Arrow Icon */}
                          <ArrowDownIcon
                            className="text-black w-6 h-6 lg:w-8 lg:h-8 transform 
                            transition-transform duration-300 group-hover:-rotate-90"
                          />

                          {/* Tooltip */}
                          <div
                            className="absolute left-full lg:left-1/2 lg:-translate-x-1/2 
                              top-1/2 lg:top-full lg:mt-2 w-max px-3 py-1 
                              text-sm text-white bg-black dark:bg-transparent rounded-md opacity-0 group-hover:opacity-100 
                              lg:group-hover:translate-y-[-5px] transition-all duration-300"
                          >
                            View Case Study
                          </div>

                        </Link>

                      </div>
                    </div>
                  </div>
                ))}
              </div>
          </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Accordion