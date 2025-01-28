'use client';

import Link from "next/link";
import { ReactNode, useState } from "react";

// Define the type for individual navigation links
type NavLink = {
  href: string; // URL for the link
  text: string; // Display text for the link
  hoverColor: string; // Hover background color
  icon: ReactNode; // Icon JSX for the link
  isDownload?: boolean; // Indicates if this is a download button
};

// Define the props for the NavLinks component
type NavLinksProps = {
  data: NavLink[]; // Array of navigation links
  toggleNavLinks?: () => void; // Function to toggle nav visibility
};

// Define the download function
// const handleDownloadClick = () => {
//   const fileUrl = "/path-to-your-file.pdf"; // Path to your file in the public folder
//   const link = document.createElement("a");
//   link.href = fileUrl;
//   link.download = "My_CV.pdf"; // The name of the downloaded file
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
// };


const NavLinks = ({ data, toggleNavLinks }: NavLinksProps) => {

    const [downloading, setDownloading] = useState(false);

    // Function to handle the download button click
    const handleDownloadClick = async () => {

        // Set the downloading state to true
        setDownloading(true);

        // Resolve the reference to get the file asset
        //const fileAsset = await client.getDocument(header.ameliaResume.asset._ref)
        
        // Extract the URL from the file asset
        //const resumeUrl = fileAsset.url;

        //window.open(resumeUrl, '_blank'); // Opens the file URL in a new tab

        // Extract the file name from the file asset
        //const resumeName = fileAsset.originalFilename;

        const resumeUrl = "/constants/KemiCv.pdf"; // Path to your file in the public folder
        const resumeName = "KemiCv.pdf"; // The name of the downloaded file
        
        // Fetch the file as a blob
        const response = await fetch(resumeUrl);

        if (!response.ok) {
            console.error("Failed to fetch the file:", response.statusText);
            setDownloading(false);
            return;
        }

        const blob = await response.blob();

        // Create a temporary anchor element
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = resumeName; // Set the desired file name here
        document.body.appendChild(link);

        // Trigger a click event on the anchor element
        link.click();

        // Remove the temporary anchor element and URL object
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);

        // Reset the downloading state after a short delay (adjust the delay as needed)
        setTimeout(() => {
        setDownloading(false);
        }, 3000);
    };

  return (
    <ul className="flex flex-col my-[118px] space-y-2 lg:space-y-10">
      {data.map((link, index) => (
        <li key={index}>
          {link.isDownload ? (
            <button
              onClick={() => {
                //toggleNavLinks(); //commenting this out makes clicking the download wont close the nav menu. I want it to close the menu But i was getting an error with it.
                handleDownloadClick();
              }}
              className={`group flex justify-center items-center py-6 lg:py-10 px-4 w-full rounded-full 
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
                {downloading ? 'Downloading...' : `${link.text}`}
              </span>
            </button>
          ) : link.href.startsWith('http') || link.href.startsWith('mailto') ? (
            <Link
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
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
          ) : (
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
          )}
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
