// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

import { server } from "../src/Mocks/node";

beforeAll(() => {
  process.env.NODE_ENV = "test";
  // User Mock Server
  process.env.REACT_APP_SERVER_URL = "";

  if (process.env.REACT_APP_SERVER_URL === "") {
    server.listen();
  }
});

afterAll(() => {
  if (process.env.REACT_APP_SERVER_URL === "") {
    server.close();
  }
});
