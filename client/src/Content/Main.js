import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Screens/Home";
import Page1 from "./Screens/Page1";
import AlertBar from "../Template/Layout/Toys/AlertBar";

export default function Main() {
  return (
    <main style={{ textAlign: "center", minHeight: "103vh" }}>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/Page1" element={<Page1 />} />
      </Routes>
      <AlertBar />
    </main>
  );
}
