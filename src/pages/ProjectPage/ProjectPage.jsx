import { useContext, useRef } from "react";
import Links from "../../components/common/Links";
import SEO from "../../components/SEO";
import useScrollState from "../../hooks/useScrollState";
import { ViewPortContext } from "../../contexts/viewport.context";
import projectData from "../../lib/Projects";
import styles from "./ProjectPage.module.scss";
import ContentWrapper from "./ContentWrapper/ContentWrapper";
import Description from "./Description/Description";
import Visual from "./Visual/Visual";
import ProgressBar from "./ProgressBar/ProgressBar";
export default function ProjectPage() {
  const { activeProject, activeProjectProgress, onScrollToProject } =
    useScrollState();
  const { viewPortWidth } = useContext(ViewPortContext);
  const sectionRef = useRef(null);
  return (
    <>
      <SEO
        title="projects"
        description="Welcome to my Portfolio website,These are my Full stack projects implemented with modern web technologies and best practices"
        path="/projects"
      />
      <section className="sticky grid min-h-screen w-ful place-content-center overflow-hidden top-0">
        <h2 className="relative z-0 text-[14vw] font-black text-neutral-800 dark:text-neutral-300 md:text-[200px]">
          Projects<span className="text-purple-500">.</span>
        </h2>
      </section>
      <section
        ref={sectionRef}
        className="sticky top-0 min-h-screen w-full flex items-start justify-center bg-zinc-200 dark:bg-zinc-800 rounded-t-[80px] transition-colors "
      >
        <ContentWrapper className={styles.wrapper}>
          <div className={styles.projects}>
            <div className={styles.descriptions}>
              {projectData.map((project, index) => (
                <Description key={index} />
              ))}
            </div>
            {viewPortWidth >> 800 && <Visual />}
          </div>
        </ContentWrapper>
        {viewPortWidth <= 800 && activeProject !== null && (
          <div className={styles.progressBarWrapper}>
            <ProgressBar
              activeProject={activeProject}
              activeProjectProgress={activeProjectProgress}
              onScrollToProject={onScrollToProject}
              className={styles.progressBar}
            />
          </div>
        )}
      </section>
      <footer className="group">
        <section className="rounded-t-ful sticky top-10 md:top-01">
          <Links />
        </section>
      </footer>
    </>
  );
}
