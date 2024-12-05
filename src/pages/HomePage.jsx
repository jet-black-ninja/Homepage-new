import Banner from "../components/common/Banner";
import ScrollStack from "../components/common/ScrollStack";
import Hero from "../components/Hero";
import PropTypes from "prop-types";
Homepage.propTypes = {
  setActiveSection: PropTypes.func.isRequired,
};
export default function Homepage({ setActiveSection }) {
  return (
    <div>
      <Banner />
      <Hero />
      <ScrollStack setActiveSection={setActiveSection} />
    </div>
  );
}
