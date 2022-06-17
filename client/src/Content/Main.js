import React from "react";
import { Routes, Route } from "react-router-dom";

export default function Main() {
  const Home = React.lazy(() => import("./Screens/Home"));
  const Page1 = React.lazy(() => import("./Screens/Page1"));

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/Page1" element={<Page1 />} />
      </Routes>
    </React.Suspense>
  );
}
