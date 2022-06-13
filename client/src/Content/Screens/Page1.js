import React from "react";

export default function Page1() {
  document.title = process.env.REACT_APP_COMPANY_NAME + " | Page1";

  return (
    <>
      <div>Page 1</div>
    </>
  );
}
