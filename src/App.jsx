import { About } from "./components/About";
import { Profile } from "./components/Profile";
import { SocialMediaList } from "./components/SocialMediaList";
import { VerticalNavbar } from "./components/VerticalNavbar";
import { ExperienceList } from "./components/ExperienceList";
import './App.css';
import { useEffect, useRef, useState } from "react";
import { CertificationDetailList } from "./components/CertificationDetailList";

export default function App() {
  const [activeSection, setActiveSection] = useState(0);

  const sectionRefs = useRef([]);

  const handleNavClick = (id) => {
    setActiveSection(id);
  }

  useEffect(() => {
    const handleScroll = () => {
      sectionRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            setActiveSection(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <div className="bg-[#123f3a] leading-relaxed text-[#c6cecc] antialiased selection:bg-[#497b6f] selection:text-[#0a192f]">
      <section className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
            <div>
              <Profile />
              <VerticalNavbar activeSectionIndex={activeSection} ClickHandler={handleNavClick}/>
            </div>
            <SocialMediaList />
          </header>
          <main className="pt-24 lg:w-[52%] lg:py-24">
            <section ref={(element) => (sectionRefs.current[0] = element)}>
              <About />
            </section>
            <section ref={(element) => (sectionRefs.current[1] = element)}>
              <ExperienceList />
            </section>
            <section ref={(element) => (sectionRefs.current[2] = element)}>
              <CertificationDetailList />
            </section>
          </main>
        </div>
      </section>
    </div>
  )
}