import { FlashIcon, HandIcon } from "./Icons";

export const navLinks = [
  { href: 'work', text: 'WORK', icon: <FlashIcon/>, hoverColor: '#FAB041' },
  { href: 'about', text: 'ABOUT', icon: <HandIcon/>, hoverColor: '#FAE741' },
];

export const sectionLinks = [
  { id: "heroSection", name: "Hero"},
  { id: "aboutSection", name: "About"},
  { id: "projectSection", name: "Projects"},
  { id: "slideSection", name: "Slides"},
];


//************Project */
type ProjectOverview = {
    backgroundInfo: string;
    problems: string[];
    goals: string[];
    opportunity: string[];
    solutions: string[];
};
  
type SnapshotsDetails = {
    imageUrl: string;
    description: string[];
};

type AccordionItem = {
    heading: string;
    headingBg: string;
    btnBg: string;
    headingTextColor: string;
    headerImage: string;
    smallImage: string;
    tags: string[];
    liveLink: string;
    slug: string;
    projectOverview?: ProjectOverview; // Grouped fields
    snapshots?: SnapshotsDetails[];

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
            btnBg: '#43C949',
            headingTextColor: '#C7FC56',
            headerImage: "/PakamHeaderImage.png",
            smallImage: "/PakamSmall.png",
            tags: ["React", "Tailwind CSS", "Next.js", "Figma", "Vercel"],
            liveLink: "https://ecommerce.com",
            slug: "ecommerce",
            projectOverview: {
                backgroundInfo: "Pakam is a recycling company is Lagos Nigeria that is using technology to solve waste problems in Lagos",
                problems: [
                  "Users found it difficult to locate eco-friendly products.",
                  "Existing platforms lacked personalization.",
                ],
                goals: ["To create a seamless and personalized e-commerce experience.",],
                opportunity: ["The rise in demand for sustainable and eco-friendly products.",],
                solutions: ["A platform designed to cater to eco-conscious customers with personalized recommendations.",],
            },
            snapshots: [
                {
                  imageUrl: "/PakamCover.png",
                  description: [
                    "Homepage showcasing featured eco-friendly products.",
                    "Homepage showcasing featured eco-friendly products.",
                    "Homepage showcasing featured eco-friendly products.",
                  ]
                },
                {
                  imageUrl: "/PakamCover1.png",
                  description: [
                    "Homepage showcasing featured eco-friendly products.",
                    "Homepage showcasing featured eco-friendly products.",
                    "Homepage showcasing featured eco-friendly products.",
                  ]
                },
                {
                  imageUrl: "/PakamCover2.png",
                  description: [
                    "Homepage showcasing featured eco-friendly products.",
                    "Homepage showcasing featured eco-friendly products.",
                    "Homepage showcasing featured eco-friendly products.",
                  ]
                },
                {
                  imageUrl: "/PakamCover3.png",
                  description: [
                    "Homepage showcasing featured eco-friendly products.",
                    "Homepage showcasing featured eco-friendly products.",
                    "Homepage showcasing featured eco-friendly products.",
                  ]
                },
            ],
          },
          {
            heading: "Portfolio Website",
            headingBg: '#081809',
            btnBg: '#43C949',
            headingTextColor: '#42C447',
            headerImage: "/PakamHeaderImage2.png",
            smallImage: "/PakamSmall2.png",
            tags: ["React", "Tailwind CSS", "Next.js"],
            liveLink: "https://ecommerce.com",
            slug: "portfolio",
            projectOverview: {
                backgroundInfo: "This project involved building an e-commerce platform for sustainable products.",
                problems: [
                  "Users found it difficult to locate eco-friendly products.",
                  "Existing platforms lacked personalization.",
                ],
                goals: ["To create a seamless and personalized e-commerce experience.",],
                opportunity: ["The rise in demand for sustainable and eco-friendly products.",],
                solutions: ["A platform designed to cater to eco-conscious customers with personalized recommendations.",],
            },
            snapshots: [
              {
                imageUrl: "/PakamCover.png",
                description: [
                  "Homepage showcasing featured eco-friendly products.",
                  "Homepage showcasing featured eco-friendly products.",
                  "Homepage showcasing featured eco-friendly products.",
                ]
              },
              {
                imageUrl: "/PakamCover1.png",
                description: [
                  "Homepage showcasing featured eco-friendly products.",
                  "Homepage showcasing featured eco-friendly products.",
                  "Homepage showcasing featured eco-friendly products.",
                ]
              },
              {
                imageUrl: "/PakamCover2.png",
                description: [
                  "Homepage showcasing featured eco-friendly products.",
                  "Homepage showcasing featured eco-friendly products.",
                  "Homepage showcasing featured eco-friendly products.",
                ]
              },
              {
                imageUrl: "/PakamCover3.png",
                description: [
                  "Homepage showcasing featured eco-friendly products.",
                  "Homepage showcasing featured eco-friendly products.",
                  "Homepage showcasing featured eco-friendly products.",
                ]
              },
            ],
          },
        ],
    },
    {
        title: "Branch",
        items: [
            {
                heading: "Banking Website",
                headingBg: '#101A1E',
                btnBg: '#43C949',
                headingTextColor: '#89D9F9',
                headerImage: "/PakamHeaderImage.png",
                smallImage: "/PakamSmall.png",
                tags: ["HTML", "CSS", "JavaScript"],
                liveLink: "https://portfolio.com",
                slug: "banking",
                projectOverview: {
                    backgroundInfo: "This project involved building an e-commerce platform for sustainable products.",
                    problems: [
                      "Users found it difficult to locate eco-friendly products.",
                      "Existing platforms lacked personalization.",
                    ],
                    goals: ["To create a seamless and personalized e-commerce experience.",],
                    opportunity: ["The rise in demand for sustainable and eco-friendly products.",],
                    solutions: ["A platform designed to cater to eco-conscious customers with personalized recommendations.",],
                },
                snapshots: [
                  {
                    imageUrl: "/PakamCover.png",
                    description: [
                      "Homepage showcasing featured eco-friendly products.",
                      "Homepage showcasing featured eco-friendly products.",
                      "Homepage showcasing featured eco-friendly products.",
                    ]
                  },
                  {
                    imageUrl: "/PakamCover1.png",
                    description: [
                      "Homepage showcasing featured eco-friendly products.",
                      "Homepage showcasing featured eco-friendly products.",
                      "Homepage showcasing featured eco-friendly products.",
                    ]
                  },
                  {
                    imageUrl: "/PakamCover2.png",
                    description: [
                      "Homepage showcasing featured eco-friendly products.",
                      "Homepage showcasing featured eco-friendly products.",
                      "Homepage showcasing featured eco-friendly products.",
                    ]
                  },
                  {
                    imageUrl: "/PakamCover3.png",
                    description: [
                      "Homepage showcasing featured eco-friendly products.",
                      "Homepage showcasing featured eco-friendly products.",
                      "Homepage showcasing featured eco-friendly products.",
                    ]
                  },
                ],
            },
            {
                heading: "Police Website",
                headingBg: '#101A1E',
                btnBg: '#43C949',
                headingTextColor: '#89D9F9',
                headerImage: "/PakamHeaderImage.png",
                smallImage: "/PakamSmall.png",
                tags: ["HTML", "CSS", "JavaScript"],
                liveLink: "https://portfolio.com",
                slug: "police",
                projectOverview: {
                    backgroundInfo: "This project involved building an e-commerce platform for sustainable products.",
                    problems: [
                      "Users found it difficult to locate eco-friendly products.",
                      "Existing platforms lacked personalization.",
                    ],
                    goals: ["To create a seamless and personalized e-commerce experience.",],
                    opportunity: ["The rise in demand for sustainable and eco-friendly products.",],
                    solutions: ["A platform designed to cater to eco-conscious customers with personalized recommendations.",],
                },
                snapshots: [
                  {
                    imageUrl: "/PakamCover.png",
                    description: [
                      "Homepage showcasing featured eco-friendly products.",
                      "Homepage showcasing featured eco-friendly products.",
                      "Homepage showcasing featured eco-friendly products.",
                    ]
                  },
                  {
                    imageUrl: "/PakamCover1.png",
                    description: [
                      "Homepage showcasing featured eco-friendly products.",
                      "Homepage showcasing featured eco-friendly products.",
                      "Homepage showcasing featured eco-friendly products.",
                    ]
                  },
                  {
                    imageUrl: "/PakamCover2.png",
                    description: [
                      "Homepage showcasing featured eco-friendly products.",
                      "Homepage showcasing featured eco-friendly products.",
                      "Homepage showcasing featured eco-friendly products.",
                    ]
                  },
                  {
                    imageUrl: "/PakamCover3.png",
                    description: [
                      "Homepage showcasing featured eco-friendly products.",
                      "Homepage showcasing featured eco-friendly products.",
                      "Homepage showcasing featured eco-friendly products.",
                    ]
                  },
                ],
            },
        ],
    },
    {
        title: "Wecare",
        items: [
          {
            heading: "E-Commerce Website",
            headingBg: '#171E0A',
            btnBg: '#43C949',
            headingTextColor: '#C7FC56',
            headerImage: "/PakamHeaderImage.png",
            smallImage: "/PakamSmall.png",
            tags: ["React", "Tailwind CSS", "Next.js", "Figma", "Vercel"],
            liveLink: "https://ecommerce.com",
            slug: "wecareEcommerce",
            projectOverview: {
                backgroundInfo: "This project involved building an e-commerce platform for sustainable products.",
                problems: [
                  "Users found it difficult to locate eco-friendly products.",
                  "Existing platforms lacked personalization.",
                ],
                goals: ["To create a seamless and personalized e-commerce experience.",],
                opportunity: ["The rise in demand for sustainable and eco-friendly products.",],
                solutions: ["A platform designed to cater to eco-conscious customers with personalized recommendations.",],
            },
            snapshots: [
              {
                imageUrl: "/PakamCover.png",
                description: [
                  "Homepage showcasing featured eco-friendly products.",
                  "Homepage showcasing featured eco-friendly products.",
                  "Homepage showcasing featured eco-friendly products.",
                ]
              },
              {
                imageUrl: "/PakamCover1.png",
                description: [
                  "Homepage showcasing featured eco-friendly products.",
                  "Homepage showcasing featured eco-friendly products.",
                  "Homepage showcasing featured eco-friendly products.",
                ]
              },
              {
                imageUrl: "/PakamCover2.png",
                description: [
                  "Homepage showcasing featured eco-friendly products.",
                  "Homepage showcasing featured eco-friendly products.",
                  "Homepage showcasing featured eco-friendly products.",
                ]
              },
              {
                imageUrl: "/PakamCover3.png",
                description: [
                  "Homepage showcasing featured eco-friendly products.",
                  "Homepage showcasing featured eco-friendly products.",
                  "Homepage showcasing featured eco-friendly products.",
                ]
              },
            ],
          },
          {
            heading: "Portfolio Website",
            headingBg: '#081809',
            btnBg: '#43C949',
            headingTextColor: '#42C447',
            headerImage: "/PakamHeaderImage.png",
            smallImage: "/PakamSmall.png",
            tags: ["React", "Tailwind CSS", "Next.js"],
            liveLink: "https://ecommerce.com",
            slug: "wecarePortfolio",
            projectOverview: {
                backgroundInfo: "This project involved building an e-commerce platform for sustainable products.",
                problems: [
                  "Users found it difficult to locate eco-friendly products.",
                  "Existing platforms lacked personalization.",
                ],
                goals: ["To create a seamless and personalized e-commerce experience.",],
                opportunity: ["The rise in demand for sustainable and eco-friendly products.",],
                solutions: ["A platform designed to cater to eco-conscious customers with personalized recommendations.",],
            },
            snapshots: [
              {
                imageUrl: "/PakamCover.png",
                description: [
                  "Homepage showcasing featured eco-friendly products.",
                  "Homepage showcasing featured eco-friendly products.",
                  "Homepage showcasing featured eco-friendly products.",
                ]
              },
              {
                imageUrl: "/PakamCover1.png",
                description: [
                  "Homepage showcasing featured eco-friendly products.",
                  "Homepage showcasing featured eco-friendly products.",
                  "Homepage showcasing featured eco-friendly products.",
                ]
              },
              {
                imageUrl: "/PakamCover2.png",
                description: [
                  "Homepage showcasing featured eco-friendly products.",
                  "Homepage showcasing featured eco-friendly products.",
                  "Homepage showcasing featured eco-friendly products.",
                ]
              },
              {
                imageUrl: "/PakamCover3.png",
                description: [
                  "Homepage showcasing featured eco-friendly products.",
                  "Homepage showcasing featured eco-friendly products.",
                  "Homepage showcasing featured eco-friendly products.",
                ]
              },
            ],
          },
        ],
    },
    {
        title: "ErrandBox",
        items: [
            {
                heading: "Banking Website",
                headingBg: '#101A1E',
                btnBg: '#43C949',
                headingTextColor: '#89D9F9',
                headerImage: "/PakamHeaderImage.png",
                smallImage: "/PakamSmall.png",
                tags: ["HTML", "CSS", "JavaScript"],
                liveLink: "https://portfolio.com",
                slug: "errandBoxBanking",
                projectOverview: {
                    backgroundInfo: "This project involved building an e-commerce platform for sustainable products.",
                    problems: [
                      "Users found it difficult to locate eco-friendly products.",
                      "Existing platforms lacked personalization.",
                    ],
                    goals: ["To create a seamless and personalized e-commerce experience.",],
                    opportunity: ["The rise in demand for sustainable and eco-friendly products.",],
                    solutions: ["A platform designed to cater to eco-conscious customers with personalized recommendations.",],
                },
                snapshots: [
                  {
                    imageUrl: "/PakamCover.png",
                    description: [
                      "Homepage showcasing featured eco-friendly products.",
                      "Homepage showcasing featured eco-friendly products.",
                      "Homepage showcasing featured eco-friendly products.",
                    ]
                  },
                  {
                    imageUrl: "/PakamCover1.png",
                    description: [
                      "Homepage showcasing featured eco-friendly products.",
                      "Homepage showcasing featured eco-friendly products.",
                      "Homepage showcasing featured eco-friendly products.",
                    ]
                  },
                  {
                    imageUrl: "/PakamCover2.png",
                    description: [
                      "Homepage showcasing featured eco-friendly products.",
                      "Homepage showcasing featured eco-friendly products.",
                      "Homepage showcasing featured eco-friendly products.",
                    ]
                  },
                  {
                    imageUrl: "/PakamCover3.png",
                    description: [
                      "Homepage showcasing featured eco-friendly products.",
                      "Homepage showcasing featured eco-friendly products.",
                      "Homepage showcasing featured eco-friendly products.",
                    ]
                  },
                ],
            },
            {
                heading: "Police Website",
                headingBg: '#101A1E',
                btnBg: '#43C949',
                headingTextColor: '#89D9F9',
                headerImage: "/PakamHeaderImage.png",
                smallImage: "/PakamSmall.png",
                tags: ["HTML", "CSS", "JavaScript"],
                liveLink: "https://portfolio.com",
                slug: "errandBoxPolice",
                projectOverview: {
                    backgroundInfo: "This project involved building an e-commerce platform for sustainable products.",
                    problems: [
                      "Users found it difficult to locate eco-friendly products.",
                      "Existing platforms lacked personalization.",
                    ],
                    goals: ["To create a seamless and personalized e-commerce experience.",],
                    opportunity: ["The rise in demand for sustainable and eco-friendly products.",],
                    solutions: ["A platform designed to cater to eco-conscious customers with personalized recommendations.",],
                },
                snapshots: [
                  {
                    imageUrl: "/PakamCover.png",
                    description: [
                      "Homepage showcasing featured eco-friendly products.",
                      "Homepage showcasing featured eco-friendly products.",
                      "Homepage showcasing featured eco-friendly products.",
                    ]
                  },
                  {
                    imageUrl: "/PakamCover1.png",
                    description: [
                      "Homepage showcasing featured eco-friendly products.",
                      "Homepage showcasing featured eco-friendly products.",
                      "Homepage showcasing featured eco-friendly products.",
                    ]
                  },
                  {
                    imageUrl: "/PakamCover2.png",
                    description: [
                      "Homepage showcasing featured eco-friendly products.",
                      "Homepage showcasing featured eco-friendly products.",
                      "Homepage showcasing featured eco-friendly products.",
                    ]
                  },
                  {
                    imageUrl: "/PakamCover3.png",
                    description: [
                      "Homepage showcasing featured eco-friendly products.",
                      "Homepage showcasing featured eco-friendly products.",
                      "Homepage showcasing featured eco-friendly products.",
                    ]
                  },
                ],
            },
        ],
    },
];

type Experiments = {
    image: string;
};

export const selectedExperiments: Experiments[] = Array.from({ length: 27 }, (_, index) => ({
    image: `/SlideImages/SlideImage (${index + 1}).png`,
})); // Create an array-like object with 27 slots (indices 0 to 26)


//************Profile */
export interface DesignProcess {
    topic: string;
    body: string;
    headingBg: string;
    headingTextColor: string;
};

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
  