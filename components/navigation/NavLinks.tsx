import Link from "next/link";
import { ReactNode } from "react";

// Define the type for individual navigation links
type NavLink = {
    href: string; // URL for the link
    text: string; // Display text for the link
    hoverColor: string; // Hover background color
    icon: ReactNode; // Icon JSX for the link
};

// Define the props for the NavLinks component
type NavLinksProps = {
    data: NavLink[]; // Array of navigation links
    toggleNavLinks: () => void; // Function to toggle nav visibility
};

const NavLinks: React.FC<NavLinksProps> = ({ data, toggleNavLinks }) => {
  return (
    <ul className="flex flex-col my-[118px] space-y-2 lg:space-y-10">
        {data.map((link, index) => (
            <li key={index}>
                <Link 
                    href={`/${link.href}`} target="_blank" 
                    onClick={toggleNavLinks}
                    className={`group flex justify-center items-center py-6 lg:py-10 px-4 rounded-full 
                        bg-[#D9D9D9] text-black hover:bg-[var(--hover-color)]`}
                    style={{ '--hover-color': link.hoverColor } as React.CSSProperties}
                >
                    {/* Icon with custom styles */}
                    <span className=" w-6 h-6 lg:w-[92px] lg:h-[92px] hidden group-hover:inline-flex"
                    >
                        {link.icon}
                    </span>
                    {/* Text with different styling */}
                    <span className="font-gT-WalsheimPro text-xl lg:text-9xl font-normal 
                        group-hover:underline group-hover:underline-offset-[12px] lg:group-hover:decoration-4
                        group-hover:translate-x-2 transition-all duration-300"
                    >
                        {link.text}
                    </span>
                </Link>
            </li>
        ))}
    </ul>
  );
}

export default NavLinks;
