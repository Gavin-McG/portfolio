// Rotation.jsx
import React from "react";
import styles from "./Rotation.module.css"; // Still using the same styles

const ANGLE_OFFSET = 30;
const HIGHLIGHT_THRESHOLD = 10;
const TWO_PI = 6.28;

function Rotation({ index, total, progress, can_select, children }) {
  const smoothstep = (x) => x - Math.sin(x * TWO_PI) / TWO_PI;

  const angleFunction = (x, n) => smoothstep(smoothstep(x * n)) / n;

  // Rotation amount
  const segments = total - 1;
  const startRot = index * ANGLE_OFFSET;
  const rotProgress = angleFunction(progress, segments);
  const advance = rotProgress * segments * -ANGLE_OFFSET;
  const rotation = startRot + advance;

  // Highlight amount
  const highlight = Math.min(
    1,
    Math.max(0, 1 - Math.abs(rotation / HIGHLIGHT_THRESHOLD))
  );

  // Styles
  const rotationTransform = {
    transform: `rotate(${rotation}deg)`,
  };

  const opacityStyles = {
    "--img-opacity": `${highlight * 80 + 20}%`,
    "--text-opacity": `${highlight * 100}%`,
  };

  const isSelected = highlight > 0.7 && can_select;

  return (
    <div className={styles.container}>
      <div
        className={`${styles.rotContainer} ${
          isSelected ? styles.selected : ""
        }`}
        style={{ ...rotationTransform, ...opacityStyles }}
      >
        {children}
      </div>
    </div>
  );
}

export default Rotation;
