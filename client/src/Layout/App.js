import React from "react";
import { HashRouter as Router } from "react-router-dom";

import { PublicProvider } from "./Context/Public";
import Theme from "./Components/Theme/Theme";
import Layout from "./Components/Layout";

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
