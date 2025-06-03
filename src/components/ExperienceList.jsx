import { ExperienceCard } from "./ExperienceCard";

export const ExperienceList = () => {
    const experienceList = [
        {
            yearRange: "2023 — MAR 2025",
            company: {
                url: "https://www.ojcommerce.com/",
                name: "OJCommerce",
                position: "Associate - Software Engineering",
                workDetails:
                    "Revamped the UI for Factory PO software using Vanilla JS, jQuery, and Bootstrap, improving task efficiency by 20% for 150+ internal users. Developed a modular import-export architecture with JavaScript and Webpack, cutting code duplication by 40% and enhancing scalability. Implemented advanced gesture-based interactions like pinch-to-zoom and panning using Hammer.js, driving a 33% increase in conversions. Optimized Webpack build processes, reducing deployment time by 25%."
            },
            skills: ["JavaScript", "jQuery", "Webpack", "Figma"]
        },
        {
            yearRange: "2021 — 2023",
            company: {
                url: "https://www.moonraft.com/",
                name: "Moonraft (Acquired by UST)",
                position: "Software Engineer",
                workDetails:
                    "Boosted engagement by 30% for PNB’s retail app (1M+ users) by streamlining onboarding flows with AngularJS. Delivered scalable UI components for Dell’s DDS-2 system using HTML, CSS, and Vanilla JS, enhancing performance across 100+ enterprise apps. Built a high-performance frontend for Next’s E-commerce platform using CoreMedia CMS, increasing active users by 8% and improving Lighthouse scores by 15%. Designed a micro-frontend Proof of Concept for Infosys-Finacle using WaveMaker and JavaScript, reducing integration time by 50%."
            },
            skills: ["AngularJS", "HTML", "CSS", "Vanilla JS", "CoreMedia CMS", "WaveMaker", "JavaScript"]
        },
        {
            yearRange: "JAN — AUG 2021",
            company: {
                url: "https://hugeitsolutions.com/",
                name: "Huge IT Solutions (formerly Huge Group)",
                position: "Frontend Developer",
                workDetails:
                    "Developed a scalable CRM system using PHP, JavaScript, and CSS, increasing daily order capacity by 200 and boosting throughput by 35%. Streamlined workflows with a custom JavaScript framework, achieving a 4× efficiency gain in 5 months. Reduced page load times by 30% through frontend optimization with HTML, CSS, and AJAX."
            },
            skills: ["PHP", "JavaScript", "CSS", "HTML", "AJAX"]
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