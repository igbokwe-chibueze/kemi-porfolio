import Footer from '@/components/Footer'
import Navbar from '@/components/navigation/Navbar'

const layout = ({children}: {children: React.ReactNode}) => {
    return (
      <>
        <Navbar/>
        <div className='bg-gray-100 dark:bg-night-blue pt-20'>
          {children}
        </div>
        <Footer/>
      </>
    )
}

export default layout