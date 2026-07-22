export const About = () => {
    return (
        <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#123f3a]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-white lg:sr-only">About</h2>
            </div>

            <div>
                <p className="mb-4">
                    I'm a Frontend Software Engineer with 5+ years of experience building scalable, high-performance web applications using React, TypeScript, and JavaScript. I enjoy solving complex UI problems and creating fast, accessible, and intuitive user experiences that scale across large applications.
                </p>

                <p className="mb-4">
                    I'm currently an Associate Software Engineer at{" "}
                    <a
                        className="font-medium text-white hover:text-teal-300 focus-visible:text-teal-300"
                        href="https://www.goldmansachs.com/"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="Goldman Sachs (opens in a new tab)"
                    >
                        Goldman Sachs
                    </a>
                    , where I build AI-powered frontend experiences, optimize application performance, and develop scalable React applications used by research teams worldwide.
                </p>

                <p className="mb-4">
                    Throughout my career, I've worked across <b className="font-medium text-white">fintech</b>, <b className="font-medium text-white">e-commerce</b>, <b className="font-medium text-white">banking</b>, and <b className="font-medium text-white">enterprise platforms</b>, focusing on frontend architecture, performance optimization, accessibility, and reusable component systems. I enjoy turning complex business requirements into simple, maintainable user experiences.
                </p>

                <p className="mb-4">
                    Outside of work, I enjoy exploring browser internals, frontend architecture, performance optimization, and modern web technologies while continuously learning and building side projects.
                </p>

                <p>
                    When I'm away from the keyboard, you'll usually find me riding my bike, experimenting with coffee, listening to music, or watching videos about geography, history, science, and technology.
                </p>
            </div>
        </section>
    );
}