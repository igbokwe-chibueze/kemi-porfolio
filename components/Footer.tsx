

const Footer = () => {
  return (
    <footer id="footer" className="relative bg-gray-200 dark:bg-night-blue border-t border-gray-600 dark:border-gray-100">
      <div className="py-8 lg:py-16">
        <div className="max-w-screen-xl mx-auto px-4 lg:px-12">
          <div className=" flex flex-col space-y-4 lg:space-y-10">
            <span className="font-monument-grotesk text-xl lg:text-7xl font-normal text-gray-900 dark:text-white"
            >
              Let&apos;s work together
            </span>

            <div className="w-fit px-2 lg:px-4 lg:py-3 bg-green-950 rounded-[40px]">
              <span className="font-monument-grotesk text-xl lg:text-8xl font-normal text-[#C7FC56]"
              >
                okemiolufowobi@gmail.com
              </span>
            </div>

          </div>
        </div>

        {/* Bottom half */}
        <hr className=" my-6 lg:my-12 sm:mx-auto border-gray-600 dark:border-gray-100 " />

        <div className="max-w-screen-xl mx-auto px-4 lg:px-12">
          <div 
            className="sm:flex sm:items-center sm:justify-between space-y-2 sm:space-y-0 
            font-gT-WalsheimPro text-base lg:text-3xl font-normal text-gray-900 dark:text-white"
          >
            <div className="">
              Design Amelia Oluwakemi <br />
              <a href="https://github.com/igbokwe-chibueze" className=" hover:underline ">Development Igbokwe Chibueze</a>.
            </div>

            <div className="">
              © 2025 <a href="" className=" hover:underline ">Amelia Oluwakemi™</a>.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer