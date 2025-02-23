import NavLinks from "../navigation/NavLinks"
import { client } from "@/sanity/lib/client"
import { profileQuery } from "@/sanity/lib/queries"
import MotionWrapper from "../FramerMotionWrappers/MotionWrapper"

const JumpToSection = async () => {
  // Fetch the profile data from Sanity
    const profileData = await client.fetch(profileQuery)
  return (
    <section id="jumpToSection" className=" min-h-screen bg-gray-200 dark:bg-night-blue">
        <MotionWrapper className=" main-container space-y-10 lg:space-y-14 ">
          <h1 className="header-one">
            Jump to
          </h1>

          {/* Only render NavLinks when profileData is available */}
          {profileData ? <NavLinks profile={profileData}/> : <p>Loading...</p>}
        </MotionWrapper>
    </section>
  )
}

export default JumpToSection