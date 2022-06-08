import React from "react";
import { HashRouter as Router } from "react-router-dom";

import { PublicProvider } from "./Layout/Context/Public";
import Theme from "./Layout/Components/Theme/Theme";
import Layout from "./Layout/Components/Layout";

export default function App() {
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
