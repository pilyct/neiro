import { TONES, WADA_PALETTES } from "../assets/collections";
import { getRandomItem } from "./getRandomItem";

export function getPalette() {
  return getRandomItem(WADA_PALETTES);
}

export function getTone() {
  return getRandomItem(TONES);
}
