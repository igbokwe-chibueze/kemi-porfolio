import Accordion from "@/components/Accordion"
import ImageSlider from "@/components/ImageSlider"
import { projectData } from "@/constants/Data"


const page = () => {
  return (
    <div className=" lg:min-h-screen">
      <div className=" main-container space-y-10 lg:space-y-20">
        <div
          className="ml-auto w-64 lg:w-[830px] h-20 lg:h-[130px] px-4 lg:px-10 
          bg-[#5e2d2d] dark:bg-[#FBC3C3] rounded-full"
        ></div>

        <div className="space-y-8">
          <h1 className="header-one">
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

        {/* Slides */}
        <div className="space-y-4 lg:space-y-8">
          <ImageSlider itemsWrapperClassName='animate-move-right [animation-duration:50s] hover:[animation-play-state:paused]'/>
          <ImageSlider itemsWrapperClassName='animate-move-left [animation-duration:40s] hover:[animation-play-state:paused]'/>
          <ImageSlider itemsWrapperClassName='animate-move-right [animation-duration:50s] hover:[animation-play-state:paused]'/>
        </div>
      </div>
    </div>
  )
}

export default page