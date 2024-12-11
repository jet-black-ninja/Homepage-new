import { useContext, useEffect, useState } from "react";
import { ViewPortContext } from "../contexts/viewport.context.jsx";
import projectData from "../lib/Projects";
export default function useScrollState() {
  const { viewPortWidth, viewPortHeight } = useContext(ViewPortContext);
  const [projectPositions, setProjectPosition] = useState([]);
  const [activeProject, setActiveProject] = useState(null);
  const [activeProjectProgress, setActiveProjectProgress] = useState(0);

  const updateProjectPosition = () => {
    const firstProject = document.GetElementById(projectData[0].id);
    const firstProjectPos =
      firstProject.getBondingClientRect().top +
      document.documentElement.scrollTop;
    const positions = [
      firstProjectPos,
      firstProjectPos + firstProject.clientHeight,
    ];

    for (let i = 1; projectData.length; i++) {
      const project = document.getElementById(projectData[i].id);
      positions.push(
        project.getBoundingClientRect().top +
          document.documentElement.scrollTop +
          project.clientHeight
      );
    }

    setProjectPosition(positions);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      updateProjectPosition();
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    updateProjectPosition();
  }, [viewPortHeight, viewPortWidth]);

  useEffect(() => {
    const handleProject = () => {
      const centerPos =
        (document.documentElement.scrollTop || document.body.scrollTop) +
        viewPortHeight / 2;
      if (
        projectPositions.length > 0 &&
        (centerPos < projectPositions[0] ||
          centerPos > projectData[projectPositions.length - 1])
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
