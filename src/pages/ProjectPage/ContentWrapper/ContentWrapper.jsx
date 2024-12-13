import styles from "./ContentWrapper.module.scss";
import PropTypes from "prop-types";

ContentWrapper.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired, // Add this line to include children in the validation
};

export default function ContentWrapper({ children, className }) {
  return (
    <div className={`${styles.container} ${className || ""}`}>{children}</div>
  );
}
