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
            caseStudyLink: "ecommerce",
          },
          {
            heading: "Portfolio Website",
            headingBg: '#081809',
            headingTextColor: '#42C447',
            image: "/Pakam 2.png",
            tags: ["React", "Tailwind CSS", "Next.js"],
            liveLink: "https://ecommerce.com",
            caseStudyLink: "portfolio",
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
                caseStudyLink: "banking",
            },
            {
                heading: "Police Website",
                headingBg: '#101A1E',
                headingTextColor: '#89D9F9',
                image: "/Pakam 1.png",
                tags: ["HTML", "CSS", "JavaScript"],
                liveLink: "https://portfolio.com",
                caseStudyLink: "police",
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
            caseStudyLink: "wecareEcommerce",
          },
          {
            heading: "Portfolio Website",
            headingBg: '#081809',
            headingTextColor: '#42C447',
            image: "/Pakam 2.png",
            tags: ["React", "Tailwind CSS", "Next.js"],
            liveLink: "https://ecommerce.com",
            caseStudyLink: "wecarePortfolio",
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
                caseStudyLink: "errandBoxBanking",
            },
            {
                heading: "Police Website",
                headingBg: '#101A1E',
                headingTextColor: '#89D9F9',
                image: "/Pakam 1.png",
                tags: ["HTML", "CSS", "JavaScript"],
                liveLink: "https://portfolio.com",
                caseStudyLink: "errandBoxPolice",
            },
        ],
    },
];

type Experiments = {
    image: string;
};

export const selectedExperiments: Experiments[] = Array.from({ length: 27 }, (_, index) => ({
    image: `/SlideImages/SlideImage (${index + 1}).png`,
}));


//************Profile */
export interface DesignProcess {
    topic: string;
    body: string;
    headingBg: string;
    headingTextColor: string;
};
// type DesignProcess = {
//     topic: string;
//     body: string;
//     headingBg: string;
//     headingTextColor: string;
// };

export interface ProfileData {
    profilePicture: string;
    salutation: string;
    name: string;
    intro: string;
    designProcess: DesignProcess[];
};

export const profileData: ProfileData = {
    profilePicture: "/KemiProfile.jpg",
    salutation: "Hi, I’m Amelia",
    name: "Oluwakemi Olufowobi",
    intro: "And I help startups create unique and empathic product experiences.",
    designProcess: [
        {
            topic: "Research & Discovery",
            headingBg: '#101A1E',
            headingTextColor: '#38D9FD',
            body: "Understanding the problem space, gathering requirements, and identifying user needs to set a solid foundation for design.",
        },
        {
            topic: "Ideation & Prototyping",
            headingBg: '#422006',
            headingTextColor: '#FAB041',
            body: "Brainstorming and conceptualizing ideas, followed by creating low-fidelity wireframes and interactive prototypes.",
        },
        {
            topic: "Design & Implementation",
            headingBg: '#250949',
            headingTextColor: '#AF71FF',
            body: "Crafting high-fidelity designs and collaborating with developers to bring the vision to life with pixel-perfect precision.",
        },
        {
            topic: "Testing & Iteration",
            headingBg: '#470909',
            headingTextColor: '#FFB7B7',
            body: "Conducting usability tests, collecting feedback, and iterating to refine the product for optimal user experience.",
        },
    ],
};
  