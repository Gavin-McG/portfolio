import React from "react";
import styles from "./Project.module.css";

const ANGLE_OFFSET = 30;
const HIGHLIGHT_THRESHOLD = 10;
const TWO_PI = 6.28;

function Project({ index, total, progress }) {
  const smoothstep = (x) => {
    return x - Math.sin(x * TWO_PI) / TWO_PI;
  };

  const angleFunction = (x, n) => {
    return smoothstep(smoothstep(x * n)) / n;
  };

  //rotation amount
  const segments = total - 1;
  const startRot = index * ANGLE_OFFSET;
  const rotProgress = angleFunction(progress, segments);
  const advance = rotProgress * segments * -ANGLE_OFFSET;
  const rotation = startRot + advance;

  //highlight amount
  const highlight = Math.min(
    1,
    Math.max(0, 1 - Math.abs(rotation / HIGHLIGHT_THRESHOLD))
  );

  //styles
  const rotationTransform = {
    transform: `rotate(${rotation}deg) translateX(15vw)`,
  };
  const imgOpacity = { opacity: `${highlight * 80 + 20}%` };
  const textOpacity = { opacity: `${highlight * 100}%` };

  //selected
  const isSelected = highlight > 0.8;

  return (
    <div
      className={`${styles.container} ${isSelected ? styles.selected : ""}`}
      style={rotationTransform}
    >
      <div className={styles.img}>
        <img
          className="img-container"
          src="/public/projects/SotF.png"
          style={imgOpacity}
        />
      </div>
      <div className={styles.content} style={textOpacity}>
        <h1 className={styles.header}>Project Title</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo
        </p>
        <div className={styles.skills}>
          <p className={styles.skill}>C#</p>
          <p className={styles.skill}>Unity</p>
        </div>
      </div>
    </div>
  );
}

export default Project;
