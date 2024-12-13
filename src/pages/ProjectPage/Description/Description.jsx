import Tag from "@/components/ui/Tag/Tag";
import styles from "./Description.module.scss";
import PropTypes from "prop-types";
import SvgCode from "@/assets/images/code.svg?react";
import SvgWeb from "@/assets/images/web.svg?react";

Description.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
  code: PropTypes.string,
  demo: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  color: PropTypes.string,
  isActive: PropTypes.bool.isRequired,
  projectIndex: PropTypes.number.isRequired,
  onScrollToProject: PropTypes.func.isRequired,
  className: PropTypes.string, // Add this line to include className in the validation
};
export default function Description(props) {
  const {
    id,
    title,
    description,
    code,
    demo,
    tags,
    color,
    isActive,
    projectIndex,
    onScrollToProject,
    className,
  } = props;
  return (
    <div
      id={id}
      className={`${styles.project} ${
        isActive && styles.projectActive
      } ${className}`}
      onClick={() => {
        if (!isActive) {
          onScrollToProject(projectIndex);
        }
      }}
    >
      {/* TODO add case for project with spacing */}
      <h3 className={`${styles.title}`}>
        {/* 
        {title === "something with spaces"
          ? title.split(" ").map((word, index) => (
              <span key={word}>
                {index !== 0 ? " " : ""}
                {word}
              </span>
            ))
          : \ */}
        {title}
      </h3>
      <div className={styles.tags}>
        {tags.map((tool) => (
          <Tag key={tool}>{tool}</Tag>
        ))}
      </div>
      {Array.isArray(description) ? (
        <ul className={styles.description}>
          {description.map((text, i) => (
            <li key={i} className={styles["description__list-item"]}>
              {text}
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.description}>{description}</p>
      )}
      <div className={styles.links}>
        <a
          className={`${styles.button} ${styles.anchor}`}
          style={{ "--color": `rgb(${color})` }}
          href={code}
          target="_blank"
          rel="noreferrer"
        >
          <SvgCode className={styles["anchor_icon"]} />
          <span>Code</span>
        </a>
        <a
          className={`${styles.button} ${styles.anchor}`}
          style={{ "--color": `rgb(${color})` }}
          href={demo}
          target="_blank"
          rel="noreferrer"
        >
          <SvgWeb className={styles["anchor_icon"]} />
          <span>Live Site</span>
        </a>
      </div>
    </div>
  );
}
