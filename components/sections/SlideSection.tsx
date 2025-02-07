import { ArrowDownIcon } from "@/constants/Icons"
import ImageSlider from "../ImageSlider"


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
            <ImageSlider itemsWrapperClassName='animate-move-right [animation-duration:50s] hover:[animation-play-state:paused]'/>
            <ImageSlider itemsWrapperClassName='animate-move-left [animation-duration:40s] hover:[animation-play-state:paused]'/>
            <ImageSlider itemsWrapperClassName='animate-move-right [animation-duration:50s] hover:[animation-play-state:paused]'/>
          </div>
        </div>
    </section>
  )
}

export default SlidesSection