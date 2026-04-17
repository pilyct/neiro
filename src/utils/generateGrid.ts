import { SHAPES } from "../assets/collections";
import type { Grid } from "../types";
import { getPalette, getTone } from "./getPaletteAndTone";
import { getRandomItem } from "./getRandomItem";

export function generateGrid(cols: number, rows: number): Grid {
  const total = cols * rows;
  const palette = getPalette();
  const tone = getTone();

  return Array.from({ length: total }, (_, i) => ({
    id: i,
    color: getRandomItem(palette),
    shape: getRandomItem(SHAPES),
    rotation: Math.random() * 20 - 10, // subtle rotation (-10° to 10°)
    note: getRandomItem(tone),
  }));
}
