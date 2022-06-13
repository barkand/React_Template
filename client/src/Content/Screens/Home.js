import React from "react";

export default function Home() {
  document.title = process.env.REACT_APP_COMPANY_NAME;

  return (
    <>
      <div>Home</div>
    </>
  );
}
