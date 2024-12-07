import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";
SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};
const SEO = ({ title, description, path }) => {
  const baseURL = "www.sachinks.dev";
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`${baseURL}${path}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`${baseURL}${path}`} />
    </Helmet>
  );
};
export default SEO;
