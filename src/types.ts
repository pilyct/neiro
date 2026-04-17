export type Shape =
  | "square"
  | "small-square"
  | "circle"
  | "small-circle"
  // | "half-circle"
  | "rounded"
  | "triangle-up"
  | "diamond"
  | "triangle-down"
  | "triangle-left"
  | "triangle-right"
  | "starburst"
  | "spiral"
  | "wiggly-box"
  | "flower";

export type Tile = {
  id: number;
  color: string;
  shape: Shape;
  rotation: number;
  note: number;
};

export type Grid = Tile[];
