import ReactLenis  from "lenis/react";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Skills from "./Skills";
import Experience from "./Experience";
import Links from "./Links";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import {useEffect} from "react";

ScrollStack.propTypes = {
  onSectionChange: PropTypes.func.isRequired,
};
export default function ScrollStack({ onSectionChange }) {
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;

                if (window.scrollY >= sectionTop - 50 && window.scrollY < sectionTop + sectionHeight) {
                    const sectionId = section.getAttribute('id');
                    console.log('Current Section:', sectionId); // Log active section
                    onSectionChange(sectionId);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [onSectionChange]);
  return (
    <ReactLenis root options={{ smoothWheel: true }}>
      <main>
        <article>
          <section
            className={twMerge(
              "h-screen sticky top-0 ",
              "lenis-section"
            )}
            id="aboutMe"
          >
            <AboutMe />
          </section>
          <section
            id="skills"
            className={twMerge(
              "h-screen sticky  top-0",
              "lenis-section"
            )}
          >
            <Skills />
          </section>
          <section
            id="projects"
            className={twMerge(
              "sticky top-0 ",
              "lenis-section"
            )}
          >
            <Projects />
          </section>

          <section
            id="experience"
            className={twMerge(
              " w-full -top-32 sticky md:top-0 mb-10",
              "lenis-section"
            )}
          >
            <Experience />
          </section>
          <section
            id="links"
            className={twMerge("sticky top-10 md:top-0 ", "lenis-section")}
          >
            <Links />
          </section>
        </article>
      </main>
    </ReactLenis>
  );
}
