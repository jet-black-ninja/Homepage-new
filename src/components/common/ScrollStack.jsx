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

                if (window.scrollY >= sectionTop - 30 && window.scrollY < sectionTop + sectionHeight) {
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
    <ReactLenis root options={{ smooth: true,
        smoothWheel: true,
        smoothTouch: true, // enable touch smoothing on mobile
        wheelMultiplier: 0.2, }}>
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
              "min-h-screen w-full sticky -top-1/2 md:top-0 mb-10"
            )}
          >
            <Projects />
          </section>

          <section
            id="experience"
            className={twMerge(
              "min-h-screen w-full  sticky -top-3/4 md:top-0 mb-50"
            )}
          >
            <Experience />
          </section>
          <section
            id="links"
            className={twMerge(" sticky md:top-0 mt10")}
          >
            <Links />
          </section>
        </article>
      </main>
    </ReactLenis>
  );
}
