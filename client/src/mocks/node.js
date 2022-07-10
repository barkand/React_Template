import { setupServer } from "msw/node";

import RestHandler from "./Rest/handlers";
import GraphqlHandler from "./Graphql/handlers";

export const server = setupServer(...RestHandler, ...GraphqlHandler);
