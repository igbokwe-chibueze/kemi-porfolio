import ImageSlider from "@/components/ImageSlider";
import { selectedExperimentsQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { SelectedExperimentsType } from "@/types/selectedExperimentsTypes";
import { ArrowDownIcon } from "@/constants/Icons";
import MotionWrapper from "../FramerMotionWrappers/MotionWrapper";

const Page = async () => {
  // Fetch the selected experiments data with an explicit type.
  const selectedData = await client.fetch<SelectedExperimentsType[]>(selectedExperimentsQuery);

  // Flatten all images from all experiments into a single array.
  const images = selectedData.flatMap(doc => doc.experiments.map(exp => exp.image));

  return (
    <div className="lg:min-h-screen">
      <MotionWrapper className="main-container space-y-10 lg:space-y-20">
        <div className="flex items-center justify-between">
          <div className="px-5 py-2 bg-[#FAB041] rounded-full">
            <ArrowDownIcon className="text-black w-6 h-6 lg:w-56 lg:h-40" />
          </div>

          <h2
            className="font-gT-WalsheimPro text-xl lg:text-7xl font-normal 
              text-right tracking-tight text-gray-900 dark:text-white"
          >
            A selected sets of <br /> experiments I’m building
          </h2>
        </div>

        {/* Slides */}
        <div className="space-y-4 lg:space-y-8">
          <ImageSlider images={images} itemsWrapperClassName="animate-move-right [animation-duration:50s] hover:[animation-play-state:paused]" />
          <ImageSlider images={images} itemsWrapperClassName="animate-move-left [animation-duration:40s] hover:[animation-play-state:paused]" />
          <ImageSlider images={images} itemsWrapperClassName='animate-move-right [animation-duration:50s] hover:[animation-play-state:paused]'/>
        </div>
      </MotionWrapper>
    </div>
  );
};

export default Page;
