import { useScrollTrigger, Slide, Box } from "@mui/material";
import PropTypes from "prop-types";
import AppBarComponent from "./AppBar";

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger({ target: undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

export default function HideHeader(props) {
  return (
    <>
      <HideOnScroll {...props}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBarComponent />
        </Box>
      </HideOnScroll>

      <div style={{ marginTop: "50px" }} />
    </>
  );
}
