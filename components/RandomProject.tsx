// RandomProject.tsx
"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { projectsQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { ProjectItem, ProjectsType } from "@/types/projectsTypes";

type RandomProjectProps = {
  currentSlug: string;
};

const RandomProject = ({ currentSlug }: RandomProjectProps) => {
  const [randomProject, setRandomProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      const projectsData: ProjectsType[] = await client.fetch(projectsQuery);
      // Combine all project items into a single array.
      const allItems: ProjectItem[] = projectsData.flatMap((doc) => doc.items);

      // Exclude the current project based on slug
      const filteredItems = allItems.filter((item) => item.slug !== currentSlug);

      if (filteredItems.length > 0) {
        const randomIndex = Math.floor(Math.random() * filteredItems.length);
        setRandomProject(filteredItems[randomIndex]);
      }
    };

    fetchProjects();
  }, [currentSlug]);

  if (!randomProject) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-4 text-center space-y-8">
      <h2 className="font-gT-WalsheimPro text-xl lg:text-7xl font-normal tracking-tight lg:leading-[50px] text-gray-900 dark:text-white">
        Still curious...
      </h2>
      
      <div className="relative w-full h-[220px] lg:h-[600px]">
        <Image
          src={urlFor(randomProject.smallImage).url()}
          alt={randomProject.heading}
          priority
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>

      <Link 
        href={randomProject.slug} 
        target="_blank" 
        className="group inline-flex justify-center items-center py-3 lg:py-6 px-8 lg:px-20 lg:w-[650px] 
        rounded-full bg-[#D9D9D9] hover:bg-[#C7FC56] text-black"
      >
        <span className="font-gT-WalsheimPro text-xl lg:text-6xl font-normal">
          View next Project
        </span>
      </Link>
    </div>
  );
};

export default RandomProject;
