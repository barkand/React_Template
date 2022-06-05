import { red, green, purple, blue, amber, orange } from "@mui/material/colors";

export const Colors = Object.freeze({
  Primary: {
    RED: { light: red[500], dark: red[700] },
    BLUE: { light: blue[500], dark: blue[700] },
    GREEN: { light: green[500], dark: green[700] },
    PURPLE: { light: purple[200], dark: purple[400] },
    YELLOW: { light: orange[600], dark: amber[600] },
  },
  Secondary: {
    RED: { light: red[300], dark: red[300] },
    BLUE: { light: blue[200], dark: blue[300] },
    GREEN: { light: green[200], dark: green[300] },
    PURPLE: { light: purple[100], dark: purple[200] },
    YELLOW: { light: orange[200], dark: amber[200] },
  },
});

export const Colors_Secondary = Object.freeze();

export default function SetColor(mode, color, type) {
  return Colors[type][color][mode];
}
