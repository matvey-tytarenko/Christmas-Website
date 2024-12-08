import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./output.css";
import App from "./App.tsx";
import MailPage from "./pages/MailPage.jsx";
 import "react-toastify/dist/ReactToastify.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import About from "./pages/About.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/mail" element={<MailPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
