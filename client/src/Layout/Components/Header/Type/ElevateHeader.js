import * as React from "react";
import { useScrollTrigger } from "@mui/material";
import PropTypes from "prop-types";

import AppBarComponent from "./AppBar";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

export default function ElevateHeader(props) {
  return (
    <>
      <ElevationScroll {...props}>
        <AppBarComponent />
      </ElevationScroll>

      <div style={{ marginTop: "50px" }} />
    </>
  );
}
