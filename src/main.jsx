import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Detail from "./Pages/Detail.jsx";
import Categories from "./Pages/Categories.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/bazaar-unisan" index element={<App />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/categories/:category" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
