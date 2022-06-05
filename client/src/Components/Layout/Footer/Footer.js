import React from "react";

import { PublicContext } from "../../../Context/Public";

function Footer() {
  const { publicCtx } = React.useContext(PublicContext);

  return (
    <footer>
      <div
        style={{
          textAlign: "center",
          backgroundColor: publicCtx.theme.primary.main,
        }}
      >
        Footer
      </div>
    </footer>
  );
}

export default Footer;
