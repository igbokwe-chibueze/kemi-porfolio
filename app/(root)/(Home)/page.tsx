
//import GooeyEffect from "@/components/GooeyEffect"
import FloatingNav from "@/components/navigation/FloatingNav"
import { AboutSection, HeroSection, ProjectsSection, SlideSection } from "@/components/sections"


const page = () => {
  return (
    <>
      <HeroSection/>
      <AboutSection/>
      <ProjectsSection/>
      <SlideSection/>
      <FloatingNav/>
      {/* <GooeyEffect/> */}
    </>
  )
}

export default page