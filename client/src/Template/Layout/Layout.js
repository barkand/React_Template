import React from "react";

import Header from "./Header/Header";
import Main from "../../Content/Main";
import Footer from "./Footer/Footer";
import ScrollTopButton from "./Toys/ScrollTop";

export default function Layout() {
  return (
    <>
      <Header />
      <ScrollTopButton>
        <Main />
      </ScrollTopButton>
      <Footer />
    </>
  );
}
