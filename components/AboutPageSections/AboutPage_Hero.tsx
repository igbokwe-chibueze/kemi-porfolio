import { urlFor } from "@/sanity/lib/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Image from "next/image";

interface AboutPage_HeroProps {
  profilePicture: SanityImageSource;
  salutation: string;
  name: string;
  intro: string;
}

const AboutPage_Hero = ({
  profilePicture,
  salutation,
  name,
  intro,
}: AboutPage_HeroProps) => {
    const imageUrl = urlFor(profilePicture).url()
  return (
    <section className="lg:min-h-screen">

        <div className="main-container">
            <div className="lg:grid lg:grid-cols-5 lg:gap-12 lg:items-center">
                {/* Profile Picture */}
                <div className="lg:col-span-2 relative w-full h-[300px] lg:h-[450px] overflow-hidden">
                    <Image
                        src={imageUrl}
                        alt={`${name}'s Profile Picture`}
                        fill // Ensures the image takes the entire container space
                        style={{ objectFit: "cover" }} // Crops the image to cover the container
                        priority
                        className="rounded-2xl lg:rounded-[90px]"
                    />
                </div>

                {/* Salutation, Name, and Intro */}
                <div className="lg:col-span-3 flex flex-col lg:space-y-10 lg:text-center lg:px-4 lg:py-6">
                    <div className="lg:space-y-4">
                        <h1 className="font-monument-grotesk text-6xl lg:text-[120px] font-normal 
                        tracking-tight lg:leading-[90px] text-gray-900 dark:text-white">
                            {salutation}
                        </h1>

                        <h2 className="font-monument-grotesk text-2xl lg:text-[40px] font-normal 
                        tracking-tight leading-[90px] text-gray-900 dark:text-white">
                            {name}
                        </h2>
                    </div>

                    <p className="font-gT-WalsheimPro text-2xl lg:text-[40px] font-normal 
                    tracking-tight lg:leading-[50px] text-gray-900 dark:text-white">
                        {intro}
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default AboutPage_Hero;
