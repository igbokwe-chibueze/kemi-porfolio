import { ArrowDownIcon } from "@/constants/Icons";
import { DesignProcessItem } from "@/types/profileTypes";
import MotionWrapper from "../FramerMotionWrappers/MotionWrapper";

interface DesignProcessProps {
    data: DesignProcessItem[];
}

const AboutPage_DesignProcess = ({data}: DesignProcessProps) => {
  return (
    <section className="lg:min-h-screen">
        <MotionWrapper className="main-container">
            <div className="flex justify-between items-center">
                <h1 className="font-monument-grotesk text-4xl lg:text-[100px] font-normal 
                text-gray-900 dark:text-white">
                    My Design Process
                </h1>

                <div className="group px-5 py-2 flex justify-center items-center rounded-full 
                    mt-12 bg-[#C7FC56] hover:bg-[#FAB041]"
                >
                    <ArrowDownIcon 
                        className={`text-black w-6 h-6 lg:w-36 lg:h-28
                            transition-transform duration-300 group-hover:-rotate-90`}
                    />
                </div>
            </div>
            <div className="mt-8 space-y-6 lg:space-y-12">
                {data.map((process, index) => (
                    <div
                        key={index}
                        className="flex justify-start items-center"
                    >
                        <h3 className="font-gT-WalsheimPro text-2xl lg:text-[40px] font-normal 
                        tracking-tight leading-9 lg:leading-[50px] text-gray-900 dark:text-white">
                            <span 
                                className="bg-[var(--headingBg)] rounded-full"
                                style={{ '--headingBg': process.headingBg || '#101A1E', } as React.CSSProperties}
                            >
                                <small 
                                    className=" px-1 py-2 text-2xl lg:text-[40px] text-[var(--headingTextColor)] rounded-full mx-1"
                                    style={{ '--headingTextColor': process.headingTextColor || '#38D9FD' } as React.CSSProperties}
                                >
                                    {process.topic}:
                                </small>
                            </span> <span className="ml-1">{process.body}</span>
                        </h3>
                    </div>
                ))}
            </div>
        </MotionWrapper>
    </section>
  )
}

export default AboutPage_DesignProcess