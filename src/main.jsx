import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RouterComponent from "./router";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="bg-slate-200">
      <RouterComponent />
    </div>
  </React.StrictMode>
);
