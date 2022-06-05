import { red, green, purple, blue, amber, orange } from "@mui/material/colors";

export const Colors = Object.freeze({
  RED: { light: red[500], dark: red[700] },
  BLUE: { light: blue[500], dark: blue[700] },
  GREEN: { light: green[500], dark: green[700] },
  PURPLE: { light: purple[200], dark: purple[400] },
  YELLOW: { light: orange[600], dark: amber[600] },
});

export default function SetColor(mode, color) {
  if (mode === "dark") {
    return Colors[color].dark;
  } else {
    return Colors[color].light;
  }
}
