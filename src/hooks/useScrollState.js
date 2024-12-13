import { useContext, useEffect, useState } from "react";
import { ViewPortContext } from "../contexts/viewport.context.jsx";
import projectsData from "../lib/Projects";
export default function useScrollState() {
  const { viewPortWidth, viewPortHeight } = useContext(ViewPortContext);
  const [projectPositions, setProjectPositions] = useState([]);
  const [activeProject, setActiveProject] = useState(null);
  const [activeProjectProgress, setActiveProjectProgress] = useState(0);
  //TODO reenable this
  const updateProjectPositions = () => {
    try {
      // Check if projectsData exists and has elements
      if (!projectsData || projectsData.length === 0) {
        console.warn("No projects data available");
        return;
      }

      const positions = [];

      for (let i = 0; i < projectsData.length; i++) {
        const project = document.getElementById(projectsData[i].id);

        // Skip if the project element doesn't exist
        if (!project) {
          console.warn(
            `Project element with id ${projectsData[i].id} not found`
          );
          continue;
        }

        const projectPos =
          project.getBoundingClientRect().top +
          document.documentElement.scrollTop;

        positions.push(projectPos + project.clientHeight);
      }

      setProjectPositions(positions);
    } catch (error) {
      console.error("Error in updateProjectPositions:", error);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      updateProjectPositions();
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    updateProjectPositions();
  }, [viewPortHeight, viewPortWidth]);

  useEffect(() => {
    const handleProject = () => {
      const centerPos =
        (document.documentElement.scrollTop || document.body.scrollTop) +
        viewPortHeight / 2;
      if (
        projectPositions.length > 0 &&
        (centerPos < projectPositions[0] ||
          centerPos > projectsData[projectPositions.length - 1])
      ) {
        setActiveProject(null);
      } else {
        const index = projectPositions.findIndex((pos) => {
          return centerPos < pos;
        });
        if (index !== 1) {
          setActiveProject(index - 1);
          setActiveProjectProgress(
            centerPos -
              projectPositions[index - 1] /
                (projectPositions[index] - projectPositions[index - 1])
          );
        }
      }
    };

    const onScroll = () => {
      handleProject();
    };
    onScroll();
    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projectPositions]);

  const onScrollToProject = (activeProject) => {
    window.scroll({
      top:
        projectPositions[activeProject] +
        (projectPositions[activeProject + 1] -
          projectPositions[activeProject]) /
          2 -
        viewPortHeight / 2,
    });
  };
  return {
    activeProject,
    activeProjectProgress,
    onScrollToProject,
  };
}
