import React from "react";
import palette from "./palette";
import ColorTable from "./ColorTable";
import MaterialPaletteDemo from "./MaterialPaletteDemo";

function App() {
  const colors = Object.entries(palette);

  return (
    <div
      style={{
        padding: "2em",
      }}
    >
      <h1>Experiment 1: Using material-palette library</h1>
      <MaterialPaletteDemo />
      <h1>Experiment 2: Looking for patterns</h1>
      {colors.map(([colorName, colorShades]) => (
        <React.Fragment key={colorName}>
          <h2>{colorName}</h2>
          <ColorTable colorShades={colorShades} />
        </React.Fragment>
      ))}
    </div>
  );
}

export default App;
