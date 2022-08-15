import React from "react";
import { Routes, Route } from "react-router-dom";

export default function Main() {
  const Home = React.lazy(() =>
    import(/* webpackChunkName: "Home" */ "./Screens/Home")
  );
  const Page1 = React.lazy(() =>
    import(/* webpackChunkName: "Page1" */ "./Screens/Page1")
  );
  const NotFoundPage = React.lazy(() =>
    import(
      /* webpackChunkName: "NotFoundPage" */
      "../Template/Layout/Main/NotFoundPage"
    )
  );

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/Page1" element={<Page1 />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </React.Suspense>
  );
}
