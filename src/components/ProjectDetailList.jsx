import resumeBuilderThumbnail from "../assets/projectThumbnails/resumebuilder.png";
import { ProjectDetailCard } from "./ProjectDetailCard";

export const ProjectDetailList = () => {
    const projectList = [
        {
            imgSrc: resumeBuilderThumbnail,
            title: "Resume Builder",
            description:
                "A fast, customizable resume builder built using React 19, Redux Toolkit, and Tailwind CSS. Features real-time editing, PDF export, and section reordering.",
            techStack: ["React 19", "Redux Toolkit", "Tailwind CSS", "html2pdf.js"],
            githubLink: "https://github.com/syedabbassyed/resume-builder",
            liveLink: "https://resume-builder-syed.vercel.app/",
        },
    ];

    return (
        <section
            id="projects"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="Projects"
        >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#123f3a]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-white lg:sr-only">
                    Projects
                </h2>
            </div>

            <div>
                <ul className="group/list">
                    {projectList.map((project, index) => (
                        <li className="mb-12" key={index}>
                            <ProjectDetailCard
                                imgSrc={project.imgSrc}
                                title={project.title}
                                description={project.description}
                                techStack={project.techStack}
                                githubLink={project.githubLink}
                                liveLink={project.liveLink}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};
