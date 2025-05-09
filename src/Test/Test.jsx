import React from "react";
import Vector2 from "../Vector2";
import styles from "./Test.module.css";

function Test() {
  // Parameters
  const w = 160;
  const h = 80;
  const aDeg = 170;
  const t = 20;

  // Derived values
  const a1 = (aDeg / 2) * (Math.PI / 180); // Convert to radians
  const s1 = Math.tan(a1);

  // Base points
  const p1 = new Vector2(w / 2, h);
  const p2 = new Vector2(w / 2, 0);

  // Offset centers
  const o1 = w / 2 + (s1 * h) / 2;
  const o2 = w / 2 - (1 / s1) * (h / 2);

  const c1 = new Vector2(o1, h / 2);
  const c2 = new Vector2(o2, h / 2);

  // Direction vectors
  const d1 = new Vector2(1, s1).normalize();
  const d2 = new Vector2(1, -s1).normalize();

  // Outer points
  const v1 = p1.add(d1.scale(t));
  const v2 = p1.subtract(d1.scale(t));
  const v3 = p2.add(d2.scale(t));
  const v4 = p2.subtract(d2.scale(t));

  // Radii (for reference, unused in path below)
  const r1 = v2.subtract(c2).magnitude();
  const r2 = v1.subtract(c2).magnitude();

  // SVG path
  const arcPath = `
    M ${v1.toString()}
    L ${v2.toString()}
    A ${r1} ${r1} 0 0 0 ${v4.toString()}
    L ${v3.toString()}
    A ${r2} ${r2} 0 0 1 ${v1.toString()}
    Z
  `;

  const holePath =
    `
    M 0 0
    L 0 1
    L 1 1
    L 1 0
    Z
  ` + arcPath;

  return (
    <div className={styles.container}>
      <svg
        fillRule="evenodd"
        width="100%"
        height="100%"
        viewBox={`0 0 ${w} ${h}`}
      >
        <clipPath id="arcClip">
          <path d={arcPath.trim()} />
        </clipPath>

        <foreignObject clipPath="url(#arcClip)">
          <div className={styles.child}>Hello</div>
        </foreignObject>
        <path className={styles.path} d={arcPath.trim()} />
      </svg>
    </div>
  );
}

export default Test;
