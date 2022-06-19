// import React from "react";
import { setupWorker } from "msw";
import handlers from "./handlers";

export const worker = setupWorker(...handlers);
