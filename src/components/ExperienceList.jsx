import { ExperienceCard } from "./ExperienceCard";

export const ExperienceList = () => {
    const experienceList = [
        {
            yearRange: "AUG 2025 — PRESENT",
            company: {
                url: "https://www.goldmansachs.com/",
                name: "Goldman Sachs",
                position: "Associate Software Engineer",
                workDetails:
                    "Leading frontend development for AI-powered research applications using React, TypeScript, and Redux Toolkit. Built an AI-assisted company onboarding workflow that reduced analyst onboarding time from two weeks to under an hour, designed scalable frontend architecture, improved ticker page performance by 27%, integrated application-wide analytics, and standardized error handling across the platform."
            },
            skills: [
                "React",
                "TypeScript",
                "Redux Toolkit",
                "JavaScript",
                "REST APIs",
                "Kibana"
            ]
        },
        {
            yearRange: "SEP 2023 — MAR 2025",
            company: {
                url: "https://www.ojcommerce.com/",
                name: "OJCommerce",
                position: "Associate Software Engineer",
                workDetails:
                    "Built scalable frontend solutions for a US-based e-commerce platform using JavaScript and Webpack. Improved Time-to-Interactive by 38%, reduced bundle size by 22%, increased accessibility scores from 67 to 92, developed reusable UI components, collaborated on backend API integrations, and mentored junior engineers through code reviews."
            },
            skills: [
                "JavaScript",
                "Webpack",
                "Bootstrap",
                "Accessibility",
                "Performance",
                "REST APIs"
            ]
        },
        {
            yearRange: "SEP 2021 — SEP 2023",
            company: {
                url: "https://www.moonraft.com/",
                name: "Moonraft (Acquired by UST)",
                position: "Software Engineer",
                workDetails:
                    "Developed frontend solutions across banking, enterprise, and retail platforms using AngularJS and Vanilla JavaScript. Built reusable components for Dell Design System, delivered responsive applications for Punjab National Bank, developed CMS-driven experiences for Next UK, and built proof-of-concepts for Infosys Finacle."
            },
            skills: [
                "AngularJS",
                "JavaScript",
                "CoreMedia CMS",
                "HTML",
                "CSS"
            ]
        },
        {
            yearRange: "JAN 2021 — AUG 2021",
            company: {
                url: "https://hugeitsolutions.com/",
                name: "Huge IT Solutions",
                position: "Software Engineer",
                workDetails:
                    "Developed frontend modules for a CRM platform supporting 200+ B2B orders per day. Improved page load performance by 30% through JavaScript and DOM optimizations while building scalable business workflows using PHP, SQL, and JavaScript."
            },
            skills: [
                "JavaScript",
                "PHP",
                "SQL",
                "HTML",
                "CSS"
            ]
        }
    ];
    
    return (
        <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#123f3a]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-white lg:sr-only">Experience</h2>
            </div>
            <div>
                <ul className="group/list">
                    {experienceList.map((experience, index) =>
                        <li className="mb-12" key={index}>
                            <ExperienceCard info={experience} />
                        </li>
                    )}
                </ul>
            </div>
        </section>
    )
}