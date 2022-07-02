import { setupWorker } from "msw";

import RestHandler from "./Rest/handlers";
import GraphqlHandler from "./Graphql/handlers";

export const worker = setupWorker(...RestHandler, ...GraphqlHandler);
