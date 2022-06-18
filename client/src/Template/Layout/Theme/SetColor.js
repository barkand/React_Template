import { red, green, purple, blue, amber, orange } from "@mui/material/colors";

export const Colors = Object.freeze({
  Primary: {
    RED: { LIGHT: red[500], DARK: red[700] },
    BLUE: { LIGHT: blue[500], DARK: blue[700] },
    GREEN: { LIGHT: green[500], DARK: green[700] },
    PURPLE: { LIGHT: purple[200], DARK: purple[400] },
    YELLOW: { LIGHT: orange[600], DARK: amber[600] },
  },
  Secondary: {
    RED: { LIGHT: red[300], DARK: red[300] },
    BLUE: { LIGHT: blue[200], DARK: blue[300] },
    GREEN: { LIGHT: green[200], DARK: green[300] },
    PURPLE: { LIGHT: purple[100], DARK: purple[200] },
    YELLOW: { LIGHT: orange[200], DARK: amber[200] },
  },
});

export const Colors_Secondary = Object.freeze();

export default function SetColor(mode, color, type) {
  return Colors[type][color][mode];
}
