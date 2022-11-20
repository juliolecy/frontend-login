import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyles from "./global";
import Home from "./pages/Home";

const root = ReactDOM.createRoot(
  document.getElementById("JLINS") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
