import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.REACT_APP_SERVER_URL,
  cache: new InMemoryCache(),
});

export default function Provider({ children }) {
  return (
    <>
      {process.env.REACT_APP_API_TYPE === "GRAPHQL" ? (
        <ApolloProvider client={client}>{children}</ApolloProvider>
      ) : (
        <>{children}</>
      )}
    </>
  );
}
