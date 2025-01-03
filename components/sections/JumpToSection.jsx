import { navLinks } from "@/constants/Data"
import NavLinks from "../navigation/NavLinks"

const JumpToSection = () => {
  return (
    <section id="jumpToSection" className=" min-h-screen ">
        <div className=" main-container space-y-10 lg:space-y-14 ">
            <h1 className="header-one">
                Jump to
            </h1>

            <NavLinks data={navLinks} />
        </div>
    </section>
  )
}

export default JumpToSection