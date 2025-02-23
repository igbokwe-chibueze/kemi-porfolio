// app/(root)/(Home)/caseStudy/${item.slug}/page.tsx

import DetailsPageAccordion from "@/components/DetailsPageAccordion";
import RandomProject from "@/components/RandomProject";
import { ArrowDownIcon } from "@/constants/Icons";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { projectBySlugQuery } from "@/sanity/lib/queries";
import { Snapshot } from "@/types/projectsTypes";
import Image from "next/image";
import { notFound } from "next/navigation";

type PageParams = {
  slug: string;
};

const page = async ({ params }: { params: Promise<PageParams> }) => {
  const resolvedParams = await params; // Await the promise
  const { slug } = resolvedParams;

  // Fetch the project data based on the slug
  const data = await client.fetch(projectBySlugQuery, { slug });

  // If no valid data is found, call notFound() to render the not-found.tsx page
  if (!data) {
    notFound();
  }

  const project = data.project;
  

  return (
    <div className=" lg:min-h-screen">
      <div className="py-8 lg:py-12 space-y-1">
        {project ? (
          <div className="space-y-8 lg:space-y-20">
            <div className="relative w-full h-[220px] lg:h-[600px]">
              <Image
                src={urlFor(project.headerImage).url()}
                alt={project.heading}
                priority
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className=" main-container space-y-8 lg:space-y-20">
              <h1 className="font-monument-grotesk text-4xl md:text-5xl lg:text-[115px] font-normal 
                tracking-tight leading-none text-gray-900 dark:text-white"
              >
                Background Information
              </h1>

              <div className=" space-y-4 lg:space-y-0 lg:grid lg:grid-cols-7 lg:gap-40">
                <div className="lg:col-span-2 w-44 lg:w-auto">
                  <div className="group px-5 py-2 flex justify-center items-center rounded-full 
                    bg-[var(--headingBg)] hover:bg-[#FAB041]"
                    style={{ '--headingBg': project?.btnBg || '#43C949' } as React.CSSProperties}
                  >
                    <ArrowDownIcon 
                      className={`text-black w-8 h-8 lg:w-24 lg:h-32
                      transition-transform duration-300 group-hover:-rotate-90`}
                    />
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-8 lg:space-y-14">
                  <h2 className="font-gT-WalsheimPro text-xl lg:text-5xl font-normal 
                    text-left tracking-tight text-gray-900 dark:text-white"
                  >
                    {project.projectOverview?.backgroundInfo}
                  </h2>

                  <DetailsPageAccordion
                    data={{
                      problems: project.projectOverview?.problems || [],
                      goals: project.projectOverview?.goals || [],
                      opportunity: project.projectOverview?.opportunity || [],
                      solutions: project.projectOverview?.solutions || [],
                    }}
                  />
                </div>
    
              </div>

              <h1 className="font-monument-grotesk text-4xl md:text-5xl lg:text-[115px] font-normal 
                tracking-tight leading-none text-gray-900 dark:text-white"
              >
                Process
              </h1>

              <div className="space-y-20">
                {project.snapshots?.map((snapshot: Snapshot, index: string) => (
                  <div key={index} className="space-y-10">
                    <div className="relative w-full h-[220px] lg:h-[600px]">
                      {snapshot.imageUrl && (
                        <Image
                          src={urlFor(snapshot.imageUrl).url()}
                          alt={`Snapshot ${index + 1}`}
                          priority
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      )}
                    </div>
                    <ul className="font-gT-WalsheimPro text-xl lg:text-3xl font-normal 
                      tracking-tight leading-none text-gray-900 dark:text-white space-y-2"
                    >
                      {(snapshot.description || []).map((desc: string, i: number) => (
                        <li key={i}>{desc}</li>
                      ))}
                      {/* This way, if snapshot.description is undefined, it falls back to an empty array[], 
                      and the map operation will safely produce no items without causing a TypeScript error. */}
                    </ul>
                  </div>
                ))}
              </div>

            </div>
          </div>
        ) : (
          <p>No data available</p>
        )}
        <div className=" lg:px-48">
          <RandomProject/>
        </div>
          
      </div>
    </div>
  )
}

export default page