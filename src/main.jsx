import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CityContextProvider } from "./context/cityContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CityContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CityContextProvider>
);
