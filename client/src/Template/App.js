import React from "react";
import { HashRouter as Router } from "react-router-dom";

import { PublicProvider, SetDefault } from "./Context/Public";
import Theme from "./Layout/Theme/Theme";
import Layout from "./Layout/Layout";

export default function App() {
  SetDefault();

  return (
    <Router>
      <PublicProvider>
        <Theme>
          <Layout />
        </Theme>
      </PublicProvider>
    </Router>
  );
}
