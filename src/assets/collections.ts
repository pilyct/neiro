import type { Shape } from "../types";

export const SHAPES: Shape[] = [
  "square",
  "small-square",
  "circle",
  "small-circle",
  // "half-circle",
  "rounded",
  "diamond",
  "triangle-up",
  "triangle-down",
  "triangle-left",
  "triangle-right",
  "starburst",
  "spiral",
  "wiggly-box",
  "flower",
];

export const WADA_PALETTES = [
  ["#c9303e", "#c0b490", "#651300", "#6b2e63"], // combination 275
  ["#cc1a97", "#06004f", "#9161f2", "#2619d1"], // combination 331
  ["#d60036", "#b8b8ff", "#9c52f2", "#340059"], // combination 307
  ["#f20000", "#ffab00", "#0d75ff", "#9c52f2"], // combination 257
  ["#b85e00", "#730f1f", "#9c52f2", "#686767"], // combination 269
  ["#a93400", "#ff8c00", "#65a98f", "#0057ba"], // combination 312
  ["#5c2c45", "#fff59e", "#405416", "#94ff94"], // combination 290
  ["#d1b0b3", "#d50c42", "#de4500", "#94ff94"], // combination 308
  ["#b08699", "#f5f5b8", "#172713", "#96bfe6"], // combination 321
  ["#e38cb3", "#f3f38a", "#7ec6f3", "#cda0f7"],
  ["#ff5ec4", "#ffcfc4", "#a6ff47", "#aa0372"], // combination 276
  ["#a7374b", "#730f1f", "#66ab56", "#6bffb3"], // combination 283
  ["#ff5c04", "#ffff00", "#0d75ff", "#06004f"], // combination 295
  ["#d99e73", "#de4500", "#a6e6db", "#202d85"], // combination 339
  ["#a93400", "#ebd999", "#505423", "#003e83"], // combination 343
  ["#FBB753", "#FF3040", "#9b0d19", "#5A72C4", "#fff"],
  // ["#1172cc", "#c81a28", "#0dea57", "#fed650", "#ab86e7"],
];

// split palette into moods
// const DARKS = ["#151C29", "#33383E", "#15313F", "#535965"];
// const WARMS = ["#813607", "#B15B14", "#C69E7F", "#DABAA6"];
// const ACCENTS = ["#FBB753", "#FF3040", "#9b0d19", "#5A72C4", "#fff"];

export const TONES = [
  [261, 294, 329, 392, 440, 523, 587, 659], // Major pentatonic - bright, happy
  [261, 311, 329, 370, 392, 466, 523], // Blues - gritty, soulful
  [261, 277, 349, 392, 415, 523], // Japanese (In scale) - eerie, sparse
  [220, 247, 261, 294, 330, 370, 415, 440], // Minor - melancholic, dark
  // [261, 277, 311, 330, 370, 415, 466, 523], // Diminished - tense, unsettling
  [261, 293, 329, 370, 415, 466, 523], // Whole tone - dreamy, floating
  [130, 146, 174, 196, 220, 261, 294, 329], // Deep bass - low, rumbling
  [523, 587, 659, 784, 880, 988, 1046], // High register - delicate, glassy
  [261, 269, 285, 302, 320, 339, 359, 380], // Microtonal - alien, unsettling
  [110, 165, 220, 330, 440, 660, 880], // Open fifths - epic, spacious
];

// const TONES: number[] = [261, 294, 329, 392, 440, 523, 587, 659];
