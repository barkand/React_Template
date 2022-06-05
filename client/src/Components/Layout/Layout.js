import React from "react";

import Header from "./Header/Header";
import Main from "../Main/Main";
import Footer from "./Footer/Footer";
import ScrollTopButton from "./Base/ScrollTop";

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
