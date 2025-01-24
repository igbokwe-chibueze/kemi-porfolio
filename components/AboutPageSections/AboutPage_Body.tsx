import { ArrowDownIcon } from "@/constants/Icons"


const AboutPage_Body = () => {
  return (
    <section className="lg:min-h-screen">
        <div className="main-container space-y-16">
            <div className="lg:px-20 space-y-4 lg:space-y-14">
                <h2 className="font-gT-WalsheimPro text-xl lg:text-6xl font-normal 
                    leading-loose text-pretty tracking-tight text-gray-900 dark:text-white"
                >
                    I am a dedicated product designer with a passion for creating intuitive and impactful
                    <small className=" px-2 text-[#FAB041] bg-yellow-950 text-xl lg:text-5xl rounded-full mx-1">user experiences. </small>
                    My work revolves around understanding user needs and 
                    translating them into thoughtful design solutions that not only meet but exceed expectations. 
                    With a background in both research and design, I approach each project with a 
                    <small className="px-2 text-[#38D9FD] text-xl lg:text-5xl bg-blue-950 rounded-full mx-1">user-centric mindset, </small>
                    ensuring that the final product is both functional and delightful to use.
                </h2>

                <h2 className="font-gT-WalsheimPro text-xl lg:text-6xl font-normal 
                    leading-loose text-pretty tracking-tight text-gray-900 dark:text-white"
                >
                    When I&apos;m not designing or exploring new product possibilities, you can find me playing video games.
                </h2>
            </div>

            <div className="lg:grid lg:grid-cols-7 lg:gap-12 lg:px-20 space-y-4 lg:space-y-0">
                <div className="lg:col-span-2 w-44 lg:w-auto">
                    <div className="group px-5 py-2 flex justify-center items-center rounded-full 
                       mt-12 bg-[#FFE7CC] hover:bg-[#FAB041]"
                    >
                        <ArrowDownIcon 
                            className={`text-black w-8 h-8 lg:w-44 lg:h-40
                                transition-transform duration-300 group-hover:-rotate-90`}
                        />
                    </div>
                </div>

                <div className="lg:col-span-5 space-y-4 lg:space-y-14">
                    <p className="font-gT-WalsheimPro text-2xl lg:text-[40px] font-normal 
                        tracking-tight text-pretty lg:leading-[50px] text-gray-900 dark:text-white"
                    >
                        I effectively collaborate with engineers and cross-functional teams to design and <br/> 
                        <small className=" px-2 text-xl lg:text-4xl text-[#FAB041] bg-yellow-950 rounded-full mx-1">deliver seamless websites </small>
                        and applications for companies and individuals.
                    </p>

                    <p className="font-gT-WalsheimPro text-2xl lg:text-[40px] font-normal 
                        tracking-tight lg:leading-[50px] text-gray-900 dark:text-white"
                    >
                        With extensive experience working hand-in-hand with engineering teams and leading product 
                        initiatives, I leverage my UI expertise to drive product solutions and craft intuitive, 
                        <small className=" px-2 text-xl lg:text-4xl text-[#C7FC56] bg-green-950 rounded-full mx-1">user-centric experiences </small>
                        that delight.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutPage_Body