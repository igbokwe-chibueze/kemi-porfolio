"use client";

import { ArrowDownIcon } from "@/constants/Icons";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type AccordionProps = {
  data: {
    problems: string[];
    goals: string[];
    opportunity: string[];
    solutions: string[];
  };
};

const DetailsPageAccordion = ({ data }: AccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const sections = [
    { title: "Problems", content: data.problems, textColor: "#FAB041" },
    { title: "Goals", content: data.goals, textColor: "#38D9FD" },
    { title: "Opportunities", content: data.opportunity, textColor: "#AF71FF" },
    { title: "Solutions", content: data.solutions, textColor: "#f472b6" },
  ];

  return (
    <div className="border-b border-gray-300">
      {sections.map((section, index) => (
        <div
          key={index}
          className="border-t border-gray-300 rounded-sm overflow-hidden"
        >
          {/* Accordion Header */}
          <button
            onClick={() => toggleAccordion(index)}
            className="group w-full py-2 lg:py-6 px-2 flex justify-between items-center rounded-sm
              font-gT-WalsheimPro text-xl lg:text-4xl font-normal lg:uppercase 
              tracking-wide lg:leading-none text-gray-900 dark:text-white
              hover:bg-gray-300 dark:hover:bg-gray-700"
          >
            <span
              className="group-hover:text-[var(--textColor)]"
              style={{ "--textColor": section.textColor } as React.CSSProperties}
            >
              {section.title}
            </span>

            <ArrowDownIcon
              className={`mr-8 w-6 h-6 lg:w-16 lg:h-16 group-hover:text-[var(--textColor)] transform 
                ${
                  openIndex === index
                    ? "transition-transform duration-300 -rotate-90"
                    : "-rotate-[150deg] transition-transform duration-300 group-hover:-rotate-90"
                }`}
              style={{ "--textColor": section.textColor } as React.CSSProperties}
            />
          </button>

          {/* Accordion Content with Framer Motion */}
          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                key="content"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.6 }}
                className="py-4 lg:px-6 lg:pt-4 lg:pb-12"
              >
                <ul className="list-disc pl-5">
                  {section.content.map((item, i) => (
                    <li
                      key={i}
                      className="font-gT-WalsheimPro text-xl lg:text-2xl font-normal 
                        tracking-tight leading-none text-gray-900 dark:text-white space-y-2"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default DetailsPageAccordion;
