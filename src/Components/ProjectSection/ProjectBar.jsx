import React, { useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import styles from "./ProjectBar.module.css";

function ProjectBar({ projects, direction }) {
  const containerRef = useRef(null);
  const [offset, setOffset] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);

  // current speed and target speed
  const [speed, setSpeed] = useState(direction === "left" ? -1 : 1);
  const [targetSpeed, setTargetSpeed] = useState(direction === "left" ? -1 : 1);

  useEffect(() => {
    if (containerRef.current) {
      const firstCard = containerRef.current.querySelector(
        `.${styles.cardWrapper}`
      );
      if (firstCard) {
        setCardWidth(firstCard.offsetWidth + 25); // include gap
      }
    }
  }, [projects]);

  // continuous animation
  useEffect(() => {
    let frame;
    function animate() {
      // ease speed toward target speed
      setSpeed((prev) => {
        const lerpFactor = 0.02; // controls smoothness (smaller = slower easing)
        return prev + (targetSpeed - prev) * lerpFactor;
      });

      setOffset((prev) => prev + speed);
      frame = requestAnimationFrame(animate);
    }
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [targetSpeed, speed]);

  // wrapping logic: shift cards when out of view
  const getWrappedStyle = (index) => {
    if (!cardWidth) return {};
    const totalWidth = projects.length * cardWidth;
    let x = (index * cardWidth + offset) % totalWidth;
    if (x < -cardWidth) x += totalWidth;
    if (x > totalWidth - cardWidth) x -= totalWidth;
    return { transform: `translateX(${x}px)` };
  };

  return (
    <div className={styles.projectBar}>
      <button
        onClick={() => {
          setSpeed(-10);       // initial boost
          setTargetSpeed(-1); // ease back to -1
        }}
        className={styles.button}
        style={{ translate: "5.2vw " }}
      >
        ◀
      </button>
      <div ref={containerRef} className={styles.inner}>
        {projects.map((project, idx) => (
          <div
            key={idx}
            className={styles.cardWrapper}
            style={getWrappedStyle(idx)}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          setSpeed(10);       // initial boost
          setTargetSpeed(1); // ease back to 1
        }}
        className={styles.button}
        style={{ translate: "-7vw " }}
      >
        ▶
      </button>
    </div>
  );
}

export default ProjectBar;