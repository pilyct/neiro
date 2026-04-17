# Neiro 音色

> _Neiro_ (音色) is a Japanese word meaning **tone color** — the quality that distinguishes one sound from another. It is the timbre of a flute versus a violin, the warmth of a low note versus the brightness of a high one. Here, it becomes the meeting point between color and sound.

Neiro is a generative art toy built with React and the Web Audio API. Every time you click Generate, a 5×5 grid of shapes appears — each one carrying a color drawn from Sanzo Wada's historic color dictionary, and a musical note drawn from a randomly selected scale. Hover over any shape to hear its note.

No two grids sound or look the same.

---

## What it does

- Generates a 5×5 grid of randomized geometric shapes
- Each grid is assigned one **Wada color palette** — a curated 2–4 color combination from Sanzo Wada's _A Dictionary of Color Combinations_ (1930s)
- Each grid is assigned one **musical scale** — pentatonic, blues, Japanese, minor, whole tone, and more
- Each tile gets a random shape, color from the palette, and note from the scale
- Hovering a tile plays its note via the **Web Audio API** — no audio files, pure synthesized sound
- Shapes animate in on generation and react on hover

https://github.com/user-attachments/assets/d8ff4363-4c65-428a-8340-bdac1de1690e

---

## Shapes

`square` `circle` `diamond` `triangle` `starburst` `spiral` `wiggly-box` `flower` and more

---

## Color — Sanzo Wada

The color palettes come from **Sanzo Wada's** _A Dictionary of Color Combinations_, originally published in the 1930s as the _Haishoku Soukan_ (配色総鑑) — a six-volume study of color harmony created for kimono and textile design. Wada spent his life studying how colors interact, and his combinations carry a quiet authority that feels timeless.

Each grid generation picks one complete Wada combination, so all colors on screen belong to the same curated harmony.

You can explore the full dictionary at [sanzo-wada.dmbk.io](https://sanzo-wada.dmbk.io)

---

## Sound — Web Audio API

Sound is generated programmatically using the browser's built-in **Web Audio API** — no external audio files needed. Each note is a synthesized oscillator tone that fades out smoothly after being triggered.

Available scales include:

| Scale               | Character         |
| ------------------- | ----------------- |
| Major pentatonic    | Bright, happy     |
| Blues               | Gritty, soulful   |
| Japanese (In scale) | Eerie, sparse     |
| Minor               | Melancholic, dark |
| Whole tone          | Dreamy, floating  |
| Deep bass           | Low, rumbling     |
| High register       | Delicate, glassy  |
| Microtonal          | Alien, unsettling |
| Open fifths         | Epic, spacious    |

Each grid generation picks one scale, so all tiles on screen share the same sonic mood — matching the visual cohesion of the Wada palette.

---

## Tech stack

- **React** + **TypeScript**
- **Web Audio API** — sound synthesis
- **CSS** — all shapes are pure CSS, no SVG or canvas

---

## Project structure

```
src/
├── assets/
│   └── collections.ts     # WADA_PALETTES and TONES
├── utils/
│   └── playTone.ts        # Web Audio API sound function
├── types.ts               # Shape, Tile, Grid types
└── components/
    └── Grid.tsx           # Main component
```

---

## Inspiration

- [Sanzo Wada — A Dictionary of Color Combinations](https://sanzo-wada.dmbk.io)
- The Bauhaus tradition of exploring color and form as a unified language
- Generative art as a way to find beauty in randomness

---

_Built as a personal creative experiment — learning React, TypeScript, CSS shapes, and the Web Audio API one hover at a time._
