import AboutPage_Body from "@/components/AboutPageSections/AboutPage_Body"
import AboutPage_DesignProcess from "@/components/AboutPageSections/AboutPage_DesignProcess"
import AboutPage_Hero from "@/components/AboutPageSections/AboutPage_Hero"
import { client } from "@/sanity/lib/client"
import { profileQuery } from "@/sanity/lib/queries"
//import { profileData } from "@/constants/Data"


const page = async () => {
  // Fetch the profile data from Sanity
  const profileData = await client.fetch(profileQuery)
  
  return (
    <>
      <AboutPage_Hero
        profilePicture={profileData.profilePicture}
        salutation={profileData.salutation}
        name={profileData.name}
        intro={profileData.intro}
      />

      <AboutPage_Body/>

      <AboutPage_DesignProcess data={profileData.designProcess}/>
    </>
  )
}

export default page