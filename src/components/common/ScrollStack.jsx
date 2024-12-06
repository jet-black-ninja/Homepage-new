import ReactLenis from "lenis/react";
import { useEffect } from "react";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Skills from "./Skills";
import Experience from "./Experience";
import Links from "./Links";
import PropTypes from "prop-types";

ScrollStack.propTypes = {
  onSectionChange: PropTypes.func.isRequired,
};
export default function ScrollStack({ onSectionChange }) {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (
          window.scrollY >= sectionTop - 50 &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          const sectionId = section.getAttribute("id");
          onSectionChange(sectionId);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [onSectionChange]);
  return (
    <ReactLenis root>
      <main>
        <article>
          <section className="h-screen sticky top-0" id="aboutMe">
            <AboutMe />
          </section>
          <section id="skills" className="h-screen sticky top-0">
            <Skills />
          </section>
          <section id="projects" className="h-screen sticky top-0">
            <Projects />
          </section>

          <section id="experience" className="h-screen sticky top-0">
            <Experience />
          </section>
          <section id="links" className="h-screen sticky top-0">
            <Links />
          </section>
        </article>
      </main>
    </ReactLenis>
  );
}
