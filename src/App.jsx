import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
// import ResumeActions from "./components/common/ResumeActions";
import "locomotive-scroll/dist/locomotive-scroll.css";
function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode, setDarkMode]);

  const [activeSection, setActiveSection] = useState("");

  return (
    <>
      <Navbar
        activeSection={activeSection}
        setDarkMode={setDarkMode}
        darkMode={darkMode}
      />
      <Routes>
        <Route
          path="/"
          element={<Homepage setActiveSection={setActiveSection} />}
        />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      {/* <ResumeActions /> */}
    </>
  );
}

export default App;
