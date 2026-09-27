// Maps a project's tag to a procedural wireframe geometry + tint used as
// the floating centerpiece object in the 3D work gallery. No external model
// files are loaded — everything here is built from three.js primitives so
// the gallery has no third-party asset dependency.

export const SHAPES = {
  "Systematic Trading": { geo: "torusKnot", color: "#D8FF3E", args: [1, 0.32, 160, 20, 2, 3] },
  "3D Reconstruction": { geo: "icosahedron", color: "#7FE0FF", args: [1.35, 1] },
  "Remote Sensing": { geo: "sphere", color: "#8AE8C0", args: [1.3, 20, 14] },
  "Applied ML": { geo: "octahedron", color: "#D8FF3E", args: [1.4, 2] },
  "Civic Technology": { geo: "box", color: "#FFB86B", args: [1.5, 1.5, 1.5] },
  "Public Choice Award": { geo: "dodecahedron", color: "#E893FF", args: [1.3, 0] },
};

export const DEFAULT_SHAPE = { geo: "icosahedron", color: "#D8FF3E", args: [1.3, 0] };

export function shapeFor(tag) {
  return SHAPES[tag] || DEFAULT_SHAPE;
}
