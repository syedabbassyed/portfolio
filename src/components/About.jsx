export const About = () => {
    return (
        <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#123f3a]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-white lg:sr-only">About</h2>
            </div>
            <div>
                <p className="mb-4">
                    I’m a frontend engineer passionate about creating scalable, high-performance user interfaces that combine clean design with seamless functionality. I specialize in building responsive, accessible, and fast web applications that prioritize user experience.
                </p>
                <p className="mb-4">
                    Until March 2025, I worked as an Associate Software Engineer at <a className="font-medium text-white hover:text-teal-300 focus-visible:text-teal-300" href="https://www.ojcommerce.com/" target="_blank" rel="noreferrer noopener" aria-label="OJCommerce (opens in a new tab)">OJCommerce</a>, where I focused on building modular UI components, improving workflows, and optimizing performance using modern JavaScript practices.
                </p>
                <p className="mb-4">
                    I’ve contributed to projects across <b className="font-medium text-white hover:text-teal-300 focus-visible:text-teal-300">e-commerce platforms</b>, <b className="font-medium text-white hover:text-teal-300 focus-visible:text-teal-300">banking applications</b>, and <b className="font-medium text-white hover:text-teal-300 focus-visible:text-teal-300">enterprise systems</b>. Whether enhancing onboarding flows or delivering scalable UI components for high-traffic platforms, I’ve always aimed to blend usability with technical excellence.
                </p>
                <p className="mb-4">
                    I’m currently focused on building full-stack personal projects, refining system design skills, and preparing for interviews at high-growth product companies.
                </p>
                <p>
                    When I’m not coding, you’ll find me exploring YouTube videos about geography, finance, history, or anything science related.
                </p>
            </div>
        </section>

    );
}