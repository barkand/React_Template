import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <center>
      <Link to="/">Go to Home </Link>
      <p
        style={{
          fontSize: "20vw",
          color: "#cacaca",
        }}
      >
        404
      </p>
    </center>
  );
}
