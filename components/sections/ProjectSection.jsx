import { projectData } from "@/constants/Data"
import Accordion from "../Accordion"

const Projects = () => {
  return (
    <section id="projectSection" className=" min-h-screen ">
        <div className=" main-container space-y-10 lg:space-y-20">
          <div className="space-y-8">
            <h1 className="font-monument-grotesk text-4xl md:text-5xl lg:text-[140px] font-normal 
              tracking-wide lg:leading-none text-gray-900 dark:text-white"
            >
              Selected Projects
            </h1>

            <p className="font-gT-WalsheimPro text-xl lg:text-5xl font-normal 
              tracking-tight leading-none text-gray-900 dark:text-white"
            >
              Some opportunities and <br/> projects that I’m proud of!
            </p>
          </div>

          {/* Accordion */}
          <div>
            <Accordion data={projectData} />
          </div>
        </div>
    </section>
  )
}

export default Projects