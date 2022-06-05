import React from "react";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

import { PublicContext } from "../../../Context/Public";
import SetColor, { Colors } from "../Theme/SetColor";

function Setting() {
  const { publicCtx, setPublicCtx } = React.useContext(PublicContext);
  const [color, settColor] = React.useState(publicCtx.theme.color);

  const handleChange = (event) => {
    settColor(event.target.value);
  };

  React.useEffect(() => {
    setPublicCtx({
      ...publicCtx,
      theme: {
        ...publicCtx.theme,
        color: color,
        primary: {
          ...publicCtx.theme.primary,
          main: SetColor(publicCtx.theme.mode, color),
        },
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [color]);

  return (
    <div style={{ paddingLeft: 15, paddingRight: 15 }}>
      <p style={{ color: publicCtx.theme.primary.main }}>Settings:</p>

      <FormControl fullWidth>
        <InputLabel id="color-select-label">Color</InputLabel>
        <Select
          id="color-select"
          value={color}
          onChange={handleChange}
          label="Color"
        >
          {Object.keys(Colors).map((color) => (
            <MenuItem
              key={color}
              value={color}
              sx={{ color: SetColor(publicCtx.theme.mode, color) }}
            >
              <CircleIcon
                sx={{
                  mr: 5,
                  color: SetColor(publicCtx.theme.mode, color),
                }}
              />
              {color}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default Setting;
