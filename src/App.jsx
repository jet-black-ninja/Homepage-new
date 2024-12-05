import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import ProjectDetails from "./pages/ProjectDetails";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ResumeActions from "./components/common/ResumeActions";

function App() {
  // useEffect(() => {
  //   const scroll = new LocomotiveScroll({
  //     el: document.querySelector("[data-scroll-container]"),
  //     smooth: true,
  //   });

  //   return () => scroll.destroy();
  // }, []);

  const [activeSection, setActiveSection] = useState("");
  return (
    <>
      <Navbar activeSection={activeSection} />
      <Routes>
        <Route
          path="/"
          element={<Homepage setActiveSection={setActiveSection} />}
        />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/projects/:slug" element={<ProjectDetails />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <ResumeActions />
    </>
  );
}

export default App;
