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
              "min-h-screen sticky top-0 "
            )}
            id="aboutMe"
          >
            <AboutMe />
          </section>
          <section
            id="skills"
            className={twMerge(
              "min-h-screen sticky  top-0"
            )}
          >
            <Skills />
          </section>
          <section
            id="projects"
            className={twMerge(
              "min-h-screen w-full sticky -top-60 md:top-0 mb-10"
            )}
          >
            <Projects />
          </section>

          <section
            id="experience"
            className={twMerge(
              "min-h-screen w-full  sticky top-0 md:top-0 mb-50"
            )}
          >
            <Experience />
          </section>
          <section
            id="links"
            className={twMerge("sticky top-10 md:top-0 ")}
          >
            <Links />
          </section>
        </article>
      </main>
    </ReactLenis>
  );
}
