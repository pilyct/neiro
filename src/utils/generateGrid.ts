import { SHAPES } from "../assets/collections";
import type { Grid } from "../types";
import { getPalette, getTone } from "./getPaletteAndTone";
import { getRandomItem } from "./getRandomItem";

export function generateGrid(cols: number, rows: number): Grid {
  const total = cols * rows;
  const palette = getPalette();
  const tone = getTone();

  function walkScale(tone: number[], total: number): number[] {
    const notes: number[] = [];
    let currentIndex = Math.floor(Math.random() * tone.length);

    for (let i = 0; i < total; i++) {
      notes.push(tone[currentIndex]);

      if (currentIndex === 0) {
        currentIndex = 1;
      } else if (currentIndex === tone.length - 1) {
        currentIndex = tone.length - 2;
      } else {
        currentIndex += Math.random() < 0.5 ? -1 : 1;
      }
    }

    return notes;
  }

  const walkedNotes = walkScale(tone, total);

  return Array.from({ length: total }, (_, i) => ({
    id: i,
    color: getRandomItem(palette),
    shape: getRandomItem(SHAPES),
    rotation: Math.random() * 20 - 10, // subtle rotation (-10° to 10°)
    note: walkedNotes[i],
  }));
}
