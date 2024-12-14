import styles from "./ProgressBar.module.scss";
import PropTypes from "prop-types";
import projectData from "../../../lib/Projects";

ProgressBar.propTypes = {
  activeProject: PropTypes.number.isRequired,
  activeProjectProgress: PropTypes.number.isRequired,
  onScrollToProject: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default function ProgressBar({
  activeProject,
  activeProjectProgress,
  onScrollToProject,
  className,
}) {
  return (
    <div className={`${styles["progress"]} ${className || ""}`}>
      {projectData.map((project, i) => (
        <div
          key={i}
          className={`${styles["progress__bar"]} ${
            activeProject !== null
              ? i === activeProject
                ? styles["progress__bar--active"]
                : ""
              : ""
          }`}
          style={
            i < (activeProject || 0)
              ? { backgroundColor: `rgb(${project.color})` }
              : undefined
          }
          onClick={() => onScrollToProject(i)}
        >
          <span className={styles["progress__bar-title"]}>{project.title}</span>
          <div className={styles["progress__bar-fill-wrapper"]}>
            {i === activeProject && (
              <div
                className={styles["progress__bar-fill"]}
                style={{
                  "--filled": activeProjectProgress,
                  backgroundColor: `rgb(${project.color})`,
                }}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
