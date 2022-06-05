import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Screens/Home";
import Page1 from "./Screens/Page1";

export default function Main() {
  return (
    <main style={{ textAlign: "center", minHeight: "92.5vh" }}>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/Page1" element={<Page1 />} />
      </Routes>
    </main>
  );
}
