import { ExperienceCard } from "./ExperienceCard";

export const ExperienceList = () => {
    const experienceList = [
        {
            yearRange: "2023 — PRESENT",
            company: {
                url: "https://www.ojcommerce.com/",
                name: "OJCommerce",
                position: "Associate - Software Engineering",
                workDetails: "Revamped the UI for Factory PO software using Vanilla JS, jQuery, and Bootstrap, resulting in a 20% improvement in task efficiency for over 150 internal users. Engineered a modular import-export architecture with JavaScript and Webpack, which reduced code duplication by 40% and enhanced scalability. Implemented advanced user interaction features, such as pinch-to-zoom and panning, using Hammer.js, driving a 33% boost in conversion rates. Additionally, optimized build processes with Webpack, reducing deployment times by 25%."
            },
            skills: ["Javascript", "jQuery", "Webpack", "Figma"]
        },
        {
            "yearRange": "2021 — 2023",
            "company": {
                "url": "https://www.moonraft.com/",
                "name": "Moonraft (Acquired by UST)",
                "position": "Software Engineer",
                "workDetails": "Increased user engagement by 30% for Punjab National Bank’s retail app (1M+ users) by optimizing onboarding flows with AngularJS. Delivered scalable UI components for Dell’s DDS-2 system using HTML, CSS, and Vanilla JS, enhancing performance across 100+ high-traffic enterprise applications. Built a high-performing front end for Next’s E-commerce site with CoreMedia CMS, achieving an 8% boost in active users and improving site Lighthouse scores by 15%. Designed a micro-frontend Proof of Concept for Infosys-Finacle with WaveMaker and JavaScript, reducing integration time by 50%."
            },
            "skills": ["AngularJS", "HTML", "CSS", "Vanilla JS", "CoreMedia CMS", "WaveMaker", "JavaScript"]
        },
        {
            "yearRange": "JAN — August 2021",
            "company": {
                "url": "https://hugeitsolutions.com/",
                "name": "Huge IT Solutions (formerly Huge Group)",
                "position": "Frontend Developer",
                "workDetails": "Developed a scalable CRM system with PHP, JavaScript, and CSS, increasing daily order capacity by 200 and throughput by 35%. Streamlined workflows using a custom JavaScript framework, achieving a 4x efficiency improvement in 5 months. Reduced page load times by 30% through front-end optimizations using HTML, CSS, and AJAX."
            },
            "skills": ["PHP", "JavaScript", "CSS", "HTML", "AJAX"]
        }
    ];
    return (
        <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-white lg:sr-only">Experience</h2>
            </div>
            <div>
                <ul className="group/list">
                    {experienceList.map((experience, index) =>
                        <li className="mb-12" key={index}>
                            <ExperienceCard info={experience}/>
                        </li>
                    )}
                </ul>
            </div>
        </section>
    )
}