import { BubbleIcon, FlashIcon, HandIcon, HashtagIcon, SmileIcon } from "./Icons";

export const navLinks = [
    { href: 'work', text: 'WORK', icon: <FlashIcon/>, hoverColor: '#FAB041' },
    { href: 'about', text: 'ABOUT', icon: <HandIcon/>, hoverColor: '#FAE741' },
    { href: 'contact', text: 'CONTACT', icon: <SmileIcon/>, hoverColor: '#FAE741' },
    { href: 'linkedin', text: 'LINKEDIN', icon: <BubbleIcon/>, hoverColor: '#2459E0' },
    { href: 'twitter', text: 'X (TWITTER)', icon: <HashtagIcon/>, hoverColor: '#38D9FD' },
    { href: 'download-cv', text: 'DOWNLOAD CV', icon: <HashtagIcon/>, hoverColor: '#38D9FD' },
];

type AccordionItem = {
    heading: string;
    headingBg: string;
    headingTextColor: string;
    image: string;
    tags: string[];
    liveLink: string;
    caseStudyLink: string;
};
  
export interface AccordionData {
    title: string;
    items: AccordionItem[];
};

export const projectData: AccordionData[] = [
    {
        title: "Pakam",
        items: [
          {
            heading: "E-Commerce Website",
            headingBg: '#171E0A',
            headingTextColor: '#C7FC56',
            image: "/Pakam 1.png",
            tags: ["React", "Tailwind CSS", "Next.js", "Figma", "Vercel"],
            liveLink: "https://ecommerce.com",
            caseStudyLink: "/case-studies/ecommerce",
          },
          {
            heading: "Portfolio Website",
            headingBg: '#081809',
            headingTextColor: '#42C447',
            image: "/Pakam 2.png",
            tags: ["React", "Tailwind CSS", "Next.js"],
            liveLink: "https://ecommerce.com",
            caseStudyLink: "/case-studies/ecommerce",
          },
        ],
    },
    {
        title: "Branch",
        items: [
            {
                heading: "Banking Website",
                headingBg: '#101A1E',
                headingTextColor: '#89D9F9',
                image: "/Pakam 2.png",
                tags: ["HTML", "CSS", "JavaScript"],
                liveLink: "https://portfolio.com",
                caseStudyLink: "/case-studies/portfolio",
            },
            {
                heading: "Police Website",
                headingBg: '#101A1E',
                headingTextColor: '#89D9F9',
                image: "/Pakam 1.png",
                tags: ["HTML", "CSS", "JavaScript"],
                liveLink: "https://portfolio.com",
                caseStudyLink: "/case-studies/portfolio",
            },
        ],
    },
    {
        title: "Wecare",
        items: [
          {
            heading: "E-Commerce Website",
            headingBg: '#171E0A',
            headingTextColor: '#C7FC56',
            image: "/Pakam 1.png",
            tags: ["React", "Tailwind CSS", "Next.js", "Figma", "Vercel"],
            liveLink: "https://ecommerce.com",
            caseStudyLink: "/case-studies/ecommerce",
          },
          {
            heading: "Portfolio Website",
            headingBg: '#081809',
            headingTextColor: '#42C447',
            image: "/Pakam 2.png",
            tags: ["React", "Tailwind CSS", "Next.js"],
            liveLink: "https://ecommerce.com",
            caseStudyLink: "/case-studies/ecommerce",
          },
        ],
    },
    {
        title: "ErrandBox",
        items: [
            {
                heading: "Banking Website",
                headingBg: '#101A1E',
                headingTextColor: '#89D9F9',
                image: "/Pakam 2.png",
                tags: ["HTML", "CSS", "JavaScript"],
                liveLink: "https://portfolio.com",
                caseStudyLink: "/case-studies/portfolio",
            },
            {
                heading: "Police Website",
                headingBg: '#101A1E',
                headingTextColor: '#89D9F9',
                image: "/Pakam 1.png",
                tags: ["HTML", "CSS", "JavaScript"],
                liveLink: "https://portfolio.com",
                caseStudyLink: "/case-studies/portfolio",
            },
        ],
    },
];

  