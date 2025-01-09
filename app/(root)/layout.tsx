import Footer from '@/components/Footer'
import Navbar from '@/components/navigation/Navbar'
import { JumpToSection } from '@/components/sections'

const layout = ({children}: {children: React.ReactNode}) => {
    return (
      <>
        <Navbar/>
        <div className='bg-gray-100 dark:bg-night-blue pt-20'>
          {children}
        </div>
        <JumpToSection/>
        <Footer/>
      </>
    )
}

export default layout