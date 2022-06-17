import React from "react";

import Header from "./Header/Header";
import Main from "../../Content/Main";
import Footer from "./Footer/Footer";
import ScrollTopButton from "./Toys/ScrollTop";
import AlertBar from "./Toys/AlertBar";

export default function Layout() {
  return (
    <>
      <Header />
      <ScrollTopButton>
        <main style={{ textAlign: "center", minHeight: "103vh" }}>
          <Main />
          <AlertBar />
        </main>
      </ScrollTopButton>
      <Footer />
    </>
  );
}
