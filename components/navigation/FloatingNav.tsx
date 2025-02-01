import { sectionLinks } from '@/constants/Data';
import ScrollLink from '../SmoothScroller/ScrollLink';

const FloatingNav = () => {

  return (
    <div className="fixed bottom-16 right-0 left-0 z-30 lg:hidden px-4 lg:px-6 py-2.5 space-y-4">
      <div className="flex flex-wrap justify-between items-center max-w-screen-xl mx-auto">
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
    </div>
  );
};

export default FloatingNav;
