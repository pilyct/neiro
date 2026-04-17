import { useState } from "react";
import "../style/Grid.css";
import type { Grid } from "../types";
import { playTone } from "../utils/playTone";
import { generateGrid } from "../utils/generateGrid";
import renderShape from "./ShapeRender";

export default function Grid() {
  const [grid, setGrid] = useState<Grid>([]);

  return (
    <div className="container">
      <button onClick={() => setGrid(generateGrid(5, 5))}>Generate</button>

      <div className="grid">
        {grid.map((tile) => (
          <div key={tile.id} className="tile">
            <div
              className="rotator"
              style={
                {
                  "--r": `${tile.rotation}deg`,
                } as React.CSSProperties
              }
              onMouseEnter={() => playTone(tile.note)}
            >
              {renderShape(tile)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
