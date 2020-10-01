import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import Color from "color";

const ColorTable = ({ colorShades }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell />
          {Object.entries(colorShades).map(([shadeName, colorString]) => {
            const color = new Color(colorString);
            return (
              <TableCell
                key={shadeName}
                style={{ backgroundColor: colorString }}
              >
                {shadeName} | {colorString}
              </TableCell>
            );
          })}
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Red</TableCell>
          {Object.entries(colorShades).map(([shadeName, colorString]) => {
            const color = new Color(colorString);
            const rgb = color.rgb();
            return (
              <TableCell key={shadeName}>
                <strong>{rgb.red()}</strong>
              </TableCell>
            );
          })}
        </TableRow>
        <TableRow>
          <TableCell>Green</TableCell>
          {Object.entries(colorShades).map(([shadeName, colorString]) => {
            const color = new Color(colorString);
            const rgb = color.rgb();
            return (
              <TableCell key={shadeName}>
                <strong>{rgb.green()}</strong>
              </TableCell>
            );
          })}
        </TableRow>
        <TableRow>
          <TableCell>Blue</TableCell>
          {Object.entries(colorShades).map(([shadeName, colorString]) => {
            const color = new Color(colorString);
            const rgb = color.rgb();
            return (
              <TableCell key={shadeName}>
                <strong>{rgb.blue()}</strong>
              </TableCell>
            );
          })}
        </TableRow>
        <TableRow>
          <TableCell>Hue</TableCell>
          {Object.entries(colorShades).map(([shadeName, colorString]) => {
            const color = new Color(colorString);
            const hex = color.hsl();
            return (
              <TableCell key={shadeName}>
                <strong>{hex.hue()}</strong>
              </TableCell>
            );
          })}
        </TableRow>

        <TableRow>
          <TableCell>Saturation</TableCell>
          {Object.entries(colorShades).map(([shadeName, colorString]) => {
            const color = new Color(colorString);
            const hex = color.hsl();
            return (
              <TableCell key={shadeName}>
                <strong>{hex.saturationl()}</strong>
              </TableCell>
            );
          })}
        </TableRow>

        <TableRow>
          <TableCell>Luminosity</TableCell>
          {Object.entries(colorShades).map(([shadeName, colorString]) => {
            const color = new Color(colorString);
            const hex = color.hsl();
            return (
              <TableCell key={shadeName}>
                <strong>{hex.luminosity()}</strong>
              </TableCell>
            );
          })}
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default ColorTable;
