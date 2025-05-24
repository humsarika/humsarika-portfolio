import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// css
import "./index.css";


createRoot(document.getElementById("root")).render(
  <StrictMode>

    <App />
    <ToastContainer position="top-center" autoClose={5000} pauseOnHover />
  </StrictMode>
);