import * as React from "react";
import Color from "color";
import { Box, TextField } from "@material-ui/core";
import materialPalette from "material-palette";

const MaterialPaletteDemo = () => {
  const [hexColor, setHexColor] = React.useState("#21AE95");

  const color = new Color(hexColor);

  color.rgb().toString();

  const [h, s, l] = color.hsl().array();
  const generated = materialPalette({ h, s, l });
  return (
    <>
      <Box maxWidth="500px">
        <TextField
          fullWidth
          label="Base color"
          type="color"
          value={hexColor}
          onChange={(e) => setHexColor(e.target.value)}
        />
        <p>{color.hex().toString()}</p>
        <p>{color.rgb().toString()}</p>
        <p>{color.hsl().toString()}</p>
      </Box>
      <div>
        <h2>Shades</h2>
        {Object.entries(generated).map(([shadeName, hslComponents]) => {
          const color = Color.hsl(hslComponents);
          const colorHex = color.hex().toString();
          return (
            <span
              key={shadeName}
              style={{
                backgroundColor: color.hex().toString(),
                width: "100px",
                height: "100px",
                display: "inline-block",
              }}
            >
              <p>{shadeName}</p>
              <p>{colorHex}</p>
            </span>
          );
        })}
      </div>
    </>
  );
};

export default MaterialPaletteDemo;
