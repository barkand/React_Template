import React from "react";

import { PublicContext } from "../../Context/Public";
import FooterContent from "../../../Content/Footer/Footer";

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
        <FooterContent />
      </div>
    </footer>
  );
}

export default Footer;
