import { navLinks } from '@/constants/Data';
import { urlFor } from '@/sanity/lib/image';
import { ProfileType } from '@/types/profileTypes';
import Image from 'next/image';
import Link from 'next/link';

interface NavLinksProps {
  profile?: ProfileType;
  toggleNavLinks?: () => void; // Function to toggle nav visibility
}

const NavLinks = ({ profile, toggleNavLinks }: NavLinksProps) => {
  // If profile is undefined, return null (or a fallback)
  if (!profile) {
    return null;
  }
  
  const { emailContact, socialLinks } = profile;

  const imageUrl = emailContact?.icon 
  ? urlFor(emailContact.icon).url() 
  : '/default-icon.png'; // Provide your own default image URL


  return (
    <ul className="flex flex-col my-[118px] space-y-2 lg:space-y-10">
      {/* Page Links */}
      {navLinks && 
        navLinks.map((link, index) => (
          <li key={index}>
            <Link
              href={`/${link.href}`}
              onClick={toggleNavLinks}
              className={`group flex justify-center items-center py-6 lg:py-10 px-4 rounded-full 
                  bg-[#D9D9D9] text-black hover:bg-[var(--hover-color)]`}
              style={{ '--hover-color': link.hoverColor } as React.CSSProperties}
            >
              <span className="w-6 h-6 lg:w-[92px] lg:h-[92px] hidden group-hover:inline-flex">
                {link.icon}
              </span>
              <span
                className="font-gT-WalsheimPro text-xl lg:text-9xl font-normal 
                    group-hover:underline group-hover:underline-offset-[12px] lg:group-hover:decoration-4
                    group-hover:translate-x-2 transition-all duration-300"
              >
                {link.text}
              </span>
            </Link>
          </li>
        ))
      }

      {/* Email Button */}
      {emailContact && emailContact.email && (
        <Link
          href={`mailto:${emailContact.email}`}
          onClick={toggleNavLinks}
          className={`group flex justify-center items-center py-6 lg:py-10 px-4 w-full rounded-full 
            bg-[#D9D9D9] text-black hover:bg-[var(--hover-color)]`}
          style={{ '--hover-color': emailContact.hoverColor } as React.CSSProperties}
        >
          <div className="w-7 h-7 lg:w-[92px] lg:h-[92px] relative hidden group-hover:inline-flex">
            <Image
              src={imageUrl}
              alt={`${emailContact.email}'s Profile Picture`}
              fill // Ensures the image takes the entire container space
              style={{ objectFit: "cover" }} // Crops the image to cover the container
              priority
            />
          </div>
          
          <span
            className="font-gT-WalsheimPro text-xl lg:text-9xl font-normal 
                group-hover:underline group-hover:underline-offset-[12px] lg:group-hover:decoration-4
                group-hover:translate-x-2 transition-all duration-300"
          >
            CONTACT
          </span>
        </Link>
      )}

      {/* Social Link Buttons */}
      {socialLinks &&
        socialLinks.map((link, index) => (
          <Link
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={toggleNavLinks}
            className={`group flex justify-center items-center py-6 lg:py-10 px-4 rounded-full 
              bg-[#D9D9D9] text-black hover:bg-[var(--hover-color)]`}
            style={{ '--hover-color': link.hoverColor } as React.CSSProperties}
          >
            {link.icon && (
              <div className="w-7 h-7 lg:w-[92px] lg:h-[92px] relative hidden group-hover:inline-flex">
                <Image
                  src={link.icon.asset.url}
                  alt={`${link.platform}'s Profile Picture`}
                  fill // Ensures the image takes the entire container space
                  style={{ objectFit: "cover" }} // Crops the image to cover the container
                  priority
                />
              </div>
            )}
            <span
              className="font-gT-WalsheimPro text-xl lg:text-9xl font-normal 
              group-hover:underline group-hover:underline-offset-[12px] lg:group-hover:decoration-4
              group-hover:translate-x-2 transition-all duration-300"
            >
              {link.platform}
            </span>
          </Link>
        ))}
    </ul>
  );
};

export default NavLinks;
