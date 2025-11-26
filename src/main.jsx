import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.jsx";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import { ViewPortContextProvider } from "./contexts/viewport.context";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <ViewPortContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ViewPortContextProvider>
    </HelmetProvider>
  </StrictMode>,
);
