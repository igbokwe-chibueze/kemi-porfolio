import DetailsPageAccordion from "@/components/DetailsPageAccordion";
import RandomProject from "@/components/RandomProject";
import { projectData } from "@/constants/Data";
import { ArrowDownIcon } from "@/constants/Icons";
import Image from "next/image";

type PageParams = {
    slug: string;
  };

const page = async ({ params }: { params:  Promise<PageParams> }) => {
  const resolvedParams = await params; // Await the promise

  const { slug } = resolvedParams; // Access 'slug' from the resolved params

  // Find the specific project and item using the slug
  const project = projectData.find((project) =>
    project.items.some((item) => item.slug === slug)
  );

  const selectedItem = project?.items.find((item) => item.slug === slug);

  return (
    <div className=" lg:min-h-screen">
      <div className="py-8 lg:py-12">
        <div className="space-y-1">
          {/* <h1 className="header-one">
            See {slug}
          </h1> */}

          {selectedItem ? (
            <div className="space-y-8 lg:space-y-20">
              <div className="relative w-full h-[220px] lg:h-[600px]">
                <Image
                  src={selectedItem.headerImage}
                  alt={selectedItem.heading}
                  priority={true}
                  fill
                  style={{
                    objectFit: 'cover',
                  }}
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
                      style={{ '--headingBg': selectedItem.btnBg } as React.CSSProperties}
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
                      {selectedItem.projectOverview?.backgroundInfo}
                    </h2>

                    <DetailsPageAccordion
                      data={{
                        problems: selectedItem.projectOverview?.problems || [],
                        goals: selectedItem.projectOverview?.goals || [],
                        opportunity: selectedItem.projectOverview?.opportunity || [],
                        solutions: selectedItem.projectOverview?.solutions || [],
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
                  {selectedItem.snapshots?.map((snapshot, index) => (
                    <div key={index} className="space-y-10">
                      <div className="relative w-full h-[220px] lg:h-[600px]">
                        <Image
                          src={snapshot.imageUrl}
                          alt={snapshot.imageUrl}
                          priority={true}
                          fill
                          style={{
                            objectFit: 'cover',
                          }}
                        />
                      </div>
                      <p className="font-gT-WalsheimPro text-xl lg:text-3xl font-normal 
                        tracking-tight leading-none text-gray-900 dark:text-white space-y-2"
                      >
                        {snapshot.description.map((desc, i) => (
                          <li key={i}>{desc}</li>
                        ))}
                      </p>
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
    </div>
  )
}

export default page