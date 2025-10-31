import ReactLenis  from "lenis/react";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Skills from "./Skills";
import Experience from "./Experience";
import Links from "./Links";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import {useEffect, useRef} from "react";

ScrollStack.propTypes = {
  onSectionChange: PropTypes.func.isRequired,
};
export default function ScrollStack({ onSectionChange }) {
    const currentSectionRef = useRef(null);
    useEffect(() => {
        const sections = Array.from(document.querySelectorAll("section"));
        if (!sections.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.getAttribute("id");
                        if (id && currentSectionRef.current !== id) {
                            currentSectionRef.current = id;
                            onSectionChange(id);
                        }
                    }
                });
            },
            { root: null, rootMargin: "0px", threshold: 0.6 } // adjust threshold as needed
        );

        sections.forEach((s) => observer.observe(s));
        return () => observer.disconnect();
    }, [onSectionChange]);
  return (
    <ReactLenis root options={{
        smooth: true,
        smoothWheel: true,
        smoothTouch: true, // enable touch smoothing on mobile
        wheelMultiplier: 0.5,
        touchMultiplier: 0.2,}}
    >
      <main>
        <article >
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
              "min-h-screen sticky top-0"
            )}
          >
            <Skills />
          </section>
          <section
            id="projects"
            className={twMerge(
              "h-full w-full sticky -top-1/2 md:top-0 pb-[200px] md:py-0"
            )}
          >
            <Projects />
          </section>

          <section
            id="experience"
            className={twMerge(
              "h-full sticky top-0 py-[200px] md:py-0"
            )}
          >
            <Experience />
          </section>
          <section
            id="links"
            className={twMerge("relative md:top-0")}
          >
            <Links />
          </section>
        </article>
      </main>
    </ReactLenis>
  );
}
