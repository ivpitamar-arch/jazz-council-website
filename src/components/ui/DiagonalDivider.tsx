type ColorKey = "primary" | "base" | "surface";

const colorMap: Record<ColorKey, string> = {
  primary: "var(--color-primary)",
  base: "var(--color-base)",
  surface: "var(--color-surface)",
};

interface DiagonalDividerProps {
  /** Color of the section above — becomes the div background */
  from: ColorKey;
  /** Color of the section below — fills the SVG diagonal polygon */
  into: ColorKey;
  /**
   * false (default): diagonal runs top-right → bottom-left
   *   "into" color fills the lower-right triangle
   * true: diagonal runs top-left → bottom-right
   *   "into" color fills the lower-left triangle
   */
  flip?: boolean;
}

export default function DiagonalDivider({ from, into, flip = false }: DiagonalDividerProps) {
  // viewBox 0 0 100 100; (0,0)=top-left (100,0)=top-right (100,100)=bottom-right (0,100)=bottom-left
  // default: into-color triangle = bottom-left + top-right + bottom-right
  //          creates a diagonal from top-right to bottom-left
  // flip:    into-color triangle = top-left + bottom-right + bottom-left
  //          creates a diagonal from top-left to bottom-right
  const points = flip ? "0,0 100,100 0,100" : "0,100 100,0 100,100";

  return (
    <div
      style={{ background: colorMap[from], height: 72 }}
      className="w-full overflow-hidden leading-none relative"
      aria-hidden
    >
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon points={points} fill={colorMap[into]} />
      </svg>
    </div>
  );
}
