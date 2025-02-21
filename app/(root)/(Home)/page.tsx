// app/(root)/(Home)/page.tsx

import GooeyEffect from "@/components/GooeyEffect"
import { AboutSection, HeroSection, ProjectsSection, SlideSection } from "@/components/sections"

export const revalidate = 0; // On-demand only

const page = () => {
  return (
    <>
      <HeroSection/>
      <AboutSection/>
      <ProjectsSection/>
      <SlideSection/>
      <GooeyEffect/>
    </>
  )
}

export default page