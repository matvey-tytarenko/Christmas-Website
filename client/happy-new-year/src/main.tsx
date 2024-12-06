import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./output.css";
import App from "./App.tsx";
import MailPage from "./pages/MailPage.tsx";
import { Route, BrowserRouter, Routes } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/mail" element={<MailPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
