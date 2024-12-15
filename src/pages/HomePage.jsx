import Banner from "../components/common/Banner";
import ScrollStack from "../components/common/ScrollStack";
import Hero from "../components/Hero";
import PropTypes from "prop-types";
import SEO from "../components/SEO";
Homepage.propTypes = {
  setActiveSection: PropTypes.func.isRequired,
};
export default function Homepage({ setActiveSection }) {
  return (
    <div data-scroll-container>
      <SEO
        title="Sachin Kumar Singh - Full Stack Developer"
        description="Welcome to My portfolio website, I am a full stack developer utilizing MERN stack with typescript to bring ideas to reality"
        path="/"
      />
      {/* <Banner /> */}
      <Hero />
      <ScrollStack onSectionChange={setActiveSection} />
    </div>
  );
}
