import React from "react";
import { Route, Routes } from "react-router-dom";

import Page1 from "./Screens/Page1";
import Page2 from "./Screens/Page2";

export default function Main() {
  return (
    <main style={{ textAlign: "center", minHeight: "92.5vh" }}>
      <Routes>
        <Route path="/" element={<Page1 />} exact />
        <Route path="/Page2" element={<Page2 />} />
      </Routes>
    </main>
  );
}
