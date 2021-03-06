import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Template/App";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorker from "./serviceWorker";
import ErrorBoundary from "./ErrorBoundary";
import "./Template/assets/styles/index.css";

import Provider from "./Api/Graphql/Provider";

if (
  process.env.NODE_ENV === "development" &&
  process.env.REACT_APP_SERVER_URL === ""
) {
  const { worker } = require("./Mocks/browser");
  worker.start();
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ErrorBoundary>
    <Provider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </ErrorBoundary>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorker.register();
