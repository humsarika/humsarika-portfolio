import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// css
import "./index.css";


createRoot(document.getElementById("root")).render(
  <StrictMode>

    <App />
    {/* <ToastContainer position="top-center" autoClose={5000} pauseOnHover /> */}
  </StrictMode>
);