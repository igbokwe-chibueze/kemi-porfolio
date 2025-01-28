import { sectionLinks } from '@/constants/Data';
import ScrollLink from '../SmoothScroller/ScrollLink';

const FloatingNav = () => {

  return (
    <div className="fixed bottom-16 right-4 z-50 lg:hidden flex space-x-4">
      {sectionLinks.map((link) => (
        <div key={link.id}
        >
            <ScrollLink targetId={link.id} 
                offset={-40} duration={700} smoothScroll={true} threshold={0.4}
                activeClassName="bg-red-600 text-white"
                className="p-3 bg-gray-400 text-black rounded-full shadow-md transition-all duration-300"
            >
                <button >
                    {link.name}
                </button>
            </ScrollLink>
        </div>
      ))}
    </div>
  );
};

export default FloatingNav;
