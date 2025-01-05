import { ArrowDownIcon } from "@/constants/Icons"
import { selectedExperiments } from "@/constants/Data"
import Image from "next/image"
import ScrollSlider from "../ScrollSlider"


const SlidesSection = () => {
  return (
    <section id="slideSection" className=" min-h-screen ">
        <div className=" main-container space-y-10 lg:space-y-14 ">

          <div className="flex items-center justify-between">
            <div className="px-5 py-2 bg-[#FAB041] 
              rounded-full">
              <ArrowDownIcon className={`text-black w-6 h-6 lg:w-56 lg:h-40`}/>
            </div>

            <h2 className="font-gT-WalsheimPro text-xl lg:text-7xl font-normal 
              text-right tracking-tight text-gray-900 dark:text-white"
            >
              A selected sets of <br/> experiments I’m building
            </h2>
          </div>

          {/* Slides */}
          <div className="space-y-4 lg:space-y-8">
            <ScrollSlider itemsWrapperClassName='animate-move-right [animation-duration:10s] hover:[animation-play-state:paused]'>
              {selectedExperiments.map((experiment, index) =>(
                <div key={index} className="bg-[#D9D9D9] p-2 lg:p-8">
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
            </ScrollSlider>

            <ScrollSlider itemsWrapperClassName='animate-move-left [animation-duration:13s] hover:[animation-play-state:paused]'>
              {selectedExperiments.map((experiment, index) =>(
                <div key={index} className="bg-[#D9D9D9] p-2 lg:p-8">
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
            </ScrollSlider>

            <ScrollSlider itemsWrapperClassName='animate-move-right [animation-duration:10s] hover:[animation-play-state:paused]'>
              {selectedExperiments.map((experiment, index) =>(
                <div key={index} className="bg-[#D9D9D9] p-2 lg:p-8">
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
            </ScrollSlider>
          </div>
        </div>
    </section>
  )
}

export default SlidesSection