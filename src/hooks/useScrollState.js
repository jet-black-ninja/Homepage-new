import { useContext, useEffect, useState } from "react";
import { ViewPortContext } from "@/contexts/viewport.context";
import projectsData from "@/lib/Projects";

export default function useScrollState() {
  const { viewportWidth, viewportHeight } = useContext(ViewPortContext);
  const [projectPositions, setProjectPositions] = useState([]);
  const [activeProject, setActiveProject] = useState(null);
  const [activeProjectProgress, setActiveProjectProgress] = useState(0);

  const updateProjectPositions = () => {
    const firstProject = document.getElementById(projectsData[0].id);

    const firstProjectPos =
      firstProject.getBoundingClientRect().top +
      document.documentElement.scrollTop;

    const positions = [
      firstProjectPos,
      firstProjectPos + firstProject.clientHeight,
    ];

    for (let i = 1; i < projectsData.length; i++) {
      const project = document.getElementById(projectsData[i].id);

      positions.push(
        project.getBoundingClientRect().top +
          document.documentElement.scrollTop +
          project.clientHeight
      );
    }

    setProjectPositions(positions);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      updateProjectPositions();
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    updateProjectPositions();
  }, [viewportWidth, viewportHeight]);

  useEffect(() => {
    const handleProject = () => {
      //TODO cannot find center position
      const centerPos =
        (document.documentElement.scrollTop || document.body.scrollTop) +
        viewportHeight / 2;
      if (
        projectPositions.length > 0 &&
        (centerPos < projectPositions[0] ||
          centerPos > projectPositions[projectPositions.length - 1])
      ) {
        setActiveProject(null);
      } else {
        const index = projectPositions.findIndex((pos) => {
          return centerPos < pos;
        });
        if (index !== -1) {
          setActiveProject(index - 1);

          setActiveProjectProgress(
            (centerPos - projectPositions[index - 1]) /
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
        viewportHeight / 2,
    });
  };

  return {
    activeProject,
    activeProjectProgress,
    onScrollToProject,
  };
}
