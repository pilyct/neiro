import type { Tile } from "../types";

export default function renderShape(tile: Tile) {
  const style = {
    transform: `rotate(${tile.rotation}deg)`,
  };

  switch (tile.shape) {
    case "triangle-up":
      return (
        <div
          className="triangle-up"
          style={{ ...style, borderBottomColor: tile.color }}
        />
      );

    case "triangle-down":
      return (
        <div
          className="triangle-down"
          style={{ ...style, borderTopColor: tile.color }}
        />
      );

    case "triangle-left":
      return (
        <div
          className="triangle-left"
          style={{ ...style, borderRightColor: tile.color }}
        />
      );

    case "triangle-right":
      return (
        <div
          className="triangle-right"
          style={{ ...style, borderLeftColor: tile.color }}
        />
      );

    case "starburst":
      return (
        <div
          className="starburst"
          style={{ ...style, backgroundColor: tile.color }}
        />
      );

    case "spiral":
      return (
        <div
          className="spiral"
          style={
            {
              "--c": tile.color,
              transform: `rotate(${tile.rotation}deg)`,
            } as React.CSSProperties
          }
        />
      );

    case "wiggly-box":
      return (
        <div
          className="wiggly-box"
          style={
            {
              "--c": tile.color,
              transform: `rotate(${tile.rotation}deg)`,
            } as React.CSSProperties
          }
        />
      );

    case "circle":
      return (
        <div
          className="circle"
          style={{
            ...style,
            borderColor: tile.color,
          }}
        />
      );

    default:
      return (
        <div
          className={`shape ${tile.shape}`}
          style={{ ...style, backgroundColor: tile.color }}
        />
      );
  }
}
