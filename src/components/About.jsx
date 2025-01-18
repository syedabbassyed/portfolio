export const About = () => {
    return (
        <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <div class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
            </div>
            <div>
                <p className="mb-4">I’m a frontend developer passionate about creating scalable, high-performance user interfaces that combine clean design with seamless functionality. My expertise lies in building web applications that are responsive, accessible, and optimized for speed, ensuring exceptional digital experiences for users.</p>
                <p className="mb-4">Currently, I'm an Associate Software Engineer at <a className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" href="https://www.ojcommerce.com/" target="_blank" rel="noreferrer noopener" aria-label="OJCommerce (opens in a new tab)">OJCommerce</a>, where I focus on developing modular and efficient web components. I specialize in enhancing user workflows and building tools that improve internal efficiency, leveraging JavaScript and modern frontend practices to deliver impactful solutions.</p>
                <p className="mb-4">In the past, I’ve worked on diverse projects for <b className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">e-commerce platforms</b>, <b className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">banking applications</b>, and <b className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">enterprise systems</b>. From optimizing onboarding flows to delivering <b className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">scalable UI components</b> for <b className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">high-traffic platforms</b>, I’ve consistently aimed to bridge the gap between user needs and technical solutions.</p>
                <p>When I'm not coding, you'll find exploring YouTube videos about geography, finance, history, or anything science related.</p>
            </div>
        </section>
    );
}