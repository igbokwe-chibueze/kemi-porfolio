import { SmileIcon } from "@/constants/Icons"
import Link from "next/link"

const About = () => {
  return (
    <section id="aboutSection" className=" lg:min-h-screen">
      <div className=" main-container">
        <div className="space-y-2 lg:space-y-8">
          <h2 className="font-gT-WalsheimPro text-xl md:text-5xl lg:text-7xl font-normal 
            text-pretty tracking-tight text-gray-900 dark:text-white"
          >
            Driven by a passion for innovative product, 
            I thrive at the intersection of creativity and 
            <small className=" px-2 text-[#FAB041] bg-yellow-950 rounded-full mx-1">user-centered solutions. </small> <br/>
            I craft intuitive and memorable product experiences that delight users and I ask the necessary 
            and sometimes difficult questions to create products that focuses on 
            <small className="px-2 text-[#38D9FD] bg-blue-950 rounded-full mx-1">people. </small>
          </h2>

          <div className="flex justify-end" >
            <Link 
              href={""} 
              className={`group inline-flex justify-center items-center py-3 lg:py-6 px-8 lg:px-20 lg:w-[650px] rounded-full 
                bg-[#D9D9D9] hover:bg-[#C7FC56] text-black `}
            >
              {/* Icon with custom styles */}
              <span className="hidden group-hover:inline-flex mr-2"
              >
                <SmileIcon className="w-7 h-7 lg:w-[60px] lg:h-[60px]"/>
              </span>
              
              <span className="font-gT-WalsheimPro text-xl lg:text-6xl font-normal 
                group-hover:translate-x-2 transition-all duration-300"
              >
                More about me
              </span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About