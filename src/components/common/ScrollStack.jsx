import ReactLenis, { useLenis } from "lenis/react";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Skills from "./Skills";
import Experience from "./Experience";
import Links from "./Links";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

ScrollStack.propTypes = {
  onSectionChange: PropTypes.func.isRequired,
};
export default function ScrollStack({ onSectionChange }) {
  useLenis(({ scroll }) => {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scroll >= sectionTop - 50 && scroll < sectionTop + sectionHeight) {
        const sectionId = section.getAttribute("id");
        onSectionChange(sectionId); // Trigger callback
      }
    });
  });
  return (
    <ReactLenis root options={{ smoothWheel: true }}>
      <main>
        <article>
          <section
            className={twMerge(
              "h-screen sticky lg:sticky top-0 ",
              "lenis-section"
            )}
            id="aboutMe"
          >
            <AboutMe />
          </section>
          <section
            id="skills"
            className={twMerge(
              "h-screen sticky lg:sticky top-0",
              "lenis-section"
            )}
          >
            <Skills />
          </section>
          <section
            id="projects"
            className={twMerge(
              "h-screen sticky lg:sticky top-0 ",
              "lenis-section"
            )}
          >
            <Projects />
          </section>

          <section
            id="experience"
            className={twMerge(
              "h-screen sticky lg:sticky  top-0 ",
              "lenis-section"
            )}
          >
            <Experience />
          </section>
          <section
            id="links"
            className={twMerge("sticky lg:sticky md:top-0", "lenis-section")}
          >
            <Links />
          </section>
        </article>
      </main>
    </ReactLenis>
  );
}
