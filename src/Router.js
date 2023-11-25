import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Add from "./view/Add";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/tambahdata" element={<Add />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
