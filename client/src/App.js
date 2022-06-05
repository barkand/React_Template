import React from "react";
import { HashRouter as Router } from "react-router-dom";

import { PublicProvider } from "./Context/Public";
import Theme from "./Components/Layout/Theme/Theme";
import Layout from "./Components/Layout/Layout";

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
