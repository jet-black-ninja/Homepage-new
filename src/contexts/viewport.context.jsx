import { createContext, useEffect, useState } from "react";

const initial = {
  viewPortWidth: window.innerWidth,
  viewPortHeight: window.innerHeight,
};
const ViewPortContext = createContext(initial);

function ViewPortContextProvider({ children }) {
  const [viewPort, setViewPort] = useState(initial);

  useEffect(() => {
    const handleResize = () => {
      setViewPort({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ViewPortContext.Provider
      value={{ viewPortWidth: viewPort.width, viewPortHeight: viewPort.height }}
    >
      {children}
    </ViewPortContext.Provider>
  );
}
export { ViewPortContext, ViewPortContextProvider };