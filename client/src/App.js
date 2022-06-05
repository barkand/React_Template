import React from "react";
import { HashRouter as Router } from "react-router-dom";

import { PublicProvider } from "./Context/Public";
import Theme from "./Components/Layout/Theme/Theme";
import Header from "./Components/Layout/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Layout/Footer/Footer";

export default function App() {
  return (
    <Router>
      <PublicProvider>
        <Theme>
          <Header />
          <Main />
          <Footer />
        </Theme>
      </PublicProvider>
    </Router>
  );
}
