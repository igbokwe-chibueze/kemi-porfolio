import { projectData } from "@/constants/Data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RandomProject: React.FC = () => {
  // Function to get a random project
  const getRandomProject = () => {
    // Flatten the items from all projects
    const allItems = projectData.flatMap((project) => project.items);
    // Get a random item
    const randomIndex = Math.floor(Math.random() * allItems.length);
    return allItems[randomIndex];
  };

  const randomProject = getRandomProject();

  return (
    <div className="p-4 text-center space-y-8">
      <h2 className="font-gT-WalsheimPro text-xl lg:text-7xl font-normal 
        tracking-tight lg:leading-[50px] text-gray-900 dark:text-white"
      >
        Still curious...
      </h2>
      
      <div className="relative w-full h-[220px] lg:h-[600px]">
        <Image
          src={randomProject.smallImage}
          alt={randomProject.heading}
          priority={true}
          fill
          style={{
            objectFit: 'cover',
          }}
        />
      </div>

      <Link 
        href={randomProject.slug} target="_blank" 
        className={`group inline-flex justify-center items-center py-3 lg:py-6 px-8 lg:px-20 lg:w-[650px] rounded-full 
          bg-[#D9D9D9] hover:bg-[#C7FC56] text-black `}
      >
        
        <span className="font-gT-WalsheimPro text-xl lg:text-6xl font-normal">
          View next Project
        </span>
      </Link>
    </div>
  );
};

export default RandomProject;
