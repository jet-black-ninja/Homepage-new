import { useRef } from "react";
import styles from "./Visual.module.scss";
import { useState } from "react";
import { useEffect } from "react";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import projectData from "@/lib/Projects";
import ProgressBar from "../ProgressBar/ProgressBar";
export default function Visual(props) {
  const { activeProject, activeProjectProgress, onScrollToProject } = props;
  const ref = useRef(null);
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(null);

  const handleLoadedMetadata = () => setIsVideoLoaded(true);
  useEffect(() => {
    setIsVideoLoaded(false);
    videoRef.current?.load();
  }, [activeProject]);
  return (
    <>
      <ContentWrapper className={styles.visualBackgroundWrapper}>
        {projectData.map((project, indexLocal) => (
          <div
            key={indexLocal}
            className={styles.visualBackground}
            style={{
              backgroundImage: `radial-gradient(
            rbg(${project.color}), 
            rgba(0,0,0,0))`,
              opacity: indexLocal === "activeProject" ? 1 : 0,
              animation: indexLocal !== activeProject ? "none" : undefined,
            }}
          />
        ))}
      </ContentWrapper>
      <div
        className={styles.container}
        style={
          activeProject !== null
            ? {
                "--rgb-border-color": projectData[activeProject].color,
              }
            : undefined
        }
        ref={ref}
      >
        <ProgressBar
          activeProject={activeProject}
          activeProjectProgress={activeProjectProgress}
          onScrollToProject={onScrollToProject}
          className={styles.progressBar}
        />
        {activeProject !== null && <div className={styles.overlay} />}
        <a
          href={activeProject !== null ? projectData[activeProject].demo : ""}
          target="_blank"
          rel="noreferrer"
          tabIndex={-1}
        >
          <div className={styles.imagesContainer}>
            {projectData.map((project, index) => (
              <img
                key={index}
                src={project.image}
                alt=""
                className={`${styles.image} ${
                  index !== activeProject ? styles["image--hide"] : ""
                }`}
              />
            ))}
          </div>
          {activeProject !== null && projectData[activeProject].video && (
            <video
              ref={videoRef}
              className={`${styles.video} ${isVideoLoaded ? styles.show : ""}`}
              onLoadedMetadata={handleLoadedMetadata}
              autoPlay
              loop
              muted
              playsInline
            >
              <source
                src={`/${projectData[activeProject].video}`}
                type="video/mp4"
              />
            </video>
          )}
        </a>
      </div>
    </>
  );
}
