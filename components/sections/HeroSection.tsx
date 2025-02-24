import { ArrowDownIcon } from "@/constants/Icons"
import Image from "next/image"
import LeftHorizontalMotionWrapper from "../FramerMotionWrappers/LeftHorizontalMotionWrapper"
import RightHorizontalMotionWrapper from "../FramerMotionWrappers/RightHorizontalMotionWrapper"

const Hero = () => {
  return (
    <section id="heroSection" className="min-h-[70vh] lg:min-h-screen">
        <div className=" relative main-container">
          {/* Column One */}
          <LeftHorizontalMotionWrapper className="">
            <h2 className="font-monument-grotesk text-2xl md:text-5xl lg:text-7xl font-normal 
              tracking-tight leading-none text-gray-900 dark:text-white"
            >
              Solving
            </h2>

            <h1 className="font-monument-grotesk text-4xl md:text-5xl lg:text-[150px] font-normal 
              tracking-tight leading-none text-gray-900 dark:text-white lg:-mt-7"
            >
              everyday
            </h1>

            <div className="mt-6 lg:mt-12 flex space-x-4">
              <div
                className="mt-2 flex items-center justify-center w-28 lg:w-64 lg:h-[130px] px-2 py-3 bg-[#FABE2C] rounded-full"
                aria-label="Arrow Down"
              >
                <ArrowDownIcon className="text-black w-6 h-6 lg:w-12 lg:h-12"/>
              </div>

              <h1 className="font-monument-grotesk text-4xl md:text-5xl lg:text-[150px] font-normal 
                tracking-tight leading-none text-gray-900 dark:text-white"
              >
                Problems
              </h1>
            </div>

          </LeftHorizontalMotionWrapper>

          {/* Column two */}
          <RightHorizontalMotionWrapper className="mt-4 lg:absolute lg:top-12 lg:right-0 space-y-2 lg:space-y-4">
            <Image
              src={"/KemiPhoto.png"}
              width={560}
              height={560}
              loading='lazy'
              alt={"Amelia Photo"}
              className=""
            />

            <div
              className="lg:ml-64 flex items-center justify-center w-fit h-20 lg:h-[130px] px-4 lg:px-10 
              bg-[#5e2d2d] dark:bg-[#FBC3C3] rounded-full"
            >
              <span className="font-monument-grotesk text-2xl lg:text-4xl font-normal 
                tracking-tight leading-none text-white dark:text-gray-900 "
              >one pixel at a time</span>
            </div>
          </RightHorizontalMotionWrapper>
        </div>
    </section>
  )
}

export default Hero